import React from "react";
import styled from "styled-components";

//img
import { DiGithubBadge } from "react-icons/di";

//footer,serInfo ,nameLogoContainer, Name, githubLogo
//반응형 순서
//1. 전체 컴포에 media query
//2. flex-direction container랑 깃네브에 두번준다

const Footer = styled.footer`
  max-width: 100%;
  width: 100vw;
  height: 10%;
  border-top: none;
  background-color: rgba(198, 218, 237, 0.65);
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  color: rgba(87, 118, 148, 0.76);

  @media (max-width: 920px) {
    flex-direction: column;
    height: 22%;
    background-color: rgba(198, 218, 237, 0.65);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  width: 100%;
  font-weight: 400;
  height: 100%;

  @media (max-width: 901px) {
    flex-direction: column-reverse;
    height: 100%;
    align-content: center;
  }
`;

const SerInfo = styled.p`
  height: 100%;
  margin: 0;
  padding: 0;
  padding-left: 2rem;

  display: flex;
  align-items: center;

  @media (max-width: 901px) {
    height: 40%;
    padding-left: 0;
  }
`;

//반응형일시에 로고가 내려가고 깃내브가 올라와야한다
//깃내브도 coloumn으로 바꿔줘서
const GitNav = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 901px) {
    flex-direction: column;
    height: 60%;
    width: 100%;

    justify-content: center;
    align-items: center;
  }
`;

const NameLogoContainer = styled.a`
  margin: 0;
  padding: 0;
  width: 33%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;

  @media (max-width: 901px) {
    height: 33%;
    align-content : center;
    width : 100%;
    justify-content: flex-start;
`;

const IconContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 28px;
    width: 28px;
    stroke: #3085d3;
    fill: #3085d3;
  }

  @media (max-width: 901px) {
    display: none;
  }
`;

const FooterComponent = () => {
  return (
    <Footer>
      <Container>
        <SerInfo>©2021 TripUS, Inc.</SerInfo>
        <GitNav>
          <NameLogoContainer href="https://github.com/Hodukim" target="_blank">
            <IconContainer>
              <DiGithubBadge />
            </IconContainer>
            <p>Kim Wonho</p>
          </NameLogoContainer>

          <NameLogoContainer
            href="https://github.com/hyundonny"
            target="_blank"
          >
            <IconContainer>
              <DiGithubBadge />
            </IconContainer>
            <p>Hyun Don Moon</p>
          </NameLogoContainer>

          <NameLogoContainer
            href="https://github.com/dlrmsghk09"
            target="_blank"
          >
            <IconContainer>
              <DiGithubBadge />
            </IconContainer>
            <p>Lee Guenhwa</p>
          </NameLogoContainer>
        </GitNav>
      </Container>
    </Footer>
  );
};

export default FooterComponent;
