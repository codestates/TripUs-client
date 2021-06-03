import React from "react";

import MainSection from "../components/Landing/MainSection";
import RecommendationSection from "../components/Landing/RecommendationSection";
import LeaderSection from "../components/Landing/LeaderSectionNew";
import GuideSection from "../components/Landing/GuideSection";

const LandingPage = ({
  setDestination,
  setDepartureDate,
  setReturnDate,
  setTravelType,
}) => {
  return (
    <>
      <MainSection
        setDestination={setDestination}
        setDepartureDate={setDepartureDate}
        setReturnDate={setReturnDate}
        setTravelType={setTravelType}
      />
      <RecommendationSection
        type="recommendation"
        size="4"
        setDestination={setDestination}
        setDepartureDate={setDepartureDate}
        setReturnDate={setReturnDate}
        setTravelType={setTravelType}
      />
      <LeaderSection />
      <RecommendationSection
        type="travelCategory"
        size="3"
        setDestination={setDestination}
        setDepartureDate={setDepartureDate}
        setReturnDate={setReturnDate}
        setTravelType={setTravelType}
      />
      <GuideSection
        setDestination={setDestination}
        setDepartureDate={setDepartureDate}
        setReturnDate={setReturnDate}
        setTravelType={setTravelType}
      />
    </>
  );
};

export default LandingPage;
