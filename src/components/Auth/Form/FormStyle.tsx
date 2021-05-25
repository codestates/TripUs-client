import styled from "styled-components";

export const Form = styled.form`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: relative;

  .header-wrapper {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-size: 2vw;
    font-weight: 700;
    line-height: 120%;
    text-align: left;
    display: flex;
    align-item: center;

    @media (max-width: 901px) {
      font-size: 3.5vw;
    }
  }

  .form-wrapper {
    min-height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .input-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  label {
    font-size: 1.1vw;
    text-align: left;

    @media (max-width: 901px) {
      font-size: 2vw;
    }
  }

  input {
    margin: 0.5rem 0 1rem;
    width: 100%;
    height: 3rem;
    border-radius: 0.25rem;
    border: 2px solid #e0e0e0;
    font-size: 1vw;

    @media (max-width: 1350px) {
      height: 2.5rem;
    }

    @media (max-width: 901px) {
      height: 2rem;
      font-size: 2vw;
    }
  }

  .col-right {
    float: right;
    padding-right: 0.5rem;
    width: 50%;

    @media (max-width: 901px) {
      float: none;
      width: 100%;
    }
  }

  .col-left {
    float: left;
    padding-right: 0.5rem;
    width: 50%;

    @media (max-width: 901px) {
      float: none;
      width: 100%;
    }
  }

  .line-break {
    width: 90%;
    display: flex;
    margin: 1rem auto;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.25);

    :before,
    :after {
      content: "";
      flex: 1 1;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin: auto;
    }

    :before {
      margin-right: 1rem;
    }

    :after {
      margin-left: 1rem;
    }
  }

  .error {
    color: rgba(240, 52, 52, 1);
    font-size: 0.8rem;
    padding-left: 8px;
    float: right;
  }

  button {
    margin-top: 20px;
    margin-bottom: 16px;
    width: 100%;
    height: 48px;
    border-radius: 28px;
    padding-top: 14px;
    color: #fff;
    padding: 8px 16px;
    font-weight: 700;
    border: 1px solid transparent;
    font-size: 1vw;
    text-align: center;
    cursor: pointer;
    background: #000;
    transition: all 0.4s;

    &:hover {
      border-color: #292929;
      background-color: #292929;
    }

    @media (max-width: 901px) {
      font-size: 2vw;
    }
  }

  .social-login {
    border: 1px solid #e0e0e0;
    background: #fff;
    color: rgba(0, 0, 0, 0.7);
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 16px;

    &:hover {
      border-color: #292929;
      background: #fff;
    }
  }

  .social-logo {
    width: 28px;
    flex: 0 1 0%;
  }

  .social-btn-text {
    flex: 1 1 0%;
  }

  .toggle {
    @media (max-width: 901px) {
      font-size: 0.7rem;
      cursor: pointer;
      padding-top: 0.5rem;
      color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;

      &:hover {
        text-decoration: underline;
      }
    }

    @media (min-width: 900px) {
      display: none;
    }
  }
`;
