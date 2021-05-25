import React from "react";

// components
import FormContainer from "./utils/FormContainer"; // displays just the currently visible Form
import Forms from "./utils/Forms"; // contains both form panels
import { SignInPanel, SignUpPanel } from "./utils/FormPanels"; // panels to hold each form
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
