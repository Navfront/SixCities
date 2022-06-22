import { Place } from '../../types/types';
import PlaceCard from './../place-card/place-card';

const PlaceListClasses = {
  cities: 'cities__places-list',
  nearPlaces: 'near-places__list',
};

type PlaceListProps = {
  places: Place[],
  selectPoint?: (point: string) => void,
  isMainPage: boolean,
}

function PlaceList({ places, selectPoint, isMainPage }: PlaceListProps): JSX.Element {
  const onMouseEnterHandler = (placeId:string) => {
    selectPoint && selectPoint(placeId);
  };

  return (
    <div className={`${isMainPage? PlaceListClasses.cities : PlaceListClasses.nearPlaces} places__list tabs__content`}>
      {places.map((it) => <PlaceCard place={it} isMainPage={isMainPage} key={it.id} onMouseEnterHandler={onMouseEnterHandler} />)}
    </div>
  );
}

export default PlaceList;
