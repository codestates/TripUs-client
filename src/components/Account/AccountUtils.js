import React from "react";
import { useField } from "formik";

import { InputWrapper } from "../../styles/RecruitmentStyles";

export const TextInput = (props) => {
  const [field, meta] = useField(props);
  const {
    width,
    handleConfirmClick,
    isEdited,
    LoadInfo,
    getUserInfo,
    email,
  } = props;

  return (
    <InputWrapper
      width={width}
      handleConfirmClick={handleConfirmClick}
      isEdited={isEdited}
      LoadInfo={LoadInfo}
      getUserInfo={getUserInfo}
    >
      <label htmlFor={props.id || props.name} className="main-label">
        {props.label}
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </label>
      <input
        className="main-input"
        {...field}
        type={props.type}
        id={props.id || props.name}
        placeholder={props.placeholder}
        disabled={!isEdited}
        value=""
      ></input>
    </InputWrapper>
  );
};

export const SelectBox = (props) => {
  const [field, meta] = useField(props);
  const { width } = props;

  return (
    <InputWrapper width={width}>
      <label htmlFor={props.id || props.name} className="main-label">
        {props.label}
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </label>
    </InputWrapper>
  );
};
