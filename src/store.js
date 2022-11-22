import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import albumsReducer from "./redux-store/albums";

const reducer = combineReducers({
  albums: albumsReducer,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
