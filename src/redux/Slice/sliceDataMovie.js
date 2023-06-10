import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
  data : []
};
export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    comMonMovieGateMax: (state, action) => {},
    getCommonMovieSuc: (state, action) => {
      return {
        ...state,
        data : action.payload,
      };
    },
  },
});

export const { comMonMovieGateMax, getCommonMovieSuc } = DataSlice.actions;

export default DataSlice.reducer;
