import React from "react";

const ProductRating = ({ rating, reviews }) => {
  return (
    <div className="mavo-producet-rating mavo-mb-15">
      {[...Array(5)].map((_, index) => (
        <i key={index} className="flaticon-star-1"></i>
      ))}
      <span className="reviews">{reviews} Reviews</span>
    </div>
  );
};

export default ProductRating;
