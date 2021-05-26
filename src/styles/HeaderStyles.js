import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 100%;
  width: 100vw;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  z-index: 999;

  .links {
    display: flex;
    height: 100%;
    align-items: center;

    @media (max-width: 901px) {
      display: none;
    }
  }

  .icon {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    padding: 0 0 0 16px;

    svg {
      fill: #3085d3;
      stroke: #3085d3;
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;
