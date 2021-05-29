import styled from "styled-components";

export const SearchPageWrapper = styled.div`
  display: flex;
  column-gap: 5%;

  @media (max-width: 911px) {
    flex-direction: column;
  }
`;

export const ResultsSection = styled.div`
  display: grid;
  justify-content: space-between;
  width: 75%;

  @media (max-width: 911px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 47%);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 32%);
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(4, 24%);
  }
`;

export const SideBarSection = styled.div`
  background: pink;
  padding: 1rem;

  @media (max-width: 911px) {
    width: 100%;
  }

  @media (min-width: 911px) {
    width: 20%;
  }
`;
