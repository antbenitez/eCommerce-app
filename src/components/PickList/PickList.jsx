import React, { useState, useRef } from "react";
import "./PickList.css";

const PickList = ({ options, helpText, placeholder }) => {
  const [open, setOpen] = useState(false);
  const itemRef = useRef([]);
  const firstItemRef = useRef(null);
  const [stateIndex, setIndex] = useState(0);
  function handleItemSelect(event, index) {
    setIndex(index);
    updateDom(itemRef.current[index].getAttribute("data-option"));
  }

  function updateDom(content) {
    if (Number(content) === 0) {
      firstItemRef.current.innerHTML = "Default";
      return;
    }
    firstItemRef.current.innerHTML = content;
  }
  return (
    <>
      <section className="wrapper">
        <div
          onClick={() => setOpen(!open)}
          className={`${open ? "div-is-visible" : ""} picklist-container`}
        >
          <ul>
            <li>
              <a ref={firstItemRef}>Default</a>
            </li>
            <li
              data-option="0"
              ref={(el) => (itemRef.current[0] = el)}
              onClick={(e) => handleItemSelect(e, 0)}
            >
              <a>Default</a>
            </li>
            {options.map((option, index) => {
              return (
                <li
                  data-option={option}
                  key={index + 1}
                  onClick={(e) => handleItemSelect(e, index + 1)}
                  ref={(el) => (itemRef.current[index + 1] = el)}
                >
                  <a>{option}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <p>{helpText}</p>
      </section>
    </>
  );
};

export default PickList;
