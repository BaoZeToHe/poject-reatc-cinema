import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
  data: [],
  pagination : {}
};
export const moviesReducer = createSlice({
  name: "dataMovies",
  initialState,
  reducers: {
    getMoviesRequest: () => {},
    getMoviesSuccess: (state, action) => {
      return {
        ...state,
        data: action.payload.dataAPI,
        pagination: action.payload.pagination
      };
    },
  },
});

export const { getMoviesRequest, getMoviesSuccess } = moviesReducer.actions;

export default moviesReducer.reducer;
