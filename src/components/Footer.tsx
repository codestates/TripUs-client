import React from "react";
import styled from "styled-components";

//img
import { DiGithubBadge } from "react-icons/di";
//footer,serInfo ,nameLogoContainer, Name, githubLogo

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 100%;
  width: 100vw;
  height: 50px;
  border-top: none solid gray;
  background-color: rgba(198, 218, 237, 0.65);
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  color: rgba(87, 118, 148, 0.76);
`;

const Container = styled.div`
  position: relative;
  height: 60%;
  width: 80%;
  font-weight: 400;
  margin: 0 auto;
`;

const SerInfo = styled.p`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-start;
  margin_: 0;
  padding: 0;
  height: 100%;
`;

const GitNav = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 450px;
  display: flex;
  justify-content: flex-end;
`;

const NameLogoContainer = styled.div`
  position: absoulte;
  bottom: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const IconContainer = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  svg {
    height: 28px;
    width: 28px;
    stroke: #3085d3;
    fill: #3085d3;
  }
`;

const GithubLogo = styled.div`
svg {
    height: 28px;
    width: 28px;
    stroke: #3085d3;
    fill: #3085d3;`;

const FooterComponent = ({}: {}) => {
  return (
    <Footer>
      <Container>
        <SerInfo>©2021 Trip[Us].Inc Copyright for Team trip.us</SerInfo>
        <GitNav>
          <NameLogoContainer>
            Kim Wonho{" "}
            <IconContainer>
              <a href="https://github.com/Hodukim" target="_blank">
                <DiGithubBadge />
              </a>
            </IconContainer>
          </NameLogoContainer>

          <NameLogoContainer>
            Moon Hyundon{" "}
            <IconContainer>
              <a href="https://github.com/hyundonny" target="_blank">
                <DiGithubBadge />
              </a>
            </IconContainer>
          </NameLogoContainer>

          <NameLogoContainer>
            Lee Guenhwa{" "}
            <IconContainer>
              <a href="https://github.com/dlrmsghk09" target="_blank">
                <DiGithubBadge />
              </a>
            </IconContainer>
          </NameLogoContainer>
        </GitNav>
      </Container>
    </Footer>
  );
};
export default FooterComponent;
