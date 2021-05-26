import React, { useState } from "react";
import styled from "styled-components";

const TravelSelectorContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: space-between;
  width: 50%;
  margin-top: 0px;
  padding: 0px;
`;

const RadioItem = styled.div`
  top: 20px;
  left: 100px;
  display: flex;
  position: relative;
  flex-direction: raw;
  height: 30px;
  width: 30%;
`;
const Label = styled.label`
  position: relative;
  display: flex;
  width: 35%;
  height: 15px;
  font-size: 0.8rem;
  background-color: ${(props) => props.color};
`;

const RadioButton = styled.input`
position: relative;
top:0px;
bottom:10px;
  opacity: 0.8;
  z-index: 99;
  border-radius: 50%;
  width: 10%;
  height: 15px;
  
  &:hover ~ ${RadioItem} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
`;
const RadioBoxComponent = () => {
  return (
    <TravelSelectorContainer>
      <RadioItem>
        <Label>부분동행</Label>
        <RadioButton type="radio" value="부분동행"></RadioButton>
      </RadioItem>
      <RadioItem>
        <Label>전체동행</Label>
        <RadioButton type="radio" value="전체동행"></RadioButton>
      </RadioItem>
      <RadioItem>
        <Label>당일동행</Label>
        <RadioButton type="radio" value="번개"></RadioButton>
      </RadioItem>
    </TravelSelectorContainer>
  );
};
export default RadioBoxComponent;
