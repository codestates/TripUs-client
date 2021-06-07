import styled from "styled-components";

import { Page, InnerWrapper } from "./DefaultPageSetUp";

export const StyledPage = styled(Page)`
  height: 25rem;
`;

export const StyledInnerWrapper = styled(InnerWrapper)`
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f5f5f5;

  .title {
    margin-bottom: 2rem;
    font-weight: bold;
    font-size: calc(1rem + 1vw);

    @media (max-width: 911px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  .link {
    cursor: pointer;
    border-bottom: 0.2rem solid #fff;
    padding-bottom: 0.5rem;
    transition: width 0.75s;

    @media (max-width: 911px) {
      margin-left: 1rem;
      width: 5rem;
      margin-right: 1rem;
    }

    @media (min-width: 911px) {
      width: 7rem;
    }

    @media (min-width: 1800px) {
      width: 10rem;
    }

    &:hover {
      @media (max-width: 911px) {
        width: 6.5rem;
      }

      @media (min-width: 911px) {
        width: 8.5rem;
      }

      @media (min-width: 1800px) {
        width: 12rem;
      }
    }

    a {
      text-decoration: none;
      padding: 0;
      color: #f5f5f5;
      font-weight: bold;
      font-size: calc(1rem + 1vw);
      width: 3rem;
      margin: 0;

      &:hover {
      }
    }
  }
`;
