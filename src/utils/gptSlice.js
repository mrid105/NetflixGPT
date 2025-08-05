import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name: "gpt",
    initialState:{
        showGptSearch: false,
        movieNames:null,
        movieResults:null,
        isLoading: false,

    },
    reducers:{
        startLoading:(state)=>{state.isLoading=true},
        stopLoading: (state) => { state.isLoading = false},
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
            state.movieNames=null;
            state.movieResults=null;
        },
        addGptMovieResult: (state, action)=>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
})
export const {toggleGptSearchView, addGptMovieResult,startLoading,stopLoading}= gptSlice.actions;
export default gptSlice.reducer;