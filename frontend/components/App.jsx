import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import { ProtectedRoute } from "../util/route_util";
import LoginFormContainer from './session/login_form_container'; 
import SignupFormContainer from './session/signup_form_container';
import TopNavContainer from './top_nav/top_nav_container';
import FrontPage from "./front_page/front_page";
import ProfileContainer from "./profile/profile_container";
import Modal from "./modal/modal";
import FeedContainer from "./feed/feed_container";

const App = () => (
  <div>
    <Modal />
    <ProtectedRoute component={TopNavContainer}/>
    <Switch>
      <AuthRoute exact path="/" component={FrontPage}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path='/users/:userId' component={ProfileContainer} />
      <ProtectedRoute exact path='/feed' component={FeedContainer} />

    </Switch>

  </div>
);

export default App;