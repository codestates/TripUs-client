import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShortDropdownList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 8px;

  @media (max-width: 901px) {
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

const DropdownButton = styled.div`
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
  padding: 0;
  border-style: ridge;
`;

const ShortDropDownMenu = ({
  isLogin,
  openModal,
  setIsRightActive,
}: {
  isLogin: boolean;
  openModal: () => void;
  setIsRightActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const openLogin = () => {
    setIsRightActive(false);
    openModal();
  };
  const openSignUp = () => {
    setIsRightActive(true);
    openModal();
  };
  return (
    <ShortDropdownList>
      <DropdownItem to="/profile">내 프로필</DropdownItem>
      <DropdownItem to="/account">내 계정</DropdownItem>
      <StyleBreak />
      <DropdownItem to="/my-posts">내 작성목록</DropdownItem>
      <DropdownItem to="/my-applications">내 신청목록</DropdownItem>
      <StyleBreak />
      {isLogin ? (
        <DropdownItem to="/signout">로그아웃</DropdownItem>
      ) : (
        <>
          <DropdownButton onClick={openLogin}>로그인</DropdownButton>
          <DropdownButton onClick={openSignUp}>회원가입</DropdownButton>
        </>
      )}
    </ShortDropdownList>
  );
};

export default ShortDropDownMenu;
