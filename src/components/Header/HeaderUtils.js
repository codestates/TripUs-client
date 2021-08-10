import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegularButton = styled(Link)`
  text-decoration: none;
  color: rgb(24, 51, 79);
  margin: 0 4px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    color: #f5f5f5;
    background: rgb(24, 51, 79);
  }
`;

export const CTAButton = styled(RegularButton)`
  color: rgba(50, 50, 50, 0.95);
`;
