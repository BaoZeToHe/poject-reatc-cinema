import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
  dataChairSeverBy: [],
};
export const DataChairSeverBy = createSlice({
  name: "dataChairSeverBy",
  initialState,
  reducers: {
    getDataChairByRequest : () => {},
    getDataChairBySuccess: (state, action) => {
      return {
        ...state,
        dataChairSeverBy: action.payload,
      };
    },
  },
});

export const { getDataChairByRequest, getDataChairBySuccess } = DataChairSeverBy.actions;

export default DataChairSeverBy.reducer;
