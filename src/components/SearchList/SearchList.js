import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Card from "./Card";

const SearchList = () => {
  const [searchResults, setSearchResults] = useState([]);

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
          setSearchResults(res.data.data);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  if (searchResults.length > 0) {
    const cards = searchResults.map((data) => {
      return (
        <Card
          title={data.title}
          departure_date={data.departure_date}
          return_date={data.return_date}
          people_num={data.people_num}
          key={data.nickname}
        />
      );
    });

    return <>{cards}</>;
  }

  return <div>No results... try again!</div>;
};

export default SearchList;
