import React from "react";
import {
  CaixaTextoESetas,
  ColunasGrid,
  Container,
  SetaEsquerda,
  SetaDireita,
  RowTexto
} from "./CaixaTexto_styled";
import { Row, Col } from "react-bootstrap";

import PolygonEsquerda from "../../../Images/PolygonEsquerda.svg";
import PolygonDireita from "../../../Images/PolygonDireita.svg";

const CaixaTexto = () => {
  return (
    <Container>
      <CaixaTextoESetas>
        <RowTexto>
          <SetaEsquerda >
            <img src={PolygonEsquerda} />
          </SetaEsquerda>
          
          <ColunasGrid style={{gridArea: 1 / 2 / 2 / 3}}>
            A “Mograbi Tecidos” foi criada e idealizada pelos sucessores da
            tradicional “Casa Miro”, loja de tecidos no Rio de Janeiro, fundada
            em 1939. Loja na qual 4 gerações da família Mograbi atuaram e lá
            aprenderam como funcionava a arte de admirar e vender tecidos.
          </ColunasGrid>
          <ColunasGrid style={{gridArea: 1 / 3 / 2 / 4}}>
            A Mograbi está no mercado têxtil desde 2007, atuando hoje com o
            intuito de vender e distribuir tecidos com estampas diferenciadas e
            exclusivas. Mesmo após sucessivas crises conseguimos superar todos
            esses os obstáculos com um trabalho bem feito e consequentemente um
            estrondoso sucesso.
          </ColunasGrid>
          
          <SetaDireita>
            <img src={PolygonDireita} />
          </SetaDireita>
        </RowTexto>
      </CaixaTextoESetas>
    </Container>
  );
};

export default CaixaTexto;
