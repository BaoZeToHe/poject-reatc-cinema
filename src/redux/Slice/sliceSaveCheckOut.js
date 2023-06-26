import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
  CheckOut: {}
};
export const CheckOutTicket = createSlice({
  name: "CheckOutTicket",
  initialState,
  reducers: {
    getCheckOutRequest: () => { },
    getCheckOutSuccess: (state, action) => {
      console.log(action);
      return {
        ...state,
      };
    },
  },
});

export const { getCheckOutRequest, getCheckOutSuccess } = CheckOutTicket.actions;

export default CheckOutTicket.reducer;
