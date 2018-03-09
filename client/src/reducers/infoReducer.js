import {
  CHANGE_CITY,
  CHANGE_COUNTRY,
  CHANGE_DESCRIPTION
} from '../actions/types';
//import { defaultState } from './defaultState.js';

export default function(
  state = { city: '', country: '', description: '' },
  action
) {
  switch (action.type) {
    case CHANGE_CITY:
      const newState = state;
      newState.city = action.payload.city;
      return newState;
    case CHANGE_COUNTRY:
      const newState2 = state;
      newState2.country = action.payload.country;
      return newState2;
    case CHANGE_DESCRIPTION:
      const newState3 = state;
      newState3.description = action.payload.description;
      return newState3;
    default:
      return state;
  }
}
