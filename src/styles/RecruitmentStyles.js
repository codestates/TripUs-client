import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 92rem;
  margin-top: 5rem;

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
      font-size: 1rem;
      font-weight: bold;
      width: 120px;
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

    .success {
      background: #1e90ff;
      color: #fff;
      margin-right: 1rem;
    }

    .cancel {
      background: white;
      color: gray;
      border: 1px solid gray;
    }
  }
`;

export const SubContainer = styled.div`
  width: 35%;
  margin-top: 6rem;

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

  @media screen and (max-width: 911px) {
    display: none;
  }
`;

export const InputWrapper = styled.div`
  width: ${(props) => (props.width === "full" ? "90%" : "48%")};
  display: flex;
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
