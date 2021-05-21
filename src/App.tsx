import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// components
import Header from "./components/Header/Header";

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
      <Header
        isLogin={isLogin}
        dropdownOpen={dropdownOpen}
        openDropdown={openDropdown}
      />
    </Router>
  );
};

export default App;
