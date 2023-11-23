import React, { useState, useRef } from "react";
import "./PickList.css";
import arrowDownIcon from "../../assets/icons/arrow_drop_down.svg";
import checkIcon from "../../assets/icons/check.svg";
const DEFAULTOBJECT = [
  {
    label: "default",
    value: "default",
  },
];
const PickList = ({ options, helpText, placeholder, label = null }) => {
  /**TODO: Use the placeholder prop to refactor code and not use hardcode indexes */
  const [open, setOpen] = useState(false);
  const [allOptions, setAllOptions] = useState([
    Object.keys(DEFAULTOBJECT),
    ...options,
  ]);
  const itemRef = useRef([]);
  const firstItemRef = useRef(null);
  const [stateIndex, setIndex] = useState(0);
  function handleItemSelect(event, index) {
    setIndex(index);
    updateDom(itemRef.current[index].getAttribute("data-option"));
  }

  function hasLabel(labelItem) {
    return (
      labelItem && (
        <label style={{ position: "absolute" }} className="picklist-label">
          {label}
        </label>
      )
    );
  }

  function handleHoverOn(event, index) {
    itemRef.current[index].classList.add("checked");
  }

  function handleHoverOut(event, index) {
    itemRef.current[index].classList.remove("checked");
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
      <div className="wrapper">
        <div
          onClick={() => setOpen(!open)}
          className={`${open ? "div-is-visible" : ""} picklist-container`}
        >
          {hasLabel(label)}
          <ul className={open ? "picklist-opened" : "picklist-closed"}>
            <li>
              <a ref={firstItemRef}>{placeholder}</a>
              <img src={arrowDownIcon} className="picklist-arrow-icon"></img>
            </li>
            {allOptions.map((option, index) => {
              let tempOption = option;
              if (Number(option) === 0) {
                tempOption = placeholder;
              }
              return (
                <li
                  data-option={tempOption}
                  key={index}
                  onClick={(e) => handleItemSelect(e, index)}
                  ref={(el) => (itemRef.current[index] = el)}
                  onMouseOver={(event) => handleHoverOn(event, index)}
                  onMouseLeave={(event) => handleHoverOut(event, index)}
                >
                  <a>{tempOption}</a>
                  <img
                    src={checkIcon}
                    alt="checked icon"
                    className="picklist-done-icon"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={
            open ? "help-text-container opened" : "help-text-container"
          }
        >
          <p>{helpText}</p>
        </div>
      </div>
    </>
  );
};

export default PickList;
