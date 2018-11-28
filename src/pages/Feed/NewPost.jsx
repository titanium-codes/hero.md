import React from 'react';
import { Button, Grid } from '@material-ui/core';
import close from 'media/delete.svg';
import * as styles from './style';
import getInputs from './getInputs';

class NewPost extends React.Component {
  state = {};

  resetForm = () => {
    // this.setState({ postType: null });
  };

  render() {
    return (
      <div>
        <div
          className="shadow"
          id="shadow"
          onClick={() => {}}
          onKeyDown={() => {}}
          role="tab"
          tabIndex={0}
        />
        <div id="newPostContainer" className={styles.newPostContainer}>
          <div className="modal" id="modal">
            <Button variant="contained" color="primary" style={{ width: 150 }}>
              Share
            </Button>
            <Button variant="outlined" color="primary" className={styles.outlinedButton}>
              Upload
            </Button>
          </div>
          <div className="header">
            <Grid container>
              <div>New Post</div>
            </Grid>
            <div
              className={styles.closeModal}
              id="closeIcon"
              onClick={() => {}}
              onKeyDown={() => {}}
              role="tab"
              tabIndex={0}
            >
              <img src={close} alt="" height={18} width={18} />
            </div>
          </div>
          <Grid container className="content" alignItems="flex-start">
            <styles.Avatar bg="https://s3.eu-west-3.amazonaws.com/be-hero/person-1.png" />
            <div className={styles.formInputs}>inputs</div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default NewPost;
