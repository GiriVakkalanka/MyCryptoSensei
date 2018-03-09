import { GET_SENSEI_PAGE } from '../actions/types';

export default function(state = {}, action) {
  //console.log(action);
  switch (action.type) {
    case GET_SENSEI_PAGE:
      return action.payload;
    default:
      return state;
  }
}
