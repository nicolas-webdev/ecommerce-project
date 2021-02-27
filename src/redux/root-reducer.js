import { combineReducers } from "redux-redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
