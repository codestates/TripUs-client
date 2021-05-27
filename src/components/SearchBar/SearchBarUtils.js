import React from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

registerLocale("ko", ko);

export const SearchBarSection = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  background-position: center;
  background-size: cover;

  .wrapper {
    display: flex;
    justify-content: center;
    height: 100%;
    @media (max-width: 911px) {
      width: 65%;
    }

    @media (min-width: 911px) {
      width: 75%;
    }
  }

  .position-wrapper {
    width: 90%;
    height: 100%;

    display: flex;
    align-items: center;
  }

  .searchBar-wrapper {
    width: 100%;
    height: 40%;
    background: rgba(255, 255, 255, 0.5);
    padding: 2rem 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;

    @media (max-width: 911px) {
      flex-direction: column;
      height: 60%;
    }
  }
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vh;
  width: 23%;

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
    width: 50%;
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
      width: 100%;
    }
  }

  .react-datepicker-ignore-onclickoutside {
    width: 100%;
  }
`;

const SelectWrapper = styled(ComponentWrapper)``;

export const InputBox = ({ destination, setDestination }) => {
  return (
    <ComponentWrapper>
      <label htmlFor="inputBox">여행지</label>
      <input
        type="text"
        value={destination}
        placeholder="여행지를 검색해보세요."
        onChange={(e) => setDestination(e.target.value)}
      />
    </ComponentWrapper>
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
        <option value="now">바로동행</option>
        <option value="part">부분동행</option>
        <option value="full">전체동행</option>
      </select>
    </SelectWrapper>
  );
};
