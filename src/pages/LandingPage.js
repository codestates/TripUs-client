import React from "react";
import styled from "styled-components";

import LandingPageCardSection from "../components/LandingPageCardSection";

const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 911px) {
    height: 50rem;
  }

  @media (max-width: 910px) {
    height: 100rem;
  }
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <LandingPageCardSection type="recommendation" />
      <LandingPageCardSection type="travelCategory" />
    </LandingPageWrapper>
  );
};

export default LandingPage;
