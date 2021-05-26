import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";
import DatePicker from "react-datepicker";

//서치바 전체 컴포 / 인풋전체 컴포 /  목적지 입력 / 가는날 / 오는날 / 동행종류 /  서치버튼
//목적지=가는날=오는날=동행종류 ==> 재사용 가능?
//동행종류는 라디오박스 상단에 위치

//들어가야할 상태
//1. onchange (인풋에 상태)
//2. 검색버튼 누르면 검색

const SearchWrapper = styled.div`
position: relative;
top: 100px;
left: 10px;
min-width: 60%;
width:60%;
height 200px;
margin: 0 auto;
font-weight: 700;
box-shadow: rgba(0,0,0,.172549) 0 6px 12px 0;
`;

const SearchBar = () => {
  return (
    <SearchWrapper>
      <InputBox></InputBox>
    </SearchWrapper>
  );
};
export default SearchBar;
