import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  // window.store = store;
  // window.dispatch = store.dispatch;
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});

window.signup = signup;
