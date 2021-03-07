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

// Set User (get user info)
export const getUser = async (dispatch) => {
  setLoading(dispatch, true);

  // do fetch
  await axios
    .get("/api/v1/users.json")
    .then((res) => {
      if (res.data.logged_in) {
        const result = res.data.current_user;
        const status = res.data.logged_in;
        // set user info
        dispatch({
          type: "SET_USER",
          payload: result,
          loginStatus: status,
        });
        dispatch({
          type: "SET_ERROR",
          payload: {
            error: false,
            message: "",
          },
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
          loginStatus: false,
        });
      }
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

export const signIn = async (dispatch, user, history) => {
  // setLoading(dispatch, true);

  // do fetch
  await axios
    .post("/users/sign_in", { user }, { withCredentials: true })
    .then((res) => {
      if (res.data.logged_in) {
        const currentUser = res.data.current_user;
        const status = res.data.logged_in;
        // set user info
        dispatch({
          type: "SET_USER",
          payload: currentUser,
          loginStatus: status,
        });

        dispatch({
          type: "SET_ERROR",
          payload: {
            error: false,
            message: "",
          },
        });
        history.push("/app");
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: {
            error: true,
            message: res.data.errors,
          },
        });
      }
    })
    .catch((error) => {
      const result = error.response.data;
      // set error if has any
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: true,
          message: result.error,
        },
      });
    });
};

export const signOut = async (dispatch, history) => {
  // setLoading(dispatch, true);

  // do fetch
  await axios
    .delete("/users/sign_out", { withCredentials: true })
    .then((res) => {
      // if (res.data.success) {
      // set user info
      dispatch({
        type: "SET_USER",
        payload: null,
        loginStatus: false,
      });
      dispatch({
        type: "SET_USERS",
        payload: null,
      });
      dispatch({
        type: "GET_JOBS",
        payload: [],
      });
      history.push("/");
    })
    .catch((error) => {
      const result = error;
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

export const updateProfile = (dispatch, newUser, id) => {
  // do fetch
  fetch(`/api/v1/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({ user: newUser }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    dispatch({
      type: "SET_USER",
      payload: newUser,
      loginStatus: true,
    });
  });
};
