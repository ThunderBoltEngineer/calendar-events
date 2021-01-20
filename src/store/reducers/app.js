import * as actions from '../actions';

const initialState = {
  showEventsPanel: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_EVENTS_PANEL:
      return {
        ...state,
        showEventsPanel: true,
      };
    case actions.HIDE_EVENTS_PANEL:
      return {
        ...state,
        showEventsPanel: false,
      }
    default:
      return {
        ...state,
      }
  }
};
