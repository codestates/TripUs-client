import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0.7rem 0.7rem 1rem rgba(0, 0, 0, 0.2);
  margin-top: 1rem;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3%);
  }

  .card-image {
    width: 100%;
    height: 40%;

    img: {
      height: 100%;
    }
  }

  .card-content {
    margin: 0;
    height: 60%;
    padding-left: 1rem;
    padding-right: 1rem;

    background: #fff;

    .card-title {
      word-break: keep-all;
    }

    .card-text {
    }

    .card-button {
      display: block;
      width: 100%;
      padding: 1rem;
      text-align: center;
      color: #3363ff;
      background-color: #e6ecff;
      border: none;
      border-radius: 0.4rem;
      cursor: pointer;
    }
  }
`;

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1596786314237-367dcf7ab268?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQ2ODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjIyOTQzMjk&ixlib=rb-1.2.1&q=80&w=1080";

const AXIOS_URL = "https://api.unsplash.com/search/photos";
const CLIENT_ID = "3R-WZJq3nUxiCeL7ygi_qNZLe7vaMk1Wpd0EYMlogMQ";

const Card = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(AXIOS_URL, {
        params: {
          query: props.destination,
          client_id: CLIENT_ID,
          orientation: "landscape",
        },
      })
      .then((res) => {
        setImage(
          res.data.results[Math.floor(Math.random() * 10 + 1)].urls.regular
        );
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <CardContainer>
      <img src={image ? image : DEFAULT_IMG} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">출국일: {props.departure_date}</p>
        <p className="card-text">귀국일: {props.return_date}</p>
        <p className="card-text">총인원: {props.people_num}</p>

        <button type="button" className="card-button">
          자세히 보기
        </button>
      </div>
    </CardContainer>
  );
};

export default Card;
