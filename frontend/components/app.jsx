import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import LoginForm from './forms/session/login_form_container';
import SignupForm from './forms/session/signup_form_container';

export default () => (
  <div>
    <header>
      <HeaderContainer />
    </header>
    <AuthRoute path="/login" component={LoginForm} />
    <AuthRoute path="/signup" component={SignupForm} />
  </div>
);
