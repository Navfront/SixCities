import { Place } from '../../types/types';
import PlaceList from '../place-list/place-list';
import { useState } from 'react';
import Map from '../map/map';
import { AMSTERDAM, AMSTERDAM_POINTS} from '../../mocks/cities';
import LocationSwitcher from './../locations/location-switcher';
import Locations from './../locations/locations';
import Sort from './../sort/sort-form';


type MainPageProps = {
  places: Place[];
};

function MainPage({ places }: MainPageProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<string | undefined>(undefined);

  const selectPoint = (pointId: string)=>{
    setSelectedPoint(pointId);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="/">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <LocationSwitcher renderLocation={
          (locationsData) => <Locations cities={locationsData.locations} activeId={locationsData.currentLocation} onCityClickHandler={locationsData.onCityClickHandler} />
        }
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Sort />
              <PlaceList places={places} selectPoint={selectPoint} isMainPage></PlaceList>
            </section>
            <div className="cities__right-section">
              <Map city={AMSTERDAM} points={AMSTERDAM_POINTS} selectedPoint={selectedPoint} sectionClassName='cities__map'/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
