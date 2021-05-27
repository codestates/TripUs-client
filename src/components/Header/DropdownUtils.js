import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: absolute;
  top: 75px;
  min-width: 150px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
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
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  z-index: 999;
  padding-top: 8px;
  justify-content: space-evenly;
`;

const ShortDropdownList = styled(DropdownList)`
  height: 100%;
  @media (max-width: 901px) {
    display: none;
  }
`;

const LongDropdownList = styled(DropdownList)`
  @media (min-width: 900px) {
    display: none;
  }
`;

const DropdownItem = styled(Link)`
  font-weight: 400;
  padding: 16px;
  text-decoration: none;
  color: #000;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const StyleBreak = styled.hr`
  margin: 0;
  border-style: ridge;
`;

const LongDropdownMenu = ({ isLogin, setLogin }) => {
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
        <DropdownItem to="/">
          <p
            onClick={() => {
              localStorage.removeItem("accessToken");
              setLogin(false);
            }}
          >
            로그아웃
          </p>
        </DropdownItem>
      ) : (
        <>
          <DropdownItem to="/login">로그인</DropdownItem>
        </>
      )}
    </LongDropdownList>
  );
};

const ShortDropDownMenu = ({ isLogin, setLogin }) => {
  return (
    <ShortDropdownList>
      <DropdownItem to="/profile">내 프로필</DropdownItem>
      <DropdownItem to="/account">내 계정</DropdownItem>
      <StyleBreak />
      <DropdownItem to="/my-posts">내 작성목록</DropdownItem>
      <DropdownItem to="/my-applications">내 신청목록</DropdownItem>
      <StyleBreak />
      {isLogin ? (
        <DropdownItem to="/">
          <p
            onClick={() => {
              localStorage.removeItem("accessToken");
              setLogin(false);
            }}
          >
            로그아웃
          </p>
        </DropdownItem>
      ) : (
        <>
          <DropdownItem to="/login">로그인</DropdownItem>
        </>
      )}
    </ShortDropdownList>
  );
};

export const Dropdown = ({ isLogin, setLogin }) => {
  return (
    <DropdownContainer>
      <DropdownListContainer>
        <ShortDropDownMenu isLogin={isLogin} setLogin={setLogin} />
        <LongDropdownMenu isLogin={isLogin} setLogin={setLogin} />
      </DropdownListContainer>
    </DropdownContainer>
  );
};
