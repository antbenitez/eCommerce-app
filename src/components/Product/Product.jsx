import React, { useRef, useState } from "react";
import "./Product.css";
import "../../assets/fonts.css";

const Product = (props) => {

    return (   
       <div key={props.id} className="related-item">
        <img src={props.image} alt={props.name} className="related-img"></img>
        <div className="related-content">
          <div>
            <span className="related-price">${props.price}</span>{" "}
            <span className="related-discount">
              -{props.discount}% <img src={"/img/sale.png"} alt="Icon" />
            </span>
          </div>
          <div className="related-score">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`icon-star ${
                  index < props.score ? "icon-star-full" : "icon-star-empty"
                }`}
              ></span>
            ))}
          </div>
          <h2 className="related-title">{props.name}</h2>
          <button className="button-with-icon">
            Agregar
            <img src={"/img/shopping-cart.png"} alt="Icon" />
          </button>
        </div>
      </div>
    );
};

export default Product;