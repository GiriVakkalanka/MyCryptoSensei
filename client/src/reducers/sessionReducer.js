import { FETCH_SESSIONS } from '../actions/types';

export default function(
  state = { requestedSessions: [], acceptedSessions: [] },
  action
) {
  //console.log(action);
  switch (action.type) {
    case FETCH_SESSIONS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
