import {combineReducers} from "redux";
import loginReducer from "./login"
const allReducer = combineReducers({
    loginReducer,
})
export default allReducer;