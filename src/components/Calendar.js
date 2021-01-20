import { connect } from 'react-redux';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';
import {
  daysInMonth,
  firstDayOfMonth,
  getCurrentMonth,
  getCurrentYear,
  weekdays,
} from '../utils/date';
import imgLeftArrow from '../assets/images/left-arrow.svg'
import imgRightArrow from '../assets/images/right-arrow.svg'
import { SELECT_EVENTS, SHOW_EVENTS_PANEL } from '../store/actions';

function Calendar({ events, selectEvents, showEventsPanel }) {
  const history = useHistory();
  const match = useRouteMatch('/:year/:month');
  const year = match ? parseInt(match.params.year) : getCurrentYear();
  const month = match ? parseInt(match.params.month) : getCurrentMonth();

  if (isNaN(year) || isNaN(month)) {
    return (
      <Redirect to='/' />
    );
  }

  const numberOfDaysInMonth = daysInMonth(year, month);
  const dayToBeginTheMonthFrom = firstDayOfMonth(year, month);
  const style = { gridColumnStart: dayToBeginTheMonthFrom + 1 };
  const days = Array.from({ length: numberOfDaysInMonth }, (_, index) => index + 1);

  const onPrevMonth = () => {
    const newYear = month > 1 ? year : year - 1;
    const newMonth = month > 1 ? month - 1 : 12;
    history.replace(`/${newYear}/${newMonth}`);
  };

  const onNextMonth = () => {
    const newYear = month < 12 ? year : year + 1;
    const newMonth = month < 12 ? month + 1 : 1;
    history.replace(`/${newYear}/${newMonth}`);
  };

  const onViewEvents = (day) => () => {
    selectEvents({
      year,
      month,
      day,
    });
    showEventsPanel();
  };

  const renderHeader = () => (
    <div className='calendar-header'>
      <img src={imgLeftArrow} alt='prev' onClick={onPrevMonth} />
      <h2>{`${year} / ${month}`}</h2>
      <img src={imgRightArrow} alt='next' onClick={onNextMonth} />
    </div>
  );

  const renderWeekdays = () => (
    <div className='calendar-weekdays'>
      {
        weekdays.map(weekday => (
          <span key={weekday}>
            {weekday}
          </span>
        ))
      }
    </div>
  );

  const renderGrid = () => (
    <div className='calendar-grid'>
      {
        days.map((day, index) => {
          const hasEvents = events[year] && events[year][month] && events[year][month][day];
          return (
            <div className='calendar-grid--cell' key={index} style={index === 0 ? style : {}}>
              <div className='calendar-grid--cell-day'>{day}</div>
                <div className={classNames('calendar-grid--cell-events', {'active': hasEvents})}>
                  {
                    hasEvents ?
                    <span onClick={onViewEvents(day)}>
                      {`${events[year][month][day].length} event(s)`}
                    </span>
                    :
                    `No events`
                  }
                </div>
            </div>
          );
        })
      }
    </div>
  );
  
  return (
    <div className='calendar'>
      { renderHeader() }
      { renderWeekdays() }
      { renderGrid() }
    </div>
  )
}

const mapStateToProps = ({ events: { events } }) => {
  return {
    events,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectEvents: (selected) => dispatch({ type: SELECT_EVENTS, payload: selected }),
    showEventsPanel: () => dispatch({ type: SHOW_EVENTS_PANEL }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
