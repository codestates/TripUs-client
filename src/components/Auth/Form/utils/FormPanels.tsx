import styled, { css } from "styled-components";

const FormPanel = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  padding: 30px 50px;
`;

interface Props {
  rightActive: boolean;
}

export const SignInPanel = styled(FormPanel)<Props>`
  left: 0;

  ${(props) =>
    props.rightActive &&
    css`
      transform: translateX(-100%);
    `}

  @media (max-width: 901px) {
    ${(props) =>
      !props.rightActive &&
      css`
        transform: translateX(0%);
      `}
  }
`;

export const SignUpPanel = styled(FormPanel)<Props>`
  right: 0;

  ${(props) =>
    !props.rightActive &&
    css`
      transform: translateX(100%);
    `}

  @media (max-width: 901px) {
    ${(props) =>
      props.rightActive &&
      css`
        left: 0;
        transform: translateX(0%);
      `}

        ${(props) =>
          !props.rightActive &&
          css`
            left: 0;
            transform: translateX(100%);
          `}
`;
