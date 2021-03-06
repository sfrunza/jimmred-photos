import axios from "axios";

// Set Loading
export const setLoading = (dispatch, status) =>
  dispatch({ type: "SET_LOADING", payload: status });

// Set Error
export const setError = (dispatch, error) =>
  dispatch({
    type: "SET_ERROR",
    payload: { error: error.status, message: error.message },
  });

export const getPhotos = async (dispatch) => {
  // setLoading(dispatch, true);
  // do fetch
  await axios
    .get("/api/v1/photos")
    .then((res) => {
      // set photos
      dispatch({
        type: "SET_PHOTOS",
        payload: res.data,
      });
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: false,
          message: "",
        },
      });
    })
    .catch((error) => {
      const result = error;
      console.log(error);

      // set error if has any
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: true,
          message: result,
        },
      });
    });
};

export const editPhoto = (dispatch, newPhoto, id) => {
  // do fetch
  fetch(`/api/v1/photos/${id}`, {
    method: "PUT",
    body: JSON.stringify(newPhoto),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    dispatch({
      type: "EDIT_PHOTO",
      payload: newPhoto,
    });
  });
};

export const removePhoto = (dispatch, id) => {
  fetch(`/api/v1/photos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    dispatch({
      type: "REMOVE_PHOTO",
      payload: id,
    });
  });
};
export const addPhoto = (dispatch, formData, values) => {
  fetch("/api/v1/photos.json", {
    method: "POST",
    body: formData,
  }).then((response) => {
    dispatch({
      type: "ADD_PHOTO",
      payload: formData,
      values: values,
    });
  });
};
