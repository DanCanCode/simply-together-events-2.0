import axios from "axios";

// ACTION TYPES
const ADD_ALBUM = "ADD_ALBUM";
const SET_ALBUMS = "SET_ALBUMS";
const SET_SINGLE_ALBUM = "SET_SINGLE_ALBUM";
const UPDATE_ALBUM = "UPDATE_ALBUM";
const DELETE_ALBUM = "DELETE_ALBUM";

// ACTION CREATORS
const setAlbums = (albums) => {
  return {
    type: SET_ALBUMS,
    albums,
  };
};

const setSingleAlbum = (album) => {
  return {
    type: SET_SINGLE_ALBUM,
    album,
  };
};

const addAlbum = (album) => {
  return {
    type: ADD_ALBUM,
    album,
  };
};

const updateAlbum = (album) => {
  return {
    type: UPDATE_ALBUM,
    album,
  };
};

const deleteAlbum = (album) => {
  return {
    type: DELETE_ALBUM,
    album,
  };
};

// THUNKS
export const fetchAlbums = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/albums");
    dispatch(setAlbums(data));
  };
};

export const fetchSingleAlbum = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/albums/${id}`);
    dispatch(setSingleAlbum(data));
  };
};

export const createAlbum = (album) => {
  return async (dispatch) => {
    const { data } = await axios.post("/api/albums", album);
    dispatch(addAlbum(data));
  };
};

export const updatedAlbum = (album) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/albums/${album.id}`, album);
    dispatch(updateAlbum(data));
  };
};

export const removeAlbum = (id) => {
  return async (dispatch) => {
    const { data } = await axios.delete(`/api/album/${id}`);
    dispatch(deleteAlbum(data));
  };
};

// REDUCER
export default function albumsReducer(state = [], action) {
  switch (action.type) {
    case SET_ALBUMS:
      return action.albums;
    case SET_SINGLE_ALBUM:
      return action.album;
    case ADD_ALBUM:
      return [...state, action.album];
    case UPDATE_ALBUM:
      return state.map((album) =>
        album.id === action.album.id ? action.album : album
      );
    case DELETE_ALBUM:
      return state.filter((album) => album.id !== action.album.id);
    default:
      return state;
  }
}
