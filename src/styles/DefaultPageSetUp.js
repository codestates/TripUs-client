import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  background: ${(props) =>
    props.background && props.overlay
      ? `linear-gradient(to bottom, rgba(0, 0, 0, ${props.overlay}), rgba(0, 0, 0, ${props.overlay})), url(${props.background})`
      : props.background
      ? `url(${props.background})`
      : props.color};
  height: ${(props) => (props.height ? `${props.height}%` : "auto")};
  min-height: ${(props) => (props.minHeight ? "100%" : 0)};
  background-size: cover;
  background-position: ${(props) =>
    props.position ? `${props.position}` : "center"};
  background-repeat: no-repeat;
  z-index: ${(props) => (props.zIndex ? `${props.zIndex}` : 0)};
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
