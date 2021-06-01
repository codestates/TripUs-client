import React from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

registerLocale("ko", ko);

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;

  label {
    padding-left: 0.65rem;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  label + * {
  }

  input {
    border: none;
  }

  select {
    border: none;
  }

  @media (max-width: 911px) {
    width: 100%;

    input {
      width: 100%;
    }

    select {
      width: 100%;
    }

    & + & {
      margin-top: 1rem;
    }
  }
`;

const DatePickerWrapper = styled(ComponentWrapper)`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    height: 100%;
    width: 100%;

    input {
      position: absolute;
      z-index: 0;
      width: 100%;
      outline: none;
      padding-left: 1.5rem;

      @media (max-width: 911px) {
        border-radius: 0;
      }
    }
  }

  .react-datepicker-ignore-onclickoutside {
    width: 100%;
  }
`;

export const DatePickerComponent = ({
  type,
  departureDate,
  returnDate,
  dateFunc,
}) => {
  return (
    <DatePickerWrapper>
      <DatePicker
        selected={type === "departure" ? departureDate : returnDate}
        onChange={(date) => dateFunc(date)}
        dateFormat="yyyy/MM/dd(eee)"
        minDate={
          type === "return" && departureDate ? departureDate : new Date()
        }
        placeholderText="날짜입력"
        locale="ko"
      />
    </DatePickerWrapper>
  );
};
