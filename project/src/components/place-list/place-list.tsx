import { Place } from '../../types/types';
import PlaceCard from './../place-card/place-card';


type PlaceListProps = {
  places: Place[],
  selectPoint: (point: string)=>void
}

function PlaceList({ places, selectPoint }: PlaceListProps): JSX.Element {
  const onMouseEnterHandler = (placeId:string) => {
    selectPoint(placeId);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((it) => <PlaceCard place={it} key={it.id} onMouseEnterHandler={onMouseEnterHandler} />)}
    </div>
  );
}

export default PlaceList;
