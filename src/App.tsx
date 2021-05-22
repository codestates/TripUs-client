import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// components
import Header from "./components/Header/Header";

import FooterComponent from "./components/Footer";


const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const openDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  window.addEventListener("click", () => {
    setDropdownOpen(false);
  });

  return (
    <Router>

      <Header dropdownOpen={dropdownOpen} openDropdown={openDropdown} />
      <FooterComponent />

      <Header
        isLogin={isLogin}
        dropdownOpen={dropdownOpen}
        openDropdown={openDropdown}
      />
      <img
        src={landingpage}
        style={{ display: "block", height: "100vh", width: "100vw" }}
      />

    </Router>
  );
};

export default App;
