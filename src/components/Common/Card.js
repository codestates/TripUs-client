import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import axios from "axios";

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1596786314237-367dcf7ab268?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQ2ODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjIyOTQzMjk&ixlib=rb-1.2.1&q=80&w=1080";

const searchCardStyles = css`
  @media (min-width: 991px) {
    width: calc(33% - 20px);
  }

  @media (max-width: 991px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 712px) {
    width: calc(100% - 20px);
  }
`;

const myListsCardStyles = css`
  @media (min-width: 991px) {
    width: calc(40% - 20px);
  }

  @media (max-width: 991px) {
    width: calc(99% - 20px);
  }

  @media (max-width: 712px) {
    width: calc(100% - 20px);
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.6rem 2rem 0.6rem;
  max-height: 30rem;
  overflow: scroll;

  box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3%);
  }

  ${(props) => (props.role === "search" ? searchCardStyles : myListsCardStyles)}
`;

const CardImageContainer = styled.div`
  flex: 1 1 auto;
  width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  min-height: 220px;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.06)
    ),
    url(${(props) => (props.background ? props.background : DEFAULT_IMG)});

  .card-info {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    );
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    padding: 15px;

    .author-info {
      display: flex;
      left: 15px;
      bottom: 15px;
      height: 100%;
      align-items: center;

      i {
        color: white;
        font-size: 1.7rem;
      }

      .username {
        margin-left: 1rem;
        font-size: 2rem;
        font-weight: bold;
        word-break: break-all;
        color: #fcfcfc;
        font-size: 1rem;
      }
    }
  }
`;

const CardContentContainer = styled.div`
  flex: 1 1 auto;
  padding: 1rem;
  color: #474747;
  display: flex;
  flex-direction: column;
  background: #fff;

  .trip-info {
    font-size: 0.9rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    display: flex;
  }

  .trip-destination {
    color: #2cacd6;
  }

  .trip-type {
    color: #737373;
    margin-left: 0.5rem;
  }

  .card-title {
    word-break: keep-all;
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-weight: bold;
  }

  .card-trip-duration {
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .card-button {
    display: block;
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    background: #fff;
    letter-spacing: 0.5rem;
    color: rgba(47, 86, 187, 1);
    border: 1px solid rgba(47, 86, 187, 1);
    border-radius: 0.4rem;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      color: #fff;
      background: rgb(45, 224, 255);
      background: linear-gradient(
        90deg,
        rgba(45, 224, 255, 1) 0%,
        rgba(47, 86, 187, 1) 100%
      );
    }
  }
`;

const AXIOS_URL = "https://api.unsplash.com/search/photos";
const CLIENT_ID = "3R-WZJq3nUxiCeL7ygi_qNZLe7vaMk1Wpd0EYMlogMQ";

const Card = (props) => {
  const [image, setImage] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(AXIOS_URL, {
  //       params: {
  //         query: props.destination,
  //         client_id: CLIENT_ID,
  //         orientation: "landscape",
  //       },
  //     })
  //     .then((res) => {
  //       setImage(
  //         res.data.results[Math.floor(Math.random() * 10 + 1)].urls.regular
  //       );
  //     })
  //     .catch((e) => console.log(e));
  // }, [props.destination]);

  return (
    <CardContainer role={props.role}>
      <CardImageContainer background={image}>
        <div className="card-info">
          <div className="author-info">
            <div>
              {props.verified ? (
                <i className="fas fa-check-circle"></i>
              ) : (
                <i className="fas fa-exclamation"></i>
              )}
            </div>
            <p className="username">{props.nickname}</p>
          </div>
        </div>
      </CardImageContainer>
      <CardContentContainer>
        <div className="trip-info">
          <div className="trip-destination">{props.destination}</div>
          <div className="trip-type">{props.type}</div>
        </div>
        <h3 className="card-title">{`${props.title.slice(0, 20)}...`}</h3>
        <p className="card-trip-duration">
          {props.departure_date}~{props.return_date}
        </p>
        <p className="card-text">총인원: {props.people_num}</p>

        <button type="button" className="card-button">
          자세히 보기
        </button>
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
