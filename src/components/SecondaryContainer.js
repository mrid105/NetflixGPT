import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Bollywood"} movies={movies.nowPlayingMovies} />
          <MovieList title={"International"} movies={movies.nowPlayingMovies} />
        </div>
        {/*
      MovieList-Popular
          Movie Card * n

      MovieList-NowPlaying
      MovieList-Trending
      MovieList-Horror */}
      </div>
    )
  );
};

export default SecondaryContainer;
