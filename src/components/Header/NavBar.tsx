import React, { MouseEvent } from "react";
import styled from "styled-components";

// components
import ButtonBar from "./Button/ButtonBar";
import IconContainer from "./Icon/IconContainer";

const NavBarWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavBar = ({
  isLogin,
  dropdownOpen,
  handleClick,
}: {
  isLogin: boolean;
  dropdownOpen: boolean;
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <NavBarWrapper>
      <ButtonBar />
      <IconContainer
        isLogin={isLogin}
        dropdownOpen={dropdownOpen}
        handleClick={handleClick}
      />
    </NavBarWrapper>
  );
};

export default NavBar;
