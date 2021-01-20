import { useEffect } from 'react';
import { connect } from 'react-redux';
import Calendar from './components/Calendar';
import EventsPanel from './components/EventsPanel';

import { FETCH_EVENTS } from './store/actions';

function App({ showEventsPanel, fetchEvents }) {
  useEffect(() => {
    fetchEvents();
  }, []);
  
  return (
    <div className='App'>
      <Calendar />
      {
        showEventsPanel &&
        <EventsPanel />
      }
    </div>
  );
}

const mapStateToProps = ({ app: { showEventsPanel } }) => {
  return {
    showEventsPanel,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch({ type: FETCH_EVENTS.START }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
