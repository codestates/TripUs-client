import React from "react";
import { InputWrapper } from "../../styles/AccountStyle";

const TextInput = (props) => {
  const handleChangeValue = (e) => {
    props.func(e.target.value);
  };

  return (
    <InputWrapper width={props.width} display={props.display}>
      <label htmlFor={props.id || props.name} className="main-label">
        {props.label}
      </label>
      <input
        className="main-input"
        type={props.type}
        id={props.id || props.name}
        placeholder={props.placeholder}
        disabled={!props.isEditable}
        value={props.value}
        onChange={handleChangeValue}
      ></input>
    </InputWrapper>
  );
};

export default TextInput;
