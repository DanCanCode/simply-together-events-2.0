import axios from "axios";

// ACTION TYPE
const SET_SINGLE_GALLERY = "SET_SINGLE_GALLERY";

// ACTION CREATORS
const setSingleGallery = (gallery) => {
  return {
    type: SET_SINGLE_GALLERY,
    gallery,
  };
};

// THUNKS
export const fetchSingleGallery = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/gallery/${id}`);
      dispatch(setSingleGallery(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
export default function singleGalleryReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLE_GALLERY:
      return action.gallery;
    default:
      return state;
  }
}
