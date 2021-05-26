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

export const Overlay = ({ isRightActive, togglePanel }) => {
  return (
    <OverlayDisplayScreen rightActive={isRightActive}>
      <OverlayContainer rightActive={isRightActive}>
        <LeftOverlayPanel rightActive={isRightActive}>
          <img src={travelers} alt="" />
          <div className="toggle" onClick={togglePanel}>
            이미 회원이신가요?
          </div>
        </LeftOverlayPanel>
        <RightOverlayPanel rightActive={isRightActive}>
          <img src={together} alt="" />
          <p className="toggle" onClick={togglePanel}>
            아직 회원이 아니신가요?
          </p>
        </RightOverlayPanel>
      </OverlayContainer>
    </OverlayDisplayScreen>
  );
};
