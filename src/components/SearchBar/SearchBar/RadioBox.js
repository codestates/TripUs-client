import React, { useState } from "react";
import styled from "styled-components";

const TravelSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 130px;
  margin-right: 30px;
  padding-left: 10px;

  word-break: keep-all;
  @media (max-width: 1200px) {
    width: 60%;
    height: 30%;
    flex-direction: column;
  } ;
`;

const RadioItem = styled.div`
  display: flex;
  height: 140px;
  width: 80%;
  padding-top: 10px;
`;
const Label = styled.label`
  display: flex;
  width: 100%;
  height: 10px;
  margin-bottom: 5px;
  font-size: 0.9rem;
  background-color: ${(props) => props.color};
`;

const RadioButton = styled.input`
  opacity: 0.8;
  z-index: 99;
  border-radius: 50%;
  width : 80px;
  height: 15px;
  padding-bottom:20px;
  
  &:hover ~ ${RadioItem} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
`;
export const RadioBox = () => {
  const [select, setSelect] = useState(null);
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };
  return (
    <TravelSelectorContainer>
      <RadioItem>
        <Label>부분 동행</Label>
        <RadioButton
          type="radio"
          value="부분동행"
          checked={select === "부분동행"}
          onChange={(event) => handleSelectChange(event)}
        ></RadioButton>
      </RadioItem>
      <RadioItem>
        <Label>전체 동행</Label>
        <RadioButton
          type="radio"
          value="전체동행"
          checked={select === "전체동행"}
          onChange={(event) => handleSelectChange(event)}
        ></RadioButton>
      </RadioItem>
      <RadioItem>
        <Label>당일 동행</Label>
        <RadioButton
          type="radio"
          value="당일동행"
          checked={select === "당일동행"}
          onChange={(event) => handleSelectChange(event)}
        ></RadioButton>
      </RadioItem>
    </TravelSelectorContainer>
  );
};
export default RadioBox;
