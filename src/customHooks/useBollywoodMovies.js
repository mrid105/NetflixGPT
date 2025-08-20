import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addBollywoodMovies } from "../utils/movieSlice";

const useBollywoodMovies = () => {
  const dispatch = useDispatch();
  const bollywoodMovies = useSelector((store) => store.movies.bollywoodMovies);
  const getBollywoodMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_original_language=hi`,
      API_OPTIONS
    );
    const json = await data.json();
    const uniqueMovies = [
        ...new Map((json.results || []).map((m) => [m.id, m])).values(),
      ];
    dispatch(addBollywoodMovies(uniqueMovies));
  };

  useEffect(() => {
    !bollywoodMovies && getBollywoodMovies();
  }, []);
};
export default useBollywoodMovies;
