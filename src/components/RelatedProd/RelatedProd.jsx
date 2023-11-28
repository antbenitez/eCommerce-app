import React, { useRef } from "react";
import "./RelatedProd.css";
import productsData from "../../assets/products.json";
import "../../assets/fonts.css";

const RelatedProd = () => {
  const Stars = 5;
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 250;
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 250;
  };

  return (
    <div className="horizontal-scroll-container">
      <button className="nav" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="scroll-content" ref={containerRef}>
        <div className="related-products">
          {productsData.map(({ id, image, name, price, discount, score }) => (
            <div key={id} className="related-item">
              <img src={image} alt={name} className="related-img"></img>
              <div className="related-content">
                <div>
                  <span className="related-price">${price}</span>{" "}
                  <span className="related-discount">
                    -{discount}% <img src={"/img/sale.png"} alt="Icon" />
                  </span>
                </div>
                <div className="related-score">
                  {Array.from({ length: Stars }).map((_, index) => (
                    <span
                      key={index}
                      className={`icon-star ${
                        index < score ? "icon-star-full" : "icon-star-empty"
                      }`}
                    ></span>
                  ))}
                </div>
                <h2 className="related-title">{name}</h2>
                <button className="button-with-icon">
                  Agregar
                  <img src={"/img/shopping-cart.png"} alt="Icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="nav" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default RelatedProd;
