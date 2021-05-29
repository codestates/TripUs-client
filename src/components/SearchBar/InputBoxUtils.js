import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  min-width: 90%;
  width: 100%;
  height: 150px;

  box-shadow: rgba(0, 0, 0, 0.172549) 0 6px 12px 0;
  background-color: white;
  align-items: center;
  border-style: solid 1px black;
  border-radius: 8px;
  font-size: 1.3rem;
  @media (max-width: 1200px) {
    height: 65%;
    width: 100%;
    min-width: 30%;
    font-size: 1.5vh;
  } ;
`;

export const Re_Wrapper = styled.div`
  display: flex;
  padding-left: 20px;
  min-width: 90%;
  width: 100%;
  height: 150px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  border-style: solid 3px black;
  border-radius: 8px;
  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  } ;
`;
export const Re_SmallB = styled.div`
  display: flex;
  width: 90%;
  @media (max-width: 1200px) {
    width: 80%;
    height: 100%;
    flex-direction: column;
  } ;
`;

export const Re_SmallC = styled.div`
  align-items: flex-start;
  flex-direction: raw;
  padding: 0px 20px 0px 20px;
  max-width: 100%;
  width: 50%;
  border: 1px solid #dadfe6;
  border-radius: 2px;
  background-color: rgb(232 235 240 / 56%);
  @media (max-width: 1200px) {
    width: 80%;
    height: 30%;
  } ;
`;

export const Re_SmallD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 20px 0px 20px;
  width: 100%;
  border: 1px solid #dadfe6;
  border-radius: 2px;
  background-color: rgb(232 235 240 / 56%);
  @media (max-width: 1200px) {
    width: 100%;
    height: 25%;
  } ;
`;

export const Re_SmallE = styled.div`
  display: flex;
  flex-direction: raw;
  @media (max-width: 1200px) {
    width: 100%;
    height: 30%;
    padding-top: 10px;
  } ;
`;

export const Re_Destination = styled.p`
  padding-top: 5px;
  height: 20px;
  font-size: 2rem;
  border-style: solid 1px black;
`;

export const Re_DesInput = styled.input`
  display: flex;
  top: 0px;
  bottom: 30px;
  max-width: 100%;
  width: 90%;
  height: 30px;
  border: 1px;
  background-color: white;
  text-align: start;
  cursor: text;
  padding: 18px 20px;
  border: 0.0625rem solid #b2b2bf;
  border-width: 1px;
  border-radius: 0.6;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
`;

export const Re_DepartureDate = styled.p`
  top: 0px;
  left: 0px;
  padding-top: 5px;
  height: 20px;
  margin: 0 auto;
  border-style: solid 1px black;
`;

export const SearchBtn = styled.button`
  display: flex;
  border-radius: 5%;
  width: 100px;
  height: 70px;
  margin-top: 30px;
  padding-top: 17px;
  padding-left: 30px;
  border: none;
  background-color: rgba(57, 150, 255, 1);
  cursor: pointer;
  svg {
    height: 32px;
    width: 32px;
    stroke: white;
    fill: white;
  }
`;
