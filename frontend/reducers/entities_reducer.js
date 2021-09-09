import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import educationReducer from "./education_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  educations: educationReducer

});

export default entitiesReducer;