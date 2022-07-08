import { CurrentCity } from '../types/types';
import { ActionType, ChangeCityAction, ChangeSortAction } from './action-types';

export const changeCurrentCityAction = (payload: CurrentCity): ChangeCityAction => ({ type: ActionType.changeCurrentCity, payload });

export const changeCurrentSortAction = (payload: number): ChangeSortAction  => ({type: ActionType.changeCurrentSort, payload});
