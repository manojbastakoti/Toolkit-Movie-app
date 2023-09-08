import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/movieApiKey";
// import { addMovies } from "../../features/movies/movieSlice";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `http://www.omdbapi.com/?apiKey=${ApiKey}&s=${term}&type=movie`
    );

    console.log(response);
    console.log(response.data);
    const data = await response.data;
    return data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `http://www.omdbapi.com/?apiKey=${ApiKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieorShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieorShowDetail",
  async (id) => {
    const response = await movieApi.get(
      `http://www.omdbapi.com/?apiKey=${ApiKey}&i=${id}&Plot=full`
    );
    console.log(response);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieorShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieorShow: (state) => {
      state.selectMovieorShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieorShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovieorShow: payload };
    },
  },
});

export default movieSlice.reducer;
export const { removeSelectedMovieorShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieOrShow = (state) => state.movies.selectMovieorShow;
