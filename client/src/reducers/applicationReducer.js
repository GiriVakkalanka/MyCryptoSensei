import { ADD_EXPERTISE, REMOVE_EXPERTISE } from '../actions/types';
//import { defaultState } from './defaultState.js';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_EXPERTISE:
      console.log(state);
      //const expertise = state;
      //expertise.push(action.payload);
      //console.log([...state, action.payload]);
      return [...state, action.payload];
    case REMOVE_EXPERTISE:
      const expertise = [...state];
      for (let i = 0; i < expertise.length; i++) {
        if (expertise[i] === action.payload) {
          return [...expertise.slice(0, i), ...expertise.slice(i + 1)];
        }
      }
      return state;
    default:
      //console.log(action.payload);
      return state;
  }
}
