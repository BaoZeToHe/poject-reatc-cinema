import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
  data: [],
};
export const DataSportSlice = createSlice({
  name: "dataSports",
  initialState,
  reducers: {
    getSportRequest: () => {},
    getSportSuccess: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { getSportRequest, getSportSuccess } = DataSportSlice.actions;

export default DataSportSlice.reducer;
