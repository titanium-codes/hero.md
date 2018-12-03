import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { EntityCard } from 'commons';
import MentorForm from './MentorForm';
import * as styles from './styles';
import mentorsData from '../Buddy/mentors';

class Mentor extends React.Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired
  };

  state = {
    mentorData: mentorsData.find(({ id }) => id === this.props.match.params.id),
    events: JSON.parse(localStorage.getItem('data')).filter(({ type }) => type === 'event')
  };

  handleLikeIt = () => {
    const { mentorData } = this.state;
    Object.assign(mentorData, { favorite: !mentorData.favorite });
    this.setState({ mentorData });
  };

  handleLikeCourse = () => {};

  render() {
    const { mentorData, events } = this.state;
    return (
      <div>
        <Grid container className={styles.gridContainer}>
          <Grid item xs={12} sm={5} md={3} style={{ padding: '0 7.5px' }}>
            <MentorForm data={mentorData} handleLikeIt={this.handleLikeIt} />
          </Grid>
          <Grid item xs={12} sm={7} md={9}>
            <Grid container style={{ position: 'relative', margin: '19px 0px' }}>
              <div className={styles.categoryTitle}>Latest</div>
              {events.slice(0, 3).map(entity => (
                <Grid
                  key={entity.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  xl={4}
                  lg={4}
                  className={styles.container}
                >
                  <EntityCard
                    data={entity}
                    handleLikeCourse={(id) => {
                      this.handleLikeCourse(id);
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container style={{ position: 'relative', margin: '19px 0px' }}>
              <div className={styles.categoryTitle}>All</div>
              {events.map(entity => (
                <Grid
                  key={entity.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  xl={4}
                  lg={4}
                  className={styles.container}
                >
                  <EntityCard
                    data={entity}
                    handleLikeCourse={(id) => {
                      this.handleLikeCourse(id);
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Mentor;
