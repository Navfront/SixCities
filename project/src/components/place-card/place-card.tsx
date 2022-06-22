import { Place } from '../../types/types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Endpoints } from '../../const/consts';

const BOOKMARK_DEFAULT_CLASS = 'place-card__bookmark-button button';
const BOOKMARK_CLASS_ACTIVE = 'place-card__bookmark-button--active';
const BookmarkText = {
  TO_BOOKMARKS: 'To bookmarks',
  IN_BOOKMARKS: 'In bookmarks',
};
const PlaceCardClasses = {
  cities: {
    card: 'cities__place-card',
    imageWrapper: 'cities__image-wrapper',
  },
  nearPlaces: {
    card: 'near-places__card',
    imageWrapper: 'near-places__image-wrapper',
  },
};

type PlaceCardProps = {
  place: Place,
  onMouseEnterHandler: (placeId: string) => void,
  isMainPage: boolean,
}

function PlaceCard({ place, onMouseEnterHandler, isMainPage }: PlaceCardProps): JSX.Element {
  const [isBookmarked, setIsBookmarked] = useState(place.isBookmarked);

  return (
    <article className={`${isMainPage? PlaceCardClasses.cities.card : PlaceCardClasses.nearPlaces.card} place-card`}
      onMouseEnter={onMouseEnterHandler.bind(null, place.id)}
    >
      {place.mark ?
        (<div className="place-card__mark"><span>{place.mark}</span></div>)
        :
        ''}

      <div className={`${isMainPage? PlaceCardClasses.cities.imageWrapper : PlaceCardClasses.nearPlaces.imageWrapper} place-card__image-wrapper`}>
        <Link to={`${Endpoints.OfferPage}?${place.id}`}>
          <img className="place-card__image" src={place.imageURL || ''} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.priceValue || '0'}</b>
            <span className="place-card__price-text">&#47;&nbsp;{place.priceText || 'night'}</span>
          </div>
          <button className={isBookmarked ? `${BOOKMARK_DEFAULT_CLASS} ${BOOKMARK_CLASS_ACTIVE}` : BOOKMARK_DEFAULT_CLASS} type="button" onClick={()=>{setIsBookmarked(!isBookmarked);}}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isBookmarked ? BookmarkText.IN_BOOKMARKS : BookmarkText.TO_BOOKMARKS}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={place.rating ? { width: `${place.rating}%` } : { width: 0 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{place.description || 'No description'}</a>
        </h2>
        <p className="place-card__type">{place.type || 'Unknown'}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
