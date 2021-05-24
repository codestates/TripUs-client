import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// components
import { Form, StyledButton, MyTextInput } from "./Form";

const SignUpForm = ({
  className,
  togglePanel,
  ...rest
}: {
  className?: string;
  togglePanel: () => void;
}) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        nickname: "",
        phone: "",
        age: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .required("Required")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?]).{8,}$/,
            "Must contain at least 8 characters, a number and one special case character"
          ),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {(formik) => (
        <Form className={className} {...rest} onSubmit={formik.handleSubmit}>
          <h1>Sign Up</h1>
          <div className="input-section">
            <MyTextInput
              name="email"
              label="Email"
              type="email"
              id="email"
              placeholder="Enter your email."
            />
            <MyTextInput
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder="Enter your password."
            />
            <MyTextInput
              name="name"
              label="Name"
              type="text"
              id="name"
              placeholder="Enter your name."
            />
            <MyTextInput
              name="nickname"
              label="Nickname"
              type="text"
              id="Nickname"
              placeholder="Enter your nickname."
            />
            <MyTextInput
              name="phone"
              label="Phone number"
              type="tel"
              id="phone"
              placeholder="Enter your phone number."
            />
            <MyTextInput
              name="age"
              label="Age"
              type="number"
              id="phone"
              placeholder="Enter your age."
            />
            <StyledButton type="button">Sign Up</StyledButton>
          </div>
          <p className="redirect" onClick={togglePanel}>
            Already have an account?
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
