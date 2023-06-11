import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import {
  setAuth,
  commonLogin,
  addRegister,
  setIsSignIn,
} from "../Slice/sliceLogin.js";
import {
  comMonMovieGateMax,
  getCommonMovieSuc,
} from "../Slice/sliceDataMovie.js";
import { useHistory } from "react-router-dom";
import { setLocalLogin, getLocalLogin } from "../../untill/loginLocal.js";
import { registerUsers, loginUsers } from "../../services/fetchUser.jsx";
import restClientData from "../../services/resetClientData.jsx";
import history from "../../services/history.jsx";

function* register(action) {
  try {
    const response = yield call(registerUsers, action.payload);
    yield put(setIsSignIn(true));
  } catch (error) {
    console.log("error");
  }
}
function* loginUserSaga(action) {
  try {
    const response = yield call(loginUsers, action.payload);
    yield put(setAuth(true));
    yield setLocalLogin(response.access_token);
    if (getLocalLogin()) {
      history.push("/");
    }
  } catch (error) {
    console.log(error);
    return;
  }
}
function* commonMovieGateMaxSaga(action) {
  try {
    const response = yield call(
      restClientData,
      "get",
      "movie",
      {},
      action.payload
    );
    let dataAPI = response.data;
    yield put(getCommonMovieSuc(dataAPI));
  } catch (error) {
    console.log(error);
    return;
  }
}
function* mySaga() {
  yield takeEvery(addRegister.type, register);
  yield takeEvery(commonLogin.type, loginUserSaga);
  yield takeEvery(comMonMovieGateMax.type, commonMovieGateMaxSaga);
}

export default mySaga;
