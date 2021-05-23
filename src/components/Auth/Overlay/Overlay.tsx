import styled, { css } from "styled-components";

interface Props {
  rightActive: boolean;
}

const Overlay = styled.div<Props>`
  @media (max-width: 811px) {
    display: none;
  }

  @media (min-width: 810px) {
    position: relative;
    left: -100%;
    height: 100%;
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

export default Overlay;
