import { getPlacesByLocation, imageUrlToSmall, humanizeDateToYM, sortPlaces } from './utils';
import { PLACES } from './../mocks/offers';


test('PlacesByLocation works', () => {
  expect(getPlacesByLocation([])).toEqual({});
});

test('ImageUrlToSmall works', () => {
  expect(imageUrlToSmall('img/apartment-04.jpg')).toBe('img/apartment-small-04.jpg');
  expect(imageUrlToSmall('img/room.jpg')).toBe('img/room-small.jpg');
});

test('Humanize review date works', () => {
  expect(humanizeDateToYM(new Date('2023-04-15'))).toBe('April 2023');
});

test('SortPlaces Works', () => {
  expect(sortPlaces(1, PLACES)).toStrictEqual(PLACES);
});
