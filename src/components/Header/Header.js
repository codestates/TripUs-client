import React from "react";
import styled from "styled-components";

// styles
import { Header } from "../../styles/HeaderStyles";

const HeaderWrapper = styled.div`
  position: relative;
  height: 100%;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 700;
  margin: 0 auto;
  width: 75%;
`;

const HeaderComponent = ({ isLogin, dropdownOpen, openDropdown }) => {
  const handleClick = (e) => {
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
        />
      </HeaderWrapper>
    </Header>
  );
};

export default HeaderComponent;
