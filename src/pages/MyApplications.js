import React from "react";
import { useHistory } from "react-router-dom";

import { OuterWrapper } from "../styles/DefaultPageSetUp";
import { StyledPage, StyledInnerWrapper } from "../styles/MyListsStyles";

import MyLists from "../components/MyLists/MyLists";

const MyApplicationsPage = () => {
  const history = useHistory();
  let token = localStorage.getItem("accessToken");

  if (!token) {
    history.push("/login");
  }

  return (
    <StyledPage color={"rgba(211,211,211,0.15)"}>
      <OuterWrapper>
        <StyledInnerWrapper>
          <div className="title">내 신청 목록</div>
          <MyLists token={token} role={"applications"} />
        </StyledInnerWrapper>
      </OuterWrapper>
    </StyledPage>
  );
};

export default MyApplicationsPage;
