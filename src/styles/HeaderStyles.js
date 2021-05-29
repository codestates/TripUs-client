import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 100%;
  min-width: 100vw;
  height: 10%;
  min-height: 100px;
  z-index: 999;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
  background: rgba(255, 255, 255, 0.99);

  .wrapper {
    height: 100%;
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 700;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    @media (max-width: 911px) {
      width: 65%;
    }

    @media (min-width: 911px) {
      width: 75%;
    }

    .position-wrapper {
      position: relative;
      width: 90%;
      height: 100%;
    }
  }

  .logo {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    height: 100%;

    img {
      @media (max-width: 911px) {
        height: 1.3rem;
      }

      @media (min-width: 911px) {
        height: 2rem;
      }
    }
  }

  .navbar {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

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

  .hamburger-icon {
    @media (min-width: 900px) {
      display: none;
    }
  }

  .user-icon {
    @media (max-width: 901px) {
      display: none;
    }
  }
`;
