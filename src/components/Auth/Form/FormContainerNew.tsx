import styled from "styled-components";

interface Props {
  rightActive: boolean;
}

const FormContainer = styled.div<Props>`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default FormContainer;
