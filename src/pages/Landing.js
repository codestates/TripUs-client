import React from "react";

import MainSection from "../components/Landing/MainSection";
import RecommendationSection from "../components/Landing/RecommendationSection";
import LeaderSection from "../components/Landing/LeaderSectionNew";
import GuideSection from "../components/Landing/GuideSection";

const LandingPage = () => {
  return (
    <>
      <MainSection />
      <RecommendationSection type="recommendation" size="4" />
      <LeaderSection />
      <RecommendationSection type="travelCategory" size="3" />
      <GuideSection />
    </>
  );
};

export default LandingPage;
