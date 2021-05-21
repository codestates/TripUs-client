import React, { MouseEvent } from "react";
import styled from "styled-components";

import HamburgerIcon from "./HamburgerIcon";
import UserIcon from "./UserIcon";

import Dropdown from "../Dropdown/Dropdown";

const IconContainerWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0 0 0 16px;

  svg {
    fill: #3085d3;
    stroke: #3085d3;
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const IconContainer = ({
  dropdownOpen,
  handleClick,
}: {
  dropdownOpen: boolean;
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <IconContainerWrapper onClick={handleClick}>
      <HamburgerIcon />
      <UserIcon />
      {dropdownOpen ? <Dropdown /> : null}
    </IconContainerWrapper>
  );
};

export default IconContainer;
