import React from "react";
import styled, { css } from "styled-components";

const MainContainerResponsive = styled.div`
  @media screen and (max-width: 2558px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    .title-container {
      display: flex;
      justify-content: center;
      width: 68%;

      .title {
      }
    }

    .departure-and-moim-container {
      display: flex;
      flex-direction: row;
      width: 68%;
      margin: 15px;

      .label-and-input {
        width: 67%;

        .main-label {
          margin-bottom: 10px;
          font-family: "Roboto", sans-serif;
          font-size: 18px;
        }

        .main-input {
          width: 85%;
        }
      }
    }

    .transportation-container {
      display: flex;
      flex-direction: row;
      width: 68%;
      margin: 15px;

      .transportation-label-and-input {
        width: 100%;
      }

      .transportation-label {
        margin-bottom: 10px;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
      }

      .transportation-input {
        width: 100%;
      }
    }

    .like-and-dislike-container {
      display: flex;
      flex-direction: column;
      width: 68%;
      height: 20%;
      margin: 15px;

      .like-container {
        height: 50%;

        .like-and-dislike-label {
          margin-bottom: 10px;
          font-family: "Roboto", sans-serif;
          font-size: 18px;
        }
        .like-and-dislike-input {
          width: 100%;
          height: 45%;
          resize: none;
        }
      }

      .dislike-container {
        height: 50%;

        .like-and-dislike-label {
          margin-bottom: 10px;
          font-family: "Roboto", sans-serif;
          font-size: 18px;
        }
        .like-and-dislike-input {
          width: 100%;
          height: 45%;
          resize: none;
        }
      }
    }

    .details-main-container {
      width: 68%;
      height: 35%;

      .details-container {
        height: 100%;

        .details-label {
          margin-bottom: 10px;
          font-family: "Roboto", sans-serif;
          font-size: 18px;
        }

        .details-input {
          width: 100%;
          height: 85%;
          resize: none;
        }
      }
    }

    .button {
      display: flex;
      justify-content: flex-end;
      width: 65%;

      .cancel-btn {
        margin-right: 1rem;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        font-weight: bold;
        background: white;
        width: 120px;
        padding: 8px;
        text-align: center;
        text-decoration: none;
        color: gray;
        border: 1px solid gray;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        --webkit-transition-property: box-shadow, transform;
        transition-property: box-shadow, transform;
      }
      .cancel-btn:hover,
      .cancel-btn:focus,
      .cancel-btn:active {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }

      .success-btn {
        position: relative;
        left: 15px;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        font-weight: bold;
        background: #1e90ff;
        width: 120px;
        padding: 8px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        --webkit-transition-property: box-shadow, transform;
        transition-property: box-shadow, transform;
      }
      .success-btn:hover,
      .success-btn:focus,
      .success-btn:active {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 912px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100rem;

    .departure-and-moim-container {
      display: flex;
      flex-direction: column;
      width: 65%;
      margin: 0px;

      .label-and-input {
        width: 100%;
        padding: 1.6rem;

        .main-label {
          margin-bottom: 10px;
          font-family: "Roboto", sans-serif;
          font-size: 18px;
        }

        .main-input {
          width: 80%;
          height: 55%;
          border: 2px solid #aaa;
          border-radius: 4px;
          outline: none;
          box-sizing: border-box;
          transition: 0.3s;
        }

        .main-input:focus {
          border-color: dodgerblue;
          box-shadow: 0 0 5px 0 dodgerblue;
        }
      }
    }

    .transportation-container {
      display: flex;
      flex-direction: column;
      width: 65%;
      height: 8%;
      margin: 0px;

      .transportation-label-and-input {
        width: 100%;
        height: 95%;
        padding: 1.6rem;
      }

      .transportation-label {
        margin-bottom: 10px;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
      }

      .transportation-input {
        width: 100%;
        height: 40%;
        border: 2px solid #aaa;
        border-radius: 4px;
        outline: none;
        box-sizing: border-box;
        transition: 0.3s;
      }
      .transportation-input:focus {
        border-color: dodgerblue;
        box-shadow: 0 0 5px 0 dodgerblue;
      }
    }

    /* like and dislike */
    .like-and-dislike-container {
      width: 65%;
      height: 20%;
      padding: 1.6rem;
      margin: -1.5rem;

      .like-container {
        height: 50%;

        .like-and-dislike-label {
          font-family: "Roboto", sans-serif;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .like-and-dislike-input {
          width: 100%;
          height: 50%;
          padding-bottom: 4.5rem;
          border: 2px solid #aaa;
          border-radius: 4px;
          outline: none;
          box-sizing: border-box;
          transition: 0.3s;
          resize: none;
        }

        .like-and-dislike-input:focus {
          border-color: dodgerblue;
          box-shadow: 0 0 5px 0 dodgerblue;
        }
      }

      .dislike-container {
        height: 50%;
        margin-top: 0.5rem;

        .like-and-dislike-label {
          font-family: "Roboto", sans-serif;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .like-and-dislike-input {
          width: 100%;
          height: 0%;
          padding-bottom: 4.5rem;
          border: 2px solid #aaa;
          border-radius: 4px;
          outline: none;
          box-sizing: border-box;
          transition: 0.3s;
          resize: none;
        }

        .like-and-dislike-input:focus {
          border-color: dodgerblue;
          box-shadow: 0 0 5px 0 dodgerblue;
        }
      }
    }
    .details-main-container {
      width: 65%;
      height: 25%;
      margin: -0.5rem;

      .details-container {
        width: 100%;
        height: 100%;
        padding: 1.6rem 1.6rem 0rem 1.6rem;

        .details-label {
          font-family: "Roboto", sans-serif;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .details-input {
          width: 100%;
          height: 80%;
          resize: none;
          border: 2px solid #aaa;
          border-radius: 4px;
          outline: none;
          box-sizing: border-box;
          transition: 0.3s;
        }

        .details-input:focus {
          border-color: dodgerblue;
          box-shadow: 0 0 5px 0 dodgerblue;
        }
      }
    }

    .button {
      display: flex;
      justify-content: flex-end;
      width: 65%;
      padding: 0px 1.6rem 1.6rem 1.6rem;

      .cancel-btn {
        margin-right: 2rem;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        font-weight: bold;
        background: white;
        width: 120px;
        padding: 8px;
        text-align: center;
        text-decoration: none;
        color: gray;
        border: 1px solid gray;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        --webkit-transition-property: box-shadow, transform;
        transition-property: box-shadow, transform;
      }
      .cancel-btn:hover,
      .cancel-btn:focus,
      .cancel-btn:active {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }

      .success-btn {
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        font-weight: bold;
        background: #1e90ff;
        left: 0px;
        width: 120px;
        padding: 8px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        --webkit-transition-property: box-shadow, transform;
        transition-property: box-shadow, transform;
      }
      .success-btn:hover,
      .success-btn:focus,
      .success-btn:active {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
  }
`;

const Structural_Layout = () => {
  return (
    <MainContainerResponsive>
      <div className="title-container">
        <h1 className="title">모집글 작성</h1>
      </div>
      <div className="departure-and-moim-container">
        <div className="label-and-input">
          <div className="main-label">목적지</div>
          <input className="main-input" type="text"></input>
        </div>
        <div className="label-and-input">
          <div className="main-label">연락처</div>
          <input className="main-input"></input>
        </div>
      </div>

      <div className="departure-and-moim-container">
        <div className="label-and-input">
          <div className="main-label">가는날</div>
          <input className="main-input" type="text"></input>
        </div>
        <div className="label-and-input">
          <div className="main-label">오는날</div>
          <input className="main-input"></input>
        </div>
      </div>

      <div className="departure-and-moim-container">
        <div className="label-and-input">
          <div className="main-label">동행종류</div>
          <input className="main-input" type="text"></input>
        </div>
        <div className="label-and-input">
          <div className="main-label">인원수</div>
          <input className="main-input"></input>
        </div>
      </div>

      <div className="transportation-container">
        <div className="transportation-label-and-input">
          <div className="transportation-label">교통수단</div>
          <input className="transportation-input" type="text"></input>
        </div>
      </div>

      <div className="like-and-dislike-container">
        <div className="like-container">
          <div className="like-and-dislike-label">좋아하는것</div>
          <textarea className="like-and-dislike-input"></textarea>
        </div>
        <div className="dislike-container">
          <div className="like-and-dislike-label">싫어하는것</div>
          <textarea className="like-and-dislike-input"></textarea>
        </div>
      </div>

      <div className="details-main-container">
        <div className="details-container">
          <div className="details-label">세부사항</div>
          <textarea className="details-input"></textarea>
        </div>
      </div>

      <div className="button">
        <div className="cancel-btn">취소</div>
        <div className="success-btn">완료</div>
      </div>
    </MainContainerResponsive>
  );
};

export default Structural_Layout;
