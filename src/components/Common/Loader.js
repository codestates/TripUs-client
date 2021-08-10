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
  border: 1.6rem solid #0099ff;
  border-top: 1.6rem solid #9ae59a;
  border-radius: 50%;
  height: ${(props) => (props.size ? `${props.size}rem` : "5rem")};
  width: ${(props) => (props.size ? `${props.size}rem` : "5rem")};
  animation: ${rotate} 2s linear infinite;
`;

const Loader = ({ size }) => {
  return <LoaderComponent size={size}></LoaderComponent>;
};

export default Loader;
