import React from 'react';
import ReactDOM from 'react-dom';
import uniqid from 'uniqid';
import App from './components/app/app';

type Place = {
  id: string,
  name: string,
  type: string,
  priceValue: number,
  priceText: string,
  mark: string,
  imageURL: string,
  isBookmarked: boolean,
  rating: number,
  link: string,
}

const PLACES: Place[] = [
  {
    id: uniqid(),
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    priceValue: 120,
    priceText: 'night',
    mark: 'Premium',
    imageURL: 'img/apartment-01.jpg',
    isBookmarked: Boolean(Math.round(Math.random())),
    rating: Math.round(Math.random() * 100),
    link: '#',
  },
  {
    id: uniqid(),
    name: 'Wood and stone place',
    type: 'Private room',
    priceValue: 80,
    priceText: 'night',
    mark: '',
    imageURL: 'img/room.jpg',
    isBookmarked: Boolean(Math.round(Math.random())),
    rating: Math.round(Math.random() * 100),
    link: '#',
  },
  {
    id: uniqid(),
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    priceValue: 132,
    priceText: 'night',
    mark: '',
    imageURL: 'img/apartment-02.jpg',
    isBookmarked: Boolean(Math.round(Math.random())),
    rating: Math.round(Math.random() * 100),
    link: '#',
  },
  {
    id: uniqid(),
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    priceValue: 80,
    priceText: 'night',
    mark: 'Premium',
    imageURL: 'img/apartment-03.jpg',
    isBookmarked: Boolean(Math.round(Math.random())),
    rating: Math.round(Math.random() * 100),
    link: '#',
  },
  {
    id: uniqid(),
    name: 'Wood and stone place',
    type: 'Private room',
    priceValue: 80,
    priceText: 'night',
    mark: '',
    imageURL: 'img/room.jpg',
    isBookmarked: Boolean(Math.round(Math.random())),
    rating: Math.round(Math.random() * 100),
    link: '#',
  },
];


ReactDOM.render(
  <React.StrictMode>
    <App places={PLACES} />
  </React.StrictMode>,
  document.getElementById('root'),
);
