import React from "react";

// components
import {
  FormDisplayScreen,
  FormsContainer,
  SignInPanel,
  SignUpPanel,
} from "./FormUtils";
import { SignInForm, SignUpForm } from "./Forms";

const AuthForm = ({ rightActive, togglePanel, setLogin, history }) => {
  return (
    <FormDisplayScreen>
      <FormsContainer>
        <SignInPanel rightActive={rightActive}>
          <SignInForm
            togglePanel={togglePanel}
            setLogin={setLogin}
            history={history}
          ></SignInForm>
        </SignInPanel>
        <SignUpPanel rightActive={rightActive}>
          <SignUpForm togglePanel={togglePanel}></SignUpForm>
        </SignUpPanel>
      </FormsContainer>
    </FormDisplayScreen>
  );
};

export default AuthForm;
