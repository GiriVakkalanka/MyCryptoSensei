import { FETCH_REQUESTS } from '../actions/types';

export default function(
  state = { sentRequests: [], receivedRequests: [] },
  action
) {
  //console.log(action);
  switch (action.type) {
    case FETCH_REQUESTS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
