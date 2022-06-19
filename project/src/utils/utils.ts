import { Place, PlacesByLocationType } from '../types/types';

export const getPlacesByLocation = (places: Place[]): PlacesByLocationType => {
  const placesByLocation: PlacesByLocationType = {};
  if (places.length > 0) {
    for (const place of places) {
      const location = place.location;
      if (!placesByLocation[location] && place.isBookmarked) {
        placesByLocation[location] = [];
      }
      if (place.isBookmarked) {
        placesByLocation[location].push(place);
      }
    }
  }
  return placesByLocation;
};

export const imageUrlToSmall = (url: string): string => {
  let splited;
  let result;
  if (url.includes('-')) {
    splited = url.split('-');
    result = splited.slice(0, 1);
    result.push('small');
    result.push(splited[1]);
    return result.join('-');
  } else {
    splited = url.split('.');
    result = splited.slice(0, 1);
    result.push('-small.');
    result.push(splited[1]);
    return result.join('');
  }
};
