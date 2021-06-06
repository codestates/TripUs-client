import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { LoadDetails } from "../components/Trip/TripUtils";

import { OuterWrapper } from "../styles/DefaultPageSetUp";
import {
  StyledPage,
  StyledInnerWrapper,
  TitleSection,
  DetailSection,
  MainContainer,
  SubContainer,
  PageWrapper,
} from "../styles/TripStyles";

const Trip = () => {
  const [destination, setDestination] = useState("");
  const [moim, setMoim] = useState("");
  const [departure_date, setDeparture_date] = useState("");
  const [return_date, setReturn_date] = useState("");
  const [travel_type, setTravel_type] = useState("");
  const [people_num, setPeople_num] = useState("");
  const [transportation, setTransportation] = useState("");
  const [like, setLike] = useState("");
  const [dislike, setDislike] = useState("");
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const [nickname, setNickname] = useState("");
  const [dantalk, setDantalk] = useState("");

  const [firstName, setFirstName] = useState("");
  const [user_picture, setUser_picture] = useState("");

  const [user_count, setUser_count] = useState(
    () => JSON.parse(window.localStorage.getItem("user_count")) || 0
  );
  const history = useHistory();
  const accessToken = localStorage.getItem("accessToken");
  const BASE_URL = "https://server.tripus.me/";

  const { id } = useParams();

  useEffect(async () => {
    console.log("유저정보 가져오는 GET 요청 실행됨");
    await axios
      .get(BASE_URL + `trip/${id}`, {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      })
      .then((res) => {
        console.log(res.data);
        setDestination(res.data.data[0].destination);
        setMoim(res.data.data[0].moim);
        setDeparture_date(res.data.data[0].departure_date);
        setReturn_date(res.data.data[0].return_date);
        setTravel_type(res.data.data[0].travel_type);
        setPeople_num(res.data.data[0].people_num);
        setTransportation(res.data.data[0].transportation);
        setLike(res.data.data[0].like);
        setDislike(res.data.data[0].dislike);
        setDetails(res.data.data[0].details);
        setTitle(res.data.data[0].title);
        setNickname(res.data.data[0].nickname);
        setDantalk(res.data.data[0].dantalk);
      })
      .catch((err) => console.error(err));

    await axios
      .get("https://randomuser.me/api/? results = 10", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setFirstName(res.data.results[0].name.first);
        setUser_picture(res.data.results[0].picture.thumbnail);
      });
    window.localStorage.setItem("user_count", JSON.stringify(user_count));
  }, [user_count]);

  useEffect(() => {
    setUser_count(user_count + 1);
  }, []);

  const handleApply = () => {
    axios
      .post(
        BASE_URL + `trip/${id}`,
        { post_id: id },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };
  const handleEdit = () => {
    history.push(`/trip/${id}/edit`);
  };

  const depar_date = new Date(departure_date);
  const getDepar = `${depar_date.getFullYear()}년 ${depar_date.getMonth()}월 ${depar_date.getDate()}일`.slice(
    2
  );

  const arrival_date = new Date(return_date);
  const getReturn = `${arrival_date.getFullYear()}년 ${arrival_date.getMonth()}월 ${arrival_date.getDate()}일`.slice(
    2
  );
  // const mapStyles = {
  //   width: "50%",
  //   height: "50%",
  // };
  // const YOUR_API_KEY = "AIzaSyCJpXMlR0x5ojuRiUTwk_Ige1FGk6sRdns";

  return (
    <StyledPage>
      <OuterWrapper>
        <StyledInnerWrapper>
          <div className="banner apply">
            <h1 className="title">동행 지원서</h1>
          </div>
          <div className="containers">
            <MainContainer>
              <TitleSection>
                <span className="destination">
                  <i class="fas fa-map-marker-alt"></i>
                  {destination}
                </span>
                <h1 className="titleMain">{title}</h1>
                <div className="titleUserAndEditBtn">
                  <div className="User_nickName">
                    <i class="fas fa-user-circle"></i>
                    <h5>{nickname}</h5>
                  </div>
                </div>
              </TitleSection>
              <DetailSection>
                <LoadDetails
                  name="출발날짜"
                  label="출발날짜"
                  width="full"
                  value={getDepar}
                ></LoadDetails>
                <LoadDetails
                  name="도착날짜"
                  label="도착날짜"
                  width="full"
                  value={getReturn}
                ></LoadDetails>
                <LoadDetails
                  name="동행타입"
                  label="동행타입"
                  width="full"
                  value={travel_type}
                ></LoadDetails>
                <LoadDetails
                  name="모집인원"
                  label="모집인원"
                  width="full"
                  value={people_num}
                ></LoadDetails>
                <LoadDetails
                  name="동행수단"
                  label="동행수단"
                  width="full"
                  value={transportation}
                ></LoadDetails>
                <LoadDetails
                  name="선호하는 여행스타일"
                  label="선호하는 여행스타일"
                  width="full"
                  value={like}
                ></LoadDetails>
                <LoadDetails
                  name="비선호하는 여행스타일"
                  label="비선호하는 여행스타일"
                  width="full"
                  value={dislike}
                ></LoadDetails>
                <LoadDetails
                  name="연락수단"
                  label="연락수단"
                  width="full"
                  value={dantalk}
                ></LoadDetails>
                <LoadDetails
                  name="세부설명"
                  label="세부설명"
                  width="full"
                  value={details}
                ></LoadDetails>
              </DetailSection>
            </MainContainer>
            <SubContainer>
              <div className="apply-info-container ">
                <div className="sidebarTitle">동행 세부장소 및 날짜</div>
                <ul>
                  <li>
                    <span>
                      <i class="fas fa-calendar-check"></i>
                      {getDepar}
                    </span>
                    <span>
                      <i class="fas fa-map-marked"></i>
                      {moim}
                    </span>
                  </li>
                  <div className="randomUser_info">
                    <div className="randomUser">
                      {user_count}명의 회원들이 이 모임에 관심을 갖고있습니다
                    </div>
                    <img className="user_thumbnail" src={user_picture}></img>
                  </div>
                  {/* <Map
                    google={this.props.google}
                    zoom={8}
                    styles={mapStyles}
                    initialCenter={{ lat: 0, lng: 0 }}
                  >
                    <Marker position={{ lat: 0, lng: 0 }} />
                  </Map> */}

                  <div className="btnWrapper">
                    <button className="btn apply" onClick={handleApply}>
                      지원하기
                    </button>

                    <button
                      className="btn edit"
                      onClick={() => alert("준비중인 기능입니다!")}
                    >
                      수정하기
                    </button>
                  </div>
                </ul>
              </div>
            </SubContainer>
          </div>
        </StyledInnerWrapper>
      </OuterWrapper>
    </StyledPage>
  );
};
export default Trip;
