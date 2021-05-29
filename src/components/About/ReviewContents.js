const cardSectionImgs = {
  wonho:
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",

  hyndon:
    "https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",

  guenhwa:
    "https://images.unsplash.com/photo-1532498551838-b7a1cfac622e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
};
const review_details = {
  user1:
    "트립어스를 사용하면서 저랑 잘 맞는 동행인들을 만나서 즐거운 여행이었습니다!",
  user2:
    "여행다니면서 동행 구하기가 약간 무서웠는데 트립어스로 보장된 신원덕분에 안전한 동행이 되었습니다. 앞으로도 자주 이용할래요!",
  user3:
    "저랑 여행스타일 맞는 사람 구하기 너무 좋은 트립어스!! 앞으로도 번창하세요~",
};

const reviewCards = {
  reviewCategory: {
    title: "트립어스와 함께한 유저들의 후기",
    userCards: [
      {
        tag: "김코딩",
        img_src: cardSectionImgs.wonho,
        review: review_details.user1,
      },
      {
        tag: "박해커",
        img_src: cardSectionImgs.hyndon,
        review: review_details.user2,
      },
      {
        tag: "김코스",
        img_src: cardSectionImgs.guenhwa,
        review: review_details.user3,
      },
    ],
  },
};

export default reviewCards;
