import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Common/Card";
import Loader from "../Common/Loader";
import { ContentArea } from "../../styles/MyListsStyles";

const BASE_URL = "https://server.tripus.me";

const MyLists = ({ token, role }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const path = {
    posts: "/myposts",
    applications: "/applied",
  };

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(BASE_URL + path[role], config)
      .then((res) => {
        setSearchResults(res.data.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });

    return () => {
      setLoading(true);
    };
  }, []);

  useEffect(() => {
    setCards(
      searchResults.map((data) => {
        return (
          <Card
            title={data.title}
            type={data.travel_type}
            destination={data.destination}
            departure_date={data.departure_date}
            return_date={data.return_date}
            people_num={data.people_num}
            nickname={data.nickname}
            key={data.id}
            role="myLists"
          />
        );
      })
    );
  }, [searchResults]);

  if (searchResults.length === 0 && !loading) {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        검색 결과가 없습니다.
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Loader />
      </div>
    );
  }

  if (searchResults.length > 0 && !loading) {
    return <ContentArea>{cards}</ContentArea>;
  }
};

export default MyLists;
