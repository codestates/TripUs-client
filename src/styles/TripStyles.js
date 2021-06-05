import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;

  min-height: 92rem;
  margin-top: 5rem;
  height: 80%;
  .title {
    text-align: center;
    color: #3b3d40;
    margin-bottom: 3rem;
  }

  .double-input {
    display: flex;
    width: 90%;
    justify-content: space-between;
  }
  @media (max-width: 911px) {
    flex-direction: column;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media screen and (min-width: 911px) {
    width: 65%;
  }

  @media screen and (max-width: 911px) {
    width: 100%;
  }
`;

export const TitleSection = styled.section`
  padding-top: 5px;
  min-width: 100%;
  height: 100%;
  width: 100%;
  border: solid 3px yellowgreen;

  .titleMain {
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;
    height: 30%;
    @media (max-width: 911px) {
    }
  }

  .titleUserAndEditBtn {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30%;
    font-size: 0.9rem;
    .destination {
      border: solid 1px;
    }
    /* .User_nickName {
      border: solid 1px skyblue;
      width: 30%;
      display: contents;
    } */
    i {
      padding-right: 5px;
    }
    h5 {
      margin: 0;
    }
  }
`;

export const DetailSection = styled.section`
  height: 100%;

  border: black 1px solid;

  .detail_info {
    padding: 5px;

    label {
      display: block;

      padding: 10px;
    }
  }

  @media (max-width: 911px) {
    width: 100%;
    display: block;
  }

  @media (min-width: 911px) {
    width: 100%;
  }
`;

export const SubContainer = styled.div`
  align-content: center;
  display: flex;
  padding: 5px;

  .sidebarTitle {
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 700;
    border: 1px solid black;
  }

  ul {
    list-style: none;
    line-height: 1.5rem;
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }

  li {
    display: flex;
    word-break: keep-all;
    font-family: "Noto Serif";
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }

  i {
    height: 10%;
    margin-right: 1rem;
  }

  .apply-info-container {
    border: 1px solid lightgray;

    margin-bottom: 3rem;
    height: 20%;
    @media (max-width: 911px) {
      width: 100%;
    }
  }
  .btnWrapper {
    display: flex;
    justify-content: flex-end;
    width: 90%;
    margin-top: 2rem;

    .btn {
      font-size: 1rem;
      font-weight: bold;
      width: 200px;
      padding: 8px;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease-in-out;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.9;
      }
    }
    .apply {
      border: 3px solid #26c281;
      background: #fff;
      color: #26c281;
      &:hover {
        background: #26c281;
        color: #fff;
        border: 3px solid #26c281;
      }
    }
    .edit {
      background: #fff;
      color: #dc3023;
      border: 3px solid #dc3023;
      &:hover {
        background: #dc3023;
        color: #fff;
        border: 3px solid #dc3023;
      }
    }

    @media (max-width: 911px) {
      display: flex;
      width: 100%;
      height: 50%;
      justify-content: center;
    }
    @media (min-width: 911px) {
      width: 100%;
      height: 50%;
    }
  }
  .randomUser_info {
    .randomUser {
    }
    .user_thumbnail {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }
`;

export const InfoWrapper = styled.div`
  width: ${(props) => (props.width === "full" ? "90%" : "48%")};
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding: 10px;

  .main-label {
    margin-bottom: 0.8rem;
    font-family: "Noto Serif";
    font-size: rem;

    font-weight: 700;
  }

  .main-input {
    width: 100%;
    margin-bottom: 1rem;
    border-width: 0 0 2px;
    border-color: #d9d9d9;
    transition: 0.3s;
    padding-bottom: 0.5rem;

    border-bottom: 1px black solid;
  }

  .main-input:focus {
    border-color: dodgerblue;
  }

  textarea {
    resize: none;
    border-color: #d9d9d9;
  }
`;
