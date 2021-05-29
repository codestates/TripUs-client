import React from "react";

import SearchBar from "../components/SearchBar/SearchBarComponent";
import LandingPageCardSection from "../components/Landing/LandingPageCardSection";
import LeaderSection from "../components/Landing/LeaderSection";
import EnjoyTripUsSection from "../components/Landing/EnjoyTripUsSection";
import { LandingPageWrapper } from "../components/Landing/LandingPageCardSectionUtils";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <SearchBar />
      <LandingPageCardSection type="recommendation" />
      <LeaderSection />
      <LandingPageCardSection type="travelCategory" />
      <EnjoyTripUsSection />
    </LandingPageWrapper>
  );
};

export default LandingPage;
