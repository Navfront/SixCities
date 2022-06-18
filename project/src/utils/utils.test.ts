import { PLACES } from '../mocks/offers';
import { getPlacesByLocation } from './utils';


test('PlacesByLocation works', () => {
  expect(getPlacesByLocation(PLACES)).toHaveProperty('Amsterdam');
  expect(getPlacesByLocation([])).toEqual({});
});
