import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Common/Card";
import Loader from "../Common/Loader";

const SearchList = ({ destination, departureDate, returnDate, travelType }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://server.tripus.me/search", {
        params: {
          dep: departureDate,
          ret: returnDate,
          type: travelType,
          destination: destination,
        },
      })
      .then((res) => {
        console.log(res);
        setSearchResults(res.data.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [destination, departureDate, returnDate, travelType]);

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
            key={data.nickname}
            identification={data.identification}
            role="myLists"
          />
        );
      })
    );
  }, [searchResults]);

  if (searchResults.length > 0 && !loading) {
    return <>{cards}</>;
  }

  if (loading) {
    return <Loader style={{ marginTop: "3rem" }} />;
  }

  if (searchResults.length === 0 && !loading) {
    return <div>검색 결과가 없습니다.</div>;
  }
};

export default SearchList;
