import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  InputBox,
  DatePickerComponent,
  SelectComponent,
  SearchBarSection,
} from "./SearchBarUtils";

const BASE_URL = "https://server.tripus.me";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [travelType, setTravelType] = useState("now");

  const handleSubmit = (
    formattedDepartureDate,
    formattedReturnDate,
    travelType,
    destination
  ) => {
    if (
      formattedDepartureDate &&
      formattedReturnDate &&
      travelType &&
      destination
    )
      history.push(
        `/search?dep=${formattedDepartureDate}&ret=${formattedReturnDate}&type=${travelType}&destination=${destination}`
      );
  };

  const history = useHistory();

  let formattedDepartureDate;
  let formattedReturnDate;

  if (departureDate) {
    const dDate = new Date(departureDate);
    formattedDepartureDate = `${dDate.getFullYear().toString().slice(2)}년 ${
      dDate.getMonth() + 1
    }월 ${dDate.getDate()}일`;
  }

  if (returnDate) {
    const rDate = new Date(returnDate);
    formattedReturnDate = `${rDate.getFullYear().toString().slice(2)}년 ${
      rDate.getMonth() + 1
    }월 ${rDate.getDate()}일`;
  }

  return (
    <SearchBarSection>
      <div className="wrapper">
        <div className="position-wrapper">
          <h1>우리 같이 여행갈까요?</h1>
          <div className="searchBar-wrapper">
            <div className="searchBar">
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
            </div>
            <div className="button-wrapper">
              <button
                type="button"
                onClick={() => {
                  handleSubmit(
                    formattedDepartureDate,
                    formattedReturnDate,
                    travelType,
                    destination
                  );
                }}
              >
                검색하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </SearchBarSection>
  );
};

export default SearchBar;
