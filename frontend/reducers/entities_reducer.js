import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import educationReducer from "./education_reducer";
import experienceReducer from "./experience_reducer";
import postReducer from "./post_reducer";
import aboutReducer from "./about_reducer";
import commentReducer from "./comment_reducer";
import connectionReducer from "./connection_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  educations: educationReducer,
  experiences: experienceReducer,
  abouts: aboutReducer,
  posts: postReducer,
  comments: commentReducer,
  connections: connectionReducer,

});

export default entitiesReducer;