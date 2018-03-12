import { SELECT_WINDOW } from '../actions/types';
//import { defaultState } from './defaultState.js';

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_WINDOW:
      return action.payload;
    default:
      return state;
  }
}
