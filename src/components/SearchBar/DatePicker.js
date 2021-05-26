import React, { useState } from "react";
import styled from "styled-components";
import RadioBox from "./RadioBox";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);

function DatePickerM() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="Picker">
      locale="ko"
      <p> 출발날</p>
      <DatePicker
        selected={selectedDate}
        onChange={setSelectedDate(date)}
        dateFormat="yyyy/MM/dd"
        minDate={new Date()}
        placeholderText="날짜입력"
      />
    </div>
  );
}
export default DatePickerM;

//함수 명이 import명과 같으면 에러가 생김
