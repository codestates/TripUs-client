import styled from "styled-components";

import { Page, InnerWrapper } from "./DefaultPageSetUp";

export const StyledPage = styled(Page)`
  min-height: 80%;
`;

export const StyledInnerWrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;

  .title {
    color: rgba(50, 50, 50, 0.95);
    font-size: calc(1.5rem + 0.5vw);
    margin-top: 2rem;
    margin-bottom: 6rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  gap: 1rem;

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
