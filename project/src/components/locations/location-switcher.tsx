import { useState } from 'react';
import { LOCATIONS } from '../../mocks/cities';

type CityClickHandler = (cityId: string) => void;

type LocationData = {
  locations: typeof LOCATIONS,
  currentLocation: string,
  onCityClickHandler: CityClickHandler
}

type LocationSwitcherProps = {
  renderLocation: (locationsData: LocationData) => JSX.Element
}

function LocationSwitcher({renderLocation}: LocationSwitcherProps):JSX.Element {
  const [currentLocation, setCurrentLocation] = useState('3');

  const onCityClickHandler : CityClickHandler = (cityId)=>{
    setCurrentLocation(cityId);
  };

  return renderLocation({locations: LOCATIONS, currentLocation, onCityClickHandler});
}

export default LocationSwitcher;

