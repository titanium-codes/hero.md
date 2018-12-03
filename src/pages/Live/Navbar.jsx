import React from 'react';
import { Grid, Button } from '@material-ui/core';
import * as styles from './style';

const Navbar = () => (
  <div className={styles.navbar}>
    <Grid container>
      <styles.Avatar bg="https://s3.eu-west-3.amazonaws.com/be-hero/person-1.png" />
      <div className="infoWithButtons">
        <div className="info">
          <div className="title">HERO.LIVE</div>
          <div className="followers">24 followers</div>
        </div>
        <div>
          <Button variant="contained" className="runButton">
            run
          </Button>
        </div>
      </div>
    </Grid>
  </div>
);

export default Navbar;
