import React, { useEffect, useState } from "react";
import Navigation from "./Navigation/Navigation";
import useInterval from "../../hooks/useInterval";
import "./Carousel.css";

const Carousel = ({ items, timingSlide = 5000, autoSlide = true }) => {
  const [currentItems, setCurrentItems] = useState({
    current: 0,
    total: items ? items.length - 1 : 0,
  });

  const nextSlide = () => {
    setCurrentItems((prevState) =>
      prevState.current === prevState.total
        ? { ...prevState, current: 0 }
        : { ...prevState, current: prevState.current + 1 }
    );
  };

  const resetInterval = useInterval(nextSlide, timingSlide, !autoSlide);

  const handlePrev = () => {
    setCurrentItems((prevState) => ({
      ...prevState,
      current:
        prevState.current === 0 ? prevState.total : prevState.current - 1,
    }));
    autoSlide && resetInterval();
  };

  const handleNext = () => {
    setCurrentItems((prevState) => ({
      ...prevState,
      current:
        prevState.current === prevState.total ? 0 : prevState.current + 1,
    }));
    autoSlide && resetInterval();
  };

  const handleSelectSlide = (item) => {
    setCurrentItems((prevState) => ({ ...prevState, current: item }));
    autoSlide && resetInterval();
  };

  return (
    <section className="carousel-container">
      <div className="carousel-items">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${
              currentItems.current == index ? "active-item" : ""
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
        ))}
      </div>
      <Navigation
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleSelectSlide={handleSelectSlide}
        currentItems={currentItems}
      />
    </section>
  );
};

export default Carousel;
