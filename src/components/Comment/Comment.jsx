import React from "react";
import "./Comment.css";
import "../../assets/fonts.css";

function Comment({ reviewData }) {
  const Stars = 5;

  return (
    <div className="comment">
      <div className="top">
        <div className="stars">
          {Array.from({ length: Stars }).map((_, index) => (
            <span
              key={index}
              className={`icon-star ${
                index < reviewData.stars ? "icon-star-full" : "icon-star-empty"
              }`}
            ></span>
          ))}
        </div>
        <h2 className="title">{reviewData.title}</h2>
      </div>
      <h3 className="date">{reviewData.date}</h3>
      <p className="text">{reviewData.text}</p>
    </div>
  );
}

export default Comment;
