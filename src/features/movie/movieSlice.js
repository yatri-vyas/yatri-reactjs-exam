import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMovies = createAsyncThunk('movie/getAllMovies', async (_, { rejectWithValue }) => {
    try {
        let res = await axios.get('https://jsonfakery.com/movies/paginated');
        console.log(res.data);
        return res.data;
    } catch (error) {

        return rejectWithValue(error.message);
    }
})

export const getOneMovie = createAsyncThunk('movie/getOneMovie',async (id, { rejectWithValue }) => {
        try {

            let res = await axios.get(`https://jsonfakery.com/movies/${id}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
        error: null,
        loading: false,
        movie: {},
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllMovies.fulfilled, (state, action) => {
            state.movies = action.payload.data;
            state.loading = false;
        })
        builder.addCase(getOneMovie.fulfilled, (state, action) => {

            state.movie = action.payload;
            state.loading = false;

        });
    }
})

export default movieSlice.reducer;