import styled, { css } from "styled-components";

export const FormDisplayScreen = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const FormsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  height: 100%;

  @media (max-width: 901px) {
    width: 200%;
  }
`;

const FormPanel = styled.div`
  height: 100%;
  min-height: 350px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  padding: 2rem;
`;

export const SignInPanel = styled(FormPanel)`
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
  ${(props) =>
    !props.rightActive &&
    css`
      transform: translateX(100%);
    `}

  @media (max-width: 901px) {
    ${(props) =>
      props.rightActive &&
      css`
        transform: translateX(-100%);
      `}

    ${(props) =>
      !props.rightActive &&
      css`
        transform: translateX(0%);
      `}
  }
`;
