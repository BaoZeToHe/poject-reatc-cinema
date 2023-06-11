import { put, call, takeEvery} from "redux-saga/effects";
import { getMoviesRequest, getMoviesSuccess } from "../Slice/sliceDataMovie.js";
import { getEventRequest, getEventSuccess } from "../Slice/sliceDataEvents.js";
import {
  fetchDataMovie,
  fetchDataEvent,
  fetchDataSport,
} from "../../services/fetchData.jsx";
import { getSportRequest, getSportSuccess } from "../Slice/sliceDataSport.js";

function* getMovieRequestSaga(action) {
  try {
    const response = yield call(fetchDataMovie, action.payload);
    let dataAPI = response.data;
    yield put(getMoviesSuccess(dataAPI));
  } catch (error) {
    console.log(error);
    return;
  }
}
function* getEventRequestSaga(action) {
  try {
    const response = yield call(fetchDataEvent, action.payload);
    let dataAPI = response.data;
    yield put(getEventSuccess(dataAPI));
  } catch (error) {
    console.log(error);
  }
}
function* getSportSuccessSaga(action) {
  try {
    const response = yield call(fetchDataSport, action.payload);
    let dataAPI = response.data;
    yield put(getSportSuccess(dataAPI));
  } catch (error) {
    console.log(error);
  }
}
function* DataMovieSaga() {
  yield takeEvery(getMoviesRequest.type, getMovieRequestSaga);
  yield takeEvery(getEventRequest.type, getEventRequestSaga);
  yield takeEvery(getSportRequest.type, getSportSuccessSaga);
}

export default DataMovieSaga;
