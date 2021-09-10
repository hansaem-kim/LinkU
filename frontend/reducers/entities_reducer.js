import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import educationReducer from "./education_reducer";
import postReducer from "./post_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  educations: educationReducer,
  posts: postReducer

});

export default entitiesReducer;