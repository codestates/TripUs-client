import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Common/Card";
import Loader from "../Common/Loader";

const SearchList = ({ destination, departureDate, returnDate, travelType }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  const returnParams = (destination, departureDate, returnDate, travelType) => {
    const params = {};
    if (destination) params.destination = destination;
    if (departureDate) params.dep = departureDate;
    if (returnDate) params.ret = returnDate;
    if (travelType) params.type = travelType;

    return params;
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://server.tripus.me/search", {
        params: returnParams(
          destination,
          departureDate,
          returnDate,
          travelType
        ),
      })
      .then((res) => {
        setLoading(false);
        setSearchResults(res.data.data);
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
            key={data.post_id}
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
