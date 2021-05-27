import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// utils
import { RegularButton, CTAButton } from "./HeaderUtils";
import { Dropdown } from "./DropdownUtils";

// styles
import { StyledHeader } from "../../styles/HeaderStyles";

// image
import logo from "../../images/logo.png";

export const Header = ({ isLogin, dropdownOpen, openDropdown, setLogin }) => {
  return (
    <StyledHeader>
      <div className="wrapper">
        <div className="logo">
          <Link to="/" style={{ outline: "none" }}>
            <img src={logo} alt="TripUs" />
          </Link>
        </div>
        <div className="navbar">
          <div className="links">
            <CTAButton href="/submit">모집글 작성</CTAButton>
            <RegularButton href="/list">모집글 목록</RegularButton>
            <RegularButton href="/about">서비스 소개</RegularButton>
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
      </div>
    </StyledHeader>
  );
};
