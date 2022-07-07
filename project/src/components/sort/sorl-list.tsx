const SORT_SHOW_CLASS = 'places__options--opened';
const SORT_ACTIVE_CLASS = 'places__option--active';

type SortListProps = {
  isOpened: boolean,
  sorts: string[],
  activeSortIndex: number,
  onSortClickHandler: (index: number) => void;
}

function SortList({ isOpened, sorts, activeSortIndex, onSortClickHandler }: SortListProps): JSX.Element {
  return (
    <ul className={`places__options places__options--custom ${isOpened ? SORT_SHOW_CLASS : ''}`}>
      {sorts.map((sort, index) =>
        <li key={sort} className={`places__option ${index === activeSortIndex ? SORT_ACTIVE_CLASS : ''}`} tabIndex={0} onClick={() => { onSortClickHandler(index); }}>{sort}</li>)}
    </ul>
  );
}

export default SortList;


