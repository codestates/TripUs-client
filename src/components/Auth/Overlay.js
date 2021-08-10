import React from "react";

import {
  OverlayDisplayScreen,
  OverlayContainer,
  RightOverlayPanel,
  LeftOverlayPanel,
} from "./OverlayUtils";

// images
import together from "../../images/together.png";
import travelers from "../../images/travelers.png";

export const Overlay = ({ isRightActive, setIsRightActive }) => {
  const togglePanel = () => {
    setIsRightActive((prev) => !prev);
  };

  return (
    <OverlayDisplayScreen rightActive={isRightActive}>
      <OverlayContainer rightActive={isRightActive}>
        <LeftOverlayPanel rightActive={isRightActive}>
          <img src={travelers} alt="Travelers" />
          <div className="toggle" onClick={togglePanel}>
            이미 회원이신가요?
          </div>
        </LeftOverlayPanel>
        <RightOverlayPanel rightActive={isRightActive}>
          <img src={together} alt="People together" />
          <p className="toggle" onClick={togglePanel}>
            아직 회원이 아니신가요?
          </p>
        </RightOverlayPanel>
      </OverlayContainer>
    </OverlayDisplayScreen>
  );
};
