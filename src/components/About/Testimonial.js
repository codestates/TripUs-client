import React from "react";
import styled from "styled-components";

import {
  Page,
  OuterWrapper,
  InnerWrapper,
} from "../../styles/DefaultPageSetUp";

const TestimonialWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 911px) {
    flex-direction: column;
  }
`;

const TestimonialCardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 250px;
  box-shadow: 0px 2px 8px 0px #b0bec5;
  background-color: white;
  text-align: center;
  border-radius: 1rem;
  height: 28rem;
  width: calc(33% - 2rem);

  @media (max-width: 911px) {
    margin-top: 1rem;
    min-width: 300px;
  }

  .banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-image: url(${(props) =>
      props.background ? `${props.background}` : "none"});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 10rem;
    width: 100%;
  }

  .user-image {
    width: 10rem;
    height: 10rem;
    margin-top: 5rem;
    clip-path: circle(50% at 5rem 5rem);
  }

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 8px;
  }

  p {
    margin: 1rem 2rem;
    font-size: 0.9rem;
  }

  .ratings {
    margin-bottom: 2rem;
  }

  i {
    color: #ffdf00;
  }
`;

const Testimonials = [
  {
    banner:
      "https://images.unsplash.com/photo-1622229839611-b0c1478b5018?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYXZlbHxlbnwwfDB8Mnx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    userImage:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    userName: "김코딩",
    testimonial:
      "트립어스를  통해 저랑 잘 맞는 동행인들을 만나서 즐거운 여행이었습니다!",
  },
  {
    banner:
      "https://images.unsplash.com/photo-1622084950323-181f5555aaaf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYyfHx0cmF2ZWx8ZW58MHwwfDJ8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    userImage:
      "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    userName: "박해커",
    testimonial:
      "그동안 동행 구하기가 무서웠는데 트립어스 사용자들의 보장된 신원 덕에 안전한 동행이 되었습니다. 앞으로도 자주 이용할게요!",
  },
  {
    banner:
      "https://images.unsplash.com/photo-1622006899638-bdc811795b0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHx0cmF2ZWx8ZW58MHwwfDJ8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    userImage:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    userName: "최개발",
    testimonial:
      "저랑 여행 스타일 맞는 사람 구하기 너무 좋은 트립어스! 앞으로도 자주 사용할게요! :)",
  },
];

const TestimonialCard = ({ banner, userName, userImage, testimonial }) => {
  return (
    <TestimonialCardWrapper background={banner}>
      <div className="banner"></div>
      <img src={userImage} alt={userName} className="user-image" />
      <h3>{userName}</h3>
      <p>{testimonial}</p>
      <div className="ratings">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    </TestimonialCardWrapper>
  );
};

const cards = Testimonials.map((t) => {
  return (
    <TestimonialCard
      banner={t.banner}
      userName={t.userName}
      userImage={t.userImage}
      testimonial={t.testimonial}
      key={t.userName}
    />
  );
});

const Testimonial = () => {
  return (
    <Page>
      <OuterWrapper>
        <InnerWrapper>
          <TestimonialWrapper>{cards}</TestimonialWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default Testimonial;
