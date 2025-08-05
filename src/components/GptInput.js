import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult , startLoading, stopLoading} from "../utils/gptSlice";
import ShimmerMovieList from "./ShimmerMovieList";
const GptInput = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an api call to gpt apu and get movie results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      ". Only give me names of 15 movies, comma separated like the example result given ahead. Example Result: Gadar, Don, Sholay etc.";
    dispatch(startLoading())
    const gptResults = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: gptQuery }],
    });

    //TO DO: Error handling when choices are not present or search failed
    console.log(gptResults.choices[0]?.message?.content);

    const gptMovies = gptResults.choices[0]?.message?.content.split(",");

    //for each movie, search tmdb api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //promiseArray=[promise,promise,promise.....]

    const TMDBResults = await Promise.all(promiseArray); //Array of arrays
    
    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults: TMDBResults}));
   dispatch(stopLoading())
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="col-span-3 m-4 rounded-lg bg-red-500 text-white py-2 px-4"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptInput;
