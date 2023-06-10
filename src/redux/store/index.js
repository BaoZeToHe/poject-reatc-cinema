// import {legacy_createStore as createStore  } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from "../Saga/index.js"
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../Slice/index.js"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga)

export default store