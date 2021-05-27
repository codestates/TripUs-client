import React from "react";
import styled from "styled-components";

const LeaderSectionComponent = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  @media (max-width: 911px) {
    width: 65%;
    height: 70vh;
  }

  @media (min-width: 911px) {
    width: 75%;
    height: 60vh;
  }

  .image-wrapper {
    position: relative;
    width: 90%;
    height: 100%;
    background-image: url("https://images.unsplash.com/photo-1499540633125-484965b60031?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZW5kc3xlbnwwfDB8MHxibGFja3w%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
    background-size: cover;
    background-position: center;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
    }

    .text-wrapper {
      height: 30%;
      color: rgba(255, 255, 255, 0.95);
      display: flex;
      flex-direction: column;
      word-break: keep-all;
      padding-left: 3rem;
      padding-right: 3rem;
      justify-content: space-evenly;

      @media (max-width: 910px) {
        min-width: 10rem;
      }

      h3 {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;

        @media (max-width: 910px) {
          margin-bottom: 1rem;
        }
      }

      p {
        margin: 0;
        padding: 0;
        font-size: 1rem;

        @media (max-width: 910px) {
          margin-bottom: 2rem;
        }
      }

      button {
        width: 40%;
        min-height: 2rem;
        border: 1px solid transparent;
        border-radius: 4px;
        color: rgba(255, 255, 255, 0.95);
        background: rgba(169, 169, 169, 0.8);
        cursor: pointer;

        &:hover {
          background: rgba(169, 169, 169, 0.9);
        }

        @media (max-width: 911px) {
          width: 100%;
        }
      }
    }
  }
`;

const LeaderSection = () => {
  return (
    <LeaderSectionComponent>
      <div className="image-wrapper">
        <div className="overlay">
          <div className="text-wrapper">
            <h3>리더가 되어 여행원을 모집해보세요!</h3>
            <p>새로운 사람과 새로운 장소에서 특별한 추억을 만들어 보세요.</p>
            <button>시작하기</button>
          </div>
        </div>
      </div>
    </LeaderSectionComponent>
  );
};

export default LeaderSection;
