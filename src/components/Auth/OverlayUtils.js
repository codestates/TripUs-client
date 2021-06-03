import styled, { css } from "styled-components";

export const OverlayDisplayScreen = styled.div`
  height: 100%;

  @media (min-width: 901px) {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    z-index: 5;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;

    ${(props) =>
      props.rightActive &&
      css`
        transform: translateX(-100%);
      `}
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const OverlayContainer = styled.div`
  height: 100%;

  @media (max-width: 901px) {
    display: none;
  }

  @media (min-width: 900px) {
    position: relative;
    left: -100%;
    width: 200%;
    transition: transform 0.6s ease-in-out;
    background: #fff;

    ${(props) =>
      props.rightActive &&
      css`
        transform: translateX(50%);
      `}
  }
`;

const OverlayPanel = styled.div`
  height: 100%;

  @media (min-width: 901px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    top: 0;
    width: 50%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;

    img {
      height: 70%;
    }

    .toggle {
      font-size: 0.7rem;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.5);
      margin: 0 auto;
      width: 100%;
      display: flex;
      justify-content: center;

      @media (min-width: 2000px) {
        font-size: 0.7vw;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 901px) {
    display: none;
  }
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);

  ${(props) =>
    props.rightActive &&
    css`
      transform: translateX(50%);
    `}
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-50%);

  ${(props) =>
    props.rightActive &&
    css`
      transform: translateX(0);
    `}
`;
