import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Card from "../Common/Card";

const SearchList = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const destination = query.get("destination");
    const type = query.get("type");
    const dDate = query.get("dep");
    const rDate = query.get("ret");

    if (destination && type && dDate && rDate) {
      axios
        .get("https://server.tripus.me/search", {
          params: {
            dep: dDate,
            ret: rDate,
            type: type,
            destination: destination,
          },
        })
        .then((res) => {
          console.log(res);
          setSearchResults(res.data.data);
          setLoading(false);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  if (searchResults.length > 0 && !loading) {
    const cards = searchResults.map((data) => {
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
          role="search"
        />
      );
    });

    return <>{cards}</>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (searchResults.length === 0 && !loading) {
    return <div>검색 결과가 없습니다.</div>;
  }
};

export default SearchList;
