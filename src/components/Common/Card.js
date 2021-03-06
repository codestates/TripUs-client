import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1596786314237-367dcf7ab268?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzQ2ODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjIyOTQzMjk&ixlib=rb-1.2.1&q=80&w=1080";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.6rem 2rem 0.6rem;
  max-height: 30rem;
  overflow: scroll;
  width: 100%;

  box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3%);
  }
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
        font-size: 1.1rem;
        margin-left: 0.3rem;
      }

      .username {
        margin-left: 0.3rem;
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

const Card = (props) => {
  const [image, setImage] = useState("");
  const [formattedDepDate, setFormattedDepDate] = useState("");
  const [formattedRetDate, setFormattedRetDate] = useState("");
  const history = useHistory();
  useEffect(() => {
    const dDate = new Date(props.departure_date);
    setFormattedDepDate(
      `${dDate.getFullYear().toString().slice(2)}??? ${
        dDate.getMonth() + 1
      }??? ${dDate.getDate()}???`
    );
  }, [props.departure_date]);

  useEffect(() => {
    const rDate = new Date(props.return_date);
    setFormattedRetDate(
      `${rDate.getFullYear().toString().slice(2)}??? ${
        rDate.getMonth() + 1
      }??? ${rDate.getDate()}???`
    );
  }, [props.return_date]);

  return (
    <CardContainer role={props.role}>
      <CardImageContainer background={image}>
        <div className="card-info">
          <div className="author-info">
            <p className="username">{props.nickname}</p>
            <div>
              {props.identification ? (
                <i className="fas fa-check-circle"></i>
              ) : null}
            </div>
          </div>
        </div>
      </CardImageContainer>
      <CardContentContainer>
        <div className="trip-info">
          <div className="trip-destination">{props.destination}</div>
          <div className="trip-type">{props.type}</div>
        </div>
        <h3 className="card-title">{`${props.title}...`}</h3>
        <p className="card-trip-duration">
          {formattedDepDate}~{formattedRetDate}
        </p>
        <p className="card-text">?????????: {props.people_num}</p>

        <button
          type="button"
          className="card-button"
          onClick={() => {
            history.push(`/trip/${props.id}`);
          }}
        >
          ????????? ??????
        </button>
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
