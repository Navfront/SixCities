type PlaceCardProps = {
  place: {
    id: string,
    name: string,
    type: string,
    priceValue: number,
    priceText: string,
    mark: string,
    imageURL: string,
    isBookmarked: boolean,
    rating: number,
    link: string,
  }
}

const BookmarkText = {
  TO_BOOKMARKS: 'To bookmarks',
  IN_BOOKMARKS: 'In bookmarks',
};
const BOOKMARK_DEFAULT_CLASS = 'place-card__bookmark-button button';
const BOOKMARK_CLASS_ACTIVE = 'place-card__bookmark-button--active';


function PlaceCard({ place }: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__place-card place-card">
      {place.mark ?
        (<div className="place-card__mark"><span>{place.mark}</span></div>)
        :
        ''}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={place.imageURL || ''} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.priceValue || '0'}</b>
            <span className="place-card__price-text">&#47;&nbsp;{place.priceText || 'night'}</span>
          </div>
          <button className={place.isBookmarked ? `${BOOKMARK_DEFAULT_CLASS} ${BOOKMARK_CLASS_ACTIVE}` : BOOKMARK_DEFAULT_CLASS} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{place.isBookmarked ? BookmarkText.IN_BOOKMARKS : BookmarkText.TO_BOOKMARKS}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={place.rating ? { width: `${place.rating}%` } : { width: 0 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{place.name || 'No description'}</a>
        </h2>
        <p className="place-card__type">{place.type || 'Unknown'}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
