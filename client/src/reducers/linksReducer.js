import {
  CHANGE_LINKONE,
  CHANGE_LINKTWO,
  CHANGE_LINKTHREE
} from '../actions/types';
//import { defaultState } from './defaultState.js';

export default function(
  state = { linkOne: '', linkTwo: '', linkThree: '' },
  action
) {
  switch (action.type) {
    case CHANGE_LINKONE:
      const newState = state;
      newState.linkOne = action.payload.linkOne;
      return newState;
    case CHANGE_LINKTWO:
      const newState2 = state;
      newState2.linkTwo = action.payload.linkTwo;
      return newState2;
    case CHANGE_LINKTHREE:
      const newState3 = state;
      newState3.linkThree = action.payload.linkThree;
      return newState3;
    default:
      return state;
  }
}
