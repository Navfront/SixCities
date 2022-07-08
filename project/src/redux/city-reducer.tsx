import { initialState } from './../index';

enum ActionType {
  changeCurrentCity = 'CHANGE_CURRENT_CITY'
}

export type CurrentCity = {
  name: string,
  index: number,
}

export type ChangeCityAction = {
  type: ActionType.changeCurrentCity,
  payload: CurrentCity
}

// actionCreator
export const changeCurrentCity = (payload: CurrentCity): ChangeCityAction  => ({type: ActionType.changeCurrentCity, payload});


// reducer
const cityReducer = (state = initialState, action: ChangeCityAction): typeof initialState => {
  switch (action.type) {
    case ActionType.changeCurrentCity:
      return {...state, currentCity: action.payload };
    default:
      return state;
  }
};

export default cityReducer;

