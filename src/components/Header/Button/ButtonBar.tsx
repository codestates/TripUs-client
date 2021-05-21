import React from "react";
import styled from "styled-components";

// components
import { CTAButton, RegularButton } from "./Buttons";

const ButtonBarWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 810px) {
    display: none;
  }
`;

const ButtonBar = () => {
  return (
    <ButtonBarWrapper>
      <CTAButton to="/submit">모집글 작성</CTAButton>
      <RegularButton to="/list">모집글 목록</RegularButton>
      <RegularButton to="/about">서비스 소개</RegularButton>
    </ButtonBarWrapper>
  );
};

export default ButtonBar;
