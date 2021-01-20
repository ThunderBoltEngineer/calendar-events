import { connect } from 'react-redux';
import { HIDE_EVENTS_PANEL } from '../store/actions';
import imgClose from '../assets/images/close.svg'

function Event({ event }) {
  const { title, status, participants, when: { start_time, end_time } } = event;
  
  const renderParticipants = () => (
    <div>
      <span>Participants: </span>
      {
        participants.map(({ name, email }, index) => (
          <a href={`mailto:${email}`} key={index}>{name}</a>
        ))
      }
    </div>
  );

  return (
    <div className='event-card'>
      <div>{`Title: ${title}`}</div>
      <div>{`Status: ${status}`}</div>
      <div>{`Start: ${new Date(start_time * 1000).toLocaleString()}`}</div>
      <div>{`End: ${new Date(end_time * 1000).toLocaleString()}`}</div>
      { renderParticipants() }
    </div>
  );
}

function EventsPanel({ events, selectedDate, hideEventsPanel }) {
  const { year, month, day } = selectedDate;
  const selectedEvents = events[year][month][day];

  const onClose = () => {
    hideEventsPanel();
  };

  return (
    <div className='events-panel'>
      <img className='btn-close' src={imgClose} alt='close' onClick={onClose} />
      <h3>{`-- ${year}/${month}/${day} --`}</h3>
      {
        selectedEvents.map((event, index) => (
          <Event key={index} event={event} />
        ))
      }
    </div>
  );
}

const mapStateToProps = ({ events: { events, selectedDate } }) => {
  return {
    events,
    selectedDate,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideEventsPanel: () => dispatch({ type: HIDE_EVENTS_PANEL }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsPanel);
