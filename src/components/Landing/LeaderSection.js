import React from "react";
import styled from "styled-components";

const LeaderSectionComponent = styled.section`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRvZ2V0aGVyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  background-size: cover;
  background-position: bottom;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: color;

  @media (max-width: 911px) {
    height: 70vh;
  }

  @media (min-width: 911px) {
    height: 85vh;
  }

  .position-wrapper {
    @media (max-width: 911px) {
      width: 90%;
    }

    @media (min-width: 911px) {
      width: 75%;
    }
  }

  .image-wrapper {
    position: relative;
    width: 90%;
    height: 100%;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
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
        font-size: calc(1.25rem + 1vw);

        @media (max-width: 910px) {
          margin-bottom: 1rem;
        }
      }

      p {
        margin: 0;
        padding: 0;
        font-size: calc(1.25rem + 0.5vw);

        @media (max-width: 910px) {
          margin-bottom: 2rem;
        }
      }

      button {
        width: 40%;
        padding: 0.5rem;
        border: 1px solid transparent;
        border-radius: 4px;
        color: rgba(255, 255, 255, 0.95);
        background: rgba(169, 169, 169, 0.8);
        cursor: pointer;
        font-weight: 700;
        font-size: calc(0.5rem + 0.75vw);
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
      <div className="position-wrapper">
        <div className="image-wrapper">
          <div className="overlay">
            <div className="text-wrapper">
              <h3>리더가 되어 여행원을 모집해보세요!</h3>
              <p>
                새로운 사람과 새로운 장소에서 특별한 추억을 만들어 보시길
                바랍니다.
              </p>
              <button>시작하기</button>
            </div>
          </div>
        </div>
      </div>
    </LeaderSectionComponent>
  );
};

export default LeaderSection;
