import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { OuterWrapper } from "../../styles/DefaultPageSetUp";

import { StyledPage, StyledInnerWrapper } from "../../styles/AboutStyle.js";

const IMG_URL =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnJpZW5kc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

const Invite = ({
  setDestination,
  setDepartureDate,
  setReturnDate,
  setTravelType,
}) => {
  const searchTrips = () => {
    const RightNow = Date.now();
    const AYearLater = RightNow + 60 * 60 * 24 * 365 * 1000;
    setDestination("");
    setDepartureDate(RightNow);
    setReturnDate(AYearLater);
    setTravelType("");
  };

  return (
    <StyledPage background={IMG_URL} overlay={0.4}>
      <OuterWrapper>
        <StyledInnerWrapper>
          <div className="title">
            현재 6720개의 모임이 당신을 기다리고 있습니다.
          </div>
          <div className="link">
            <Link to="/search" className="button" onClick={searchTrips}>
              시작하기
            </Link>
          </div>
        </StyledInnerWrapper>
      </OuterWrapper>
    </StyledPage>
  );
};

export default Invite;
