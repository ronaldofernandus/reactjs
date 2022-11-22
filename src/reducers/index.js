import { combineReducers } from "redux";
import userReducers from "./home";
import postReducers from "./post";
export default combineReducers({
  userReducers,
  postReducers,
});
