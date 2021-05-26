import React, { useState, useEffect } from "react";

// styles
import { GlobalStyle } from "./styles/GlobalStyles";

//components
import { AuthPage } from "./pages/Auth";

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isRightActive, setIsRightActive] = useState(false);
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

  return (
    <>
      <GlobalStyle />
      <AuthPage isRightActive={isRightActive} togglePanel={togglePanel} />
    </>
  );
};

export default App;
