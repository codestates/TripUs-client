import styled from "styled-components";
import { Page, InnerWrapper } from "./DefaultPageSetUp";

export const StyledPage = styled(Page)`
  min-height: 80%;
`;
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
export const StyledInnerWrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 5rem;

  .banner {
    min-height: 10rem;
    color: #3b3d40;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .title {
      color: #f2f1ef;
      letter-spacing: 0.5rem;
      font-size: calc(1rem + 1vw);
    }
  }

  .banner.recruit {
        background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15)
      ),
      url("https://images.unsplash.com/photo-1531263060782-b024de9b9793?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyaXB8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  }
  }

  .banner.apply {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.1)
      ),
      url("https://images.unsplash.com/photo-1444771820225-000ebb5d7ac3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk2fHx0cmF2ZWx8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  }

  .banner.profile {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.2)
      ),
      url("https://images.unsplash.com/photo-1598749158550-bd1b7446e043?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEzfHx0cmF2ZWx8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  }

  .containers {
    display: flex;
    justify-content: space-between;
   @media(max-width:911px){
    flex-direction: column;
    
   }

    .double-input {
      display: flex;
      width: 90%;
      justify-content: space-between;

      @media (max-width: 911px) {
        flex-direction: column;

        & > * {
          width: 100%;
        }
      }
    }
  }
`;
export const TitleSection = styled.section`
  padding-top: 5px;
  min-width: 100%;
  height: 100%;
  width: 100%;

  .destination {
    color: #848484;
    font-size: 14px;
    font-weight: 400;
    padding-left: 10px;
    i {
      padding-right: 5px;
      padding-bottom: 5px;
    }
  }
  h1 {
    font-size: 26px;
    font-weight: 700;
    width: 100%;
    height: 30%;
    margin: 0px 0px 10px 10px;
    line-height: 2rem;
    color: #333;
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

    .User_nickName {
      width: 30%;
      display: flex;
    }
    i {
      padding-right: 5px;
      padding-top: 1px;
    }
    h5 {
      margin: 0;
      font-size: 14px;
      display: flex;
    }
  }
`;

export const DetailSection = styled.section`
  height: 100%;
  margin-top: 2rem;

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
  width: 35%;

  .sidebarTitle {
    font-size: 1.2rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  ul {
    list-style: none;
    line-height: 1.5rem;
    padding: 1rem;
    margin: 0;
    font-size: 1rem;
  }

  li {
    display: flex;
    flex-direction: column;
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
    height: 30%;
    /* @media (max-width: 911px) {
      width: 100%;
    } */
  }
  .btnWrapper {
    display: flex;
    justify-content: flex-end;
    width: 90%;
    margin-top: 2rem;

    .btn {
      font-size: calc(0.5rem + 0.5vw);
      font-weight: bold;
      width: 200px;
      padding: 8px;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease-in-out;

      word-break: keep-all;

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

      /* padding-right: 1rem; */
      &:hover {
        background: #26c281;
        color: #fff;
        border: 3px solid #26c281;
      }
      @media (min-width: 911px) {
        margin-left: 2rem;
      }
    }
    .edit {
      background: #fff;
      color: #dc3023;
      border: 3px solid #dc3023;
      margin-left: 1rem;
      &:hover {
        background: #dc3023;
        color: #fff;
        border: 3px solid #dc3023;
      }
    }
  }
  .randomUser_info {
    .interested {
      padding-bottom: 1rem;
    }
    h5 {
      display: contents;
    }
    .user_thumbnail {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }
  @media (max-width: 911px) {
    width: 90%;

    justify-content: center;
    align-content: center;

    padding: 5px;
    padding-left: 2rem;
  }
  @media (min-width: 911px) {
    width: 35%;
  }
`;

export const InfoWrapper = styled.div`
  width: ${(props) => (props.width === "full" ? "95%" : "48%")};
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding: 10px;
  /* padding-left: 2rem; */

  .main-label {
    margin-bottom: 0.8rem;
    font-family: "Noto Serif";
    font-size: 1.1rem;

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
