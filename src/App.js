import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// styles
import { GlobalStyle } from "./styles/GlobalStyle";

//components & pages
import { Header } from "./components/Header/Header";
import FooterComponent from "./components/Footer";

import LandingPage from "./pages/Landing";
import LogInPage from "./pages/Login";
import SearchListPage from "./pages/SearchListPage";
import AboutPage from "./pages/About";

import RecruitmentPage from "./pages/Recruitment";
import MyPostsPage from "./pages/MyPosts";
import MyApplicationsPage from "./pages/MyApplications";
import MyAccountPage from "./pages/MyAccount";
import MyProfilePage from "./pages/MyProfile";
import Trip from "./pages/Trip";

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
  const [travelType, setTravelType] = useState("full");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogIn(true);
    }
  }, []);

  const setLogin = (bool) => {
    setIsLogIn(bool);
  };

  const openDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  window.addEventListener("click", () => {
    if (dropdownOpen) setDropdownOpen(false);
  });

  return (
    <>
      <GlobalStyle />
      <Header
        isLogin={isLogin}
        dropdownOpen={dropdownOpen}
        openDropdown={openDropdown}
        setLogin={setLogin}
        setDestination={setDestination}
        setDepartureDate={setDepartureDate}
        setReturnDate={setReturnDate}
        setTravelType={setTravelType}
      />

      <Switch>
        <Route exact path="/login">
          <LogInPage
            isRightActive={isRightActive}
            setIsRightActive={setIsRightActive}
            setLogin={setLogin}
          />
        </Route>
        <Route exact path="/about">
          <AboutPage
            setDestination={setDestination}
            setDepartureDate={setDepartureDate}
            setReturnDate={setReturnDate}
            setTravelType={setTravelType}
          />
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
        <Route exact path="/account">
          <MyAccountPage setLogin={setLogin} />
        </Route>
        <Route exact path="/profile">
          <MyProfilePage />
        </Route>
        <Route exact path="/trip/:id">
          <Trip />
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
