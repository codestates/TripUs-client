import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

// components
import { TextInput } from "./TextInput";
import { Form } from "./FormStyle";

// images
import naver_icon_green from "../../../images/naver_icon_green.png";

const BASE_URL = "https://server.tripus.me";

interface FormValues {
  email: string;
  pw: string;
}

const onSignUp = (values: FormValues) => {
  axios
    .post(BASE_URL + "/login", {
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
        email: Yup.string()
          .email("이메일 주소를 다시 확인해주세요.")
          .required("필수 정보입니다."),
        pw: Yup.string()
          .required("필수 정보입니다.")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?]).{8,}$/,
            "8~16자 영문 소문자, 숫자, 특수문자를 사용하세요."
          ),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSignUp(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => (
        <Form className={className} {...rest} onSubmit={formik.handleSubmit}>
          <div className="header-wrapper">트립어스에 온 것을 환영합니다!</div>
          <div className="form-wrapper">
            <div className="input-section">
              <TextInput
                name="email"
                label="이메일 주소"
                type="email"
                id="email"
                placeholder="이메일"
              />

              <TextInput
                name="pw"
                label="비밀번호"
                type="password"
                id="pw"
                placeholder="비밀번호"
              />

              <button type="submit">로그인</button>
              <div className="line-break">또는</div>
              <button type="button" className="social-login">
                <img
                  src={naver_icon_green}
                  alt="Naver log in"
                  className="social-logo"
                />
                <div className="social-btn-text">네이버 아이디로 로그인</div>
              </button>

              <div className="toggle" onClick={togglePanel}>
                아직 회원이 아니신가요?
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
