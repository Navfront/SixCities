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
