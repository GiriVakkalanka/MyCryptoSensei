import { FETCH_NEW_APPLICATIONS } from '../actions/types';

export default function(state = [], action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_NEW_APPLICATIONS:
      return action.payload;
    default:
      return state;
  }
}
