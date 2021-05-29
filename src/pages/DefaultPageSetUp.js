import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
`;

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  @media (max-width: 911px) {
    width: 90%;
  }

  @media (min-width: 911px) {
    width: 75%;
  }
`;

export const InnerWrapper = styled.div`
  width: 90%;
  height: 100%;
`;
