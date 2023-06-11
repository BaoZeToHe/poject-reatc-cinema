import { put, call, takeLatest, takeEvery, take } from "redux-saga/effects";
import {
  setAuth,
  commonLogin,
  addRegister,
  setIsSignIn,
} from "../Slice/sliceLogin.js";
import { setLocalLogin, getLocalLogin } from "../../untill/loginLocal.js";
import { registerUsers, loginUsers } from "../../services/fetchUser.jsx";
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

function* LoginSaga() {
  yield takeEvery(addRegister.type, register);
  yield takeEvery(commonLogin.type, loginUserSaga);
}

export default LoginSaga;
