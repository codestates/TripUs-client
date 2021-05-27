import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// styles
import { GlobalStyle } from "./styles/GlobalStyle";

//components & pages
import { Header } from "./components/Header/Header";

import { AuthPage } from "./pages/Auth";
import SearchBar from "./components/SearchBar/SearchBar";

import AuthPage from "./pages/Auth";
import LandingPage from "./pages/LandingPage";
import FooterComponent from "./components/Footer";


const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isRightActive, setIsRightActive] = useState(false);
  const [isLogin, setIsLogIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogIn(true);
    }
  }, []);

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

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


      <AuthPage isRightActive={isRightActive} togglePanel={togglePanel} />

      <Switch>
        <Route exact path="/login">
          <AuthPage
            isRightActive={isRightActive}
            togglePanel={togglePanel}
            setLogin={setLogin}
          />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
      <FooterComponent />

    </>
  );
};

export default App;
