import React from "react";
import "./PickList.css";

function optionChangeHandler(event) {
  console.log("====================================");
  console.log(event.target.value);
  console.log("====================================");
}

const PickList = ({ options, helpText }) => {
  return (
    <>
      <span>
        <select
          name="customSelect"
          id="customSelect"
          onChange={optionChangeHandler}
        >
          <option value="default">Placeholder</option>
          {options.map((option, index) => {
            return (
              <option value={option} key={index}>
                {option}
              </option>
            );
          })}
        </select>
        <p>{helpText}</p>
      </span>
    </>
  );
};

export default PickList;
