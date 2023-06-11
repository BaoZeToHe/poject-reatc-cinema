import reducerSlice from "./sliceLogin";
import DataSliceMovie from "./sliceDataMovie";
import DataEventSlice from "./sliceDataEvents";
import DataSportSlice from "./sliceDataSport";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  reducerSlice: reducerSlice,
  DataSlice: DataSliceMovie,
  DataEventSlice: DataEventSlice,
  DataSportSlice: DataSportSlice,
});
