import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
  data: [],
};
export const showTimeReducer = createSlice({
  name: "dataShowTimes",
  initialState,
  reducers: {
    getShowTimeRequest: () => { },
    getShowTimeSuccess: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { getShowTimeRequest, getShowTimeSuccess } = showTimeReducer.actions;

export default showTimeReducer.reducer;
