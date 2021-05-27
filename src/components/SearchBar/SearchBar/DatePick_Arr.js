import React, { useState } from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { Picker } from "./DatePickUtils";
registerLocale("ko", ko);

const DatePick_Arr = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <DatePicker
        className="Picker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy/MM/dd(eee)"
        minDate={new Date()}
        placeholderText="날짜입력"
        locale="ko"
      />
    </>
  );
};
export default DatePick_Arr;

//함수 명이 import명과 같으면 에러가 생김
