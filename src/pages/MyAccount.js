import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { OuterWrapper } from "../styles/DefaultPageSetUp";

import {
  StyledPage,
  StyledInnerWrapper,
  MainContainer,
  SubContainer,
} from "../styles/AccountStyle";

import TextInput from "../components/Common/TextInput";

const MyAccountPage = () => {
  // 회원정보 관련
  const [identification, setIdentification] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmNewPw, setConfirmNewPw] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");

  // 인증 관련
  const [emailRequested, setEmailRequested] = useState(false);
  const [emailCode, setEmailCode] = useState("");
  const [mobileRequested, setMobileRequested] = useState(false);
  const [mobileCode, setMobileCode] = useState("");

  // 정보 수정 가능 상태
  const [isEditable, setIsEditable] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  const history = useHistory();

  const BASE_URL = "https://server.tripus.me";

  const requestInfo = () => {
    axios
      .get(BASE_URL + "/account-info", {
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
  };

  useEffect(() => {
    requestInfo();
  }, []);

  //! 정보 수정
  const handleSubmit = () => {
    if (accessToken === "" || accessToken === null) {
      history.push("/");
    } else {
      axios
        .patch(
          "https://server.tripus.me/account-info",
          {
            email: email,
            pw: pw,
            nickname: nickname,
            name: name,
            mobile: mobile,
            age: age,
          },
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
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
      "http://localhost:80/send-email",
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
        "http://localhost:80/send-email",
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
    <StyledPage>
      <OuterWrapper>
        <StyledInnerWrapper>
          <div className="banner account">
            <h1 className="title">My Account</h1>
          </div>
          <div className="containers">
            <MainContainer>
              <TextInput
                label="이메일"
                type="text"
                placeholder="변경할 이메일을 입력해주세요"
                isEditable={isEditable}
                func={setEmail}
                value={email}
                display={true}
                width="full"
              />

              <TextInput
                label="이메일인증"
                type="text"
                placeholder="인증코드를 입력해주세요"
                isEditable={true}
                func={setEmailCode}
                value={emailCode}
                display={emailRequested}
                width="full"
              />

              <TextInput
                label="패스워드"
                type="password"
                placeholder="새로운 암호를 입력해주세요"
                isEditable={isEditable}
                func={setPw}
                value={pw}
                display={true}
                width="full"
              />

              <TextInput
                label="새로운 패스워드"
                type="password"
                placeholder="새로운 암호를 입력해주세요"
                isEditable={isEditable}
                func={setNewPw}
                value={newPw}
                display={isEditable}
                width="full"
              />

              <TextInput
                label="새로운 패스워드 확인"
                type="password"
                placeholder="새로운 암호를 다시 한번 입력해주세요"
                isEditable={isEditable}
                func={setConfirmNewPw}
                value={confirmNewPw}
                display={isEditable}
                width="full"
              />

              <TextInput
                label="이름"
                type="text"
                isEditable={isEditable}
                func={setName}
                value={name}
                display={true}
                width="full"
              />

              <TextInput
                label="닉네임"
                type="text"
                placeholder="닉네임"
                func={setNickname}
                isEditable={isEditable}
                value={nickname}
                display={true}
                width="full"
              />

              <TextInput
                label="모바일"
                type="password"
                placeholder="연락처"
                isEditable={isEditable}
                func={setMobile}
                value={mobile}
                display={true}
                width="full"
              />

              <TextInput
                label="모바일인증"
                type="tel"
                placeholder="인증번호를 입력해주세요"
                isEditable={true}
                func={setMobileCode}
                value={mobileCode}
                display={mobileRequested}
                width="full"
              />

              <TextInput
                label="나이"
                type="number"
                placeholder="나이"
                isEditable={isEditable}
                func={setAge}
                value={age}
                display={true}
                width="full"
              />

              <div className="buttonWrapper">
                {identification ? null : emailRequested ? (
                  <button
                    className="btn verify"
                    onClick={() => {
                      handleEmailCode();
                    }}
                  >
                    이메일 인증 확인
                  </button>
                ) : (
                  <button
                    className="btn email"
                    onClick={() => {
                      handleClick(setEmailRequested);
                      handleRequestEmailCode();
                    }}
                  >
                    이메일 인증
                  </button>
                )}
                {identification ? null : mobileRequested ? (
                  <button
                    className="btn verify"
                    onClick={() => {
                      handleMobileCode();
                    }}
                  >
                    휴대폰 인증 확인
                  </button>
                ) : (
                  <button
                    className="btn mobile"
                    onClick={() => {
                      handleClick(setMobileRequested);
                      handleRequestMobileCode();
                    }}
                  >
                    휴대폰 인증
                  </button>
                )}
                {isEditable ? (
                  <button className="btn success" onClick={handleSubmit}>
                    저장하기
                  </button>
                ) : (
                  <button
                    className="btn toggle"
                    onClick={() => {
                      handleClick(() => {
                        setIsEditable(true);
                      });
                    }}
                  >
                    수정하기
                  </button>
                )}
                <button
                  className="btn cancel"
                  disabled={!isEditable}
                  onClick={requestInfo}
                >
                  취소
                </button>
              </div>
            </MainContainer>

            <SubContainer>
              <div>
                <div className="safety-info-container account">
                  <div className="sidebarTitle">개인 정보 관련 유의사항</div>
                  <ul>
                    <li>
                      <span>
                        <i class="fas fa-lightbulb"></i>
                      </span>
                      비밀번호는 주기적으로 교체해주세요
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-lightbulb"></i>
                      </span>
                      트립어스는 절대 메일을 통해 사용자의 암호를 묻지 않습니다
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-lightbulb"></i>
                      </span>
                      공공 장소에서 접속한 경우, 로그아웃을 잊지 마세요
                    </li>
                  </ul>
                </div>
              </div>
            </SubContainer>
          </div>
        </StyledInnerWrapper>
      </OuterWrapper>
    </StyledPage>
  );
};

export default MyAccountPage;
