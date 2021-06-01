import React, { useState } from "react";
import styled from "styled-components";

// components
import { InputBox, Input } from "./SideBarComponents";
import {
  DatePickerComponent,
  SelectComponent,
} from "../SearchBar/SearchBarUtils";

const SideBar = () => {
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [travelType, setTravelType] = useState("now");

  return (
    <div>
      <Input destination={destination} setDestination={setDestination} />
      <InputBox>
        <DatePickerComponent
          type="departure"
          departureDate={departureDate}
          returnDate={returnDate}
          dateFunc={setDepartureDate}
        />
      </InputBox>
      <InputBox>
        <DatePickerComponent
          type="return"
          departureDate={departureDate}
          returnDate={returnDate}
          dateFunc={setReturnDate}
        />
      </InputBox>
      <InputBox>
        <SelectComponent
          travelType={travelType}
          setTravelType={setTravelType}
        />
      </InputBox>
    </div>
  );
};

export default SideBar;
