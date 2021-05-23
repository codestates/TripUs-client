import React from "react";

// components
import { Form, StyledButton } from "./Form";

const SignUpForm = ({
  className,
  togglePanel,
  ...rest
}: {
  className?: string;
  togglePanel: () => void;
}) => {
  return (
    <Form className={className} {...rest}>
      <h1>Sign Up</h1>
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
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <i className="fas fa-id-badge"></i>
          </div>
          <input type="text" placeholder="name" />
        </div>
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <i className="fas fa-user-tag"></i>
          </div>
          <input type="text" placeholder="nickname" />
        </div>
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <i className="fas fa-mobile"></i>
          </div>
          <input type="tel" placeholder="phone number" />
        </div>
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <i className="fas fa-sort-numeric-up"></i>
          </div>
          <input type="number" min="18" max="100" placeholder="age" />
        </div>
        <div className="input-wrapper gender-wrapper">
          <div className="icon-wrapper">
            <i className="fas fa-venus-mars"></i>
          </div>
          <select>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <StyledButton type="button">Sign Up</StyledButton>
      </div>
      <p className="redirect" onClick={togglePanel}>
        Already have an account?
      </p>
    </Form>
  );
};

export default SignUpForm;
