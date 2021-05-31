import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// styles
import { GlobalStyle } from "./styles/GlobalStyle";

//components & pages
import { Header } from "./components/Header/Header";

import AuthPage from "./pages/Auth";
import LandingPage from "./pages/Landing";
import FooterComponent from "./components/Footer";
import SearchListPage from "./pages/SearchListPage";
import About from "./components/About/About";

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isRightActive, setIsRightActive] = useState(false);
  const [isLogin, setIsLogIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogIn(true);
    }
  }, []);

  const setLogin = (bool) => {
    setIsLogIn(bool);
  };

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
        setLogin={setLogin}
      />

      <Switch>
        <Route exact path="/login">
          <AuthPage
            isRightActive={isRightActive}
            togglePanel={togglePanel}
            setLogin={setLogin}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/search">
          <SearchListPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
      <FooterComponent />
    </>
  );
};

export default App;
