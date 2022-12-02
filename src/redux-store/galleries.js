import axios from "axios";

// ACTION TYPES
const ADD_GALLERY = "ADD_GALLERY";
const SET_GALLERIES = "SET_GALLERIES";
const SET_SINGLE_GALLERY = "SET_SINGLE_GALLERY";
const UPDATE_GALLERY = "UPDATE_GALLERY";
const DELETE_GALLERY = "DELETE_GALLERY";

// ACTION CREATORS
const setGalleries = (galleries) => {
  return {
    type: SET_GALLERIES,
    galleries,
  };
};

const setSingleGallery = (gallery) => {
  return {
    type: SET_SINGLE_GALLERY,
    gallery,
  };
};

const addGallery = (gallery) => {
  return {
    type: ADD_GALLERY,
    gallery,
  };
};

const updateGallery = (gallery) => {
  return {
    type: UPDATE_GALLERY,
    gallery,
  };
};

const deleteGallery = (gallery) => {
  return {
    type: DELETE_GALLERY,
    gallery,
  };
};

// THUNKS
export const fetchGalleries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/gallery");
      dispatch(setGalleries(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSingleGallery = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/gallery/${id}`);
    dispatch(setSingleGallery(data));
  };
};

export const createGallery = (gallery) => {
  return async (dispatch) => {
    const { data } = await axios.post("/api/gallery", gallery);
    dispatch(addGallery(data));
  };
};

export const updatedGallery = (gallery) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/gallery/${gallery.id}`, gallery);
    dispatch(updateGallery(data));
  };
};

export const removeGallery = (id) => {
  return async (dispatch) => {
    const { data } = await axios.delete(`/api/gallery/${id}`);
    dispatch(deleteGallery(data));
  };
};

// REDUCER
export default function galleriesReducer(state = [], action) {
  switch (action.type) {
    case SET_GALLERIES:
      return action.galleries;
    case SET_SINGLE_GALLERY:
      return action.gallery;
    case ADD_GALLERY:
      return [...state, action.gallery];
    case UPDATE_GALLERY:
      return state.map((gallery) =>
        gallery.id === action.gallery.id ? action.gallery : gallery
      );
    case DELETE_GALLERY:
      return state.filter((gallery) => gallery.id !== action.gallery.id);
    default:
      return state;
  }
}
