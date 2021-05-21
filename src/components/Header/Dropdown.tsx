import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: absolute;
  top: 75px;
  height: 240px;
  min-width: 120px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  right: 0;
`;

const DropdownListContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: space-evenly;
  width: 100%;
`;

const DropdownItem = styled(Link)`
  font-weight: 400;
  padding-left: 16px;
  text-decoration: none;
  color: #000;
`;

const StyleBreak = styled.hr`
  margin: 0;
  padding: 0;
  border-style: ridge;
`;

const Dropdown = () => {
  return (
    <DropdownContainer>
      <DropdownListContainer>
        <DropdownList>
          <DropdownItem to="/profile">내 프로필</DropdownItem>
          <DropdownItem to="/account">내 계정</DropdownItem>
          <StyleBreak />
          <DropdownItem to="/my-posts">내 작성목록</DropdownItem>
          <DropdownItem to="/my-applications">내 신청목록</DropdownItem>
          <StyleBreak />
          <DropdownItem to="/signout">로그아웃</DropdownItem>
        </DropdownList>
      </DropdownListContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
