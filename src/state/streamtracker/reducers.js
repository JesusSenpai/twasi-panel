import { combineReducers } from 'redux';
import types from './types';

export const initialState = {
  isLoaded: false,
  streamtracker: [],
  isDisabled: false
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_STREAMTRACKER: {
      return { ...state, isLoaded: true, isDisabled: false, streamtracker: action.streamtracker };
    }
    case types.UPDATE_DISABLED: {
      return { ...state, isDisabled: action.isDisabled };
    }
    default:
      return state;
  }
};

export default combineReducers({
  streamtracker: statusReducer
});
