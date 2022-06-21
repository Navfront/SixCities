import { useState } from 'react';
import { Place } from '../../types/types';
import PlaceCard from './../place-card/place-card';


type PlaceListProps = {
  places: Place[],
  selectPoint: (point: string)=>void
}

function PlaceList({ places, selectPoint }: PlaceListProps): JSX.Element {
  const [activePlace, setActivePlace] = useState(places[0].id);


  const onMouseEnterHandler = (placeId:string) => {
    setActivePlace(placeId);

    // eslint-disable-next-line no-console
    console.log('enter');

    selectPoint(placeId);

    // WIP
    // eslint-disable-next-line no-console
    console.log('Активная карточка', activePlace);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((it) => <PlaceCard place={it} key={it.id} onMouseEnterHandler={onMouseEnterHandler} />)}
    </div>
  );
}

export default PlaceList;
