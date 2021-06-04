import styled from "styled-components";
import { Page, InnerWrapper } from "./DefaultPageSetUp";

export const StyledPage = styled(Page)`
  min-height: 80%;
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

  .banner.account {
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

  .buttonWrapper {
    display: flex;
    justify-content: flex-end;
    width: 90%;
    margin-top: 2rem;

    .btn {
      font-size: calc(0.5rem + 0.5vw);
      font-weight: bold;
      width: 120px;
      padding: 8px;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease-in-out;
      margin-left: 1rem;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.9;
      }
    }

    .success {
      border: 3px solid #26c281;
      background: #fff;
      color: #26c281;

      &:hover {
        background: #26c281;
        color: #fff;
        border: 3px solid #26c281;
      }
    }

    .cancel {
      background: #fff;
      color: #dc3023;
      border: 3px solid #dc3023;

      &:hover {
        background: #dc3023;
        color: #fff;
        border: 3px solid #dc3023;
      }
    }

    .email {
      border: 3px solid rgb(123, 66, 245);
      background: #fff;
      color: rgb(123, 66, 245);

      &:hover {
        background: rgb(123, 66, 245);
        color: #fff;
        border: 3px solid rgb(123, 66, 245);
      }
    }

    .toggle {
      border: 3px solid #1e90ff;
      background: #fff;
      color: #1e90ff;

      &:hover {
        background: #1e90ff;
        color: #fff;
        border: 3px solid #1e90ff;
      }
    }

    .mobile {
      border: 3px solid rgb(245, 194, 66);
      background: #fff;
      color: rgb(245, 194, 66);

      &:hover {
        background: rgb(245, 194, 66);
        color: #fff;
        border: 3px solid rgb(245, 194, 66);
      }
    }
  }
`;

export const SubContainer = styled.div`
  width: 35%;

  .sidebarTitle {
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  ul {
    list-style: none;
    line-height: 1.5rem;
    padding: 0;
    margin: 0;
    font-size: 0.9rem;
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

  .safety-info-container {
    border: 1px solid lightgray;
    margin-bottom: 3rem;
  }

  .covid i {
    color: rgb(93, 227, 59);
  }

  .safety i {
    color: rgb(242, 0, 0);
  }

  .profile i {
    color: #22a7f0;
  }

  .account i {
    color: rgb(245, 194, 66);
  }

  @media screen and (max-width: 911px) {
    display: none;
  }
`;

export const InputWrapper = styled.div`
  width: ${(props) => (props.width === "full" ? "90%" : "48%")};
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  margin-bottom: 1.5rem;

  .main-label {
    margin-bottom: 2rem;
    font-family: "Noto Serif";
    font-size: 1rem;
  }

  .main-input {
    width: 100%;
    margin-bottom: 1rem;
    border-width: 0 0 2px;
    border-color: #d9d9d9;
    transition: 0.3s;
    padding-bottom: 0.5rem;
  }

  .main-input:focus {
    border-color: dodgerblue;
  }

  textarea {
    resize: none;
    border-color: #d9d9d9;
  }
`;
