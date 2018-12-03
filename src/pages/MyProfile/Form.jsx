import React from 'react';
import { Field } from 'redux-form';
import { Grid, Button } from '@material-ui/core';
// import { required, emailValidation, name } from 'helpers/validation';
import renderInput from './renderFunctions';
import * as styles from './styles';

const Form = ({
  onSubmit, editable, startEditing, cancelEditing
}) => (
  <>
    <div className={styles.pesonalDataTitle}>Pesonal Info</div>
    <Grid container>
      <Grid item xs={12} sm={12} md={8}>
        <Field
          disabled={!editable}
          label="Name"
          name="fullName"
          type="text"
          // validate={[required, name]}
          component={renderInput}
        />
        <Field
          disabled={!editable}
          label="Email"
          name="email"
          type="text"
          // validate={emailValidation}
          component={renderInput}
        />
        <Field
          disabled={!editable}
          label="Phone number"
          name="phone"
          type="text"
          component={renderInput}
        />
        <Field
          disabled={!editable}
          label="Facebook"
          name="facebook"
          type="text"
          component={renderInput}
        />
        <Field
          disabled={!editable}
          label="Telegram"
          name="telegram"
          type="text"
          component={renderInput}
        />
        <Field
          disabled={!editable}
          label="Personal Site"
          name="personalSite"
          type="text"
          component={renderInput}
        />
      </Grid>
    </Grid>
    <Grid container className={styles.actionsButton}>
      <Grid item xs={12} sm={12} md={6}>
        <Grid container>
          <Grid item xs={6} sm={6} md={6}>
            <Button variant="contained" onClick={() => (editable ? onSubmit() : startEditing())}>
              {editable ? 'Save' : 'Edit'}
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            {editable && (
              <Button
                variant="outlined"
                color="primary"
                className={styles.cancelButton}
                onClick={cancelEditing}
              >
                Cancel
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
);

export default Form;
