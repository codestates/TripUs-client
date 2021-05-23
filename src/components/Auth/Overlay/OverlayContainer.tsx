import styled, { css } from "styled-components";

interface Props {
  rightActive: boolean;
}

const OverlayContainer = styled.div<Props>`
  @media (min-width: 810px) {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    z-index: 100;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;

    ${(props) =>
      props.rightActive &&
      css`
        transform: translateX(-100%);
      `}
  }

  @media (max-width: 811px) {
    display: none;
  }
`;

export default OverlayContainer;
