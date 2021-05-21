import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

const LogoWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 100%;

  img {
    height: 1.5rem;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/" style={{ outline: "none" }}>
        <img src={logo} alt="TripUs logo" />
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
