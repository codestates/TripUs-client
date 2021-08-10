import React from "react";

import { OuterWrapper } from "../styles/DefaultPageSetUp";
import {
  StyledPage,
  StyledInnerWrapper,
  ResultsSection,
  SideBarSection,
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
    <StyledPage color={"rgba(211,211,211,0.15)"}>
      <OuterWrapper>
        <StyledInnerWrapper>
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
            <SearchList
              destination={destination}
              departureDate={departureDate}
              returnDate={returnDate}
              travelType={travelType}
            />
          </ResultsSection>
        </StyledInnerWrapper>
      </OuterWrapper>
    </StyledPage>
  );
};

export default SearchListPage;
