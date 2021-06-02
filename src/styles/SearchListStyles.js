import styled from "styled-components";

export const SearchPageWrapper = styled.div`
  display: flex;
  margin-top: 1rem;

  flex-direction: column;
`;

export const ResultsSection = styled.div`
  flex: 0 0 70%;
  padding-right: 15px;
  padding-left: 15px;

  min-width: 100%;

  @media (max-width: 911px) {
    margin-top: 1rem;
    padding: 0;
  }
`;

export const SideBarSection = styled.div`
  padding: 2rem;
  min-width: 100%;

  @media (max-width: 911px) {
    padding: 0;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
