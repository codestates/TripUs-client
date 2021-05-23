import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

// components
import Header from "./components/Header/Header";
import Auth from "./components/Auth/AuthPage";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
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
  const [modalOpen, setModalOpen] = useState(false);
  const [isRightActive, setIsRightActive] = useState(true);
  const [isLogin] = useState(false);

  const togglePanel = () => {
    setIsRightActive((prev) => !prev);
  };

  const openDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  window.addEventListener("click", () => {
    setDropdownOpen(false);
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header
        isLogin={isLogin}
        dropdownOpen={dropdownOpen}
        openDropdown={openDropdown}
        openModal={openModal}
        setIsRightActive={setIsRightActive}
      />
      <GlobalStyle />
      <Auth
        modalOpen={modalOpen}
        closeModal={closeModal}
        isRightActive={isRightActive}
        togglePanel={togglePanel}
      />
    </>
  );
};

export default App;
