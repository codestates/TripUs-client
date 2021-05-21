import React from "react";
import styled from "styled-components";

import LongDropdownMenu from "./LongDropdownMenu";
import ShortDropDownMenu from "./ShortDropdownMenu";

const DropdownContainer = styled.div`
  position: absolute;
  top: 75px;
  height: 300px;
  min-width: 120px;
  border-radius: 4px;
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

const Dropdown = () => {
  return (
    <DropdownContainer>
      <DropdownListContainer>
        <ShortDropDownMenu />
        <LongDropdownMenu />
      </DropdownListContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
