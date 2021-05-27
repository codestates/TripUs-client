import React, { useState } from "react";
import axios from "axios";

import {
  InputBox,
  DatePickerComponent,
  SelectComponent,
  SearchBarSection,
} from "./SearchBarUtils";

const BASE_URL = "https://server.tripus.me";

const onSubmit = (destination, departureDate, returnDate, travelType) => {
  axios
    .get(BASE_URL + "/search", {
      dep: departureDate,
      ret: returnDate,
      type: travelType,
      destination: destination,
    })
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [travelType, setTravelType] = useState("now");

  let formattedDepartureDate;
  let formattedReturnDate;

  if (departureDate) {
    const dDate = new Date(departureDate);
    formattedDepartureDate = `${dDate.getFullYear().toString().slice(2)}년 ${
      dDate.getMonth() + 1
    }월 ${dDate.getDate()}일`;
  }

  if (returnDate) {
    const dDate = new Date(returnDate);
    formattedReturnDate = `${dDate.getFullYear().toString().slice(2)}년 ${
      dDate.getMonth() + 1
    }월 ${dDate.getDate()}일`;
  }

  return (
    <SearchBarSection>
      <div className="wrapper">
        <div className="position-wrapper">
          <div className="searchBar-wrapper">
            <InputBox
              destination={destination}
              setDestination={setDestination}
            />
            <DatePickerComponent
              type="departure"
              departureDate={departureDate}
              returnDate={returnDate}
              dateFunc={setDepartureDate}
            />
            <DatePickerComponent
              type="return"
              departureDate={departureDate}
              returnDate={returnDate}
              dateFunc={setReturnDate}
            />
            <SelectComponent
              travelType={travelType}
              setTravelType={setTravelType}
            />
            <button
              type="button"
              style={{ height: "30%" }}
              onClick={() => {
                onSubmit(
                  destination,
                  formattedDepartureDate,
                  formattedReturnDate,
                  travelType
                );
              }}
            >
              검색
            </button>
          </div>
        </div>
      </div>
    </SearchBarSection>
  );
};

export default SearchBar;
