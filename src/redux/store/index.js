// import {legacy_createStore as createStore  } from 'redux'
import rootReducer from '../reducer/index.js';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from "../sagas/index.js"
import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(rootReducer )
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga)

export default store