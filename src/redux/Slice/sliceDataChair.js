import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
  data: [],
};
export const DataChairSlice = createSlice({
  name: "dataChair",
  initialState,
  reducers: {
    getChairRequest: () => { },
    getChairSuccess: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { getChairRequest, getChairSuccess } = DataChairSlice.actions;

export default DataChairSlice.reducer;
