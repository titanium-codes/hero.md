import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { FirstSignUp, Navbar } from 'commons';
import * as route from 'constants/urls';
import { css } from 'emotion';
import { Home, Feed, MyProfile } from './pages';
import history from './history';

const margin = css`
  min-height: calc(100% - 110px);
  width: calc(100% - 90px);
  padding: 15px 45px;
  padding-top: 95px !important;
  @media (min-width: 1558px) {
    width: 100%;
    max-width: 1468px;
    margin: 0 auto;
    padding: 15px 0;
  }
  @media (max-width: 868px) {
    width: calc(100% - 50px);
    padding: 15px 25px;
  }
`;

const Routes = () => (
  <Router history={history}>
    <>
      <Navbar history={history} />
      <div className={margin}>
        <Switch>
          <Route
            exact
            path={route.HOME}
            render={props =>
              (localStorage.getItem('token') ? <Redirect to="/feed" /> : <Home {...props} />)
            }
          />
          <Route
            exact
            path={route.FEED}
            render={props => (
              <>
                <Feed {...props} />
                {localStorage.getItem('firstSignUp') && <FirstSignUp {...props} />}
              </>
            )}
          />
          <Route exact path={route.MY_PROFILE} component={MyProfile} />
        </Switch>
      </div>
    </>
  </Router>
);

export default Routes;
