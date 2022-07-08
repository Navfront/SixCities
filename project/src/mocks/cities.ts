import { City, Location, Point } from '../types/types';

export const AMSTERDAM_POINTS: Point[] = [
  {
    id: 'l4ong0gk',
    lat: 52.39095539435081,
    lng: 4.85309666406198,
  },
  {
    id: 'l4onmyu3',
    lat: 52.369553943508,
    lng: 4.85309666406198,
  },
  {
    id: 'l4onn8u9',
    lat: 52.3909553943508,
    lng: 4.929309666406198,
  },
  {
    id: 'l4onmyu5',
    lat: 52.3809553943508,
    lng: 4.939309666406198,
  },
];

export const BRUSSELS_POINTS: Point[] = [];
export const COLOGNE_POINTS: Point[] = [];
export const DUSSELDORF_POINTS: Point[] = [];
export const HAMBURG_POINTS: Point[] = [];
export const PARIS_POINTS: Point[]= [];


export const AMSTERDAM: City = {
  title: 'Amsterdam',
  lat: 52.373057,
  lng: 4.892557,
  zoom: 12,
  points: AMSTERDAM_POINTS,
};

export const BRUSSELS: City = {
  title: 'Brussels',
  lat: 50.846697,
  lng: 4.352544,
  zoom: 11,
  points: BRUSSELS_POINTS,
};

export const COLOGNE: City = {
  title: 'Cologne',
  lat: 50.930779,
  lng: 6.938399,
  zoom: 11,
  points: COLOGNE_POINTS,
};

export const DUSSELDORF: City = {
  title: 'Dusseldorf',
  lat: 51.230569,
  lng: 6.787428,
  zoom: 11,
  points: DUSSELDORF_POINTS,
};

export const HAMBURG: City = {
  title: 'Hamburg',
  lat: 53.550688,
  lng: 9.992895,
  zoom: 11,
  points: HAMBURG_POINTS,
};

export const PARIS: City = {
  title: 'Paris',
  lat: 48.856663,
  lng: 2.351556,
  zoom: 11,
  points: PARIS_POINTS,
};

export const CITIES: { [key: string]: City}  = {
  'Paris': PARIS,
  'Cologne': COLOGNE,
  'Brussels': BRUSSELS,
  'Amsterdam': AMSTERDAM,
  'Hamburg': HAMBURG,
  'Dusseldorf': DUSSELDORF,
};

export const LOCATIONS: Location[] = [
  {
    id: 0,
    cityName: 'Paris',
    url: '/',
  },
  {
    id: 1,
    cityName: 'Cologne',
    url: '/',
  },
  {
    id: 2,
    cityName: 'Brussels',
    url: '/',
  },
  {
    id: 3,
    cityName: 'Amsterdam',
    url: '/',
  },
  {
    id: 4,
    cityName: 'Hamburg',
    url: '/',
  },
  {
    id: 5,
    cityName: 'Dusseldorf',
    url: '/',
  },
];

export const getLocationById = (id?: number): string => {
  const location = LOCATIONS.find((city) => city.id === id);
  if (location) {
    return location.cityName;
  }
  return LOCATIONS[0].cityName;
};

export const getIdByLocation = (cityName: string): number => {
  const location = LOCATIONS.find(((city) => city.cityName === cityName));
  if (location) {
    return location.id;
  }
  throw new Error('wrong Location name');
};
