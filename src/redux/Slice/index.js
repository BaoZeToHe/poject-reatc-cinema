import reducerSlice from "./sliceLogin";
import DataSliceMovie from "./sliceDataMovie";
import DataEventSlice from "./sliceDataEvents";
import DataSportSlice from "./sliceDataSport";
import CheckLoading from "./sliceLoading";
import DataShowTime from "./sliceShowtTime"
import DataChairSlice  from "./sliceDataChair";
import DataChairBy  from "./sliceArrayChair";
import DataCheckOut from "./sliceSaveCheckOut";
import DataChairSeverBy from "./sliceDataSeverChair"
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  DataShowTime: DataShowTime,
  reducerSlice: reducerSlice,
  DataMovieSlice: DataSliceMovie,
  DataEventSlice: DataEventSlice,
  DataSportSlice: DataSportSlice,
  DataChairSlice: DataChairSlice,
  CheckLoading: CheckLoading ,
  DataChairBy: DataChairBy ,
  DataCheckOut: DataCheckOut ,
  DataChairSeverBy: DataChairSeverBy
});

