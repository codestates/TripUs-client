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
          .email("????????? ????????? ?????? ??????????????????.")
          .required("?????? ???????????????."),
        pw: Yup.string()
          .required("?????? ???????????????.")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?]).{8,}$/,
            "8~16??? ?????? ?????????, ??????, ??????????????? ???????????????."
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
          <div className="header-wrapper">???????????????!</div>
          <div className="form-wrapper">
            <div className="input-section">
              <TextInput
                name="email"
                label="????????? ??????"
                type="email"
                id="email"
                placeholder="?????????"
              />

              <TextInput
                name="pw"
                label="????????????"
                type="password"
                id="pw"
                placeholder="????????????"
              />

              <button type="submit">?????????</button>
              <div className="line-break">??????</div>
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
                <div className="social-btn-text">????????? ???????????? ?????????</div>
              </button>

              <div className="toggle" onClick={togglePanel}>
                ?????? ????????? ????????????????
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
          .email("????????? ????????? ?????? ??????????????????.")
          .required("?????? ???????????????."),
        pw: Yup.string()
          .required("?????? ???????????????.")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?]).{8,15}$/,
            "8~16??? ?????? ?????????, ??????, ??????????????? ???????????????."
          ),
        name: Yup.string().required("?????? ???????????????."),
        nickname: Yup.string().required("?????? ???????????????."),
        phone: Yup.string().required("?????? ???????????????."),
        age: Yup.string().required("?????? ???????????????."),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSignUp(values, history, setLoading);
        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => (
        <Form className={className} onSubmit={formik.handleSubmit}>
          <div className="header-wrapper">???????????????!</div>
          <div className="input-section">
            <TextInput
              name="email"
              label="?????????"
              type="email"
              id="email"
              placeholder="????????? ??????"
            />
            <TextInput
              name="pw"
              label="????????????"
              type="password"
              id="pw"
              placeholder="????????????"
            />
            <div>
              <div className="col col-left">
                <TextInput
                  name="name"
                  label="??????"
                  type="text"
                  id="name"
                  placeholder="??????"
                />
              </div>
              <div className="col col-right">
                <TextInput
                  name="nickname"
                  label="?????????"
                  type="text"
                  id="Nickname"
                  placeholder="?????????"
                />
              </div>
            </div>

            <div className="col-wrapper">
              <div className="col-left">
                <TextInput
                  name="phone"
                  label="?????????"
                  type="tel"
                  id="phone"
                  placeholder="?????????"
                />
              </div>
              <div className="col-right">
                <TextInput
                  name="age"
                  label="??????"
                  type="number"
                  id="phone"
                  placeholder="??????"
                />
              </div>
            </div>

            <button type="submit">????????????</button>
          </div>
          <div className="toggle" onClick={togglePanel}>
            ?????? ???????????????????
          </div>
        </Form>
      )}
    </Formik>
  );
};
