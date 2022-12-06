import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import galleriesReducer from "./redux-store/galleries";
import singleGalleryReducer from "./redux-store/singleGallery";

const reducer = combineReducers({
  galleries: galleriesReducer,
  singleGallery: singleGalleryReducer,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
