import styled, { css } from "styled-components";

export const FormDisplayScreen = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const FormsContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  left: 0;
  background: #fff;

  @media (max-width: 901px) {
    width: 200%;
  }
`;

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
  padding: 30px 60px;
`;

export const SignInPanel = styled(FormPanel)`
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

export const SignUpPanel = styled(FormPanel)`
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
