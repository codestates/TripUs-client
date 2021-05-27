const cardSectionImgs = {
  HANOI:
    "https://images.unsplash.com/photo-1555921015-5532091f6026?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",

  NY: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",

  LONDON:
    "https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80",

  JEJU: "https://images.unsplash.com/photo-1581398644564-c46e97d9418a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amVqdXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

  NOW: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",

  PART: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJpcHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

  FULL: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZW5kc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
};

const cardContents = {
  travelCategory: {
    title: "새 친구와 설레는 여행!",
    contents: [
      { tag: "바로동행", img_src: cardSectionImgs.NOW },
      { tag: "부분동행", img_src: cardSectionImgs.PART },
      { tag: "전체동행", img_src: cardSectionImgs.FULL },
    ],
  },
  recommendation: {
    title: "트립어스 사용자가 사랑하는 여행지",
    contents: [
      { tag: "하노이", img_src: cardSectionImgs.HANOI },
      { tag: "뉴욕", img_src: cardSectionImgs.NY },
      { tag: "런던", img_src: cardSectionImgs.LONDON },
      { tag: "제주도", img_src: cardSectionImgs.JEJU },
    ],
  },
};

export default cardContents;
