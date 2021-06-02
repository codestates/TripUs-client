import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import {
  Page,
  OuterWrapper,
  InnerWrapper,
} from "../../styles/DefaultPageSetUp";

import {
  PageWrapper,
  MainContainer,
  SubContainer,
} from "../../styles/RecruitmentStyles";

import { TextInput } from "./AccountUtils";

const Account = () => {
  const [info, setInfo] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  const BASE_URL = "https://server.tripus.me/account-info";

  const LoadInfo = () => {
    useEffect(() => {
      axios
        .get(BASE_URL, {
          headers: {
            authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            //   withCredentials: true,
          },
        })
        .then(({ res }) => {
          console.log(res.data); //정보 받아와짐

          setEmail(res.data.email);
          setNickname(res.data.nickname);
          setName(res.data.name);
          setMobile(res.data.mobile);
          setAge(res.data.age);
          setInfo(res.data);
        })

        // 받아온 정보를 state로 저장해서
        // 밸류 값을 state로 지정해준다
        .catch((err) => console.error(err));
    }, []);
  };
  //! 새 글 작성
  const handleClick = (values) => {
    if (accessToken === "" || accessToken === null) {
    } else {
      axios
        .patch(
          "https://server.tripus.me/account-info",
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          },
          {
            email: values.email,
            pw: values.pw,
            nickname: values.nickname,
            name: values.name,
            mobile: values.mobile,
            age: values.age,
          }
          // withCredentials: true,
        )
        .then(() => {
          console.log("수정  완료!");
        });
    }
  };

  //! 취소버튼

  const handleConfirmClick = () => {
    setIsEdited((prev) => !prev); //이전상태
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        age: "",
        nickname: "",
        mobile: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("이메일 주소를 다시 확인해주세요.")
          .required("필수 정보입니다."),
        password: Yup.string()
          .required("변경하실 비밀번호를 입력해주세요")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?]).{8,15}$/,
            "8~16자 영문 소문자, 숫자, 특수문자를 사용하세요."
          ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);

        //수정하면 closed
      }}
    >
      {(formik) => (
        <Page as="form" onSubmit={formik.handleSubmit}>
          <OuterWrapper className="outer-wrapper">
            <InnerWrapper className="inner-wrapper">
              <PageWrapper>
                <MainContainer>
                  <h1 className="title">개인정보 수정</h1>
                  <TextInput
                    name="email"
                    label="이메일"
                    type="text"
                    id="email"
                    placeholder="이메일은 필수입니다"
                    width="full"
                    handleConfirmClick={handleConfirmClick}
                    isEdited={isEdited}
                    LoadInfo={LoadInfo}
                    email={email}
                  />
                  <TextInput
                    name="password"
                    label="패스워드"
                    type="password"
                    id="password"
                    placeholder="새로운 암호를 입력해주세요"
                    width="full"
                    isEdited={isEdited}
                    value={pw}
                  />
                  <TextInput
                    name="name"
                    label="이름"
                    type="text"
                    id="name"
                    width="full"
                    isEdited={isEdited}
                  />
                  <TextInput
                    name="nickname"
                    label="닉네임"
                    type="text"
                    id="Nickname"
                    placeholder="닉네임"
                    width="full"
                    isEdited={isEdited}
                    value={nickname}
                  />

                  <TextInput
                    name="mobile"
                    label="연락처"
                    type="tel"
                    id="mobile"
                    placeholder="연락처"
                    width="full"
                    isEdited={isEdited}
                    value={mobile}
                  />

                  <TextInput
                    name="age"
                    label="나이"
                    type="number"
                    id="age"
                    placeholder="나이"
                    width="full"
                    isEdited={isEdited}
                    value={age}
                  />

                  <div className="buttonWrapper">
                    <button className="btn patch" onClick={handleConfirmClick}>
                      수정
                    </button>

                    <button className="btn confirm" onClick={handleClick}>
                      확인
                    </button>
                  </div>
                </MainContainer>

                <SubContainer>
                  <div>
                    <div className="safety-info-container covid">
                      <div className="sidebarTitle">COVID-19 주의사항</div>
                      <ul>
                        <li>
                          <span>
                            <i class="fas fa-check"></i>
                          </span>
                          백신 접종 완료자만 접촉
                        </li>
                        <li>
                          <span>
                            <i class="fas fa-check"></i>
                          </span>
                          사람 많은 곳 피할것
                        </li>
                        <li>
                          <span>
                            <i class="fas fa-check"></i>
                          </span>
                          경유가 거의 없는 단거리 자동차 여행
                        </li>
                        <li>
                          <span>
                            <i class="fas fa-check"></i>
                          </span>
                          비행기 이용시 경유와 환승이 가장 적은 항공편이용
                        </li>
                        <li>
                          <span>
                            <i class="fas fa-check"></i>
                          </span>
                          게스트하우스 등 많은 사람과 공간을 공유하는 숙박시설은
                          피할것
                        </li>
                        <li>
                          <span>
                            <i class="fas fa-check"></i>
                          </span>
                          음식점에서는 모든 직원이 마스크를 착용하고 사회적
                          거리두기가 가능한 식당 실외 자리에서 먹기
                        </li>
                      </ul>
                    </div>
                    <div className="safety-info-container safety">
                      <div className="sidebarTitle">안전한 여행 요령</div>
                      <ul>
                        <li>
                          <span>
                            <i class="fas fa-exclamation-triangle"></i>
                          </span>
                          구체적인 계획이 없는 모집
                        </li>
                        <li>
                          <span>
                            <i class="fas fa-exclamation-triangle"></i>
                          </span>
                          자차동행 유도는 늘 의심!
                        </li>
                        <li>
                          <span>
                            <i class="fas fa-exclamation-triangle"></i>
                          </span>
                          노골적인 이성 모집
                        </li>
                        <li>
                          <span>
                            <i class="fas fa-exclamation-triangle"></i>
                          </span>
                          여행이 아닌 단순놀기 및 유흥 모집
                        </li>
                      </ul>
                    </div>
                  </div>
                </SubContainer>
              </PageWrapper>
            </InnerWrapper>
          </OuterWrapper>
        </Page>
      )}
    </Formik>
  );
};

export default Account;
