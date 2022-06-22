import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import useMap from './../../hooks/use-map';
// import pinDefault from './img/pin.svg';
// import pinActive from './img/pin-active.svg';
import { City, Point } from '../../types/types';
import { useRef, useEffect } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from './../../const/consts';


type MapProps = {
  city: City;
  points: Point[];
  selectedPoint: string | undefined | null;
  sectionClassName: 'cities__map' | 'property__map';
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPoint, sectionClassName} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);
  return (
    <section className={`${sectionClassName} map`} ref={mapRef}>
    </section>
  );
}

export default Map;
