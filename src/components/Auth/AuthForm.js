import React, { useState } from "react";

// components
import {
  FormDisplayScreen,
  FormsContainer,
  SignInPanel,
  SignUpPanel,
} from "./FormUtils";
import { SignInForm, SignUpForm } from "./Forms";
import Loader from "../Common/Loader";

const AuthForm = ({ rightActive, togglePanel, setLogin, history }) => {
  const [loading, setLoading] = useState(false);

  return (
    <FormDisplayScreen>
      <FormsContainer>
        <SignInPanel rightActive={rightActive}>
          {loading ? (
            <Loader />
          ) : (
            <SignInForm
              togglePanel={togglePanel}
              setLogin={setLogin}
              history={history}
              setLoading={setLoading}
            ></SignInForm>
          )}
        </SignInPanel>
        <SignUpPanel rightActive={rightActive}>
          {loading ? (
            <Loader />
          ) : (
            <SignUpForm
              togglePanel={togglePanel}
              history={history}
              setLoading={setLoading}
            ></SignUpForm>
          )}
        </SignUpPanel>
      </FormsContainer>
    </FormDisplayScreen>
  );
};

export default AuthForm;
