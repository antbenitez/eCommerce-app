import React from 'react';
import '../assets/fonts.css';

function Stars({ reviewData }) {
  const Stars = 5;

  return (
    <div className="stars">
        {Array.from({ length: Stars }).map((_, index) => (
        <span
            key={index}
            className={`icon-star ${index < reviewData.stars ? 'icon-star-full' : 'icon-star-empty'}`}
        ></span>
        ))}
    </div>
  );
}

export default Stars;