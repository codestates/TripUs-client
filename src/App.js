import React, { useState } from "react";

// styles
import { GlobalStyle } from "./styles/GlobalStyles";

//components & pages
import { Header } from "./components/Header/Header";
import { AuthPage } from "./pages/Auth";

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isRightActive, setIsRightActive] = useState(false);
  const [isLogin] = useState(false);

  const togglePanel = () => {
    setIsRightActive((prev) => !prev);
  };

  const openDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  window.addEventListener("click", () => {
    setDropdownOpen(false);
  });

  return (
    <>
      <GlobalStyle />
      <Header
        isLogin={isLogin}
        dropdownOpen={dropdownOpen}
        openDropdown={openDropdown}
      />
      <AuthPage isRightActive={isRightActive} togglePanel={togglePanel} />
    </>
  );
};

export default App;
