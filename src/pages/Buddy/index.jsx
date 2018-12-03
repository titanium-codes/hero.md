import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as styles from './styles';
import mentorsData from './mentors';

class Mentors extends React.Component {
  state = {
    mentors: mentorsData
  };

  handleLikeIt = (id) => {
    const { mentors } = this.state;
    let index = null;
    const tempObj = mentors.find((el, i) => {
      index = i;
      return el.id === id;
    });
    if (tempObj) {
      Object.assign(tempObj, { favorite: !tempObj.favorite });
    }
    mentors[index] = tempObj;
    this.setState({ mentors });
  };

  render() {
    const { mentors } = this.state;
    return (
      <>
        <input type="text" placeholder="Search" className={styles.search} />
        <Grid container className={styles.gridContainer}>
          {mentors.map(({
 avatar, fullName, domain, id
}) => (
  <Grid key={id} item xs={12} sm={4} md={3} xl={3} lg={3} className={styles.container}>
    <div className={styles.card}>
      <Link to={`/buddy/${id}`}>
        <img src={avatar} alt="avatar" width="100%" height="auto" />
      </Link>
      <div className={styles.info}>
        <Grid container justify="space-between" alignItems="center">
          <Link to={`/buddy/${id}`} className="title">
            {fullName}
          </Link>
        </Grid>
        <div className="domain">{domain}</div>
        <div className="numberOfPosts">14 articles</div>
      </div>
    </div>
  </Grid>
          ))}
        </Grid>
      </>
    );
  }
}
export default Mentors;
