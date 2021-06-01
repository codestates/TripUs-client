import React from "react";

import { Page, OuterWrapper, InnerWrapper } from "../styles/DefaultPageSetUp";
import {
  SearchPageWrapper,
  ResultsSection,
  SideBarSection,
  Cards,
} from "../styles/SearchListStyles";
import SearchList from "../components/SearchList/SearchList";
import SearchBar from "../components/Common/SearchBar";

const SearchListPage = () => {
  return (
    <Page color={"rgba(211,211,211,0.15)"} minHeight>
      <OuterWrapper>
        <InnerWrapper>
          <SearchPageWrapper>
            <SideBarSection>
              <SearchBar role="search" />
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
