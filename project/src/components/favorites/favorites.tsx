import { Place } from '../../types/types';
import FavoritePlace from '../favorite-place/favorite-place';
import { getPlacesByLocation } from './../../utils/utils';

type FavoritePlacesType = {
  places: Place[]
}

function Favorites({places}: FavoritePlacesType): JSX.Element {

  const favoritePlaces = getPlacesByLocation(places);
  const locations = Object.keys(favoritePlaces);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">

        {locations && locations.length > 0 && locations.sort().map((value) =>(
          <li className="favorites__locations-items" key={value}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="/">
                  <span>{value}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {favoritePlaces[value].map((it) => <FavoritePlace place={it}  key={`favorite-${it.id}`}  />)}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}


export default Favorites;
