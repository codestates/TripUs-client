import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  Page,
  OuterWrapper,
  InnerWrapper,
} from "../../styles/DefaultPageSetUp";

const IMG_URL =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnJpZW5kc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

const InviteWrapper = styled.div`
  word-break: keep-all;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  color: #f5f5f5;

  .title {
    margin-bottom: 2rem;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #f5f5f5;
  }
`;

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
    <Page background={IMG_URL} height={50} overlay={0.4}>
      <OuterWrapper>
        <InnerWrapper>
          <InviteWrapper>
            <div className="title">
              6720개의 모임이 당신을 기다리고 있습니다.
            </div>
            <Link to="/search" className="button" onClick={searchTrips}>
              시작하기
            </Link>
          </InviteWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default Invite;
