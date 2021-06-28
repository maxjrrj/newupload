import styled from "styled-components";
import { Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";



export const CarrosselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ButtonOff = styled(Button)`
  background-color: white !important;
  border-radius: 0;
  color: black !important;
`;


export const PrecoAnterior = styled.div`
  font-size: 19px;
  color: #c4c4c4;
  margin: 0 0.25vw;
  text-decoration-line: line-through;
`;


export const PrecoOficial = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin: 0 0.25vw;
`;

export const BoxTextosEButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextoPrecos = styled.div`
  display: flex;
`;


export const CarrosselBox = styled(Carousel)`
  height: 60vh;
  width: 65%;
`;
export const CarrosselItem = styled.div`
  width: 20vw;
`;

const BaseButton = styled(Button)``;

export const PreviousButton = styled(BaseButton)``;
export const NextButton = styled(BaseButton)``;

export const CardItem = styled.div`
  width: 100%;
`;

export const ImgProduct = styled.img`
  width: 20vw;
`;

export const ImgLogoCart = styled.img`
  margin-left: 1vw;
`;

export const TituloCard = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
export const SubTituloCard = styled.div`
  font-size: 15px;
`;
export const BoxTextos = styled.div`
  display: flex;
`;
export const ButtonAddCart = styled(Button)`
  border-radius: 0;
  width: 100%;
  text-align: center;
  font-size: 22px;

  margin-top: 2vh;
`;

