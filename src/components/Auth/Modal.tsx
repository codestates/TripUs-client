import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  background: rgba(0, 0, 0, 0.25);
`;

export const Modal = styled.div`
  max-width: 768px;
  min-width: 70%;
  min-height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  font-family: "Roboto Slab", serif;
  color: rgba(0, 0, 0, 0.7);
  position: relative;
  background: #fff;
  overflow: hidden;

  @media (max-width: 811px) {
    min-height: 85%;
    min-width: 80%;
  }
`;

export const CloseButton = styled.p`
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  margin: 24px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
