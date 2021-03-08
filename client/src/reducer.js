export const initialState = {
  basket: [],
  user: null,
  open: false,
  photos: [],
  loginStatus: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_PHOTOS":
      return {
        ...state,
        photos: action.payload,
      };

    case "SET_OPEN":
      return {
        ...state,
        open: action.payload,
      };

    case "ADD_PHOTO":
      return {
        ...state,
        photos: [...state.photos, { ...action.values }],
      };
    case "REMOVE_PHOTO":
      return {
        ...state,
        photos: [...state.photos.filter((p) => p.id !== action.payload)],
      };

    case "EDIT_PHOTO":
      const items = state.photos.map((photo) => {
        if (photo.id === action.payload.id) {
          photo = action.payload;
        }
        return photo;
      });
      return {
        ...state,
        photos: items,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        loginStatus: action.loginStatus,
      };

    case "SET_LOGIN_STATUS":
      return {
        ...state,
        loginStatus: action.loginStatus,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
      };

    default:
      return state;
  }
};

export default reducer;
