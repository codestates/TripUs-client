import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: none;
  background: #519de3;
  color: #fff;
  font-size: 1.2rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  margin: 16px;
  font-weight: bold;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  @media (max-width: 811px) {
    width: 100%;
  }

  h1 {
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  .social-login {
    width: 60%;
    margin-top: 16px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }

  .line-break {
    width: 50%;
    display: flex;
    flex-direction: row;
    margin: 16px 0;

    :before,
    :after {
      content: "";
      flex: 1 1;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      margin: auto;
    }

    :before {
      margin-right: 15px;
    }

    :after {
      margin-left: 15px;
    }
  }

  .input-section {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 18px 0;

    .gender-wrapper {
      height: 40px;
      width: 100%;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      position: relative;

      select {
        border: none;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 45px;
        color: rgba(0, 0, 0, 0.5);
        width: 85%;
        font-size: 1.2rem;
        margin-top: -6px;
      }
    }
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 40px;
    margin: 8px;

    .icon-wrapper {
      position: absolute;
      top: -8px;
      left: 8px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 1.5rem;
        display: block;
      }
    }

    input {
      width: 100%;
      height: 100%;
      padding: 10px 10px 10px 50px;
      outline: none;
      font-size: 1.3rem;
      margin-bottom: 16px;
      background: #fff;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    }
  }

  .redirect {
    font-size: 1rem;
    cursor: pointer;
    position: absolute;

    bottom: 32px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
