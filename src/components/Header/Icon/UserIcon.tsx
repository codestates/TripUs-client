import React from "react";
import styled from "styled-components";

import { FaUserCircle } from "react-icons/fa";

const UserIconWrapper = styled.div`
  @media (max-width: 901px) {
    display: none;
  }
`;

const UserIcon = () => {
  return (
    <UserIconWrapper>
      <FaUserCircle />
    </UserIconWrapper>
  );
};

export default UserIcon;
