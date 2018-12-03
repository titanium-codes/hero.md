import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as styles from './styles';

class EntityCard extends React.Component {
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired
  };
  state = { data: this.props.data };
  handleLikeCourse = () => {};
  render() {
    const {
      data: {
        bg, id, title, type, description
      }
    } = this.state;

    return (
      <div className={styles.entityCard}>
        <Link to={`/courses/${id}`}>
          <img src={bg} alt="background" />
        </Link>
        <div className="info">
          <div className="title">{title}</div>
          <div className="type">{type}</div>
          <div className="description">
            {description.length > 50 ? description.slice(0, 50) : description}
          </div>
        </div>
      </div>
    );
  }
}

export default EntityCard;
