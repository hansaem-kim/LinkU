import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import { NoAuthRoute } from "../util/route_util";
import LoginFormContainer from './session/login_form_container'; 
import SignupFormContainer from './session/signup_form_container';
import TopNavContainer from './top-nav/top_nav_container';

const App = () => (
  <div>
    <h1>Welcome to LinkU</h1>
    <NoAuthRoute component={TopNavContainer}/>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;