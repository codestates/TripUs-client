import React from "react";

import { Page, OuterWrapper, InnerWrapper } from "./DefaultPageSetUp";
import {
  SearchPageWrapper,
  ResultsSection,
  SideBarSection,
} from "../styles/SearchListStyles";
import SearchList from "../components/SearchList/SearchList";

const SearchListPage = () => {
  return (
    <Page>
      <OuterWrapper>
        <InnerWrapper>
          <SearchPageWrapper>
            <SideBarSection>Sidebar</SideBarSection>
            <ResultsSection>
              <SearchList />
            </ResultsSection>
          </SearchPageWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default SearchListPage;
