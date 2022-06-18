import { Place, PlacesByLocationType } from '../types/types';

export const getPlacesByLocation = (places: Place[]): PlacesByLocationType => {
  const placesByLocation: PlacesByLocationType = {};
  if (places.length > 0) {
    for (const place of places) {
      const location = place.location;
      if (!placesByLocation[location]) {
        placesByLocation[location] = [];
      }
      placesByLocation[location].push(place);
    }
  }
  return placesByLocation;
};
