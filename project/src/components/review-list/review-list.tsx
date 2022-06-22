import ReviewsForm from './../reviews-form/rewievs-form';
import { useState } from 'react';
import { REVIEWS } from '../../mocks/reviews';
import ReviewItem from './../review-item/review-item';

type ReviewListProps = {
  placeId: string
}

function ReviewList({ placeId }: ReviewListProps): JSX.Element{

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reviews, setReviews] = useState(REVIEWS[placeId] || null);


  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length || 0}</span>
      </h2>
      <ul className="reviews__list">
        {reviews && reviews.length>0 && reviews.map((review) => <ReviewItem review={review} key={review.id} />)}
      </ul>
      <ReviewsForm />
    </section>
  );
}

export default ReviewList;
