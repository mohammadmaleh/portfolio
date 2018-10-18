import { combineReducers } from "redux";
import projects from "./reducer_projects";
const rootReducer = combineReducers({
  projects
});

export default rootReducer;
