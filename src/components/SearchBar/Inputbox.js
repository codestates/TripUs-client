import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import RadioBox from "./RadioBox";
import DatePickerM from "./DatePickerM";
//목적지 //출발날짜 //도착날짜 //동행스타일
//목적지 input //출발날짜input //도착날짜input 동행스타일 // 버튼태그

const Container = styled.div`
  position: absolute;
  display: flex;
  top: 30px;
  left: 50px;
  min-width: 70%;
  width: 80%;
  height: 150px;
  margin: 0 auto;
  margin-left: 50px;
  box-shadow: rgba(0, 0, 0, 0.172549) 0 6px 12px 0;
  background-color: white;
  align-items: center;
  border-style: solid 1px black;
  border-radius: 1rem;
  font-size: 1rem;
`;

const Re_Wrapper = styled.div`
  display: flex;
  padding-left: 50px;
  width: 80%;
  display: flex;
  height: 150px;
  padding-top: 40px;
  border-style: solid 3px black;
`;
const Re_SmallC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const Re_Destination = styled.p`
  display: flex;
  top: 0px;
  left: 0px;
  padding-top: 5px;
  height: 20px;
  margin: 0 auto;
  border-style: solid 1px black;
`;

const Re_DesInput = styled.input`
  display:flex;
  top: 0px;
  bottom: 30px;
  min-width:40%
  width: 100%;
  height: 40px;
  border: 1px;
  background-color: white;
  text-align: start;
  cursor: text;
  padding: 1px 2px;
  border : .0625rem solid #b2b2bf;
  border-width: 2px;
  border-style: inset;
  border-radius: 0.6;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
`;

const Re_ArrivalDate = styled.p`
position: relative;
top: 0px;
left: 0px;
padding-top: 5px;
height: 20px;
margin: 0 auto;
background-color: 
border-style: solid 1px black;
`;

const Re_ArrivInput = styled.input`
position: relative;
  top: 0px;
  bottom: 30px;
  min-width:40%
  width: 100%;
  height: 40px;
  border: 1px;
  background-color: white;
  text-align: start;
  cursor: text;
  padding: 1px 2px;
  border : .0625rem solid #b2b2bf;
  border-width: 2px;
  border-style: inset;
  border-radius: 0.6;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  `;

const Re_DepartureDate = styled.p`
position: relative;
top: 0px;
left: 0px;
padding-top: 5px;
height: 20px;
margin: 0 auto;
background-color: 
border-style: solid 1px black;
`;

const Re_DeparInput = styled.input`
  top: 0px;
  bottom: 30px;
  min-width:40%
  width: 100%;
  height: 40px;
  border: 1px;
  background-color: white;
  text-align: start;
  cursor: text;
  padding: 1px 2px;
  border : .0625rem solid #b2b2bf;
  border-width: 2px;
  border-style: inset;
  border-radius: 0.6;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));`;

const SearchBtn = styled.button`
position:absolute;
  top:50px;
  right:70px;
  border-radius: 20%;
  width: 7%;
  height: 50px;
  margin-left:50px;
  border: none;
  background-color: rgba(57,150,255,1);
  cursor: pointer;
  svg {
    height: 32px;
    width: 32px;
    stroke: white;
    fill: white;
`;

const InputBox = () => {
  return (
    <Container>
      <RadioBox></RadioBox>
      <Re_Wrapper>
        <Re_SmallC>
          <p>목적지</p>
          <Re_DesInput placeholder="목적지를 입력해주세요"></Re_DesInput>
        </Re_SmallC>

        <Re_SmallC>
          <DatePickerM />
        </Re_SmallC>
        <Re_SmallC></Re_SmallC>
      </Re_Wrapper>
      <SearchBtn>
        <FaSearch></FaSearch>
      </SearchBtn>
    </Container>
  );
};
export default InputBox;
