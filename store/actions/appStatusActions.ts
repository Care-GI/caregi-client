// importing the types
import { SET_LOADING, SHOW_ERROR, QUIT_ERROR } from "../types";

// exportable useDispatch functions
export function setLoading(state, offsetTime = 0) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(loading(state));
    }, offsetTime);
  };
}

export function showError(msg) {
  return (dispatch) => {
    dispatch(newError(msg));
  };
}

export function quitError() {
  return (dispatch) => {
    dispatch(() => ({ type: QUIT_ERROR }));
  };
}

const loading = (state) => ({ type: SET_LOADING, payload: state });
const newError = (payload) => ({ type: SHOW_ERROR, payload });

// const functions for the dispatch events
