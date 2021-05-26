import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  width: 30%;

  @media (max-width: 901px) {
    width: 100%;
  }
`;

const LandingCardSection = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    width: 100%;
    text-align: left;
  }

  cards {
    width: 100%;
  }
`;

export const 

const LandingPageCardSection = () => {
  return (
    <LandingCardSection>
      <h2></h2>
      <div className="cards"></div>
    </LandingCardSection>
  );
};

export default LandingPageCardSection;
