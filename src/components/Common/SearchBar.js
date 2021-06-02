import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

registerLocale("ko", ko);

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ced4da;
  padding: 2rem;
  color: ${(props) => (props.fontColor ? `${props.fontColor}` : "#373a3c")};
  background: ${(props) =>
    props.role === "landing" ? "rgba(255,255,255,0.3)" : "rgb(255,255,255)"};
  @media (max-width: 911px) {
    padding: 0.5rem;
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
  border-radius: 8px;
  min-height: 4rem;
  @media (max-width: 911px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (max-width: 911px) {
    width: 100%;
  }
  @media (min-width: 911px) {
    width: 24%;
  }

  label {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1.3;
    color: inherit;
  }

  input,
  select {
    width: 100%;
    height: 3rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.57142857;
    color: #495057;
    background-color: #fcfcfc;
    border: 1px solid #ced4da;
  }

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

      @media (max-width: 911px) {
        border-radius: 0;
      }
    }
  }

  .react-datepicker-ignore-onclickoutside {
    width: 100%;
  }
`;

const Input = ({ destination, setDestination }) => {
  return (
    <Wrapper>
      <label>목적지</label>
      <input
        type="text"
        onChange={(e) => {
          setDestination(e.target.value);
        }}
        placeholder="목적지"
        value={destination}
      />
    </Wrapper>
  );
};

const Calendar = ({ type, departureDate, returnDate, dateFunc }) => {
  const labels = { departure: "출발일", return: "귀국일" };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const LandingBtnStyle = css`
  border: none;
  color: #fff;
  background: rgb(24, 51, 79);

  &:hover {
    background: #495c72;
  }
`;

const SearchListBtnStyle = css`
  border: 1px solid rgba(47, 86, 187, 1);
  background: #fff;
  color: rgba(47, 86, 187, 1);

  &:hover {
    color: #fff;
    background: rgb(45, 224, 255);
    background: linear-gradient(
      90deg,
      rgba(45, 224, 255, 1) 0%,
      rgba(47, 86, 187, 1) 100%
    );
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  padding-left: 1rem;

  button {
    display: block;
    padding: 1rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    ${(props) =>
      props.role === "landing" ? LandingBtnStyle : SearchListBtnStyle};

    @media (max-width: 911px) {
      width: 100%;
    }

    @media (min-width: 911px) {
      width: 20%;
    }
  }
`;

const Button = ({ handleSubmit, role }) => {
  return (
    <ButtonWrapper role={role}>
      <button type="button" onClick={handleSubmit}>
        <i className="fas fa-search"></i>
      </button>
    </ButtonWrapper>
  );
};

const Select = ({ travelType, setTravelType }) => {
  const handleClick = (e) => {
    setTravelType(e.target.value);
  };

  return (
    <Wrapper>
      <label htmlFor="travelType">동행 종류</label>
      <select id="travelType" value={travelType} onChange={handleClick}>
        <option value="바로동행">바로동행</option>
        <option value="부분동행">부분동행</option>
        <option value="전체동행">전체동행</option>
      </select>
    </Wrapper>
  );
};

const SearchBar = ({
  fontColor,
  role,
  setDestination,
  setDepartureDate,
  setReturnDate,
  setTravelType,
}) => {
  const history = useHistory();

  // values that might(!) be assigned as search terms
  const [tempDestination, setTempDestination] = useState("");
  const [tempDepDate, setTempDepDate] = useState(null);
  const [tempRetDate, setTempRetDate] = useState(null);
  const [tempType, setTempType] = useState("now");

  const handleSubmit = (
    tempDepDate,
    tempRetDate,
    tempDestination,
    tempType
  ) => {
    setDestination(tempDestination);
    setDepartureDate(Date.parse(tempDepDate));
    setReturnDate(Date.parse(tempRetDate));
    setTravelType(tempType);

    setTempDestination("");
    setTempDepDate(null);
    setTempRetDate(null);
    setTempType("now");

    history.push(`/search`);
  };

  return (
    <SearchBarWrapper fontColor={fontColor} role={role}>
      <InputArea>
        <Input
          destination={tempDestination}
          setDestination={setTempDestination}
        />
        <Calendar
          type="departure"
          departureDate={tempDepDate}
          returnDate={tempRetDate}
          dateFunc={setTempDepDate}
        />
        <Calendar
          type="return"
          departureDate={tempDepDate}
          returnDate={tempRetDate}
          dateFunc={setTempRetDate}
        />
        <Select travelType={tempType} setTravelType={setTempType} />
      </InputArea>
      <Button
        role={role}
        handleSubmit={() => {
          handleSubmit(tempDepDate, tempRetDate, tempDestination, tempType);
        }}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
