import React from "react";
import axios from "axios";
import { Formik, useField } from "formik";
import * as Yup from "yup";

// style
import { Form } from "../../styles/AuthFormStyles";

// images
import naver_icon_green from "../../images/naver_icon_green.png";

const BASE_URL = "https://server.tripus.me";

const NAVER_API_URL =
  "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=V4VN6rip1a06VBrIxjEE&redirect_uri=https://tripus.me/";

const onSignIn = (values, setLogin, history, setLoading) => {
  setLoading(true);
  axios
    .post(BASE_URL + "/login", {
      email: values.email,
      pw: values.pw,
    })
    .then((res) => {
      setLogin(true);
      localStorage.setItem("accessToken", res.data.accessToken);
      setLoading(false);
      history.push("/");
    })
    .catch((e) => setLoading(false));
};

const onSignUp = (values, history, setLoading) => {
  setLoading(true);
  axios
    .post(BASE_URL + "/signup", {
      email: values.email,
      pw: values.pw,
      name: values.name,
      nickname: values.nickname,
      mobile: values.phone,
      age: values.age,
    })
    .then((res) => {
      setLoading(false);
      history.push("/");
    })
    .catch((e) => setLoading(false));
};

const TextInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="label-wrapper">
        <label htmlFor={props.id || props.name}>
          {props.label}
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </label>
      </div>
      <input
        className="text-input"
        {...field}
        type={props.type}
        id={props.id || props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export const SignInForm = ({
  className,
  setIsRightActive,
  setLogin,
  history,
  setLoading,
}) => {
  const initialValues = { email: "", pw: "" };

  const togglePanel = () => {
    setIsRightActive((prev) => !prev);
  };

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
        onSignIn(values, setLogin, history, setLoading);
        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => (
        <Form className={className} onSubmit={formik.handleSubmit}>
          <div className="header-wrapper">환영합니다!</div>
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
              <button
                type="button"
                className="social-login"
                onClick={() => {
                  window.location.assign(NAVER_API_URL);
                }}
              >
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

export const SignUpForm = ({
  className,
  setIsRightActive,
  history,
  setLoading,
}) => {
  const togglePanel = () => {
    setIsRightActive((prev) => !prev);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        pw: "",
        name: "",
        nickname: "",
        phone: "",
        age: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("이메일 주소를 다시 확인해주세요.")
          .required("필수 정보입니다."),
        pw: Yup.string()
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
        onSignUp(values, history, setLoading);
        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => (
        <Form className={className} onSubmit={formik.handleSubmit}>
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
              name="pw"
              label="비밀번호"
              type="password"
              id="pw"
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

            <button type="submit">회원가입</button>
          </div>
          <div className="toggle" onClick={togglePanel}>
            이미 회원이신가요?
          </div>
        </Form>
      )}
    </Formik>
  );
};
