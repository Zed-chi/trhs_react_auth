import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Header from './components/Header';
import Public from './components/Public';
import NotFound from './components/NotFound';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import Authenticated from './components/Authenticated';
import withContext from "./Context";

const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const UserSignOutWithContext = withContext(UserSignOut);

export default () => (
  <Router>
    <div>
      <HeaderWithContext />

      <Switch>
        <Route exact path="/" component={Public} />
        <PrivateRoute path="/authenticated" component={AuthWithContext} />        
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext } />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
