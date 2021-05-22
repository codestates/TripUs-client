import React from "react";
import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerIconWrapper = styled.div`
  @media (min-width: 811px) {
    display: none;
  }
`;

const HamburgerIcon = () => {
  return (
    <HamburgerIconWrapper>
      <GiHamburgerMenu />
    </HamburgerIconWrapper>
  );
};

export default HamburgerIcon;
