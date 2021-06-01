import styled from "styled-components";
import jua from "../fonts/BMJUA_otf.otf";
import euljiro from "../fonts/BMEuljiro10yearslaterOTF.otf";
import hannaYrs from "../fonts/BMHANNA_11yrs_otf.otf";
import hannaAir from "../fonts/BMHANNAAir_otf.otf";

export const RecruitSection = styled.form`
  display: flex;
  justify-content: center;
  height: 143%;
  width: 100%;

  @media screen and (max-width: 911px) {
    display: flex;
    justify-content: center;
    height: 173%;
    width: 100%;
  }

  .outer-wrapper {
    @media (max-width: 911px) {
      width: 90%;
    }
    @media (min-width: 911px) {
      width: 75%;
    }

    display: flex;
    justify-content: center;
  }

  .inner-wrapper {
    display: flex;
    width: 90%;
  }
`;

export const MainContainer = styled.div`
  @media screen and (max-width: 2568px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    @media screen and (min-width: 911px) {
      width: 80%;
    }
    @media screen and (max-width: 911px) {
      width: 100%;
    }

    @font-face {
      font-family: "jua";
      src: url(${jua}) format("opentype");
    }

    @font-face {
      font-family: "hannaAir";
      src: url(${hannaAir}) format("opentype");
    }

    @font-face {
      font-family: "hannaYrs";
      src: url(${hannaYrs}) format("opentype");
    }

    .title-container {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 10px;
      margin-bottom: 31px;
      margin-right: 45px;

      .title {
        font-family: "jua";
        color: #3b3d40;
      }
    }

    .departure-and-moim-container {
      display: flex;
      flex-direction: column;
      width: 100%;

      .label-and-input {
        width: 100%;
        margin-bottom: 20px;

        .main-label {
          margin-bottom: 25px;
          font-family: "Noto Serif";
          font-size: 17px;
        }

        .main-input {
          width: 87%;
          margin-bottom: 15px;
          border-width: 0 0 2px;
          border-color: #d9d9d9;
          transition: 0.3s;
        }
        .main-input:focus {
          border-color: dodgerblue;
        }
      }
    }

    .depature-and-return-container {
      display: flex;
      width: 100%;

      .label-and-input {
        width: 100%;
        margin-bottom: 20px;

        .main-label {
          margin-bottom: 25px;
          font-family: "Noto Serif";
          font-size: 17px;
        }

        .main-input {
          width: 74%;
          margin-bottom: 15px;
          padding-left: 28px;
          border-width: 0 0 2px;
          border-color: #d9d9d9;
          transition: 0.3s;
        }
        .main-input:focus {
          border-color: dodgerblue;
        }

        .departure-input {
          width: 87%;
          margin-bottom: 15px;
          padding-left: 28px;
          border-width: 0 0 2px;
          border-color: #d9d9d9;
        }

        .return-input {
          width: 74%;
          margin-bottom: 15px;
          padding-left: 28px;
          border-width: 0 0 2px;
          border-color: #d9d9d9;
        }

        .departure-border-right {
          border-right: 1px solid #d9d9d9;
          width: 88%;
          height: 20%;
        }

        i {
          position: absolute;
          top: 52.2%;
          margin-top: 110px;
          z-index: 1;
          color: gray;
          transition: 0.3s;

          &:hover,
          &:focus,
          &:active {
            color: dodgerblue;
            box-shadow: 0 0 2 dodgerblue;
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
          }
        }
      }
    }

    .transportation-container {
      display: flex;
      flex-direction: row;
      width: 100%;

      .transportation-label-and-input {
        width: 100%;
        margin-bottom: 40px;
      }

      .transportation-label {
        margin-bottom: 26px;
        font-family: "Noto Serif";
        font-size: 17px;
      }

      .transportation-input {
        width: 87%;
        border-width: 0 0 2px;
        border-color: #d9d9d9;
        transition: 0.5s;
      }

      .transportation-input:focus {
        border-color: dodgerblue;
      }
    }

    .like-and-dislike-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 15%;

      .like-container {
        height: 50%;

        .like-and-dislike-label {
          margin-bottom: 25px;
          font-family: "Noto Serif";
          font-size: 17px;
        }
        .like-and-dislike-input {
          display: block;
          resize: none;
          overflow: hidden;
          outline: none;
          box-sizing: border-box;
          min-height: 24px;
          max-height: 65px;
          line-height: 20px;
          width: 87%;
          border-width: 0 0 2px;
          border-color: #d9d9d9;

          &:focus {
            border-color: dodgerblue;
          }
        }
      }

      .dislike-container {
        height: 50%;

        .like-and-dislike-label {
          margin-bottom: 25px;
          font-family: "Noto Serif";
          font-size: 17px;
        }
        .like-and-dislike-input {
          display: block;
          resize: none;
          overflow: hidden;
          outline: none;
          box-sizing: border-box;
          min-height: 24px;
          max-height: 65px;
          line-height: 20px;
          width: 87%;
          border-width: 0 0 2px;
          border-color: #d9d9d9;

          &:focus {
            border-color: dodgerblue;
          }
        }
      }
    }

    .details-main-container {
      width: 100%;
      margin-top: 20px;

      .details-container {
        height: 100%;

        .details-label {
          margin-bottom: 25px;
          font-family: "Noto Serif";
          font-size: 17px;
        }

        .details-input {
          display: block;
          resize: none;
          overflow: hidden;
          outline: none;
          box-sizing: border-box;
          min-height: 24px;
          max-height: 230px;
          line-height: 20px;
          width: 87%;
          height: 20px;
          border-width: 0 0 2px;
          border-color: #d9d9d9;

          &:focus {
            border-color: dodgerblue;
          }
        }
      }
    }

    .button {
      display: flex;
      justify-content: flex-end;
      width: 74%;
      height: 4%;

      .cancel-btn {
        margin-right: 2rem;
        font-family: "jua";
        font-size: 18px;
        font-weight: bold;
        background: white;
        height: 70%;
        width: 120px;
        padding: 8px;
        position: relative;
        top: 30px;
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
        font-family: "jua";
        font-size: 18px;
        font-weight: bold;
        background: #1e90ff;
        width: 120px;
        height: 70%;
        position: relative;
        top: 30px;
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

  @media screen and (max-width: 911px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 119rem;
    width: 100%;

    @font-face {
      font-family: "jua";
      src: url(${jua}) format("opentype");
    }

    @font-face {
      font-family: "hannaAir";
      src: url(${hannaAir}) format("opentype");
    }

    @font-face {
      font-family: "hannaYrs";
      src: url(${hannaYrs}) format("opentype");
    }

    .departure-and-moim-container {
      display: flex;
      flex-direction: column;
      width: 65%;

      .label-and-input {
        width: 100%;
        padding: 1rem;

        .main-label {
          margin-bottom: 10px;
          font-family: "Noto Serif";
          font-size: 20px;
        }

        .main-input {
          width: 100%;
          border-width: 0 0 2px;
          border-color: #d9d9d9;
          transition: 0.3s;
        }
        .main-input:focus {
          border-color: dodgerblue;
        }
      }
    }

    .depature-and-return-container {
      display: flex;
      flex-direction: column;
      width: 65%;

      .label-and-input {
        width: 100%;
        padding: 1rem;

        .main-label {
          margin-bottom: 10px;
          font-family: "Noto Serif";
          font-size: 20px;
        }

        .main-input {
          width: 100%;
          padding-left: 0px;
          border-width: 0 0 2px;
          border-color: #d9d9d9;
          transition: 0.3s;
        }
        .main-input:focus {
          border-color: dodgerblue;
        }

        .departure-input {
          width: 100%;
          margin-bottom: 15px;
          padding-left: 28px;
          border-width: 0 0 2px;
          border-color: #d9d9d9;
        }

        .return-input {
          width: 100%;
          margin-bottom: 15px;
          padding-left: 28px;
          border-width: 0 0 2px;
          border-color: #d9d9d9;
        }

        .departure-border-right {
          border-right: 0px solid #d9d9d9;
          width: 100%;
          height: 0%;
        }

        i {
          display: none;
          z-index: -1;
        }
      }
    }

    .transportation-container {
      display: flex;
      flex-direction: column;
      width: 65%;
      height: 7%;
      margin: 0px;

      .transportation-label-and-input {
        width: 100%;
        height: 95%;
        padding: 1rem;
      }

      .transportation-label {
        margin-bottom: 10px;
        font-family: "Noto Serif";
        font-size: 20px;
      }

      .transportation-input {
        width: 100%;
        border-width: 0 0 2px;
        border-color: #d9d9d9;
        outline: none;
        box-sizing: border-box;
        transition: 0.3s;
      }
      .transportation-input:focus {
        border-color: dodgerblue;
      }
    }

    /* like and dislike */
    .like-and-dislike-container {
      width: 65%;
      height: 20%;
      padding: 1rem;
      margin: -0.5rem;

      .like-container {
        height: 50%;
        margin-bottom: 0px;

        .like-and-dislike-label {
          font-family: "Noto Serif";
          margin-bottom: 10px;
          font-size: 20px;
        }

        .like-and-dislike-input {
          display: block;
          resize: none;
          outline: none;
          box-sizing: border-box;
          overflow: hidden;
          border-color: #d9d9d9;
          border-width: 0 0 2px;
          min-height: 24px;
          max-height: 90px;
          width: 100%;
          line-height: 20px;
        }

        .like-and-dislike-input:focus {
          border-color: dodgerblue;
        }
      }

      .dislike-container {
        height: 50%;

        .like-and-dislike-label {
          font-family: "Noto Serif";
          font-size: 20px;
        }

        .like-and-dislike-input {
          display: block;
          resize: none;
          outline: none;
          box-sizing: border-box;
          overflow: hidden;
          border-color: #d9d9d9;
          border-width: 0 0 2px;
          min-height: 24px;
          max-height: 90px;
          width: 100%;
          line-height: 20px;
        }

        .like-and-dislike-input:focus {
          border-color: dodgerblue;
        }
      }
    }
    .details-main-container {
      width: 68%;
      /* height: 25%; */
      margin-top: -20px;

      .details-container {
        width: 100%;
        height: 100%;
        padding: 1.6rem 1.6rem 0rem 1.6rem;

        .details-label {
          font-family: "Noto Serif";
          font-size: 20px;
        }

        .details-input {
          display: block;
          resize: none;
          outline: none;
          box-sizing: border-box;
          overflow: hidden;
          border-color: #d9d9d9;
          border-width: 0 0 2px;
          min-height: 24px;
          max-height: 220px;
          height: 20px;
          width: 100%;
          line-height: 20px;

          &:focus {
            border-color: dodgerblue;
          }
        }

        .details-input:focus {
          border-color: dodgerblue;
        }
      }
    }

    .button {
      display: flex;
      justify-content: flex-end;
      width: 68%;
      padding: 0px 1.6rem 1.6rem 1.6rem;

      .cancel-btn {
        margin-right: 2rem;
        font-family: "jua";
        font-size: 18px;
        font-weight: bold;
        background: white;
        width: 120px;
        height: 100%;
        position: relative;
        top: 30px;
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
        font-family: "jua";
        font-size: 18px;
        font-weight: bold;
        background: #1e90ff;
        height: 100%;
        width: 120px;
        padding: 8px;
        position: relative;
        top: 30px;
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

export const SubContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 911px) {
    display: none;
  }

  @font-face {
    font-family: "jua";
    src: url(${jua}) format("opentype");
  }
  @font-face {
    font-family: "euljiro";
    src: url(${euljiro}) format("opentype");
  }

  .title-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 31px;
  }

  .title {
    font-family: "jua";
    color: #3b3d40;
  }

  .stop-img-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 25%;

    .stop-img {
      width: 95%;
      border: 1px solid #e0e0e0;
    }
  }

  .covid-text-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    left: 10px;
    width: 95%;
    height: 13%;
    padding-top: 35px;

    .covid-text {
      display: flex;
      align-items: center;
      font-family: "euljiro";
      color: #3b3d40;
      font-size: 45px;
    }
  }

  .safety-info-container {
    border: 1px solid lightgray;
    position: relative;
    left: 10px;
    width: 95%;
    height: 28%;

    i {
      height: 10%;
      color: #00695c;
      position: relative;
      left: 20px;
      margin-top: 20px;
    }

    .label-safety {
      font-size: 20px;
      font-family: "hannaYrs";
      color: #3b3d40;
      position: relative;
      left: 20px;
      width: 87%;
      margin-top: 15px;
    }

    .safety-info {
      margin-top: 15px;

      li {
        position: relative;
        right: 8px;
        text-align: start;
        word-break: keep-all;
        font-family: "Noto Serif";
        margin: 13px;
      }
    }
  }
`;
