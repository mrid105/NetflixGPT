import React from "react";
import GptInput from "./GptInput";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants";
const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto" src={BG_IMG} alt="bg-image" />
      </div>
      <div className="">
        <GptInput />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
