import React from 'react';
import { Grid } from '@material-ui/core';
import MyEventsOrAll from '../Feed/MyEventsOrAll';
import Content from './Content';

class Live extends React.Component {
  state = {
    data: JSON.parse(localStorage.getItem('data'))
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} md={4}>
            <MyEventsOrAll data={data} />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Content data={data} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Live;
