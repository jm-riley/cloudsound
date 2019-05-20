import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import LoginForm from './forms/session/login_form_container';
import SignupForm from './forms/session/signup_form_container';

export default () => (
  <div>
    <header>
      <HeaderContainer />
    </header>
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
  </div>
);
