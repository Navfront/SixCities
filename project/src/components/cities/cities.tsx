import { useState } from 'react';
import Sort from './../sort/sort-form';
import PlaceList from './../place-list/place-list';
import Map from '../map/map';
import { Place } from '../../types/types';
import { State } from '../..';
import { connect } from 'react-redux';
import { CITIES } from './../../mocks/cities';

type CitiesProps = {
  places: Place[],
  currentLocationName: string
}


function Cities({ places, currentLocationName }: CitiesProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<string | undefined>(undefined);
  const isEmpty = places.length <= 0;

  const selectPoint = (pointId: string)=>{
    setSelectedPoint(pointId);
  };

  return !isEmpty?(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{places.length} places to stay in {currentLocationName}</b>
          <Sort />
          <PlaceList places={places} selectPoint={selectPoint} isMainPage></PlaceList>
        </section>
        <div className="cities__right-section">
          <Map city={CITIES[currentLocationName]} points={CITIES[currentLocationName].points} selectedPoint={selectedPoint} sectionClassName='cities__map'/>
        </div>
      </div>
    </div>
  ) : (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {currentLocationName}</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  currentLocationName: state.currentCity.name,
});


export default connect(mapStateToProps)(Cities);
