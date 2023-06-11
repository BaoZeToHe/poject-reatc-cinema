import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
  data: [],
};
export const moviesReducer = createSlice({
  name: "dataEvents",
  initialState,
  reducers: {
    getMoviesRequest: () => {},
    getMoviesSuccess: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { getMoviesRequest, getMoviesSuccess } = moviesReducer.actions;

export default moviesReducer.reducer;
