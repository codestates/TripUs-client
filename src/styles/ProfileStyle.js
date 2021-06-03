import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  .main-label {
    margin-bottom: 2rem;
    font-family: "Noto Serif";
    font-size: 1rem;
  }

  .main-input {
    width: 100%;
    margin-bottom: 1rem;
    border-width: 0 0 2px;
    border-color: #d9d9d9;
    transition: 0.3s;
    padding-bottom: 0.5rem;
  }

  .main-input:focus {
    border-color: dodgerblue;
  }

  textarea {
    resize: none;
    border-color: #d9d9d9;
  }
`;
