import reducerSlice from "./sliceLogin"
import DataSlice from "./sliceDataMovie"
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({ reducerSlice : reducerSlice, DataSlice : DataSlice });