import { SET_TOKEN, SET_STATUS_INFO, SET_BASIC_INFO } from "../types";

const initialState = {
  auth: false,
  token: null,
  statusInformation: null,
  userInformation: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // actions go here
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_STATUS_INFO:
      return {
        ...state,
        statusInformation: action.payload,
      };
    case SET_BASIC_INFO:
      return {
        ...state,
        userInformation: action.payload,
      };

    default:
      return state;
  }
}
