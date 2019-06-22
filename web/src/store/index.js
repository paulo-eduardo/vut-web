import { combineReducers } from "redux";
import { requestTools, searchField } from "./reducers";

const rootReducers = combineReducers({ requestTools, searchField });

export default rootReducers;
