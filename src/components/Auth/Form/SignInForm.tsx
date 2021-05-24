import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

// components
import { Form, StyledButton, MyTextInput } from "./Form";

// images
import naver_large from "../../../images/naver_large.png";

const URL = "http://ec2-13-125-115-208.ap-northeast-2.compute.amazonaws.com";

interface FormValues {
  email: string;
  pw: string;
}

const onSignUp = (values: FormValues) => {
  axios
    .post(URL, {
      email: values.email,
      pw: values.pw,
    })
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

const SignInForm = ({
  className,
  togglePanel,
  ...rest
}: {
  className?: string;
  togglePanel: () => void;
}) => {
  const initialValues: FormValues = { email: "", pw: "" };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        pw: Yup.string()
          .required("Required")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?]).{8,}$/,
            "Must contain at least 8 characters, a number and one special case character"
          ),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        onSignUp(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => (
        <Form className={className} {...rest} onSubmit={formik.handleSubmit}>
          <h1>Sign In</h1>
          <div className="input-section">
            <MyTextInput
              name="email"
              label="Email"
              type="email"
              id="email"
              placeholder="Enter your email."
            />
            <MyTextInput
              name="pw"
              label="Password"
              type="password"
              id="pw"
              placeholder="Enter your password."
            />
            <StyledButton type="submit">Sign In</StyledButton>
          </div>
          <h5 className="line-break">or</h5>
          <div className="social-login">
            <img src={naver_large} alt="Naver login button" />
          </div>
          <p className="redirect" onClick={togglePanel}>
            Don't have an account?
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
