import styled, { css } from "styled-components";

const OverlayPanel = styled.div`
  @media (min-width: 901px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;

    img {
      width: 70%;
    }

    .toggle {
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 901px) {
    display: none;
  }
`;

interface Props {
  rightActive: boolean;
}

export const RightOverlayPanel = styled(OverlayPanel)<Props>`
  right: 0;
  transform: translateX(0);

  ${(props) =>
    props.rightActive &&
    css`
      transform: translateX(50%);
    `}
`;

export const LeftOverlayPanel = styled(OverlayPanel)<Props>`
  transform: translateX(-50%);

  ${(props) =>
    props.rightActive &&
    css`
      transform: translateX(0);
    `}
`;
