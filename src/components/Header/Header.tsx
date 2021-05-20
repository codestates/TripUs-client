import React, { useState, MouseEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

// components
import Dropdown from "./Dropdown";

// images
import logo from "../../images/logo.png";
import UserDropdownMenu from "./Dropdown";

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  width: 100vw;
  height: 80px;
  border: 1px solid gray;
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 990px;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 700;
  margin: 0 auto;
`;

const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 100%;

  img {
    height: 36px;
  }
`;

const NavBar = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 450px;
  display: flex;
  justify-content: space-between;
`;

const NavLinks = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  :active,
  :focus,
  :link,
  :visited {
    text-decoration: none;
  }
`;

const CTABtn = styled(NavLink)`
  padding: 16px;
  color: #fff;
  border-radius: 4px;
  background: #3085d3;
`;

const Btn = styled(NavLink)`
  color: #3085d3;
  :active,
  :focus,
  :link,
  :visited {
    color: #3085d3;
  }
`;

const IconContainer = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    height: 28px;
    width: 28px;
    stroke: #3085d3;
    fill: #3085d3;
  }
`;

const HeaderComponent = ({
  dropdownOpen,
  openDropdown,
}: {
  dropdownOpen: boolean;
  openDropdown: () => void;
}) => {
  return (
    <Header>
      <Container>
        <NavLink to="/">
          <Logo>
            <img src={logo} alt="TripUs logo image" />
          </Logo>
        </NavLink>
        <NavBar>
          <NavLinks>
            <CTABtn to="/submit">모집글 작성</CTABtn>
            <Btn to="/list">모집글 목록</Btn>
            <Btn to="/about">서비스 소개</Btn>
          </NavLinks>
          <IconContainer onClick={openDropdown}>
            <FaUserCircle />
            {dropdownOpen ? <Dropdown /> : null}
          </IconContainer>
        </NavBar>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
