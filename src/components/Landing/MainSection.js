import React from "react";
import styled from "styled-components";

import {
  Page,
  OuterWrapper,
  InnerWrapper,
} from "../../styles/DefaultPageSetUp";

import SearchBar from "../Common/SearchBar";

const IMG_URL =
  "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHwwfDB8Ymx1ZXw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

const MainSectionPage = styled(Page)`
  @media (max-width: 911px) {
    height: 100%;
  }

  @media (min-width: 911px) {
    height: 90%;
  }
`;

// section style
const MainSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;

  .title {
    color: #f5f5f5;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: calc(1.5rem + 1vw);

    @media (max-width: 911px) {
      font-size: calc(1rem + 1vw);
      margin-top: 2rem;
    }
  }
`;

// section
const MainSection = ({
  setDestination,
  setDepartureDate,
  setReturnDate,
  setTravelType,
}) => {
  return (
    <MainSectionPage background={IMG_URL}>
      <OuterWrapper>
        <InnerWrapper>
          <MainSectionWrapper>
            <div className="title">우리 같이 여행 갈까요?</div>
            <SearchBar
              fontColor={"#fff"}
              role="landing"
              setDestination={setDestination}
              setDepartureDate={setDepartureDate}
              setReturnDate={setReturnDate}
              setTravelType={setTravelType}
            />
          </MainSectionWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </MainSectionPage>
  );
};

export default MainSection;
