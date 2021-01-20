import * as actions from '../actions';

const initialState = {
  events: {},
  selectedDate: {},
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_EVENTS.START:
      return {
        ...state,
        events: {},
        error: null,
        loading: true,
      };
    case actions.FETCH_EVENTS.SUCCESS:
      return {
        ...state,
        events: action.payload,
        error: null,
        loading: false,
      };
    case actions.FETCH_EVENTS.ERROR:
      return {
        ...state,
        events: {},
        error: action.payload,
        loading: false,
      }
    case actions.SELECT_EVENTS:
      return {
        ...state,
        selectedDate: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
};
