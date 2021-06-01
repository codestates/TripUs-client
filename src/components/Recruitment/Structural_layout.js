import React, { useState, useEffect, useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import {
  MainContainer,
  SubContainer,
  RecruitSection,
} from "../../styles/RecruitmentStyles";
import { DatePickerComponent } from "./RecruitmetUtils";

const Structural_Layout = () => {
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
          "http://localhost:80/trip",
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
        handleCLick(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => (
        <RecruitSection onSubmit={formik.handleSubmit}>
          <div className="outer-wrapper">
            <div className="inner-wrapper">
              <MainContainer>
                <div className="title-container">
                  <h1 className="title">모집글 작성</h1>
                </div>

                <div className="departure-and-moim-container">
                  <div className="label-and-input">
                    <div className="main-label">제목</div>
                    <input
                      className="main-input"
                      type="text"
                      name="title"
                      onChange={formik.handleChange}
                      value={formik.values.title}
                    ></input>
                  </div>
                  <div className="label-and-input">
                    <div className="main-label">목적지</div>
                    <input
                      className="main-input"
                      name="destination"
                      onChange={formik.handleChange}
                      value={formik.values.destination}
                    ></input>
                  </div>
                </div>
                <div className="departure-and-moim-container">
                  <div className="label-and-input">
                    <div className="main-label">연락처</div>
                    <input
                      className="main-input"
                      type="text"
                      name="dantalk"
                      onChange={formik.handleChange}
                      value={formik.values.dantalk}
                    ></input>
                  </div>
                  <div className="label-and-input">
                    <div className="main-label">출발장소</div>
                    <input
                      className="main-input"
                      name="moim"
                      onChange={formik.handleChange}
                      value={formik.values.moim}
                    ></input>
                  </div>
                </div>

                <div className="depature-and-return-container">
                  <div className="label-and-input">
                    <div className="main-label">가는날</div>
                    <i class="far fa-caret-square-down fa-lg"></i>
                    <DatePickerComponent
                      type="departure"
                      departureDate={departureDate}
                      returnDate={returnDate}
                      dateFunc={setDepartureDate}
                    />
                    <div className="departure-border-right">
                      <input
                        className="departure-input"
                        type="text"
                        name="departure_date"
                        disabled
                      ></input>
                    </div>
                  </div>
                  <div className="label-and-input">
                    <div className="main-label">오는날</div>
                    <i class="far fa-caret-square-down fa-lg"></i>
                    <DatePickerComponent
                      type="return"
                      departureDate={departureDate}
                      returnDate={returnDate}
                      dateFunc={setReturnDate}
                    />
                    <input
                      className="return-input"
                      type="text"
                      name="return_date"
                      disabled
                    ></input>
                  </div>
                </div>

                <div className="departure-and-moim-container">
                  <div className="label-and-input">
                    <div className="main-label">동행종류</div>
                    <input
                      className="main-input"
                      type="text"
                      name="travel_type"
                      onChange={formik.handleChange}
                      value={formik.values.travel_type}
                    ></input>
                  </div>
                  <div className="label-and-input">
                    <div className="main-label">인원수</div>
                    <input
                      className="main-input"
                      name="people_num"
                      onChange={formik.handleChange}
                      value={formik.values.people_num}
                    ></input>
                  </div>
                </div>

                <div className="transportation-container">
                  <div className="transportation-label-and-input">
                    <div className="transportation-label">교통수단</div>
                    <input
                      className="transportation-input"
                      type="text"
                      name="transportation"
                      onChange={formik.handleChange}
                      value={formik.values.transportation}
                    ></input>
                  </div>
                </div>

                <div className="like-and-dislike-container">
                  <div className="like-container">
                    <div className="like-and-dislike-label">좋아하는것</div>
                    <textarea
                      className="like-and-dislike-input"
                      name="like"
                      onChange={formik.handleChange}
                      value={formik.values.like}
                      rows="1"
                      ref={refLike}
                      onInput={reSizeLike}
                    ></textarea>
                  </div>
                  <div className="dislike-container">
                    <div className="like-and-dislike-label">싫어하는것</div>
                    <textarea
                      className="like-and-dislike-input"
                      name="dislike"
                      onChange={formik.handleChange}
                      value={formik.values.dislike}
                      rows="1"
                      ref={refDislike}
                      onInput={reSizeDisLike}
                    ></textarea>
                  </div>
                </div>

                <div className="details-main-container">
                  <div className="details-container">
                    <div className="details-label">세부사항</div>
                    <textarea
                      className="details-input"
                      name="details"
                      onChange={formik.handleChange}
                      value={formik.values.details}
                      ref={refDetails}
                      onInput={reSizeDetails}
                    ></textarea>
                  </div>
                </div>

                <div className="button">
                  <button className="cancel-btn" onClick={handleCancel}>
                    취소
                  </button>
                  <button className="success-btn">완료</button>
                </div>
              </MainContainer>

              <SubContainer>
                <div className="covid-text-container">
                  <div className="covid-text">코로나 멈춰!</div>
                </div>

                <div>
                  <div className="safety-info-container">
                    <i class="fas fa-handshake-slash fa-2x"></i>
                    <div className="label-safety">COVID-19 주의사항</div>
                    <ul className="safety-info">
                      <li>백신 접종 완료자만 접촉</li>
                      <li>사람 많은 곳 피할것</li>
                      <li>경유가 거의 없는 단거리 자동차 여행</li>
                      <li>비행기 이용시 경유와 환승이 가장 적은 항공편이용</li>
                      <li>
                        게스트하우스 등 많은 사람과 공간을 공유하는 숙박시설은
                        피할것
                      </li>
                      <li>
                        음식점에서는 모든 직원이 마스크를 착용하고 사회적
                        거리두기가 가능한 식당 실외 자리에서 먹기
                      </li>
                    </ul>
                  </div>
                  <br />

                  <div className="safety-info-container">
                    <i class="fas fa-passport fa-2x"></i>
                    <div className="label-safety">안전한 여행 요령</div>
                    <ul className="safety-info">
                      <li>구체적인 계획이 없는 모집(여행일정, 목적, 장소)</li>
                      <li>자차동행은 피해주세요</li>
                      <li>노골적인 이성 모집</li>
                      <li>여행이 아닌 단순놀기 및 유흥 모집</li>
                    </ul>
                  </div>
                </div>
              </SubContainer>
            </div>
          </div>
        </RecruitSection>
      )}
    </Formik>
  );
};

export default Structural_Layout;
