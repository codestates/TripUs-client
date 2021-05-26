import React from "react";

// components
import {
  FormDisplayScreen,
  FormsContainer,
  SignInPanel,
  SignUpPanel,
} from "./FormUtils";
import { SignInForm, SignUpForm } from "./Forms";

const AuthForm = ({ rightActive, togglePanel }) => {
  return (
    <FormDisplayScreen>
      <FormsContainer>
        <SignInPanel rightActive={rightActive}>
          <SignInForm togglePanel={togglePanel}></SignInForm>
        </SignInPanel>
        <SignUpPanel rightActive={rightActive}>
          <SignUpForm togglePanel={togglePanel}></SignUpForm>
        </SignUpPanel>
      </FormsContainer>
    </FormDisplayScreen>
  );
};

export default AuthForm;
