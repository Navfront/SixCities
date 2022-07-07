import { useState } from 'react';
import { PLACES } from './../../mocks/offers';
import { Place } from '../../types/types';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import { AMSTERDAM, AMSTERDAM_POINTS } from '../../mocks/cities';
import PlaceList from '../place-list/place-list';

const BOOKMARK_DEFAULT_CLASS = 'property__bookmark-button button';
const BOOKMARK_CLASS_ACTIVE = 'property__bookmark-button--active';
const BookmarkText = {
  TO_BOOKMARKS: 'To bookmarks',
  IN_BOOKMARKS: 'In bookmarks',
};

function PropertyPage(): JSX.Element {
  const placeId = window.location.search.slice(1);
  const findedPlace = PLACES.find((place) => place.id === placeId);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPlace, setCurrentPlace] = useState<Place|undefined>(findedPlace);
  const [isBookmarked, setIsBookmarked] = useState(currentPlace?.isBookmarked || false);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Photos-studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photos-studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Photos-studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Photos-studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Photos-studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photos-studio" />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentPlace?.description}
                </h1>

                <button className={isBookmarked ? `${BOOKMARK_DEFAULT_CLASS} ${BOOKMARK_CLASS_ACTIVE}` : BOOKMARK_DEFAULT_CLASS} type="button" onClick={()=>{setIsBookmarked(!isBookmarked);}}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{isBookmarked ? BookmarkText.IN_BOOKMARKS : BookmarkText.TO_BOOKMARKS}</span>
                </button>


              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${currentPlace?.rating}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">${String(currentPlace && currentPlace?.rating / 20)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  Apartment
                </li>
                <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentPlace?.priceValue}</b>
                <span className="property__price-text">&nbsp;{currentPlace?.priceText}</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">
                    Wi-Fi
                  </li>
                  <li className="property__inside-item">
                    Washing machine
                  </li>
                  <li className="property__inside-item">
                    Towels
                  </li>
                  <li className="property__inside-item">
                    Heating
                  </li>
                  <li className="property__inside-item">
                    Coffee machine
                  </li>
                  <li className="property__inside-item">
                    Baby seat
                  </li>
                  <li className="property__inside-item">
                    Kitchen
                  </li>
                  <li className="property__inside-item">
                    Dishwasher
                  </li>
                  <li className="property__inside-item">
                    Cabel TV
                  </li>
                  <li className="property__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>

              <ReviewList placeId={placeId} />


            </div>
          </div>

          {/* NEED DATA MODEL FOR MAP! WIP */}

          <Map city={AMSTERDAM} points={AMSTERDAM_POINTS.slice(0,3)} selectedPoint={'l4ong0gk'} sectionClassName={'property__map'}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceList places={PLACES.slice(0,3)} isMainPage={false} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
