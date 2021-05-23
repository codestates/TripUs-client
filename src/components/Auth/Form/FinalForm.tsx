import React from "react";

// components
import FormContainer from "./FormContainerNew";
import Forms from "./Forms";
import { SignInPanel, SignUpPanel } from "./FormPanels";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const FinalForm = ({
  rightActive,
  togglePanel,
}: {
  rightActive: boolean;
  togglePanel: () => void;
}) => {
  return (
    <FormContainer rightActive={rightActive}>
      <Forms rightActive={rightActive}>
        <SignInPanel rightActive={rightActive}>
          <SignInForm togglePanel={togglePanel}></SignInForm>
        </SignInPanel>
        <SignUpPanel rightActive={rightActive}>
          <SignUpForm togglePanel={togglePanel}></SignUpForm>
        </SignUpPanel>
      </Forms>
    </FormContainer>
  );
};

export default FinalForm;
