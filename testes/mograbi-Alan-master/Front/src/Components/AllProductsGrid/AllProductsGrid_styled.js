import styled from "styled-components";
import { Col, Button } from "react-bootstrap";

import tricoline_liso from "../../Images/tricoline_liso.svg";
import tricoline_rotativo from "../../Images/tricoline_rotativo.svg";
import tricoline_digital from "../../Images/tricoline_digital.svg";
import viscose_digital from "../../Images/viscose_digital.svg";
import viscolise_lisa from "../../Images/viscolise_lisa.svg";
import promocoes from "../../Images/promocoes.svg";

import Faixaimg from "../../Images/faixa.svg";

export const BoxItem = styled(Col)`
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridContainer = styled.div`
margin:auto;
padding:0;
  display: grid;
  grid-template-columns: 0.25fr 1fr 1fr 0.25fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 5% 5%;
`;

const BaseCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40vh;
  margin: 0;
  padding: 0;

  background-repeat: no-repeat;
  background-position: 25% 25%;

  :hover {
    cursor: pointer;
  }
`;
export const Col11 = styled(BaseCol)`
  grid-area: 1 / 2 / 2 / 3;

  box-shadow: 0.5vh 0.5vw 1vw;

  background-image: url(${tricoline_liso});
`;

export const Col12 = styled(BaseCol)`
  grid-area: 1 / 3 / 2 / 4;

  box-shadow: 0.5vh 0.5vw 1vw;

  background-image: url(${tricoline_rotativo});
`;

export const Col21 = styled(BaseCol)`
  grid-area: 2 / 2 / 3 / 3;

  box-shadow: 0.5vh 0.5vw 1vw;

  background-image: url(${tricoline_digital});
`;

export const Col22 = styled(BaseCol)`
  grid-area: 2 / 3 / 3 / 4;

  box-shadow: 0.5vh 0.5vw 1vw;

  background-image: url(${viscose_digital});
`;

export const Col31 = styled(BaseCol)`
  grid-area: 3 / 2 / 4 / 3;

  box-shadow: 0.5vh 0.5vw 1vw;

  background-image: url(${viscolise_lisa});
`;
export const Col32 = styled(BaseCol)`
  grid-area: 3 / 3 / 4 / 4;

  box-shadow: 0.5vh 0.5vw 1vw;

  background-image: url(${promocoes});
`;

export const BoxMaisCategorias = styled(BaseCol)`
  grid-area: 4 / 1 / 5 / 5;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 10vh;
`;

export const Faixa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25vw;
  height: 17vh;
  padding: 20vh 1vw;

  font-size: 3.25em;
  color: white;
  opacity: 0.75;

  background-image: url(${Faixaimg});
  background-repeat: no-repeat;
  background-position: center;
`;

export const BoxText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  text-justify: center;
  flex-wrap: wrap;

  width: 20vw;
  height: 15vh;

  font-size: 3vw;
`;

export const ButtonMaisCategorias = styled(Button)`
  text-align: center;
  text-justify: center;

  height: 100%;
  font-size: 51px;

  border-radius: 0;
  border: 3px solid black;
  padding: 1vh 1vw;
`;
