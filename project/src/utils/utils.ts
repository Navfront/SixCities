import { Place, PlacesByLocationType } from '../types/types';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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

export const humanizeDateToYM = (date: Date): string => `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;


export const sortPlaces = (sortIndex: number, places: Place[]): Place[] => {
  switch (sortIndex) {
    case 1:
      return places.sort((a, b) => a.priceValue - b.priceValue);
    case 2:
      return places.sort((a, b) => b.priceValue - a.priceValue);
    case 3:
      return places.sort((a, b) => b.rating - a.rating);
    default:
      return places.sort((a, b) => Number(b.isBookmarked) - Number(a.isBookmarked));
  }
};
