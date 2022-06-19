import { imageUrlToSmall } from '../../utils/utils';
import { useState } from 'react';
import { Place } from '../../types/types';

const BOOKMARK_DEFAULT_CLASS = 'place-card__bookmark-button button';
const BOOKMARK_CLASS_ACTIVE = 'place-card__bookmark-button--active';
const BookmarkText = {
  TO_BOOKMARKS: 'To bookmarks',
  IN_BOOKMARKS: 'In bookmarks',
};

type FavoritePageType = {
  place: Place
}

function FavoritePlace({ place }: FavoritePageType): JSX.Element {
  const [isBookmarked, setIsBookmarked] = useState(place.isBookmarked);

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={imageUrlToSmall(place.imageURL)} width="150" height="110" alt="Place" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.priceValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;{place.priceText}</span>
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
          <a href="/">{place.placeName || 'No description'}</a>
        </h2>
        <p className="place-card__type">{place.type || 'Unknown'}</p>
      </div>
    </article>
  );
}

export default FavoritePlace;
