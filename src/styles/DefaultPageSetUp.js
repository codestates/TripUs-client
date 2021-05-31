import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  background: ${(props) =>
    props.background && props.overlay
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.background})`
      : props.background
      ? `url(${props.background})`
      : props.color};
  height: ${(props) => (props.height ? `${props.height}%` : "auto")};
  background-size: cover;
  background-position: ${(props) =>
    props.position ? `${props.position}` : "center"};
  background-repeat: no-repeat;
`;

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  @media (max-width: 911px) {
    width: 90%;
  }

  @media (min-width: 911px) {
    width: 80%;
  }
`;

export const InnerWrapper = styled.div`
  width: 90%;
  height: 100%;
`;