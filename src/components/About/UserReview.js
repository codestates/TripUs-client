import React from "react";
import styled from "styled-components";
import reviewCards from "./ReviewContents";

//1.전체 3개의 카드와 제목 h2를 감싸는 Wrapper
//2.카드를 감싸는 CardWrapper

//3.이미지 하나씩 감싸는 imgWrapper <div>
//3-1. 그안에 이미지 넣고 <img>
//3-2. 후기멘트 textWrapper <div>
//3-2-1. 후기멘트 p태그
//4.유저 닉네임 p태그

//카드 컴포넌트를 만들고 그안에 전체를 감싸는 섹션에 넣어줌

//카드를 감싸는 섹션

const ReviewUserComponent = styled.div`
  padding: 0;
  margin: 0;
  border-radius: 5px;
  position: relative;
  flex-grow: 1;
  width: 100%;
  height: 100%;

  @media (max-width: 910px) {
    width: 100%;
    max-height: 270px;

    & + & {
      margin-top: 20px;
    }

    &:last-of-type {
      margin-bottom: 16px;
    }
  }

  @media (min-width: 910px) {
    margin-top: 0px;
    min-height: 11rem;

    & + & {
      margin-left: 16px;
    }
  }

  .img-wrapper {
    width: 100%;
    height: 100%;

    .user-img {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .tag-wrapper {
      font-weight: 700;
      margin: 0;
      padding: 0;

      background: linear-gradient(
        to bottom,
        rgba(133, 122, 122, 0) 0%,
        rgba(0, 0, 0, 0.7) 30%
      );

      background-size: cover;
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;

      .review-user {
        padding-left: 2rem;
        color: rgba(255, 255, 255, 0.96);
        font-size: calc(0.4rem + 1.4vw);
        @media (max-width: 910px) {
          font-size: calc(0.7rem + 2.5vw);
        }
      }
      .review-detail {
        padding-left: 2rem;
        padding-right: 2rem;
        color: rgba(255, 255, 255, 0.96);
        font-size: calc(0.1rem + 0.6vw);
        word-break: keep-all;
        font-weight: 600;
        @media (max-width: 910px) {
          font-size: calc(0.1rem + 2.5vw);
        }
      }
    }
  }
`;

const Card = ({ tag, img_src, review }) => {
  return (
    <ReviewUserComponent>
      <div className="img-wrapper">
        <img className="user-img" src={img_src} alt="이미지가 뜰곳" />
        <div className="tag-wrapper">
          <p className="review-user">{tag}</p>
          <p className="review-detail">{review}</p>
        </div>
      </div>
    </ReviewUserComponent>
  );
};

//리뷰 전체 섹션
const ReviewSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  transition: width 0.3s ease;
  margin-top: 3rem;
  padding-top: 5rem;
  border-top: 1px solid black;

  @media (min-width: 911px) {
    max-height: 230px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 911px) {
      width: 90%;
    }

    @media (min-width: 911px) {
      width: 75%;
      height: 100%;
    }
  }

  h2 {
    width: 90%;
    text-align: left;
    word-break: keep-all;
    font-size: calc(0.5rem + 1vw);

    @media (max-width: 910px) {
      font-size: calc(0.8rem + 2vw);
    }
  }

  .cards {
    position: relative;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 911px) {
      flex-direction: row;
      max-height: 20rem;
    }
  }
`;
const UserReview = () => {
  const cards = reviewCards.reviewCategory.userCards.map((userCard) => {
    return (
      <Card
        key={userCard.tag}
        tag={userCard.tag}
        img_src={userCard.img_src}
        review={userCard.review}
      />
    );
  });
  return (
    <ReviewSection>
      <div className="wrapper">
        <h2>{reviewCards.title}</h2>
        <div className="cards">{cards}</div>
      </div>
    </ReviewSection>
  );
};

export default UserReview;

// const ReviewSection = () => {
//   return (
//     <UserReview>
//       <div className="Wrapper">
//         <div className="CardWrapper">
//           <div className="img-Wrapper"></div>
//         </div>
//       </div>
//     </UserReview>
//   );
// };

//리뷰  wrapper 섹션

// const UserReviewSection = styled.section`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   flex-grow: 1;
//   transition: width 0.3s ease;
//   margin-top: 3rem;

//   @media (min-width: 911px) {
//     max-height: 230px;
//   }

//   .wrapper {
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     @media (max-width: 911px) {
//       width: 65%;
//     }

//     @media (min-width: 911px) {
//       width: 75%;
//     }
//   }

//   h2 {
//     width: 90%;
//     text-align: left;
//     word-break: keep-all;
//     font-size: calc(0.5rem + 1vw);

//     @media (max-width: 910px) {
//       font-size: calc(0.8rem + 2vw);
//     }
//   }

//   .cards {
//     position: relative;
//     width: 90%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     @media (min-width: 911px) {
//       flex-direction: row;
//       max-height: 20rem;
//     }
//   }
// `;

// const AboutPageReviewSection = ({ type }) => {
//   const cards = reviewCards[type].userCards.map((userCard) => {
//     return (
//       <Card key={userCard.tag} tag={userCard.tag} img_src={userCard.img_src} />
//     );
//   });

//   return (
//     <UserReviewSection>
//       <div className="wrapper">
//         <h2>{reviewCards[type].title}</h2>
//         <div className="cards">{cards}</div>
//       </div>
//     </UserReviewSection>
//   );
// };
