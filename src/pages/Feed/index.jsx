import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import * as styles from './style';
import FiltredEvents from './FiltredEvents';
import Main from './Main';
import MyEventsOrAll from './MyEventsOrAll';
import AllFavorites from './AllFavorites';

const types = ['course', 'event', 'video', 'article'];

const feedData = [...new Array(10)].map((el, i) => {
  const type = types[Math.floor(Math.random() * types.length)];
  return {
    id: i,
    type,
    title: `${type} ${i + 1}`,
    date: 'MON 12/11/2018',
    bg:
      type === 'event'
        ? 'https://s3.eu-west-3.amazonaws.com/be-hero/feed.png'
        : 'https://s3.eu-west-3.amazonaws.com/be-hero/photo.png',
    favorite: i % 2 === 0,
    iWantIt: i % 3 === 0,
    favorites: [...new Array(i * 2)].map((person, j) => ({
      id: i + 1,
      name: `Person ${j + 1}`,
      avatar: `https://s3.eu-west-3.amazonaws.com/be-hero/person-${j + 1}.png`,
      domain: 'JS Developer'
    })),
    description: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry`
  };
});

class Feed extends React.Component {
  static propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired
  };

  state = {
    data: feedData,
    detailsFor: [],
    showAllFavorites: false,
    favorites: []
  };

  favoriteAnEvent = (id) => {
    const { data } = this.state;
    let index = null;
    const tempObj = data.find((el, i) => {
      index = i;
      return el.id === id;
    });
    if (tempObj) {
      Object.assign(tempObj, { favorite: !tempObj.favorite });
    }
    data[index] = tempObj;
    this.setState({ data });
  };

  wantAnEvent = (id) => {
    const { data } = this.state;
    let index = null;
    const tempObj = data.find((el, i) => {
      index = i;
      return el.id === id;
    });
    if (tempObj) {
      Object.assign(tempObj, { iWantIt: !tempObj.iWantIt });
    }
    data[index] = tempObj;
    this.setState({ data });
  };

  handleDetailsForEntity = (id) => {
    const { detailsFor } = this.state;
    if (detailsFor.includes(id)) {
      detailsFor.splice(detailsFor.indexOf(id), 1);
    } else {
      detailsFor.push(id);
    }
    this.setState({ detailsFor });
  };

  handleAllFavorites = (favorites) => {
    const { showAllFavorites } = this.state;
    if (showAllFavorites) {
      this.setState({ favorites: [], showAllFavorites: false });
    } else {
      this.setState({ showAllFavorites: true, favorites });
    }
  };

  render() {
    const {
      data, detailsFor, showAllFavorites, favorites
    } = this.state;
    const { history } = this.props;
    return (
      <>
        {showAllFavorites && (
          <AllFavorites favorites={favorites} handleAllFavorites={this.handleAllFavorites} />
        )}
        <Grid container className={styles.body}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.latestGrid}>
            <FiltredEvents
              data={data}
              latest
              favoriteAnEvent={this.favoriteAnEvent}
              history={history}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={styles.mainGrid}>
            <Main
              data={data}
              favoriteAnEvent={this.favoriteAnEvent}
              wantAnEvent={this.wantAnEvent}
              history={history}
              detailsFor={detailsFor}
              handleDetailsForEntity={this.handleDetailsForEntity}
              handleAllFavorites={this.handleAllFavorites}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <MyEventsOrAll data={data} favoriteAnEvent={this.favoriteAnEvent} history={history} />
          </Grid>
        </Grid>
      </>
    );
  }
}
export default Feed;
