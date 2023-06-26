import DataMovieSaga from "./dataMovieSaga";
import LoginSaga from "./loginSaga";
import DataShowTime from "./dataShowtime";
import { fork } from "redux-saga/effects";

export function* mySaga() {
  yield fork(DataShowTime);
  yield fork(LoginSaga);
  yield fork(DataMovieSaga);
}
