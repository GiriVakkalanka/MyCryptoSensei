import {
  CHANGE_DATE,
  CHANGE_STARTTIME,
  CHANGE_ENDTIME,
  SAVE_WINDOW
} from '../actions/types';

export default function(state = {}, action) {
  //console.log(action);
  switch (action.type) {
    case CHANGE_DATE:
      const newState1 = state;
      newState1.date = action.payload;
      //console.log(newState1)
      return newState1;
    case CHANGE_STARTTIME:
      const newState2 = state;
      newState2.startTime = action.payload;
      //console.log(newState2);
      return newState2;
    case CHANGE_ENDTIME:
      const newState3 = state;
      newState3.endTime = action.payload;
      //console.log(newState3);
      return newState3;
    case SAVE_WINDOW:
      return state;
    default:
      return state;
  }
}
