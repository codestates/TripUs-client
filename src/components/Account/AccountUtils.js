import React from "react";
import { InputWrapper } from "../../styles/AccountStyle";

export const TextInput = (props) => {
  const { width, isEditable, getUserInfo } = props;

  const handleChangeValue = (e) => {
    props.func(e.target.value);
  };

  return (
    <InputWrapper
      width={width}
      getUserInfo={getUserInfo}
      display={props.display}
    >
      <label htmlFor={props.id || props.name} className="main-label">
        {props.label}
      </label>
      <input
        className="main-input"
        type={props.type}
        id={props.id || props.name}
        placeholder={props.placeholder}
        disabled={!isEditable}
        value={props.value}
        onChange={handleChangeValue}
      ></input>
    </InputWrapper>
  );
};
