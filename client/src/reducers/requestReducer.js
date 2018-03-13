import { SUBMIT_REQUEST } from '../actions/types';

export default function(
  state = { sentRequests: [], receivedRequests: [] },
  action
) {
  //console.log(action);
  switch (action.type) {
    case SUBMIT_REQUEST:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
