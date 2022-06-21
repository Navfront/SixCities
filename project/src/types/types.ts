export type Place = {
  id: string,
  placeName: string,
  location: string,
  type: string,
  priceValue: number,
  priceText: string,
  mark: string,
  imageURL: string,
  isBookmarked: boolean,
  rating: number,
  link: string,
}

export type PlacesByLocationType = {
  [propName: string]: Place[]
}

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
  points: Point[];
};

export type Point = {
  id: string;
  lat: number;
  lng: number;
};
