import React, { useState } from "react";
import styled from "styled-components";

//회원 탈퇴버튼 이랑 수정확인 버튼

//

export const FormStyle = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  background: ${(props) =>
    props.background && props.overlay
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.background})`
      : props.background
      ? `url(${props.background})`
      : props.color};
  height: ${(props) => (props.height ? `${props.height}%` : "auto")};
  background-size: cover;
  background-position: ${(props) =>
    props.position ? `${props.position}` : "center"};
  background-repeat: no-repeat;

  .second-wrapper {
    display: flex;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    @media (max-width: 911px) {
      width: 90%;
    }

    @media (min-width: 911px) {
      width: 70%;
    }
  }
  .head-wrapper {
    width: 90%;
    height: 100%;
  }

  .title-wrapper {
    display: flex;
    margin-top: 50px;
    font-size: 1.5rem;
    width: 50%;
    height: 15%;
    @media (max-width: 911px) {
      width: 75%;
      margin-left: 10%;
    }
    @media (min-width: 911px) {
      margin-left: 2%;
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    @media (max-width: 911px) {
      width: 75%;
      margin-left: 10%;
    }
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70%;
    width: 80%;
    margin-left: 1%;
    @media (max-width: 911px) {
      width: 90%;
      height: 100%;
    }
    @media (min-width: 911px) {
      width: 90%;
    }
  }

  .input-wrapper {
    flex-direction: column;
    justify-content: center;
    padding: 0.375rem 0.75rem 0.75rem;
    width: 100%;
    height: 50%;
    @media (max-width: 911px) {
      width: 100%;
      height: 100%;
    }
  }
  input {
    margin: 0.5rem 0 1rem;
    width: 80%;
    height: 2.7rem;
    border-radius: 0.25rem;
    border: 2px solid #e0e0e0;
    padding-left: 0.5rem;
    font-size: calc(0.2rem + 1vw);

    @media (min-width: 2000px) {
      min-height: 3.7rem;
    }

    @media (max-width: 1350px) {
      height: 2.5rem;
    }

    @media (max-width: 911px) {
      height: 2rem;
      font-size: calc(0.5rem + 1vw);
    }
  }
  label {
    font-weight: 700;
  }
`;
/* .form {
    border: none;
    width: 90%;
    height: 100px;
  }
  .label {
    display: block;
    font-size: 1rem;
    font-weight: 700;
    line-height: 2.2rem;
  }
  .input-box {
    width: 80%;
    height: 50%;
    @media (max-width: 911px) {
      width: 100%;
      height: 50%;
      @media (min-width: 911px) {
        width: 50%;
      } */
/* }
  } */

export const AccountBtns = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-content: center;

  @media (max-width: 911px) {
    width: 100%;
    justify-content: space-between;
  }

  .btn-wrapper {
    width: 100%;
    height: 100%;
    flex: 0 1 1;
    display: flex;
    align-content: space-around;
  }
  button {
    margin-top: 20px;
    margin-bottom: 16px;
    width: 15%;
    height: 3rem;
    border-radius: 28px;
    padding-top: 14px;
    color: #fff;
    padding: 8px 16px;
    font-weight: 700;
    border: 1px solid transparent;
    font-size: calc(0.3rem + 1vw);
    text-align: center;
    cursor: pointer;
    background: #000;
    transition: all 0.4s;
  }
  .deleteBtn {
    margin-top: 20px;
    margin-bottom: 16px;
    width: 15%;
    height: 3rem;
    border-radius: 28px;
    padding-top: 14px;
    color: #fff;
    padding: 8px 16px;
    font-weight: 700;
    border: 1px solid transparent;
    font-size: calc(0.5rem + 1vw);
    text-align: center;
    cursor: pointer;
    background: #000;
    transition: all 0.4s;
  }

  .patchBtn {
    margin-top: 20px;
    margin-bottom: 16px;
    width: 15%;
    height: 3rem;
    border-radius: 28px;
    padding-top: 14px;
    color: #fff;
    padding: 8px 16px;
    font-weight: 700;
    border: 1px solid transparent;
    font-size: calc(0.5rem + 1vw);
    text-align: center;
    cursor: pointer;
    background: #000;
    transition: all 0.4s;
  }

  .confirmBtn {
    margin-top: 20px;
    margin-bottom: 16px;
    width: 10%;
    height: 3rem;
    border-radius: 28px;
    padding-top: 14px;
    color: #fff;
    padding: 8px 16px;
    font-weight: 700;
    border: 1px solid transparent;
    font-size: calc(0.5rem + 1vw);
    text-align: center;
    cursor: pointer;
    background: #000;
    transition: all 0.4s;
  }
`;

const AccountUtils = ({ setIsEdited }) => {
  const handleInputClick = () => {
    setIsEdited((prev) => !prev); //이전상태
  };

  return (
    <AccountBtns>
      <div className="btn-wrapper">
        <button className="deleteBtn">계정삭제</button>
        <button className="patchBtn" onClick={handleInputClick}>
          수정
        </button>
        <button type="submit" className="confirmBtn">
          확인
        </button>
      </div>
    </AccountBtns>
  );
};
export default AccountUtils;

// {
//   /* <div className="btn-wrapper">
// <button className="deleteBtn">계정삭제</button>
// <button className="patchBtn">수정</button>
// <button type="button" className="confirmBtn">
//   확인
// </button>
// </div> */
// }
// export const InputBox = ({ destination, setDestination }) => {
//     return (
//       <InputWrapper>
//         <label htmlFor="inputBox">여행지</label>
//         <input
//           type="text"
//           value={destination}
//           placeholder="여행지를 검색해보세요."
//           onChange={(e) => setDestination(e.target.value)}
//         />
//       </InputWrapper>
//     );
//   };

// const Account = () => {
//     const [email, setEmail] = useState("email");
//     const [pw, setPw] = useState("pw");
//     const [nickname, setNickname] = useState("nickname");
//     const [name, setName] = useState("name");
//     const [phone, setMobile] = useState("mobile");
//     const [age, setAge] = useState("age");
