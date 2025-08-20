import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice(
    {
        name: "movies",
        initialState:{
            nowPlayingMovies: null,
            popularMovies:null,
            trailerVideo: null,
            trendingMovies: null,
            horrorMovies:null,
            bollywoodMovies:null,
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies = action.payload;
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies = action.payload;
            },
            addTrendingMovies:(state,action)=>{
                state.trendingMovies = action.payload;
            },
            addTrailerVideo:(state,action)=>{
                state.trailerVideo=action.payload;
            },
            addHorrorMovies:(state,action)=>{
                state.horrorMovies = action.payload;
            },
            addBollywoodMovies:(state,action)=>{
                state.bollywoodMovies = action.payload;
            },
        }
    }
)

export const {addInternationalMovies, addBollywoodMovies, addHorrorMovies, addNowPlayingMovies, addTrailerVideo,addPopularMovies , addTrendingMovies} = movieSlice.actions;
export default movieSlice.reducer;