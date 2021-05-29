import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiMagnifyingGlass } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

const EnjoyTripUsSectionComponent = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  height: 45vh;
  word-break: keep-all;
  width: 100%;
  background: #111921;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 911px) {
    height: 60vh;
  }

  .section-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: rgba(255, 255, 255, 0.9);

    @media (max-width: 911px) {
      width: 90%;
    }

    @media (min-width: 911px) {
      width: 75%;
    }

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: calc(1rem + 1vw);
    }

    .methods-wrapper {
      width: 90%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 911px) {
        flex-direction: column;
      }

      .method-wrapper {
        width: 50%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: inherit;

        @media (max-width: 911px) {
          width: 90%;
        }

        &:first-of-type {
          @media (min-width: 911px) {
            border-right: 1px solid #fff;
          }
          @media (max-width: 911px) {
            border-bottom: 1px solid #fff;
          }
        }
      }

      .icon-wrapper {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          height: 3rem;
          width: 3rem;
        }
      }

      .text-wrapper {
        height: 100%;
        width: 70%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;

        h4 {
          font-size: calc(1rem + 0.5vw);
          margin: 0;
        }
      }
    }
  }
`;

const EnjoyTripUsSection = () => {
  return (
    <EnjoyTripUsSectionComponent>
      <div className="section-wrapper">
        <h3>TripUs를 즐기는 방법!</h3>
        <div className="methods-wrapper">
          <Link to="/" className="search-wrapper method-wrapper">
            <div className="icon-wrapper">
              <GiMagnifyingGlass />
            </div>
            <div className="text-wrapper">
              <h4>모임 탐색하기</h4>
              <p>나와 잘 맞는 여행자 모임을 찾아보세요.</p>
            </div>
          </Link>
          <Link to="/" className="find-wrapper method-wrapper">
            <div className="icon-wrapper">
              <AiOutlinePlus />
            </div>
            <div className="text-wrapper">
              <h4>여행 시작하기</h4>
              <p>직접 여행 모임을 만들어 보세요.</p>
            </div>
          </Link>
        </div>
      </div>
    </EnjoyTripUsSectionComponent>
  );
};

export default EnjoyTripUsSection;
