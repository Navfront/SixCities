import { Review } from '../types/types';

type Reviews = {
  [propName: string]: Review[]
}

export const REVIEWS : Reviews = {
  'l4ong0gk': [
    {
      id: 'review-0',
      reviewerName: 'Max',
      imageUrl: 'img/avatar-max.jpg',
      rating: 80,
      message: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      date: new Date('2019-04-24'),
    },
    {
      id: 'review-1',
      reviewerName: 'Tom',
      imageUrl: 'img/avatar-max.jpg',
      rating: 50,
      message: 'The building is green and from 18th century. Lightness of Amsterdam.',
      date: new Date('2019-06-24'),
    },
  ],
};
