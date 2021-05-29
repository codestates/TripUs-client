import React from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

registerLocale("ko", ko);

const IMAGE_URL =
  "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHwwfDB8Ymx1ZXw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

export const SearchBarSection = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  background-image: url(${IMAGE_URL});
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.25);
  background-blend-mode: color;

  .wrapper {
    display: flex;
    justify-content: center;
    height: 100%;
    @media (max-width: 911px) {
      width: 90%;
    }

    @media (min-width: 911px) {
      width: 75%;
    }
  }

  .position-wrapper {
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: #fff;
      padding-left: 2rem;
      font-size: calc(1rem + 2vw);
      margin: 0;
      margin-bottom: 1rem;
      word-break: keep-all;
    }

    @media (max-width: 911px) {
      width: 100%;
    }
  }

  .searchBar-wrapper {
    width: 100%;
    background: rgba(0, 0, 0, 0.35);
    height: 30%;
    padding: 1.5rem 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;

    @media (max-width: 911px) {
      height: 70%;
      padding: 2rem 0.6rem;
      border-radius: 0;
    }
  }

  .searchBar {
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: center;

    @media (max-width: 911px) {
      flex-direction: column;
      height: 80%;
      width: 90%;
    }
  }

  .button-wrapper {
    margin-top: 1.1rem;
    width: 92%;
    display: flex;
    justify-content: flex-end;
    height: 2.5rem;

    @media (max-width: 911px) {
      margin-top: 0;
    }

    button {
      width: 25%;
      border: none;
      background: #fff;
      border-radius: 0.25rem;
      cursor: pointer;
      height: 100%;

      &:hover {
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
      }

      @media (max-width: 911px) {
        width: 100%;
        border-radius: 0;
      }
    }
  }
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 23%;
  label {
    padding-left: 0.65rem;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  label + * {
    height: 100%;
  }

  input {
    height: 100%;
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

const InputWrapper = styled(ComponentWrapper)`
  input {
    padding-left: 0.75rem;
    outline: none;
  }

  @media (min-width: 911px) {
    input {
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      border-right: 1px solid rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 911px) {
    input {
      border-radius: 0;
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
      width: 100%;
      padding-left: 0.75rem;
      outline: none;
      padding-left: 0.75rem;

      @media (min-width: 911px) {
        border-right: 1px solid rgba(0, 0, 0, 0.25);
      }

      @media (max-width: 911px) {
        border-radius: 0;
      }
    }
  }

  .react-datepicker-ignore-onclickoutside {
    width: 100%;
  }
`;

const SelectWrapper = styled(ComponentWrapper)`
  select {
    padding-left: 0.75rem;
    outline: none;
  }

  @media (min-width: 911px) {
    select {
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }

  @media (max-width: 911px) {
    select {
      border-radius: 0;
    }
  }
`;

export const InputBox = ({ destination, setDestination }) => {
  return (
    <InputWrapper>
      <label htmlFor="inputBox">여행지</label>
      <input
        type="text"
        value={destination}
        placeholder="여행지를 검색해보세요."
        onChange={(e) => setDestination(e.target.value)}
      />
    </InputWrapper>
  );
};

export const DatePickerComponent = ({
  type,
  departureDate,
  returnDate,
  dateFunc,
}) => {
  const labels = { departure: "출발일", return: "귀국일" };

  return (
    <DatePickerWrapper>
      <label>{labels[type]}</label>
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

export const SelectComponent = ({ travelType, setTravelType }) => {
  const handleClick = (e) => {
    setTravelType(e.target.value);
  };

  return (
    <SelectWrapper>
      <label htmlFor="travelType">동행 종류</label>
      <select id="travelType" value={travelType} onChange={handleClick}>
        <option value="바로동행">바로동행</option>
        <option value="부분동행">부분동행</option>
        <option value="전체동행">전체동행</option>
      </select>
    </SelectWrapper>
  );
};
