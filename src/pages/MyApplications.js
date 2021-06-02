import React from "react";
import { useHistory } from "react-router-dom";

import { Page, OuterWrapper, InnerWrapper } from "../styles/DefaultPageSetUp";
import {
  MyListsWrapper,
  ContentArea,
  SearchResultsWrapper,
  AdWrapper,
} from "../styles/MyListsStyles";

import MyPosts from "../components/MyLists/MyPosts";

const MyApplicationsPage = () => {
  const history = useHistory();
  let token = localStorage.getItem("accessToken");

  if (!token) {
    history.push("/login");
  }

  return (
    <Page color={"rgba(211,211,211,0.15)"}>
      <OuterWrapper>
        <InnerWrapper>
          <MyListsWrapper>
            <div className="title">내 신청 목록</div>
            <ContentArea>
              <SearchResultsWrapper>
                <MyPosts token={token} role={"applications"} />
              </SearchResultsWrapper>
              <AdWrapper>
                <img src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
              </AdWrapper>
            </ContentArea>
          </MyListsWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default MyApplicationsPage;