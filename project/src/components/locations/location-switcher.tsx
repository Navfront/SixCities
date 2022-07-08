
import { LOCATIONS } from '../../mocks/cities';
import { connect } from 'react-redux';
import { State } from '../..';
import { ChangeCityAction, changeCurrentCity, CurrentCity } from '../../redux/city-reducer';
import { Dispatch } from '@reduxjs/toolkit';
import { getLocationById } from './../../mocks/cities';

type CityClickHandler = (cityId: number) => void;

type LocationData = {
  locations: typeof LOCATIONS,
  currentLocation: CurrentCity,
  onCityClickHandler: CityClickHandler
}

type LocationSwitcherProps = {
  renderLocation: (locationsData: LocationData) => JSX.Element,
  currentCity: CurrentCity
  setCurrentCity: (payload: CurrentCity) => void
}

function LocationSwitcher({renderLocation, currentCity, setCurrentCity}: LocationSwitcherProps):JSX.Element {

  const onCityClickHandler : CityClickHandler = (cityId)=>{
    setCurrentCity({name: getLocationById(cityId), index: cityId});
  };

  return renderLocation({ locations: LOCATIONS, currentLocation: currentCity, onCityClickHandler });


}

const mapStateToProps = (state: State) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch: Dispatch<ChangeCityAction>) => ({
  setCurrentCity: (payload: CurrentCity) => {
    dispatch(changeCurrentCity(payload));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(LocationSwitcher);

