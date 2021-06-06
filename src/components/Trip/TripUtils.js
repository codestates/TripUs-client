import React from "react";
import { InfoWrapper } from "../../styles/TripStyles";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export const LoadTitle = (props) => {
  const { width, destination, nickname, title } = props;
  return (
    <InfoWrapper width={width}>
      <label htmlFor={props.title || props.name} className="main-label">
        {props.label}
      </label>
      <div className="main-input" id={props.id || props.name}>
        {props.value}
      </div>
    </InfoWrapper>
  );
};

export const LoadDetails = (props) => {
  const { width } = props;

  return (
    <InfoWrapper width={width}>
      <label htmlFor={props.title || props.name} className="main-label">
        {props.label}
      </label>
      <div className="main-input" id={props.id || props.name}>
        {props.value}
      </div>
    </InfoWrapper>
  );
};

// export const GoogleApiWrapper = () =>{
//   apiKey: 'AIzaSyCJpXMlR0x5ojuRiUTwk_Ige1FGk6sRdns'
// }
