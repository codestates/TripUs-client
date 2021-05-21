import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconType } from "react-icons/lib";

const Icon = () => {
  const [icon, setIcon] = useState<IconType | null>(null);
  const mql = window.matchMedia("(max-width: 810px)");

  useEffect(() => {
    mql.matches ? setIcon(GiHamburgerMenu) : setIcon(FaUserCircle);
  }, [mql.matches]);

  mql.onchange = () => {
    if (mql.matches) {
      setIcon(GiHamburgerMenu);
    } else {
      setIcon(FaUserCircle);
    }
  };

  return <>{icon}</>;
};

export default Icon;
