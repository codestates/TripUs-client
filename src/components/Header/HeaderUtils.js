import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegularButton = styled(Link)`
  text-decoration: none;
  color: rgba(70, 70, 70, 0.95);
  margin: 0 4px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;

export const CTAButton = styled(RegularButton)`
  color: rgba(50, 50, 50, 0.95);
`;
