import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

//should only have the render logic and all other logic should be abstracted
const Browse = () => {

  useNowplayingMovies();
  
  return (
    <div>
      <Header />
       <MainContainer/>
      <SecondaryContainer/> 
      {/**
      Main Container
        -VideoBackground
        -VideoTitle
      Secondary Container
        -MovieList * n
            -cards * n
  */}
    </div>
  );
};

export default Browse;
