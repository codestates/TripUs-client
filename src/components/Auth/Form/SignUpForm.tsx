import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// components
import { TextInput } from "./TextInput";
import { Form } from "./FormStyle";

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
        email: Yup.string()
          .email("이메일 주소를 다시 확인해주세요.")
          .required("필수 정보입니다."),
        password: Yup.string()
          .required("필수 정보입니다.")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?]).{8,15}$/,
            "8~16자 영문 소문자, 숫자, 특수문자를 사용하세요."
          ),
        name: Yup.string().required("필수 정보입니다."),
        nickname: Yup.string().required("필수 정보입니다."),
        phone: Yup.string().required("필수 정보입니다."),
        age: Yup.string().required("필수 정보입니다."),
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
          <div className="header-wrapper">반갑습니다!</div>
          <div className="input-section">
            <TextInput
              name="email"
              label="이메일"
              type="email"
              id="email"
              placeholder="이메일 주소"
            />
            <TextInput
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              placeholder="비밀번호"
            />
            <div>
              <div className="col col-left">
                <TextInput
                  name="name"
                  label="실명"
                  type="text"
                  id="name"
                  placeholder="실명"
                />
              </div>
              <div className="col col-right">
                <TextInput
                  name="nickname"
                  label="닉네임"
                  type="text"
                  id="Nickname"
                  placeholder="닉네임"
                />
              </div>
            </div>

            <div className="col-wrapper">
              <div className="col-left">
                <TextInput
                  name="phone"
                  label="연락처"
                  type="tel"
                  id="phone"
                  placeholder="연락처"
                />
              </div>
              <div className="col-right">
                <TextInput
                  name="age"
                  label="나이"
                  type="number"
                  id="phone"
                  placeholder="나이"
                />
              </div>
            </div>

            <button type="button">회원가입</button>
          </div>
          <div className="toggle" onClick={togglePanel}>
            이미 회원이신가요?
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
