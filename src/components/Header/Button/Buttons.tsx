import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegularButton = styled(Link)`
  text-decoration: none;
  color: #519de3;
  margin: 0 4px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  outline: none;

  :hover {
    border: 1px solid #519de3;
  }
`;

export const CTAButton = styled(RegularButton)`
  color: #fff;
  background: #519de3;

  :hover {
    background: #3698f2;
  }
`;
