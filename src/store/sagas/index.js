import { put, all, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';

function transformEventsData(data) {
  const events = {};

  for (let index = 0; index < data.length; index++) {
    const event = data[index];
    const { when: { start_time } } = event;
    const eventDate = new Date(start_time * 1000);
    const year = eventDate.getFullYear();
    const month = eventDate.getMonth() + 1;
    const day = eventDate.getDate();

    if (!events[year]) {
      events[year] = {};
    }

    if (!events[year][month]) {
      events[year][month] = {};
    }

    if (!events[year][month][day]) {
      events[year][month][day] = [event];
    } else {
      events[year][month][day].push(event);
    }
  }

  return events;
}

function* fetchEventsAction() {
  try {
    const res = yield fetch('https://my-json-server.typicode.com/ThunderBoltEngineer/calendar-events/db');
    const { data } = yield res.json();
    
    yield put({
      type: actions.FETCH_EVENTS.SUCCESS,
      payload: transformEventsData(data),
    });
  } catch (err) {
    yield put({
      type: actions.FETCH_EVENTS.ERROR,
      payload: err,
    });
  }
}

export function* sagas() {
  yield all([
    takeLatest(actions.FETCH_EVENTS.START, fetchEventsAction)
  ]);
};
