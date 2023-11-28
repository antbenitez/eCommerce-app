import { useState } from "react";
import Remove from "../../assets/remove.svg";
import Add from "../../assets/add.svg";
import "./QuantitySelector.css";
import Button from "../Button/Button";
import "../Button/Button.css";

const QuantitySelector = ({ value }) => {
  const initialQuantity = value ? value : 0;
  const [quantity, setQuantity] = useState(initialQuantity);

  function increaseQuantityHandler() {
    setQuantity((prevState) => prevState + 1);
  }

  function decreaseQuantityHandler() {
    if (quantity === 0) return;

    setQuantity((prevState) => prevState - 1);
  }

  return (
    <div className="quantity-selector">
      <Button type="secondary" onClick={decreaseQuantityHandler}>
        <img src={Remove} />
      </Button>
      <input className="quantity" value={quantity} />
      <Button type="secondary" onClick={increaseQuantityHandler}>
        <img src={Add} />
      </Button>
    </div>
  );
};

export default QuantitySelector;
