import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Formik, useField } from "formik";
import AccountUtils, { FormStyle } from "./AccountUtils";
import * as Yup from "yup";
//1. whole -w
//2. form -w
//3. input -w
//4. 관리할 state == >  email, pw , nickname , name , mobile , age(int)
//4-3. 추가정보를 입력하는 state mobile
//4-2 get할 파라미터 email,pw,name,age
// 따로 파라미터가 없는것 nickname,pw 닉네임은 최초 및 변경 비밀번호는 따로 받아오지않는다
//4-1. 관리할 버튼 ==>
//5. 로직이 get 요청을 받아온 상태로 정보가 띄워져있어야 되고
//5-1. 수정버튼을 누르면 수정상태가 되어야한다(isEdit:true)
//6. 정보를 수정했다면 수정버튼을 통해 patch요청을 보내 수정을 한다
//7. 수정하고 나면 input 버튼이 잠긴다
//get요청할시 저장된 정보들을 불러와야한다
//get요청시 저장된 정보가 ""라면 저장된 정보를 불러오고
//뭐라도 저장이 되어있으면 저장된 정보를 불러오지않는다

//섹션을 나누면

//input form

// button form

// 저장된 데이터를 불러오는 법
// 이니셜밸류를 복사해서
// 정보가 저장된 밸류 함수를 만듬
//

//지금 안되는것
//get 요청
// formik submit
//accessToken 전달
const EditLoadInfo = (props) => {
  const [email, setEmail] = useState("email");
  const [pw, setPw] = useState("pw");
  const [nickname, setNickname] = useState("nickname");
  const [name, setName] = useState("name");
  const [phone, setPhone] = useState("phone");
  const [age, setAge] = useState("age");

  const BASE_URL = "https://server.tripus.me/account-info";

  useEffect(() => {
    axios
      .get(BASE_URL, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
          withCredentials: true,
        },
      }) //로컬스토리지에 담아와서  그걸 가지고오면 쓰면된다
      //로컬스토리지에 엑세스토큰이없으면 login으로 리다이렉트
      .then((res) => {
        console.log(res.data);
        setEmail(res.email);
        setPw(res.Pw);
        setNickname(res.nickname);
        setName(res.name);
        setPhone(res.phone);
        setAge(res.age);
      })
      .catch((err) => console.error(err));
  }, []);
};

const initialValues = {
  email: "",
  password: "",
  name: "",
  age: "",
  nickname: "",
  mobile: "",
};

const savedValues = {
  email: "",
  password: 1234567,
  name: "kim coding",
  nickname: "hihi",
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
//formik으로 post
const Account = ({ className, props, ...rest }) => {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      enableReinitialize
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
        // name: Yup.string().required("필수 정보입니다."),
        // nickname: Yup.string().required("필수 정보입니다."),
        // phone: Yup.string().required("필수 정보입니다."),
        // age: Yup.string().required("필수 정보입니다."),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
          console.log("Form data", values);
        });
      }}
    >
      {(formik) => (
        <FormStyle
          className={className}
          {...rest}
          onSubmit={formik.handleSubmit}
        >
          <div className="second-wrapper">
            <div className="head-wrapper">
              <div className="title-wrapper">
                <h1>회원정보 수정</h1>
              </div>
              <div className="form-wrapper">
                <div className="input-wrapper">
                  <TextInput
                    name="email"
                    label="이메일"
                    type="email"
                    id="email"
                    placeholder="이메일 주소"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <TextInput
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />

                  <TextInput
                    name="name"
                    label="실명"
                    type="text"
                    id="name"
                    placeholder="실명"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />

                  <TextInput
                    name="nickname"
                    label="닉네임"
                    type="text"
                    id="Nickname"
                    placeholder="닉네임"
                    onChange={formik.handleChange}
                    value={formik.values.Nickname}
                  />

                  <TextInput
                    name="phone"
                    label="연락처"
                    type="tel"
                    id="phone"
                    placeholder="연락처"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />

                  <TextInput
                    name="age"
                    label="나이"
                    type="number"
                    id="age"
                    placeholder="나이"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                  />
                </div>

                <div className="btn-wrapper">
                  <button className="deleteBtn">계정삭제</button>
                  <button className="patchBtn">수정</button>
                  <button
                    type="submit"
                    className="confirmBtn"
                    // onClick={() => setFormValues(savedValues)}
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FormStyle>
      )}
    </Formik>
  );
};

export default Account;
//name 과 id가 있으면 onChange가 필요없다
//   return (
//     <>
//       <AccountComponent>
//         <div className="whole-wrapper">
//           <div className="second-wrapper">
//             <div className="title-wrapper">
//               <h1>회원 정보 수정</h1>
//             </div>
//             <form className="form-wrapper">
//               <div className="input-wrapper">
//                 <fieldset className="form">
//                   <label className="label">이메일</label>
//                   <input className="input-box"></input>
//                 </fieldset>
//                 <fieldset className="form">
//                   <label className="label">패스워드</label>
//                   <input className="input-box"></input>
//                 </fieldset>
//                 <fieldset className="form">
//                   <label className="label">닉네임</label>
//                   <input className="input-box"></input>
//                 </fieldset>
//                 <fieldset className="form">
//                   <label className="label">이름</label>
//                   <input className="input-box"></input>
//                 </fieldset>
//                 <fieldset className="form">
//                   <label className="label">핸드폰번호</label>
//                   <input className="input-box"></input>
//                 </fieldset>
//                 <fieldset className="form">
//                   <label className="label">나이</label>
//                   <input className="input-box"></input>
//                 </fieldset>
//               </div>
//             </form>
//           </div>
//         </div>
//         <AccountUtils />
//       </AccountComponent>
//     </>
//   );
// };
//   export default Account;
