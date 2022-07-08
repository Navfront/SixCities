import { initialState } from './../index';

enum ActionType {
  changeCurrentCity = 'CHANGE_CURRENT_CITY',
  changeCurrentSort = 'CHANGE_CURRENT_SORT',
}

export type CurrentCity = {
  name: string,
  index: number,
}

export type ChangeCityAction = {
  type: ActionType.changeCurrentCity,
  payload: CurrentCity
}

export type ChangeSortAction = {
  type: ActionType.changeCurrentSort,
  payload: number
}

// actionCreator
export const changeCurrentCity = (payload: CurrentCity): ChangeCityAction => ({ type: ActionType.changeCurrentCity, payload });

export const changeCurrentSort = (payload: number): ChangeSortAction  => ({type: ActionType.changeCurrentSort, payload});


// reducer
const cityReducer = (state = initialState, action: ChangeCityAction | ChangeSortAction): typeof initialState => {
  switch (action.type) {
    case ActionType.changeCurrentCity:
      return { ...state, currentCity: action.payload };
    case ActionType.changeCurrentSort:
      return {...state, currentSort: action.payload};
    default:
      return state;
  }
};

export default cityReducer;

