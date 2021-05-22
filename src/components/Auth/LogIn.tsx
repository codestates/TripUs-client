import React from "react";
import styled from "styled-components";

//images
import login from "../../images/login.png";
import naver_large from "../../images/naver_large.png";
import naver_small from "../../images/naver_small.png";

const LogInWrapper = styled.div`
  max-width: 768px;
  min-width: 60%;
  min-height: 70%;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  font-family: "Roboto Slab", serif;
  color: rgba(0, 0, 0, 0.7);
`;

const LogInForm = styled.form`
  width: 60%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 811px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  height: 15%;
`;

const SocialLoginBox = styled.div`
  width: 60%;

  img {
    display: block;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
`;

const Or = styled.h5`
  width: 50%;
  display: flex;
  flex-direction: row;

  :before,
  :after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid;
    margin: auto;
  }

  :before {
    margin-right: 15px;
  }

  :after {
    margin-left: 15px;
  }
`;

const InputSection = styled.div`
  height: 25%;
  width: 70%;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 10px 10px 10px 40px;
  outline: none;
  background: rgba(211, 211, 211, 0.3);
  font-size: 0.8rem;
  margin-bottom: 8px;
`;

const IconBox = styled.div`
  position: absolute;
  top: 0;
  left: 8px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 1rem;
    display: block;
    padding-bottom: 5px;
  }
`;

const IllustrationWrapper = styled.div`
  width: 40%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  @media (max-width: 811px) {
    display: none;
  }
`;

const Button = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 4px;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  color: inherit;
  font-size: 1.2rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
`;

const LogIn = () => {
  return (
    <LogInWrapper>
      <LogInForm>
        <Title>Log In</Title>
        <SocialLoginBox>
          <img
            src={naver_large}
            alt="Naver login button"
            style={{ width: "100%" }}
          />
        </SocialLoginBox>
        <Or>or</Or>
        <InputSection>
          <InputBox>
            <IconBox>
              <i className="fas fa-envelope"></i>
            </IconBox>
            <Input type="email" placeholder="email" />
          </InputBox>
          <InputBox>
            <IconBox>
              <i className="fas fa-lock"></i>
            </IconBox>
            <Input type="password" placeholder="password" />
          </InputBox>
        </InputSection>
        <Button type="button">로그인</Button>
      </LogInForm>
      <IllustrationWrapper>
        {/* <Title>Welcome Back!</Title>
        <p>
          아직 회원이 아니시라면
          <br />
          가입 후 TripUs를 더욱 즐겨보세요.
        </p> */}
        <img src={login} style={{ width: "100%" }} />
      </IllustrationWrapper>
    </LogInWrapper>
  );
};

export default LogIn;
