import React from "react";
import styled from "styled-components";

import LandingPageCardSection from "../components/Landing/LandingPageCardSection";
import LeaderSection from "../components/Landing/LeaderSection";
import EnjoyTripUsSection from "../components/Landing/EnjoyTripUsSection";

const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 911px) {
    height: 100rem;
  }

  @media (max-width: 910px) {
    height: 200rem;
  }
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <LandingPageCardSection type="recommendation" />
      <LeaderSection />
      <LandingPageCardSection type="travelCategory" />
      <EnjoyTripUsSection />
    </LandingPageWrapper>
  );
};

export default LandingPage;
