import React, { ContextType, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LongDropdownList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 8px;
  height: 100%;
  @media (min-width: 811px) {
    display: none;
  }
`;

const DropdownItem = styled(Link)`
  font-weight: 400;
  padding-left: 16px;
  text-decoration: none;
  color: #000;
`;

const StyleBreak = styled.hr`
  margin: 0;
  border-style: ridge;
`;

const LongDropdownMenu = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <LongDropdownList>
      <DropdownItem to="/profile">내 프로필</DropdownItem>
      <DropdownItem to="/account">내 계정</DropdownItem>
      <StyleBreak />
      <DropdownItem to="/submit">모집글 작성</DropdownItem>
      <DropdownItem to="/search">모집글 목록</DropdownItem>
      <StyleBreak />
      <DropdownItem to="/my-posts">내 작성목록</DropdownItem>
      <DropdownItem to="/my-applications">내 신청목록</DropdownItem>
      <StyleBreak />
      {isLogin ? (
        <DropdownItem to="/signout">로그아웃</DropdownItem>
      ) : (
        <>
          <DropdownItem to="/login">로그인</DropdownItem>
          <DropdownItem to="/signup">회원가입</DropdownItem>
        </>
      )}
    </LongDropdownList>
  );
};

export default LongDropdownMenu;
