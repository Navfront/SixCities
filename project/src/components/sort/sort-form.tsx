import SortList from './sorl-list';
import SotrButton from './sort-button';
import { useState } from 'react';
import { SORTS } from './../../mocks/sorts';
import { State } from '../..';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { ChangeSortAction } from '../../redux/action-types';
import { changeCurrentSortAction } from '../../redux/action-creators';


type SortProps = {
  currentSortIndex: number;
  setCurrentSort: (payload: number)=>void
}

function Sort({currentSortIndex, setCurrentSort} : SortProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  // const [currentSortIndex, setCurrentSortIndex] = useState(0);

  const onOpenClickHandler = () => {
    setIsOpened(!isOpened);
  };

  const onSortClickHandler = (index: number) => {
    if (index >= 0 && index < SORTS.length) {
      setCurrentSort(index);
      setIsOpened(false);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <SotrButton currentSort={SORTS[currentSortIndex]} onClickHandler={onOpenClickHandler}/>
      <SortList isOpened={isOpened} sorts={SORTS} activeSortIndex={currentSortIndex} onSortClickHandler={onSortClickHandler}  />
    </form>
  );
}

const mapStateToProps = (state: State) => ({
  currentSortIndex: state.currentSort,
});

const mapDispatchToProps = (dispatch: Dispatch<ChangeSortAction>) => ({
  setCurrentSort: (payload: number) => {
    dispatch(changeCurrentSortAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
