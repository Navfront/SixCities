import { MouseEvent } from 'react';
import { Location } from '../../types/types';

type LocationsProps = {
  cities: Location[],
  activeId: string,
  onCityClickHandler: (cityId: string) => void,
}

function Locations({ cities, activeId, onCityClickHandler }: LocationsProps): JSX.Element {

  const onClickHandler = (event: MouseEvent, cityid: string) => {
    event.preventDefault(); // WIP
    onCityClickHandler(cityid);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={`key-${city.id}`}>
              <a className={'locations__item-link tabs__item'.concat(` ${city.id === activeId ? 'tabs__item--active' : ''}`)} href={city.url} onClick={(evt) => { onClickHandler(evt, city.id); }}>
                <span>{city.cityName}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Locations;
