import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
import movieReducer from "../features/movie/movieSlice.js"

export const Store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer
    }
});