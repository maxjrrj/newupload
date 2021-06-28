import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 30vh;

  margin: 0 0 5vh 0;
  padding: 0;
`;
export const CaixaTextoESetas = styled.div`
  display: flex;
  align-items: center;
  width: 90vw;
  background-color: black;  

  margin: 0;
  padding: 0;
`;

export const RowTexto = styled(Row)`
  display: grid;
  grid-template-columns: 0.25fr 1fr 1fr 0.25fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
`;

export const ColunasGrid = styled(Col)`
  display: flex;
  margin: 0 2vw;
  justify-content: left;
  align-items: center;
  font-size: 1.3vw;
  color: white;
`;

export const SetaEsquerda = styled(Col)`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  grid-area: 1 / 1 / 2 / 2;
`;
export const SetaDireita = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  grid-area: 1 / 4 / 2 / 5;
`;
