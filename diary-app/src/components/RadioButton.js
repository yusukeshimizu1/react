import "./Diary.css";
import Const from "../Const.js"
import React from "react";

const RadioButton = (props) => {
  
  return (
    <>
			<div className="diaryRadioButton">
        {Const.CONDITIONS.map((value, index) => {
          return (
					  <React.Fragment key={index}>
              <label key="_{index}">
                <input
                  type="radio"
                  key="input_{index}"
                  value={value}
                  checked={props.condition === value}
                  onChange={(e) => props.handleValueChange(e)}
                />
              </label>
					    <img key="img_{index}" src={value} with="40" height="40"></img>
					  </React.Fragment>
          );
        })}
			</div>
    </>
  );
};

export default RadioButton