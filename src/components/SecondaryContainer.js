import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="">
        <div className="bg-black md:-mt-36 md:pl-2 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Horror & Crime"} movies={movies.horrorMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Bollywood"} movies={movies.bollywoodMovies} />
          <MovieList title={"International"} movies={movies.internationalMovies} />
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
