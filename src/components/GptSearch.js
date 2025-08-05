import React from "react";
import GptInput from "./GptInput";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_IMG}
          alt="bg-image"
        />
      </div>
      <GptInput />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
