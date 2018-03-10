import { TOGGLE_DRAWER } from '../actions/types';

export default function(state = true, action) {
  //console.log(action);
  switch (action.type) {
    case TOGGLE_DRAWER:
      const newState = !state;
      return newState;
    default:
      return state;
  }
}
