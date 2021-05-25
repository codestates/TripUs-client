import styled from "styled-components";

export const Form = styled.form`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .header-wrapper {
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 700;
    line-height: 120%;
    text-align: left;
    display: flex;
    align-item: center;
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
    font-size: 14px;
    text-align: left;
  }

  input {
    margin: 8px 0 16px;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 2px solid #e0e0e0;
  }

  .col-right {
    float: right;
    padding-right: 8px;
    width: 50%;
  }

  .col-left {
    float: left;
    padding-right: 8px;
    width: 50%;
  }

  .line-break {
    width: 90%;
    display: flex;
    margin: 16px auto;
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
      margin-right: 15px;
    }

    :after {
      margin-left: 15px;
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
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    background: #000;
    transition: all 0.4s;

    &:hover {
      border-color: #292929;
      background-color: #292929;
    }
  }

  .social-login {
    border: 1px solid #e0e0e0;
    background: #fff;
    color: rgba(0, 0, 0, 0.7);
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 32px;

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
      font-size: 1rem;
      cursor: pointer;
      margin: auto;
      &:hover {
        text-decoration: underline;
      }
    }

    @media (min-width: 900px) {
      display: none;
    }
  }
`;
