import React from "react";

import Slogan from "../components/About/Slogan";
import Testimonial from "../components/About/Testimonial";
import Invite from "../components/About/Invite";
import Story from "../components/About/Story";

const AboutPage = () => {
  return (
    <>
      <Slogan />
      <Story type="first" />
      <Story type="second" />
      <Testimonial />
      <Invite />
    </>
  );
};

export default AboutPage;
