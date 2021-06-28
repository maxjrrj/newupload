import { Col, Row } from "react-bootstrap";
import { goToPage } from "../../Router/Walker";
import { useHistory } from "react-router-dom";
import {
  GridContainer,
  Col11,
  Col12,
  Col21,
  Col22,
  Col31,
  Col32,
  Faixa,
  BoxText,
  BoxMaisCategorias,
  ButtonMaisCategorias,
} from "./AllProductsGrid_styled";


const AllProductsGrid = () => {
  const history = useHistory();

  return (
    <>
      <GridContainer>
        <Col11 onClick={() => goToPage(history, "/Ver%20Todos")}>
          <Faixa>
            <BoxText>Tricoline Lisa</BoxText>
          </Faixa>
        </Col11>
        <Col12 onClick={() => goToPage(history, "/Ver%20Todos")}>
          <Faixa>
            <BoxText>Tricoline Rotativa</BoxText>
          </Faixa>
        </Col12>
        <Col21 onClick={() => goToPage(history, "/Ver%20Todos")}>
          <Faixa>
            <BoxText>Tricoline Digital</BoxText>
          </Faixa>
        </Col21>
        <Col22 onClick={() => goToPage(history, "/Ver%20Todos")}>
          <Faixa>
            <BoxText>Viscose Digital</BoxText>
          </Faixa>
        </Col22>
        <Col31 onClick={() => goToPage(history, "/Ver%20Todos")}>
          <Faixa>
            <BoxText>Viscose Lisa</BoxText>
          </Faixa>
        </Col31>
        <Col32 onClick={() => goToPage(history, "/Ver%20Todos")}>
          <Faixa>
            <BoxText>Promoções</BoxText>
          </Faixa>
        </Col32>
        <BoxMaisCategorias>
          <ButtonMaisCategorias variant="outlined">
            + Categorias
          </ButtonMaisCategorias>
        </BoxMaisCategorias>
      </GridContainer>
    </>
  );
};

export default AllProductsGrid;
