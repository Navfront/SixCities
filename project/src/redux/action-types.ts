import { CurrentCity } from '../types/types';
import { changeCurrentCityAction, changeCurrentSortAction } from './action-creators';


export type Actions =
  | ReturnType<typeof changeCurrentSortAction>
  | ReturnType<typeof changeCurrentCityAction>


export enum ActionType {
  changeCurrentCity = 'CHANGE_CURRENT_CITY',
  changeCurrentSort = 'CHANGE_CURRENT_SORT',
}


export type ChangeCityAction = {
    type: ActionType.changeCurrentCity,
    payload: CurrentCity
  }

export type ChangeSortAction = {
    type: ActionType.changeCurrentSort,
    payload: number
  }
