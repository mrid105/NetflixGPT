import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addInternationalMovies } from "../utils/movieSlice";
const useInternationalMovies = () => {
    const dispatch = useDispatch();
  const internationalMovies = useSelector(
    (store) => store.movies.internationalMovies
  );
  const getInternationalMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_original_language=ko&with_original_language=fr&with_original_language=ja&&with_genres=10751&sort_by=popularity.desc`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addInternationalMovies(json.results))
  };

  useEffect(() => {
    !internationalMovies && getInternationalMovies();
  }, []);
};
export default useInternationalMovies;