import React from 'react';
import logo from 'media/logo.png';
import { FacebookSVG, GoogleSVG, SignInSVG } from 'commons';
import * as styles from './style';

class Home extends React.Component {
  state = {};

  render() {
    const { history } = this.props;
    return (
      <div className={styles.homeContainer}>
        <div className={styles.content}>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.icons}>
            <styles.Icon
              name="facebook"
              onClick={() => {
                localStorage.setItem('token', 1);
                history.push('/feed');
              }}
            >
              <div className="facebook">
                <FacebookSVG />
              </div>
              <div className="facebookSignIn">
                <SignInSVG />
              </div>
            </styles.Icon>
            <styles.Icon
              name="google"
              onClick={() => {
                localStorage.setItem('token', 1);
                localStorage.setItem('firstSignUp', 1);
                history.push('/feed');
              }}
            >
              <div className="google">
                <GoogleSVG />
              </div>
              <div className="googleSignIn">
                <SignInSVG />
              </div>
            </styles.Icon>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
