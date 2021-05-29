import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SearchList = () => {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

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

  const results = searchResults.map((result) => {
    return (
      <div key={result.nickname}>
        <h1>{result.destination.toUpperCase()}</h1>
        <p>{result.departure_date}</p>
      </div>
    );
  });

  return <div>{results}</div>;
};

export default SearchList;
