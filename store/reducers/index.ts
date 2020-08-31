import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import appStatusReducer from "./appStatusReducer";

// combinend reducers
export default combineReducers({
  products: productReducer,
  user: userReducer,
  appStatus: appStatusReducer,
});
