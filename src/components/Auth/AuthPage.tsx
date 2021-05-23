import React from "react";
import { createPortal } from "react-dom";

// Modal components
import { Modal, ModalBackground, CloseButton } from "./Modal";

// Overlay components
import OverlayContainer from "./Overlay/OverlayContainer";
import Overlay from "./Overlay/Overlay";
import { RightOverlayPanel, LeftOverlayPanel } from "./Overlay/OverlayPanels";

// Form component
import FinalForm from "./Form/FinalForm";

// images for Overlay
import together from "../../images/together.png";
import travelers from "../../images/travelers.png";

const Auth = ({
  modalOpen,
  closeModal,
  isRightActive,
  togglePanel,
}: {
  modalOpen: boolean;
  closeModal: () => void;
  isRightActive: boolean;
  togglePanel: () => void;
}) => {
  if (!modalOpen) {
    return null;
  }

  return createPortal(
    <ModalBackground onClick={closeModal}>
      <Modal
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
          e.stopPropagation();
        }}
      >
        <CloseButton className="closeButton" onClick={closeModal}>
          Close
        </CloseButton>
        <FinalForm rightActive={isRightActive} togglePanel={togglePanel} />
        <OverlayContainer rightActive={isRightActive}>
          <Overlay rightActive={isRightActive}>
            <LeftOverlayPanel rightActive={isRightActive}>
              <img src={travelers} alt="" />
            </LeftOverlayPanel>
            <RightOverlayPanel rightActive={isRightActive}>
              <img src={together} alt="" />
            </RightOverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Modal>
    </ModalBackground>,
    document.querySelector("#modal") as HTMLDivElement
  );
};

export default Auth;
