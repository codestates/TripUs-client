import ReactDatePicker from "react-datepicker";
import styled, { css, createGlobalStyle } from "styled-components";
import DatePick_Arr from "./DatePick_Arr";

export const Picker = styled.input`
  min-width: 50%;
  width: 100%;
  height: 60px;
  border: 1px;
  background-color: white;
  justify-content: space-between;
  text-align: start;
  cursor: text;
  padding: 30px;
  border: 0.0625rem solid #b2b2bf;
  border-width: 2px;
  border-style: inset;
  border-radius: 0.6;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
`;
