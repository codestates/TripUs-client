import React from "react";
import { InputWrapper } from "../../styles/ProfileStyle";

export const TextInput = (props) => {
  const { isModified } = props;

  const handleChangeValue = (e) => {
    props.func(e.target.value);
  };

  return (
    <InputWrapper>
      <label htmlFor={props.id || props.name} className="main-label">
        {props.label}
      </label>
      <input
        className="main-input"
        type={props.type}
        id={props.id || props.name}
        placeholder={props.placeholder}
        disabled={!isModified}
        value={props.value}
        onChange={handleChangeValue}
      ></input>
    </InputWrapper>
  );
};
