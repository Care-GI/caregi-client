import {
  SET_TOKEN,
  SET_STATUS_INFO,
  SET_BASIC_INFO,
  SET_ACTIVE_STATUS,
} from "../types";

const initialState = {
  auth: false,
  token: null,
  active: false,
  statusInformation: {},
  userInformation: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    // actions go here
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        auth: true,
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
        auth: true,
      };
    case SET_ACTIVE_STATUS:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
}
