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
import AboutPage from "./pages/About";
import RecruitmentPage from "./pages/Recruitment";
import MyPostsPage from "./pages/MyPosts";
import MyApplicationsPage from "./pages/MyApplications";

const App = () => {
  // login
  const [isLogin, setIsLogIn] = useState(false);

  // header
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isRightActive, setIsRightActive] = useState(false);

  // search
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [travelType, setTravelType] = useState("now");

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
          <AboutPage />
        </Route>
        <Route path="/search">
          <SearchListPage
            destination={destination}
            departureDate={departureDate}
            returnDate={returnDate}
            travelType={travelType}
            setDestination={setDestination}
            setDepartureDate={setDepartureDate}
            setReturnDate={setReturnDate}
            setTravelType={setTravelType}
          />
        </Route>
        <Route exact path="/submit">
          <RecruitmentPage />
        </Route>
        <Route path="/my-posts">
          <MyPostsPage />
        </Route>
        <Route path="/my-applications">
          <MyApplicationsPage />
        </Route>
        <Route path="/">
          <LandingPage
            setDestination={setDestination}
            setDepartureDate={setDepartureDate}
            setReturnDate={setReturnDate}
            setTravelType={setTravelType}
          />
        </Route>
      </Switch>
      <FooterComponent />
    </>
  );
};

export default App;
