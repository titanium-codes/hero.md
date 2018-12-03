import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

const FiltredEvents = ({ data, latest }) => (
  <div className={styles.latest}>
    {latest && <div className={styles.latestTitle}>Latest</div>}
    {data.map(({
 date, title, bg, id, favorites
}) => (
  <styles.LatestContent bg={bg} key={id}>
    <div className="info">
      <p className="date">{date}</p>
      <p className="title">{title.length > 20 ? `${title.substr(0, 20)} ...` : title}</p>
      <div>{favorites.length} interested</div>
    </div>
  </styles.LatestContent>
    ))}
  </div>
);

FiltredEvents.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  latest: PropTypes.bool
};

FiltredEvents.defaultProps = {
  latest: false
};

export default FiltredEvents;
