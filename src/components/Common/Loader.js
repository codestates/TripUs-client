import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderComponent = styled.div`
  border: 1.6rem solid pink;
  border-top: 1.6rem solid purple;
  border-radius: 50%;
  height: ${(props) => (props.size ? `${props.size}rem` : "5rem")};
  width: ${(props) => (props.size ? `${props.size}rem` : "5rem")};
  animation: ${rotate} 2s linear infinite;
`;

const Loader = ({ size }) => {
  return <LoaderComponent size={size}></LoaderComponent>;
};

export default Loader;
