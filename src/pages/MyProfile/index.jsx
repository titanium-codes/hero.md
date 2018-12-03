import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { reduxForm } from 'redux-form';

import * as styles from './styles';
import Form from './Form';
import ProfessionalInfo from './ProfessionalInfo';

class MyProfile extends React.Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired
  };

  state = { editable: false };

  onSubmit = () => {
    this.props.submit('myPage');
    if (this.props.valid) {
      this.setState({ editable: false });
    }
  };

  startEditing = () => {
    this.setState({ editable: true });
  };

  cancelEditing = () => {
    this.setState({ editable: false });
    this.props.reset('myPage');
    this.props.initialize({});
  };

  render() {
    const { editable } = this.state;
    return (
      <>
        <Grid container className={styles.body} id="parent">
          <styles.Avatar bg="https://s3.eu-west-3.amazonaws.com/be-hero/myprofle.svg" id="avatar" />
          <Grid item className={styles.pesonalData}>
            <Form
              onSubmit={this.onSubmit}
              editable={editable}
              startEditing={this.startEditing}
              cancelEditing={this.cancelEditing}
            />
          </Grid>
        </Grid>
        <ProfessionalInfo />
      </>
    );
  }
}
export default reduxForm({
  onSubmit: () => {
    // console.log('values ', values);
  },
  onSubmitFail: () => {},
  form: 'myPage'
})(MyProfile);
