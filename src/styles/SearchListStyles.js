import styled from "styled-components";
import { Page, InnerWrapper } from "./DefaultPageSetUp";

export const StyledPage = styled(Page)`
  min-height: 80%;
`;

export const StyledInnerWrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const ResultsSection = styled.div`
  height: 100%;
`;

export const CardsWrapper = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 1rem;

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 24%);
  }

  @media (max-width: 1920px) {
    grid-template-columns: repeat(3, 32%);
  }

  @media (max-width: 1439px) {
    grid-template-columns: repeat(2, 45%);
  }

  @media (max-width: 911px) {
    grid-template-columns: 95%;
  }
`;

export const SideBarSection = styled.div`
  padding: 2rem;
  min-width: 100%;

  @media (max-width: 911px) {
    padding: 0;
  }
`;
