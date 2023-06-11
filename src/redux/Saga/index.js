import DataMovieSaga from "./dataMovieSaga";
import LoginSaga from "./loginSaga";
import { fork, takeEvery } from "redux-saga/effects";
import { combineReducers } from "@reduxjs/toolkit";

export function* mySaga() {
  yield fork(LoginSaga);
  yield fork(DataMovieSaga);
}
