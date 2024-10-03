import React from 'react';

interface ReviewProps {
  author: string;
  content: string;
  rating: number;
}

const Review: React.FC<ReviewProps> = ({ author, content, rating }) => {
  return (
    <div className='review'>
      <h4>{author}</h4>
      <p>{content}</p>
      <p>Rating: {rating}/5</p>
    </div>
  );
};

export default Review;
