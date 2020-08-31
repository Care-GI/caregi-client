// importing the types
import { SET_LOADING, SHOW_ERROR, QUIT_ERROR } from "../types";

const initialState = {
  loading: false,
  error: {
    state: false,
    msg: "",
  },
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    // actions go here
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: {
          state: true,
          msg: action.payload,
        },
      };
    case QUIT_ERROR:
      return {
        ...state,
        error: {
          state: false,
          msg: null,
        },
      };

    default:
      return state;
  }
}
