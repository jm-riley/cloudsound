import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import Hero from './header/hero';
import LoginForm from './forms/session/login_form_container';
import SignupForm from './forms/session/signup_form_container';

export default () => (
  <div className="main">
    <header>
      <Route path="/discover" component={HeaderContainer} />
    </header>
    <AuthRoute exact path="/" component={Hero} />
    {/* <AuthRoute path="/login" component={LoginForm} />
    <AuthRoute path="/signup" component={SignupForm} /> */}
  </div>
);
