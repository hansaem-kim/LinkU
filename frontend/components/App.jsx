import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import { NoAuthRoute } from "../util/route_util";
import LoginFormContainer from './session/login_form_container'; 
import SignupFormContainer from './session/signup_form_container';
import TopNavContainer from './top_nav/top_nav_container';
import FrontPage from "./front_page/front_page";

const App = () => (
  <div>
    <NoAuthRoute component={TopNavContainer}/>
    <Switch>
      <AuthRoute exact path="/" component={FrontPage}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>

  </div>
);

export default App;