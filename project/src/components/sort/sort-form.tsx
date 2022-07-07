import SortList from './sorl-list';
import SotrButton from './sort-button';
import { useState } from 'react';
import { SORTS } from './../../mocks/sorts';

function Sort(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const [currentSortIndex, setCurrentSortIndex] = useState(0);

  const onOpenClickHandler = () => {
    setIsOpened(!isOpened);
  };

  const onSortClickHandler = (index: number) => {
    if (index >= 0 && index < SORTS.length) {
      setCurrentSortIndex(index);
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

export default Sort;
