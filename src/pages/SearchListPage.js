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

const SearchListPage = ({
  destination,
  departureDate,
  returnDate,
  travelType,
  setDestination,
  setDepartureDate,
  setReturnDate,
  setTravelType,
}) => {
  return (
    <Page color={"rgba(211,211,211,0.15)"} height={80}>
      <OuterWrapper>
        <InnerWrapper>
          <SearchPageWrapper>
            <SideBarSection>
              <SearchBar
                role="search"
                setDestination={setDestination}
                setDepartureDate={setDepartureDate}
                setReturnDate={setReturnDate}
                setTravelType={setTravelType}
              />
            </SideBarSection>
            <ResultsSection>
              <Cards>
                <SearchList
                  destination={destination}
                  departureDate={departureDate}
                  returnDate={returnDate}
                  travelType={travelType}
                />
              </Cards>
            </ResultsSection>
          </SearchPageWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default SearchListPage;
