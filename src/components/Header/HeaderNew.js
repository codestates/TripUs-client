import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// utils
import { RegularButton, CTAButton } from "./HeaderUtils";
import { Dropdown } from "./DropdownUtils";

// image
import logo from "../../images/logo.png";

import {
  Page,
  OuterWrapper,
  InnerWrapper,
} from "../../styles/DefaultPageSetUp";

const HeaderWrapper = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 100%;
  position: relative;

  .logo {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    height: 100%;

    img {
      @media (max-width: 911px) {
        height: 1.3rem;
      }

      @media (min-width: 911px) {
        height: 2rem;
      }
    }
  }

  .navbar {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .links {
    display: flex;
    height: 100%;
    align-items: center;

    @media (max-width: 901px) {
      display: none;
    }
  }

  .icon {
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
  }

  .hamburger-icon {
    @media (min-width: 900px) {
      display: none;
    }
  }

  .user-icon {
    @media (max-width: 901px) {
      display: none;
    }
  }
`;

const Header = ({ isLogin, dropdownOpen, openDropdown, setLogin }) => {
  return (
    <Page height={10} zIndex={999}>
      <OuterWrapper>
        <InnerWrapper>
          <HeaderWrapper>
            <Link to="/" className="logo" style={{ outline: "none" }}>
              <img src={logo} alt="TripUs" />
            </Link>
            <div className="navbar">
              <div className="links">
                <CTAButton to="/submit">모집글 작성</CTAButton>
                <RegularButton to="/list">모집글 목록</RegularButton>
                <RegularButton to="/about">서비스 소개</RegularButton>
              </div>
              <div className="icon" onClick={openDropdown}>
                <div className="hamburger-icon">
                  <GiHamburgerMenu />
                </div>
                <div className="user-icon">
                  <FaUserCircle />
                </div>
                {dropdownOpen ? (
                  <Dropdown isLogin={isLogin} setLogin={setLogin} />
                ) : null}
              </div>
            </div>
          </HeaderWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default Header;
