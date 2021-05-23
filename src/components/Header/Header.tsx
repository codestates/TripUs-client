import React, { MouseEvent } from "react";
import styled from "styled-components";

// components
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 100%;
  width: 100vw;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
`;

const HeaderWrapper = styled.div`
  position: relative;
  height: 100%;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 700;
  margin: 0 auto;
  width: 75%;
`;

const HeaderComponent = ({
  isLogin,
  dropdownOpen,
  openDropdown,
  openModal,
  setIsRightActive,
}: {
  isLogin: boolean;
  dropdownOpen: boolean;
  openDropdown: () => void;
  openModal: () => void;

  setIsRightActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    openDropdown();
  };

  return (
    <Header>
      <HeaderWrapper>
        <Logo />
        <NavBar
          isLogin={isLogin}
          dropdownOpen={dropdownOpen}
          handleClick={handleClick}
          openModal={openModal}
          setIsRightActive={setIsRightActive}
        />
      </HeaderWrapper>
    </Header>
  );
};

export default HeaderComponent;
