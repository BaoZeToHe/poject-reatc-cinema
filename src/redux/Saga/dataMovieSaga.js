import { put, call, takeEvery} from "redux-saga/effects";
import { getMoviesRequest, getMoviesSuccess } from "../Slice/sliceDataMovie.js";
import { getEventRequest, getEventSuccess } from "../Slice/sliceDataEvents.js";
import {
  fetchDataMovie,
  fetchDataEvent,
  fetchDataSport,
  fetchChair,
} from "../../services/fetchData.jsx";
import { fetchCheckOut } from "../../services/fetchChairData.jsx";
import { getSportRequest, getSportSuccess } from "../Slice/sliceDataSport.js";
import { setLoading } from "../Slice/sliceLoading.js";
import { getChairRequest, getChairSuccess } from "../Slice/sliceDataChair.js";
import { getCheckOutRequest , getCheckOutSuccess } from "../Slice/sliceSaveCheckOut.js";

function* getMovieRequestSaga(action) {
  try {
    const response = yield call(fetchDataMovie, action.payload);
    let dataAPI = response.data;
    let pagination = response.pagination
    yield put(setLoading(false))
    yield put(getMoviesSuccess({ dataAPI, pagination}));
  } catch (error) {
    console.log(error);
    yield put(setLoading(true))
    return;
  }
}
function* getEventRequestSaga(action) {
  try {
    const response = yield call(fetchDataEvent, action.payload);
    let dataAPI = response.data;
    yield put(setLoading(false))
    yield put(getEventSuccess(dataAPI));
  } catch (error) {
    yield put(setLoading(true))
    console.log(error);
  }
}
function* getSportSuccessSaga(action) {
  try {
    const response = yield call(fetchDataSport, action.payload);
    let dataAPI = response.data;
    yield put(getSportSuccess(dataAPI));
    yield put(setLoading(false))
  } catch (error) {
    yield put(setLoading(true))
    console.log(error);
  }
}
function* getChairRequestSaga(action){
  try {
    const response = yield call(fetchChair, action.payload);
    yield put(getChairSuccess(response));
    yield put(setLoading(false))
  } catch (error) {
    yield put(setLoading(true))
    console.log(error);
  }
}
function* getSaveCheckOutSaga(action){
  console.log(action.payload);
  try {
    const response = yield call(fetchCheckOut, action.payload);

  } catch (error) {
    console.log(error);
  }
}

function* DataMovieSaga() {
  yield takeEvery(getMoviesRequest.type, getMovieRequestSaga);
  yield takeEvery(getEventRequest.type, getEventRequestSaga);
  yield takeEvery(getSportRequest.type, getSportSuccessSaga);
  yield takeEvery(getChairRequest.type , getChairRequestSaga);
  yield takeEvery(getCheckOutRequest.type , getSaveCheckOutSaga);
}

export default DataMovieSaga;
