import styled from "styled-components";

export const MyListsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .title {
    color: rgba(50, 50, 50, 0.95);
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    font-weight: 700;
  }
`;

export const ContentArea = styled.div`
  display: flex;
`;

export const SearchResultsWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 911px) {
    width: 100%;
  }
`;

export const AdWrapper = styled.div`
  width: 25%;

  img {
    width: 100%;
    min-height: 40rem;
    max-height: 50rem;
  }

  @media (max-width: 911px) {
    display: none;
  }
`;
