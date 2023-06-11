import { createAction, createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  isAuth: false,
  isSignIn: true,
};

export const reducerSlice = createSlice({
  name: "create",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    addRegister: () => {},
    commonLogin: (state, action) => {},

    setIsSignIn: (state, action) => {
      state.isSignIn = action.payload;
    },
  },
});

export const { setAuth, addRegister, setIsSignIn, commonLogin } =
  reducerSlice.actions;

export default reducerSlice.reducer;
