import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
  dataChairBy: [],
  totalPrice : "",
};
export const DataChairBy = createSlice({
  name: "dataChairBy",
  initialState,
  reducers: {
    getChairBySuccess: (state, action) => {
      return {
        ...state,
        dataChairBy: action.payload.dataChairBy,
        totalPrice: action.payload.totalPrice
      };
    },
  },
});

export const { getChairBySuccess } = DataChairBy.actions;

export default DataChairBy.reducer;
