import { CHANGE_RATE } from '../actions/types';
//import { defaultState } from './defaultState.js';

export default function(state = '', action) {
  switch (action.type) {
    case CHANGE_RATE:
      return action.payload;
    default:
      return state;
  }
}
