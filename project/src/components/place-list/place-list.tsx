import { State } from '../..';
import { Place } from '../../types/types';
import PlaceCard from './../place-card/place-card';
import { connect } from 'react-redux';
import { sortPlaces } from '../../utils/utils';
import { useMemo } from 'react';

const PlaceListClasses = {
  cities: 'cities__places-list',
  nearPlaces: 'near-places__list',
};

type PlaceListProps = {
  places: Place[],
  selectPoint?: (point: string) => void,
  isMainPage: boolean,
  currentSort: number,
}

function PlaceList({ places, selectPoint, isMainPage, currentSort }: PlaceListProps): JSX.Element {
  const onMouseEnterHandler = (placeId:string) => {
    selectPoint && selectPoint(placeId);
  };

  const sortedPlaces = useMemo(() => sortPlaces(currentSort, places), [currentSort, places]);


  return (
    <div className={`${isMainPage? PlaceListClasses.cities : PlaceListClasses.nearPlaces} places__list tabs__content`}>
      {sortedPlaces.map((it) => <PlaceCard place={it} isMainPage={isMainPage} key={it.id} onMouseEnterHandler={onMouseEnterHandler} />)}
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  currentSort: state.currentSort,
});

export default connect(mapStateToProps)(PlaceList);
