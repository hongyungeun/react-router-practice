import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import productReducer from "./productReducer";

export default combineReducers({
  login:loginReducer,
  product:productReducer
})