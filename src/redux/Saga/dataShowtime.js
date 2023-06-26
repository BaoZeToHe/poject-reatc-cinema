import {
  getShowTimeRequest,
  getShowTimeSuccess,
} from "../Slice/sliceShowtTime";
import { getDataChairByRequest, getDataChairBySuccess } from "../Slice/sliceDataSeverChair.js";
import { takeEvery, call, put } from "redux-saga/effects";
import { fetchDataShowTime, DataChairBy } from "../../services/fetchData.jsx";
import { setLoading } from "../Slice/sliceLoading";

function* getShowTimeRequestSaga(action) {
  try {
    const response = yield call(fetchDataShowTime, action.payload);
    yield put(getShowTimeSuccess(response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(true));
    console.log(error);
  }
}
function* getDataChairByRequestSaga(action){
  try {
    const response = yield call(DataChairBy, action.payload);
    yield put(getDataChairBySuccess(response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(true));
    console.log(error);
  }
}

function* DataShowTime() {
  yield takeEvery(getShowTimeRequest.type, getShowTimeRequestSaga);
  yield takeEvery(getDataChairByRequest.type , getDataChairByRequestSaga);
}
export default DataShowTime;
