import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { useField } from "formik";

import { InputWrapper } from "../../styles/AccountStyle";
registerLocale("ko", ko);

export const TextInput = (props) => {
  const [field, meta] = useField(props);
  const { width } = props;
  return (
    <InputWrapper width={width} display={props.display}>
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
      />
    </InputWrapper>
  );
};

export const SelectBox = (props) => {
  const [field, meta] = useField(props);
  const { width } = props;

  return (
    <InputWrapper width={width} display={props.display}>
      <label htmlFor={props.id || props.name} className="main-label">
        {props.label}
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </label>
      <select
        className="main-input"
        {...field}
        type={props.type}
        id={props.id || props.name}
        placeholder={props.placeholder}
      >
        <option value={"바로동행"}>바로동행</option>
        <option value={"부분동행"}>부분동행</option>
        <option value={"전체동행"}>전체동행</option>
      </select>
    </InputWrapper>
  );
};

export const Calendar = (props) => {
  const [field, meta] = useField(props);
  const { width } = props;

  return (
    <InputWrapper width={width} display={props.display}>
      <label htmlFor={props.id || props.name} className="main-label">
        {props.label}
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </label>

      <DatePicker
        className="main-input"
        {...field}
        id={props.id || props.name}
        placeholderText={props.placeholder}
        selected={
          props.role === "departure" ? props.departureDate : props.returnDate
        }
        onChange={(date) => props.dateFunc(date)}
        dateFormat="yyyy/MM/dd(eee)"
        minDate={
          props.role === "return" && props.departureDate
            ? props.departureDate
            : new Date()
        }
        autoComplete="off"
      />
    </InputWrapper>
  );
};

export const TextArea = (props) => {
  const [field, meta] = useField(props);
  const { width } = props;
  return (
    <InputWrapper width={width} display={props.display}>
      <label htmlFor={props.id || props.name} className="main-label">
        {props.label}
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </label>
      <textarea
        ref={props.ref}
        className="main-input"
        {...field}
        type={props.type}
        id={props.id || props.name}
        placeholder={props.placeholder}
      />
    </InputWrapper>
  );
};
