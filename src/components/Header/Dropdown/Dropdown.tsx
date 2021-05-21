import React from "react";
import styled from "styled-components";

import LongDropdownMenu from "./LongDropdownMenu";
import ShortDropDownMenu from "./ShortDropdownMenu";

const DropdownContainer = styled.div`
  position: absolute;
  top: 75px;
  height: 300px;
  min-width: 150px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  right: 0;

  @media (min-width: 811px) {
    height: 240px;
  }
`;

const DropdownListContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dropdown = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <DropdownContainer>
      <DropdownListContainer>
        <ShortDropDownMenu isLogin={isLogin} />
        <LongDropdownMenu isLogin={isLogin} />
      </DropdownListContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
