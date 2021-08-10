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

const MyProfilePage = () => {
  const [visited, setVisited] = useState("");
  const [language, setLanguage] = useState("");
  const [travelStyle, setTravelStyle] = useState("");
  const [mbti, setMbti] = useState("");
  const [wishList, setWishList] = useState("");
  const [intro, setIntro] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  const history = useHistory();

  if (!accessToken) {
    history.push("/login");
  }

  const BASE_URL = "https://server.tripus.me";

  const requestInfo = () => {
    axios
      .get(BASE_URL + "/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        setVisited(res.data.data.visited);
        setLanguage(res.data.data.language);
        setTravelStyle(res.data.data.travel_style);
        setMbti(res.data.data.mbti);
        setWishList(res.data.data.wishlist);
        setIntro(res.data.data.intro);
        setIsEditable(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    requestInfo();
  }, []);

  //! 프로필 수정
  const handleModifyProfile = () => {
    axios
      .post(
        BASE_URL + "/profile",
        {
          visited: visited,
          language: language,
          travel_style: travelStyle,
          mbti: mbti,
          wishlist: wishList,
          intro: intro,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.error(err));
  };

  const handleClickModified = (func) => {
    func((prev) => !prev);
  };

  //! 취소시 프로필 페이지
  const handleClickCancel = () => {
    requestInfo();
  };

  return (
    <StyledPage>
      <OuterWrapper>
        <StyledInnerWrapper>
          <div className="banner profile">
            <h1 className="title">My Profile</h1>
          </div>
          <div className="containers">
            <MainContainer>
              <TextInput
                label="방문한 나라"
                type="text"
                placeholder="지금까지 여행해본 나라를 입력해 주세요"
                isEditable={isEditable}
                func={setVisited}
                value={visited}
                display={"true"}
                width="full"
              />

              <TextInput
                label="구사 언어"
                type="text"
                placeholder="구사 가능한 언어를 입력해 주세요"
                isEditable={isEditable}
                func={setLanguage}
                value={language}
                display={"true"}
                width="full"
              />

              <TextInput
                label="여행스타일"
                type="text"
                placeholder="자신의 여행스타일을 입력해 주세요"
                isEditable={isEditable}
                func={setTravelStyle}
                value={travelStyle}
                display={"true"}
                width="full"
              />

              <TextInput
                label="MBTI"
                type="text"
                placeholder="자신의 MBTI를 입력해 주세요"
                isEditable={isEditable}
                func={setMbti}
                value={mbti}
                display={"true"}
                width="full"
              />

              <TextInput
                label="가고 싶은 여행지"
                type="text"
                placeholder="방문하고 싶은 여행지를 입력해 주세요"
                isEditable={isEditable}
                func={setWishList}
                value={wishList}
                display={"true"}
                width="full"
              />

              <TextInput
                label="자기소개"
                type="text"
                placeholder="자신을 소개할 글을 입력해주세요"
                isEditable={isEditable}
                func={setIntro}
                value={intro}
                display={"true"}
                width="full"
              />

              <div className="buttonWrapper">
                {!isEditable ? (
                  <button
                    className="btn toggle"
                    onClick={() => {
                      handleClickModified(setIsEditable);
                    }}
                  >
                    수정하기
                  </button>
                ) : (
                  <button className="btn success" onClick={handleModifyProfile}>
                    저장하기
                  </button>
                )}
                <button
                  className="btn cancel"
                  disabled={!isEditable}
                  onClick={handleClickCancel}
                >
                  취소
                </button>
              </div>
            </MainContainer>

            <SubContainer>
              <div>
                <div className="safety-info-container profile">
                  <div className="sidebarTitle">프로필은 이렇게!</div>
                  <ul>
                    <li>
                      <span>
                        <i className="fas fa-grin-squint-tears"></i>
                      </span>
                      자기소개는 재미있을수록 좋아요!
                    </li>

                    <li>
                      <span>
                        <i className="far fa-angry"></i>
                      </span>
                      자기소개에 MSG를 너무 뿌리는 건 금지!
                    </li>

                    <li>
                      <span>
                        <i className="fab fa-angellist"></i>
                      </span>
                      외국어 잘하시는 분들이 인기가 많더라구요...?
                    </li>

                    <li>
                      <span>
                        <i class="fas fa-laugh-beam"></i>
                      </span>
                      여행 성향은 싫어하는 것보다는 좋아하는 것 위주로!
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

export default MyProfilePage;
