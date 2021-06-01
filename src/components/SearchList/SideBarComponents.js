import React from "react";
import styled from "styled-components";

// Input
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1.3;
    color: #373a3c;
  }

  input {
    width: 100%;
    height: 3rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.57142857;
    color: #495057;
    background-color: #fcfcfc;
    border: 1px solid #ced4da;
    border-radius: 5px;
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

export const Input = ({ destination, setDestination }) => {
  return (
    <InputBox>
      <label>목적지</label>
      <input
        type="text"
        onChange={(e) => {
          setDestination(e.target.value);
        }}
        placeholder="목적지"
        value={destination}
      />
    </InputBox>
  );
};
