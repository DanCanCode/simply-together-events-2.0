import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import galleriesReducer from "./redux-store/galleries";

const reducer = combineReducers({
  galleries: galleriesReducer,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
