// importing the types
import { SET_TOKEN, SET_STATUS_INFO, SET_BASIC_INFO } from "../types";

// exportable useDispatch functions

export function setToken(token) {
  return (dispatch) => {
    dispatch(setTokenEvent(token));
  };
}

export function setStatusInf(data) {
  return (dispatch) => {
    dispatch(setStatusInfEvent(data));
  };
}

export function setBasicInfo(data) {
  return (dispatch) => {
    dispatch(setBasicInfoEvent(data));
  };
}

// const functions for the dispatch events
const setTokenEvent = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

const setBasicInfoEvent = (data) => ({
  type: SET_BASIC_INFO,
  payload: data,
});

const setStatusInfEvent = (data) => ({
  type: SET_STATUS_INFO,
  payload: data,
});
