import React from "react";

import Slogan from "../components/About/Slogan";
import Testimonial from "../components/About/Testimonial";
import Invite from "../components/About/Invite";
import Story from "../components/About/Story";

const AboutPage = ({
  setDestination,
  setDepartureDate,
  setReturnDate,
  setTravelType,
}) => {
  return (
    <>
      <Slogan />
      <Story type="first" />
      <Story type="second" />
      <Testimonial />
      <Invite
        setDestination={setDestination}
        setDepartureDate={setDepartureDate}
        setReturnDate={setReturnDate}
        setTravelType={setTravelType}
      />
    </>
  );
};

export default AboutPage;
