import { initialState } from '../index';
import { Actions, ActionType } from './action-types';


const mainReducer = (state = initialState, action: Actions): typeof initialState => {
  switch (action.type) {
    case ActionType.changeCurrentCity:
      return { ...state, currentCity: action.payload };
    case ActionType.changeCurrentSort:
      return {...state, currentSort: action.payload};
    default:
      return state;
  }
};

export default mainReducer;

