import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
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
  const [emailRequested, setEmailRequested] = useState(false);
  const [emailCode, setEmailCode] = useState("");
  const [mobileRequested, setMobileRequested] = useState(false);
  const [mobileCode, setMobileCode] = useState("");
  const [identification, setIdentification] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmNewPw, setConfirmNewPw] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  const history = useHistory();
  const BASE_URL = "https://server.tripus.me/account-info";

  useEffect(() => {
    axios
      .get(BASE_URL, {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setEmail(res.data.data.email);
        setPw(res.data.data.pw);
        setNickname(res.data.data.nickname);
        setName(res.data.data.name);
        setMobile(res.data.data.mobile);
        setAge(res.data.data.age);
      })

      .catch((err) => console.error(err));
  }, []);

  //! 정보 수정
  const handleSubmit = () => {
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
            email: email,
            pw: pw,
            nickname: nickname,
            name: name,
            mobile: mobile,
            age: age,
          }
        )
        .then(() => {
          console.log("수정 완료!");
        });
    }
  };

  //! 휴대폰인증 요청
  const handleRequestMobileCode = () => {
    axios.post(
      "https://server.tripus.me/send-sms",
      { phone_number: "+821051652420" },
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "Content-type": "application/json",
        },
      }
    );
  };

  const handleMobileCode = () => {
    axios
      .post(
        "https://server.tripus.me/send-sms",
        { authentication_number: mobileCode },
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        setIdentification(res.data.data.identification);

        if (identification) {
          history.push("/");
        } else {
          history.push("/account");
        }
      });
  };

  //! 이메일 인증 요청
  const handleRequestEmailCode = () => {
    axios.post(
      "https://server.tripus.me/send-email",
      { email: "rnjswjadhr09@gmail.com" },
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "Content-type": "application/json",
        },
      }
    );
  };

  const handleEmailCode = () => {
    axios
      .post(
        "https://server.tripus.me/send-email",
        { authentication_code: emailCode },
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json",
          },
        }
      )
      .then(() => {
        axios
          .get(BASE_URL, {
            headers: {
              authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            setIdentification(res.data.data.identification);

            if (identification) {
              history.push("/");
            } else {
              history.push("/account");
            }
          })

          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const handleClick = (func) => {
    func((prev) => !prev);
  };

  return (
    <Page>
      <OuterWrapper className="outer-wrapper">
        <InnerWrapper className="inner-wrapper">
          <PageWrapper>
            <MainContainer>
              <h1 className="title">개인정보 수정</h1>
              <TextInput
                label="이메일"
                type="text"
                placeholder="변경할 이메일을 입력해주세요"
                width="full"
                isEdited={isEdited}
                func={setEmail}
                value={email}
                display={true}
              />

              <TextInput
                label="이메일인증"
                type="text"
                placeholder="인증코드를 입력해주세요"
                width="full"
                isEdited={true}
                func={setEmailCode}
                value={emailCode}
                display={emailRequested}
              />

              <TextInput
                label="패스워드"
                type="password"
                placeholder="새로운 암호를 입력해주세요"
                width="full"
                isEdited={isEdited}
                func={setPw}
                value={pw}
                display={true}
              />

              <TextInput
                label="새로운 패스워드"
                type="password"
                placeholder="새로운 암호를 입력해주세요"
                width="full"
                isEdited={isEdited}
                func={setNewPw}
                value={newPw}
                display={isEdited}
              />

              <TextInput
                label="새로운 패스워드 확인"
                type="password"
                placeholder="새로운 암호를 다시 한번 입력해주세요"
                width="full"
                isEdited={isEdited}
                func={setConfirmNewPw}
                value={confirmNewPw}
                display={isEdited}
              />

              <TextInput
                label="이름"
                type="text"
                width="full"
                isEdited={isEdited}
                func={setName}
                value={name}
                display={true}
              />
              <TextInput
                label="닉네임"
                type="text"
                placeholder="닉네임"
                width="full"
                func={setNickname}
                isEdited={isEdited}
                value={nickname}
                display={true}
              />

              <TextInput
                label="모바일"
                type="tel"
                placeholder="연락처"
                width="full"
                isEdited={isEdited}
                func={setMobile}
                value={mobile}
                display={true}
              />

              <TextInput
                label="모바일인증"
                type="tel"
                placeholder="인증번호를 입력해주세요"
                width="full"
                isEdited={true}
                func={setMobileCode}
                value={mobileCode}
                display={mobileRequested}
              />

              <TextInput
                label="나이"
                type="number"
                placeholder="나이"
                width="full"
                isEdited={isEdited}
                func={setAge}
                value={age}
                display={true}
              />

              <div className="buttonWrapper">
                {identification ? null : emailRequested ? (
                  <button
                    onClick={() => {
                      handleEmailCode();
                    }}
                  >
                    이메일인증 확인
                  </button>
                ) : (
                  <button
                    className="btn email"
                    onClick={() => {
                      handleClick(setEmailRequested);
                      handleRequestEmailCode();
                    }}
                  >
                    이메일인증
                  </button>
                )}
                {identification ? null : mobileRequested ? (
                  <button
                    onClick={() => {
                      handleMobileCode();
                    }}
                  >
                    휴대폰인증 확인
                  </button>
                ) : (
                  <button
                    className="btn mobile"
                    onClick={() => {
                      handleClick(setMobileRequested);
                      handleRequestMobileCode();
                    }}
                  >
                    휴대폰인증
                  </button>
                )}
                <button
                  className="btn patch"
                  onClick={() => {
                    handleClick(setIsEdited);
                  }}
                >
                  수정
                </button>

                <button className="btn confirm" onClick={handleSubmit}>
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
  );
};

export default Account;
