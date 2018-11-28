import React from 'react';
import PropTypes from 'prop-types';
import { yellow } from 'constants/colors';
import calendarIcon from 'media/calendar.svg';
import { css } from 'emotion';
import * as styles from './style';
import FiltredEvents from './FiltredEvents';
import CalendarSchedule from './CalendarSchedule';

class MyEventsOrAll extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
    favoriteAnEvent: PropTypes.func.isRequired
  };

  state = { tab: localStorage.getItem('token') ? 0 : 1, showCalendar: false };

  getData = () => {
    const { tab } = this.state;
    const { data } = this.props;
    if (tab === 0) {
      return data.filter(event => event.type === 'event' && event.iWantIt);
    } else if (tab === 1) {
      return data.filter(event => event.type === 'event');
    }
    return data.slice(0, 5);
  };

  handleTab = (value) => {
    this.setState({ tab: value });
  };

  toggleCalendar = () => {
    const { showCalendar } = this.state;
    if (showCalendar) {
      document.getElementById('root').style.overflowY = 'initial';
    } else {
      document.getElementById('root').style.overflowY = 'hidden';
    }
    this.setState({ showCalendar: !showCalendar });
  };

  render() {
    const { favoriteAnEvent } = this.props;
    const { tab, showCalendar } = this.state;

    const colorMy = css`
      color: ${tab === 0 ? yellow : 'rgba(0, 0, 0, 0.87)'};
      cursor: pointer;
    `;
    const colorAll = css`
      color: ${tab === 1 ? yellow : 'rgba(0, 0, 0, 0.87)'};
      cursor: pointer;
    `;

    const colorLatest = css`
      color: ${tab === 2 ? yellow : 'rgba(0, 0, 0, 0.87)'};
      cursor: pointer;
    `;

    return (
      <div className={styles.latest}>
        <div className={styles.actionButtons}>
          <div className={styles.sortEventsButtons}>
            {localStorage.getItem('token') && (
              <div
                onClick={() => this.handleTab(0)}
                onKeyDown={() => {}}
                role="tab"
                tabIndex={0}
                className={colorMy}
              >
                My events
              </div>
            )}
            <div
              onClick={() => this.handleTab(1)}
              onKeyDown={() => {}}
              role="tab"
              tabIndex={0}
              className={colorAll}
            >
              All events
            </div>
            <div
              onClick={() => this.handleTab(2)}
              onKeyDown={() => {}}
              role="tab"
              tabIndex={0}
              className={`${colorLatest} ${styles.latestTab}`}
            >
              Latest
            </div>
          </div>
          <div
            className={styles.searchIcons}
            onClick={this.toggleCalendar}
            onKeyDown={() => {}}
            role="tab"
            tabIndex={0}
          >
            <img src={calendarIcon} alt="search" height={20} />
          </div>
        </div>
        {showCalendar && <CalendarSchedule closeModal={this.toggleCalendar} />}
        <FiltredEvents favoriteAnEvent={favoriteAnEvent} data={this.getData()} />
      </div>
    );
  }
}
export default MyEventsOrAll;
