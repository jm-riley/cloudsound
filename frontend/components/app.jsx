import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import Hero from './header/hero';
import SongShow from './songs/song_show';
import UserDetail from './users/user_detail';
import Discover from './discover/discover';
import Modal from './forms/modal';
import Playbar from './playbar/playbar';

import UploadPage from './forms/upload/upload_page';
// import LoginForm from './forms/session/login_form_container';
// import SignupForm from './forms/session/signup_form_container';

export default () => (
  <div className="main">
    <Switch>
      <AuthRoute exact path="/" component={Hero} />
      <Route path="/" component={HeaderContainer} />
    </Switch>
    <div className="main-content-wrapper">
      <Route path="/upload" component={UploadPage} />
      <Switch>
        <Route path="/discover" component={Discover} />
        <Route path="/users/:userId" component={UserDetail} />
        <Route path="/:userId/:songId" component={SongShow} />
      </Switch>
      {/* <AuthRoute path="/login" component={LoginForm} />
    <AuthRoute path="/signup" component={SignupForm} /> */}
      <Modal />
      <Playbar />
    </div>
  </div>
);
