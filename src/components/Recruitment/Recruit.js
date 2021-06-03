import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";

import { Page, OuterWrapper } from "../../styles/DefaultPageSetUp";

import {
  StyledInnerWrapper,
  MainContainer,
  SubContainer,
} from "../../styles/RecruitmentStyles";

import { TextInput, SelectBox, Calendar, TextArea } from "./Utils";

const Recruit = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const history = useHistory();

  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    history.push("/login");
  }

  //! 새 글 작성
  const handleClick = (values) => {
    axios
      .post(
        "https://server.tripus.me/trip",
        {
          dantalk: values.dantalk,
          moim: values.moim,
          details: values.details,
          destination: values.destination,
          departure_date: Date.parse(departureDate),
          return_date: Date.parse(returnDate),
          travel_type: values.travel_type,
          transportation: values.transportation,
          people_num: values.people_num,
          like: values.like,
          dislike: values.dislike,
          title: values.title,
        },
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        history.push("/my-posts");
        console.log("포스팅 완료!");
      });
  };

  return (
    <Formik
      initialValues={{
        dantalk: "",
        moim: "",
        details: "",
        destination: "",
        travel_type: "",
        transportation: "",
        people_num: "",
        like: "",
        dislike: "",
        title: "",
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleClick(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => (
        <Page as="form" onSubmit={formik.handleSubmit}>
          <OuterWrapper>
            <StyledInnerWrapper>
              <MainContainer>
                <h1 className="title">모집글 작성</h1>

                <TextInput
                  name="title"
                  label="제목"
                  type="text"
                  id="title"
                  placeholder="제목을 자유롭게 작성해주세요"
                  width="full"
                />

                <TextInput
                  name="destination"
                  label="목적지"
                  type="text"
                  id="destination"
                  placeholder="어디로 가실 계획인가요?"
                  width="full"
                />

                <TextInput
                  name="dantalk"
                  label="연락처"
                  type="text"
                  id="dantalk"
                  placeholder="연락처를 작성해주세요"
                  width="full"
                />

                <TextInput
                  name="moim"
                  label="출발장소"
                  type="text"
                  id="moim"
                  placeholder="어디서 출발하시나요?"
                  width="full"
                />

                <div className="double-input">
                  <Calendar
                    name="departure"
                    role="departure"
                    label="가는 날"
                    id="departure"
                    placeholder="언제 여행을 가시나요?"
                    width="half"
                    departureDate={departureDate}
                    returnDate={returnDate}
                    dateFunc={setDepartureDate}
                  />

                  <Calendar
                    name="return"
                    role="return"
                    label="오늘 날"
                    id="return"
                    placeholder="언제 여행에서 돌아오시나요?"
                    width="half"
                    departureDate={departureDate}
                    returnDate={returnDate}
                    dateFunc={setReturnDate}
                  />
                </div>

                <div className="double-input">
                  <SelectBox
                    name="travel_type"
                    label="동행 종류"
                    id="travel_type"
                    placeholder="어떤 종류의 동행을 구하시나요?"
                    width="half"
                  />

                  <TextInput
                    name="people_num"
                    label="인원 수"
                    type="number"
                    id="people_num"
                    placeholder="몇 명의 동행원을 구하시나요?"
                    width="half"
                  />
                </div>

                <TextInput
                  name="transportation"
                  label="교통수단"
                  type="text"
                  id="transportation"
                  placeholder="어떤 교통수단을 활용하실 건가요?"
                  width="full"
                />

                <TextInput
                  name="like"
                  label="선호"
                  type="text"
                  id="like"
                  placeholder="이번 여행에서 어떤 것을 기대하고 계신가요?"
                  width="full"
                />

                <TextInput
                  name="dislike"
                  label="기피"
                  type="text"
                  id="dislike"
                  placeholder="이번 여행에서 어떤 것을 피하고 싶으신가요?"
                  width="full"
                />

                <TextArea
                  name="details"
                  label="세부사항"
                  id="details"
                  placeholder="여행 관련 세부 사항을 작성해주세요"
                  width="full"
                />

                <div className="buttonWrapper">
                  <button type="submit" className="btn success">
                    완료
                  </button>

                  <button className="btn cancel" onClick={formik.handleReset}>
                    취소
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
            </StyledInnerWrapper>
          </OuterWrapper>
        </Page>
      )}
    </Formik>
  );
};

export default Recruit;
