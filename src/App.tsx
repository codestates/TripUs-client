import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

// components
import Header from "./components/Header/Header";
import LogIn from "./components/Auth/LogIn";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    transition: display ease-in 1s;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Nanum Gothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  #root {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogin] = useState(false);

  const openDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  window.addEventListener("click", () => {
    setDropdownOpen(false);
  });

  return (
    <>
      <Header
        isLogin={isLogin}
        dropdownOpen={dropdownOpen}
        openDropdown={openDropdown}
      />
      <GlobalStyle />
      {/* <LogIn /> */}
    </>
  );
};

export default App;
