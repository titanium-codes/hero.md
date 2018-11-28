import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { green } from 'constants/colors';
import * as styles from './style';

const localizer = BigCalendar.momentLocalizer(moment);

const events = [...new Array(10)].map((el, i) => ({
  id: i,
  // allDay: true,
  title: `Course ${i + 1}`,
  start: new Date(2018, 10, i, 17, 0, 0),
  end: new Date(2018, 10, i, 18, 30, 0),
  desc: 'Most important meal of the day'
}));

class CalendarSchedule extends React.Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired
  };
  state = {};

  componentDidMount() {
    const elements = [...document.getElementsByClassName('rbc-btn-group')];
    const btn = document.createElement('BUTTON');
    btn.innerHTML = 'Add event';
    // const css = `button:hover{background-color: ${green}}`;
    // btn.setAttribute('class', css);
    // btn.onmouseover = () => {
    //   btn.style.background = green;
    //   btn.style.cursor = 'pointer';
    //   btn.style.color = 'white';
    // };
    // btn.onmouseleave = () => {
    //   btn.style.background = 'initial';
    //   btn.style.cursor = 'pointer';
    //   btn.style.color = 'rgba(0,0,0,0.87)';
    // };

    elements[0].appendChild(btn);
    // const childrens = [...elements[0].childNodes];
    // childrens.forEach((child) => {
    //   // eslint-disable-next-line
    //   child.style.height = '10px';
    // });
  }

  render() {
    const { closeModal } = this.props;
    return (
      <div className={styles.calendarContainer}>
        <div
          className={styles.backgroundShadow}
          onClick={closeModal}
          onKeyDown={() => {}}
          role="tab"
          tabIndex={0}
        />
        <BigCalendar
          className={styles.calendar}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView={BigCalendar.Views.MONTH}
        />
        <br />
      </div>
    );
  }
}

export default CalendarSchedule;
