import React, { MouseEvent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: absolute;
  top: 85px;
  height: 240px;
  min-width: 120px;
  border-radius: 4px;
`;

const DropdownListContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: space-evenly;
  width: 100%;
`;

const DropdownItem = styled.li`
  font-weight: 400;
  padding-left: 16px;
  a {
    text-decoration: none;
    color: #000;
  }
`;

const StyleBreak = styled.hr`
  margin: 0;
  padding: 0;
`;

const Dropdown = () => {
  return (
    <DropdownContainer>
      <DropdownListContainer>
        <DropdownList>
          <DropdownItem>
            <Link to="/profile">내 프로필</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/account">내 계정</Link>
          </DropdownItem>
          <StyleBreak />
          <DropdownItem>
            <Link to="/my-posts">내 작성목록</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/my-applications">내 신청목록</Link>
          </DropdownItem>
          <StyleBreak />
          <DropdownItem>
            <Link to="/signout">로그아웃</Link>
          </DropdownItem>
        </DropdownList>
      </DropdownListContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
