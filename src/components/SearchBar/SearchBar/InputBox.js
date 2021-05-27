import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { RadioBox } from "./RadioBox";
import DatePick_dep from "./DatePick_dep";
import DatePick_Arr from "./DatePick_Arr";
import {
  Container,
  Re_Wrapper,
  Re_SmallB,
  Re_SmallC,
  Re_SmallD,
  Re_DesInput,
  SearchBtn,
  Re_SmallE,
} from "./InputBoxUtils";
//목적지 //출발날짜 //도착날짜 //동행스타일
//목적지 input //출발날짜input //도착날짜input 동행스타일 // 버튼태그

export const InputBox = () => {
  return (
    <Container>
      <Re_Wrapper>
        <Re_SmallC>
          <p>목적지</p>
          <Re_DesInput placeholder="목적지를 입력해주세요"></Re_DesInput>
        </Re_SmallC>

        <Re_SmallB>
          <Re_SmallD>
            <p> 출발날</p>
            <DatePick_dep />
          </Re_SmallD>
          <Re_SmallD>
            <p> 도착날</p>
            <DatePick_Arr />
          </Re_SmallD>
          <Re_SmallD>
            <Re_SmallE>
              <RadioBox></RadioBox>
              <SearchBtn>
                <FaSearch></FaSearch>
              </SearchBtn>
            </Re_SmallE>
          </Re_SmallD>
        </Re_SmallB>
      </Re_Wrapper>
    </Container>
  );
};
export default InputBox;
