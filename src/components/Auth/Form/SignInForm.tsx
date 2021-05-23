import React from "react";

// components
import { Form, StyledButton } from "./Form";

// images
import naver_large from "../../../images/naver_large.png";

const SignInForm = ({
  className,
  togglePanel,
  ...rest
}: {
  className?: string;
  togglePanel: () => void;
}) => {
  return (
    <Form className={className} {...rest}>
      <h1>Sign In</h1>
      <div className="input-section">
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <i className="fas fa-envelope"></i>
          </div>
          <input type="email" placeholder="email" />
        </div>
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <i className="fas fa-lock"></i>
          </div>
          <input type="password" placeholder="password" />
        </div>
        <StyledButton type="button">Sign In</StyledButton>
      </div>
      <h5 className="line-break">or</h5>
      <div className="social-login">
        <img src={naver_large} alt="Naver login button" />
      </div>
      <p className="redirect" onClick={togglePanel}>
        Don't have an account?
      </p>
    </Form>
  );
};

export default SignInForm;
