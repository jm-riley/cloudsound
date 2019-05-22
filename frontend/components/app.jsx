import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import Hero from './header/hero';
import Modal from './forms/modal';

import UploadPage from './forms/upload/upload_page';
// import LoginForm from './forms/session/login_form_container';
// import SignupForm from './forms/session/signup_form_container';

export default () => (
  <div className="main">
    <Switch>
      <AuthRoute exact path="/" component={Hero} />
      <Route path="/" component={HeaderContainer} />
    </Switch>
    <Route path="/upload" component={UploadPage} />
    {/* <AuthRoute path="/login" component={LoginForm} />
    <AuthRoute path="/signup" component={SignupForm} /> */}
    <Modal />
  </div>
);
