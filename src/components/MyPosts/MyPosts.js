import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Card from "../Common/Card";

const BASE_URL = "https://server.tripus.me";

const MyPostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MyPosts = (token) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(BASE_URL + "/myposts")
      .then((res) => {
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  if (searchResults.length === 0 && !loading) {
    return <div>검색 결과가 없습니다.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (searchResults.length > 0 && !loading) {
    const cards = searchResults.map((data) => {
      return (
        <Card
          title={data.title}
          type={data.type}
          destination={data.destination}
          departure_date={data.departure_date}
          return_date={data.return_date}
          people_num={data.people_num}
          nickname={data.nickname}
          key={data.nickname}
          role="myLists"
        />
      );
    });

    return <MyPostsWrapper>{cards}</MyPostsWrapper>;
  }
};

export default MyPosts;
