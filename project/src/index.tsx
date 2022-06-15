import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

type Place = {
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
    name: `Beautiful & luxurious apartment at great location`,
    type: 'Apartment',
    priceValue: 120,
    priceText: 'night',
    mark: 'Premium',
    imageURL: 'img/apartment-01.jpg',
    isBookmarked: Boolean(Math.round(Math.random())),
    rating: Math.round(Math.random() * 100),
    link: '#'
  }

]


ReactDOM.render(
  <React.StrictMode>
    <App places={PLACES} />
  </React.StrictMode>,
  document.getElementById('root'),
);
