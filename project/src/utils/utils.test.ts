import { getPlacesByLocation, imageUrlToSmall } from './utils';


test('PlacesByLocation works', () => {
  expect(getPlacesByLocation([])).toEqual({});
});

test('imageUrlToSmall works', () => {
  expect(imageUrlToSmall('img/apartment-04.jpg')).toBe('img/apartment-small-04.jpg');
  expect(imageUrlToSmall('img/room.jpg')).toBe('img/room-small.jpg');
});
