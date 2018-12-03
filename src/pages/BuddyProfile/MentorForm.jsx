import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const MentorForm = ({
  data: {
    fullName, description, domain, email, avatar
  }
}) => (
  <div className={styles.mentorInfo}>
    <img src={avatar} alt="avatar" className="avatar" />
    <div className="info">
      <div className="fullNameWithActions">
        <div className="fullName">{fullName}</div>
      </div>
      <div className="domain">{domain}</div>
      <p className="descriptionTitle">Short Description</p>
      <div className="description">{description}</div>
      <div className="email">{email}</div>
    </div>
  </div>
);

MentorForm.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired
};

export default MentorForm;
