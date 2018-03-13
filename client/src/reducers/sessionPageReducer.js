import { GET_SESSION_PAGE } from '../actions/types';

export default function(state = {}, action) {
  //console.log(action);
  switch (action.type) {
    case GET_SESSION_PAGE:
      return action.payload;
    default:
      return state;
  }
}
