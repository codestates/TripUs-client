import styled from "styled-components";

interface Props {
  rightActive: boolean;
}

const Forms = styled.div<Props>`
  position: relative;
  height: 100%;
  width: 100%;
  left: 0;
  background: #fff;

  @media (max-width: 901px) {
    width: 200%;
  }
`;

export default Forms;
