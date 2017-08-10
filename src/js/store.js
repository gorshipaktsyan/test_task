import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import logger from "redux-logger";

import persistState from "redux-localstorage";

const initialState = {};

const createStoreWithMiddleware = compose(applyMiddleware(
    logger(),
    thunkMiddleware,
), persistState('productList'));

const store = createStore(rootReducer, initialState, createStoreWithMiddleware);

export default store;
