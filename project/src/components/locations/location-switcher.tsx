import { useState } from 'react';
import { LOCATIONS } from '../../mocks/citys';
import Locations from './locations';

function LocationSwitcher():JSX.Element {
  const [currentLocation, setCurrentLocation] = useState('3');

  return (
    <Locations cities={LOCATIONS} activeId={currentLocation} onCityClickHandler={(cityId)=>{
      setCurrentLocation(cityId);
    }}
    />);
}

export default LocationSwitcher;
