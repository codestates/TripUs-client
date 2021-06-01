import React, { useState, useEffect, useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
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

import { TextInput, SelectBox, Calendar, TextArea } from "./Utils";

const Recruit = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [formattedDepartureDate, setFormattedDepartureDate] = useState("");
  const [formattedReturnDate, setFormattedReturnDate] = useState("");
  const history = useHistory();

  const accessToken = localStorage.getItem("accessToken");

  const refLike = useRef(null);
  const refDislike = useRef(null);
  const refDetails = useRef(null);

  //! date 값 변경
  useEffect(() => {
    const dDate = new Date(departureDate);
    setFormattedDepartureDate(
      `${dDate.getFullYear().toString().slice(2)}년 ${
        dDate.getMonth() + 1
      }월 ${dDate.getDate()}일`
    );
  }, [departureDate]);

  useEffect(() => {
    const dDate = new Date(returnDate);
    setFormattedReturnDate(
      `${dDate.getFullYear().toString().slice(2)}년 ${
        dDate.getMonth() + 1
      }월 ${dDate.getDate()}일`
    );
  }, [returnDate]);

  //! textarea 자동 사이즈 변환
  const reSizeLike = useCallback(() => {
    if (refLike === null || refLike.current === null) {
      return;
    }
    refLike.current.style.height = "24px";
    refLike.current.style.height = refLike.current.scrollHeight + "px";
  }, []);

  const reSizeDisLike = useCallback(() => {
    if (refDislike === null || refDislike.current === null) {
      return;
    }
    refDislike.current.style.height = "24px";
    refDislike.current.style.height = refDislike.current.scrollHeight + "px";
  }, []);

  const reSizeDetails = useCallback(() => {
    if (refDetails === null || refDetails.current === null) {
      return;
    }
    refDetails.current.style.height = "24px";
    refDetails.current.style.height = refDetails.current.scrollHeight + "px";
  }, []);

  //! 새 글 작성
  const handleCLick = (values) => {
    if (accessToken === "" || accessToken === null) {
      history.push("/");
    } else {
      axios
        .post(
          "https://server.tripus.me/trip",
          {
            dantalk: values.dantalk,
            moim: values.moim,
            details: values.details,
            destination: values.destination,
            departure_date: formattedDepartureDate,
            return_date: formattedReturnDate,
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
            // withCredentials: true,
          }
        )
        .then(() => {
          history.push("/my-posts");
          console.log("포스팅 완료!");
        });
    }
  };

  //! 취소버튼
  const handleCancel = () => {
    history.push("/");
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
        console.log(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => (
        <Page as="form" onSubmit={formik.handleSubmit}>
          <OuterWrapper className="outer-wrapper">
            <InnerWrapper className="inner-wrapper">
              <PageWrapper>
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
                    ref={refDetails}
                    onInput={reSizeDetails}
                  />

                  <div className="buttonWrapper">
                    <button className="btn success">완료</button>

                    <button className="btn cancel" onClick={handleCancel}>
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
              </PageWrapper>
            </InnerWrapper>
          </OuterWrapper>
        </Page>
      )}
    </Formik>
  );
};

export default Recruit;
