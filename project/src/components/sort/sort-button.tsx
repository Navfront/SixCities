
type SortButtonProps = {
  currentSort: string;
  onClickHandler: () => void;
}

function SotrButton({currentSort, onClickHandler}:SortButtonProps): JSX.Element {

  return (
    <span className="places__sorting-type" tabIndex={0} onClick={()=>{onClickHandler();}}>
      {currentSort}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
  );
}

export default SotrButton;
