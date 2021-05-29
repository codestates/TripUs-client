import React from "react";
import styled from "styled-components";
import Card from "./UserReview";

// 소개 사진 // 슬로건 // 간단한 소개 // 사용자 리뷰  // 한마디

const AboutComponent = styled.section`
  justify-content: center;
  display: block;
  width: 100%;
  height: 100%;
  border-style: 1px solid black;

  @media (max-width: 911px) {
    width: 100%;
    height: 70vh;
  }

  @media (min-width: 911px) {
    width: 100%;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80");
    background-size: cover;
    background-position: center;

    @media (max-width: 911px) {
      width: 100%;
      height: 70vh;
    }

    .overlay {
      height: 60%;
      width: 100%;
      display: flex;
      align-items: center;
      background: linear-gradient(
        rgba(182, 173, 159, 0.88),
        rgba(196, 189, 189, 0.03)
      );
    }
    .second-wrapper {
      width: 90%;
      height: 100%;
      padding-top: 30px;

      @media (max-width: 915px) {
        height: 100%;
      }

      .text-wrapper {
        height: 70%;
        width: 100%;

        display: flex;
        flex-direction: column;
        word-break: keep-all;

        /* padding-top: 4rem; */
        justify-content: space-evenly;
        color: white;

        @media (max-width: 910px) {
          min-width: 10rem;
          align-items: center;
          width: 100%;
        }

        @media (min-width: 910px) {
          padding-right: 10rem;
          padding-left: 10rem;
        }

        .slogan {
          margin: 0;
          padding-left: 10px;
          font-size: 50px;
          font-weight: 700;

          @media (max-width: 910px) {
            margin-bottom: 1rem;
            width: 100%;
            font-size: 2rem;
            padding-left: 10%;
            text-align: left;
          }
        }

        p {
          margin: 0;
          padding: 10px;

          font-size: 1.2rem;
          line-height: 1.8rem;
          font-weight: 700;

          @media (max-width: 910px) {
            margin-bottom: 2rem;
            font-size: 0.8rem;
            width: 83%;
            height: 100%;
            text-align: left;
          }
        }
        .tag-wrapper {
          font-weight: 700;
          margin: 0;
          padding: 0;

          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.5) 30%
          );
        }
      }
    }
  }
`;
const WelcomeWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  border-top: 1px solid;

  padding-bottom: 50px;
  @media (max-width: 911px) {
    heigth: 60%;
  }
  @media (min-width: 911px) {
    padding-top: 50px;
  }
  .img-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80");
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: color;
    @media (max-width: 910px) {
      width: 100%;
      height: 70vh;
    }
    .img-overlay {
      height: 100%;
      width: 100%;
    }
  }
  .text-wrapper {
    height: 100%;
    width: 100%;
    min-width: 50%;
    display: flex;
    word-break: keep-all;
    padding-top: 20rem;
    justify-content: center;
    color: white;

    @media (min-width: 911px) {
      width: 75%;
      height: 100%;
    }

    h1 {
      font-weight: 700;
      margin-left: 10%;
      padding: 10px;
      width: 100%;
      height: 50%;
      font-size: 2rem;
      line-height: 3rem;
      word-break: keep-all;
      @media (max-width: 910px) {
        font-size: calc(3rem+0.5vw);
        margin-bottom: 2rem;
        font-style: 0.5rem;
        width: 90%;
        height: 50%;
      }
    }
  }
`;

const About = () => {
  return (
    <>
      <AboutComponent>
        <div className="image-wrapper">
          <div className="overlay">
            <div className="second-wrapper">
              <div className="text-wrapper">
                <div className="slogan">모두의 안전한 동행을 위해</div>
                <p>
                  동행은 여행의 묘미중 하나라고 생각합니다. <br />
                  하지만 동행에서 이상한 사람을 만나지 않을까 걱정된적 있지
                  않으셨나요? <br />
                  저희 트립어스는 신뢰도가 바탕이 된 동행문화를 정착시키기 위해
                  만든 서비스입니다 트립어스를 통해 새로운 여행 문화에
                  동참해보세요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </AboutComponent>
      <Card></Card>
      <WelcomeWrapper>
        <div className="img-wrapper">
          <div className="img-overlay">
            <div className="text-overlay">
              <div className="text-wrapper">
                <h1>6374개의 모임이 당신과 함께하기를 기대하고있습니다</h1>
              </div>
            </div>
          </div>
        </div>
      </WelcomeWrapper>
    </>
  );
};

export default About;

// const WholeWrapper = styled.section`
//   display: flex;
//   width: 100%;
//   height: 100%;

//   max-width: 100%;
//   flex-direction: column;
//   justify-content: center;

//   @media (max-width: 911px) {
//     width: 100%;
//     height: 70vh;
//   }

//   @media (min-width: 911px) {
//     width: 75%;
//   }
// `;
// const ImgWrapper = styled.div`
//   display: flex;
//   width: 0%;
//   height: 60%;
//   justify-content: center;
//   @media (min-width: 911px) {
//     width: 65%;
//     height: 80vh;
//     justify-content: center;
//   }
// `;
// const textWrapper = styled.div`
//   align-items: center;
//   display: flex;
// `;

// const Slogan = styled.p`
//   display: flex;
//   width: 100%;
//   height: 30%;
//   font-size: 4rem;
//   align-items: center;
//   justify-content: center;
// `;

// const Intro = styled.p`
//   display: flex;
//   justify-content: center;
//   height: 100px;
//   text-align: center;
// `;

// const useReview = styled.div``;

// const Welcome = styled.p``;

// const About = () => {
//   return (
//     <WholeWrapper>
//       {/* <div className="Wrapper"></div> */}
//       <ImgWrapper>
//         <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" />
//       </ImgWrapper>

//       <textWrapper>
//         <Slogan>모두의 안전한 동행을 위해 </Slogan>
//         <Intro>
//           동행은 여행의 묘미중 하나라고 생각합니다 <br /> 처음보는 사람들과의
//           교류와 추억 그리고 여행지에서 사람만나는걸 좋아하는분들이라면
//           공감하실겁니다
//           <br />
//           하지만 동행에서 이상한 사람을 만나지 않을까 걱정된적 있지 않으셨나요?{" "}
//           <br />
//           저희 트립어스는 신뢰도가 바탕이 된 동행문화를 정착시키기 위해 만든
//           서비스입니다 트립어스를 통해 새로운 여행 문화에 동참해보세요!
//         </Intro>
//       </textWrapper>
//     </WholeWrapper>
//   );
// };

// export default About;
