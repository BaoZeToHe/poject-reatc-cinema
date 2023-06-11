import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
  data: [],
};
export const DataEventSlice = createSlice({
  name: "dataEvents",
  initialState,
  reducers: {
    getEventRequest: () => {},
    getEventSuccess: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { getEventRequest, getEventSuccess } = DataEventSlice.actions;

export default DataEventSlice.reducer;
