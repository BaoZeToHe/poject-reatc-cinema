import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
  check: false,
};
export const sliceLoading = createSlice({
  name: "Loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return {
        ...state,
        check: action.payload,
      };
    },
  },
});

export const { setLoading } = sliceLoading.actions;

export default sliceLoading.reducer;
