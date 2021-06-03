import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Page, OuterWrapper, InnerWrapper } from "../styles/DefaultPageSetUp";

import { TextInput } from "../components/Profile/ProfileUtils";

const PageWrapper = styled.div`
  border: 1px;
  display: flex;
  flex-direction: column;
  /* min-height: 92rem; */
  margin-top: 5rem;

  .title {
    text-align: center;
    color: #3b3d40;
    margin-bottom: 3rem;
  }

  .buttonWrapper {
    display: flex;
    justify-content: flex-end;
    width: 90%;
    margin-top: 2rem;

    .btn {
      font-size: 1rem;
      font-weight: bold;
      width: 120px;
      padding: 8px;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease-in-out;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.9;
      }
    }

    .success {
      background: #1e90ff;
      color: #fff;
      margin-right: 1rem;
    }

    .cancel {
      background: white;
      color: gray;
      border: 1px solid gray;
    }
  }
`;

const Profile = () => {
  const [visited, setVisited] = useState("");
  const [language, setLanguage] = useState("");
  const [travelStyle, setTravelStyle] = useState("");
  const [mbti, setMbti] = useState("");
  const [wishList, setWishList] = useState("");
  const [intro, setIntro] = useState("");
  const [isModified, setIsModified] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  const BASE_URL = "https://server.tripus.me";

  useEffect(() => {
    axios
      .get(BASE_URL + "/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setVisited(res.data.data.visited);
        setLanguage(res.data.data.language);
        setTravelStyle(res.data.data.travel_style);
        setMbti(res.data.data.mbti);
        setWishList(res.data.data.wishlist);
        setIntro(res.data.data.intro);
      });
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
        console.log("프로필 수정 완료!");

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
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const handleClickModified = (func) => {
    func((prev) => !prev);
  };

  //! 취소시 프로필페이지

  const handleClickCancel = () => {
    axios
      .get(BASE_URL + "/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setVisited(res.data.data.visited);
        setLanguage(res.data.data.language);
        setTravelStyle(res.data.data.travel_style);
        setMbti(res.data.data.mbti);
        setWishList(res.data.data.wishlist);
        setIntro(res.data.data.intro);
      });
  };

  return (
    <Page>
      <OuterWrapper>
        <InnerWrapper>
          <PageWrapper>
            <h1 className="title">프로필</h1>
            <TextInput
              label="방문한나라"
              type="text"
              placeholder="직접방문한 나라를 입력해 주세요"
              isModified={isModified}
              func={setVisited}
              value={visited}
            />
            <TextInput
              label="언어"
              type="text"
              placeholder="구사하는 언어를 입력해 주세요"
              isModified={isModified}
              func={setLanguage}
              value={language}
            />
            <TextInput
              label="여행스타일"
              type="text"
              placeholder="자신의 여행스타일을 입력해 주세요"
              isModified={isModified}
              func={setTravelStyle}
              value={travelStyle}
            />
            <TextInput
              label="mbti"
              type="text"
              placeholder="자신의 MBTI를 입력해 주세요"
              isModified={isModified}
              func={setMbti}
              value={mbti}
            />
            <TextInput
              label="가고싶은 여행지"
              type="text"
              placeholder="방문하고싶은 여행지를 입력해 주세요"
              isModified={isModified}
              func={setWishList}
              value={wishList}
            />
            <TextInput
              label="intro"
              type="text"
              placeholder="자신을 소개할 글을 입력해주세요"
              isModified={isModified}
              func={setIntro}
              value={intro}
            />
            <div className="buttonWrapper">
              {!isModified ? (
                <button
                  className="btn modify"
                  onClick={() => {
                    handleClickModified(setIsModified);
                  }}
                >
                  수정
                </button>
              ) : (
                <button className="btn success" onClick={handleModifyProfile}>
                  완료
                </button>
              )}
              <button
                className="btn cancel"
                disabled={!isModified}
                onClick={handleClickCancel}
              >
                취소
              </button>
            </div>
          </PageWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default Profile;
