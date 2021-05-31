import React from "react";

import { Page, OuterWrapper, InnerWrapper } from "../styles/DefaultPageSetUp";
import {
  SearchPageWrapper,
  ResultsSection,
  SideBarSection,
  SideBarWrapper,
  Cards,
} from "../styles/SearchListStyles";
import SearchList from "../components/SearchList/SearchList";
import SearchBar from "../components/Common/SearchBar";

const SearchListPage = () => {
  return (
    <Page style={{ background: "rgba(211,211,211,0.15)" }}>
      <OuterWrapper>
        <InnerWrapper>
          <SearchPageWrapper>
            <SideBarSection>
              <SideBarWrapper>
                <SearchBar role="search" />
              </SideBarWrapper>
            </SideBarSection>
            <ResultsSection>
              <Cards>
                <SearchList />
              </Cards>
            </ResultsSection>
          </SearchPageWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default SearchListPage;
