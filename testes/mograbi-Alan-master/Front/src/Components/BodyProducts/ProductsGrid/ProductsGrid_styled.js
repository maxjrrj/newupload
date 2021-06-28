import styled from "styled-components";

import Button from "react-bootstrap/Button";

export const Products = styled.div`
  grid-area: Products;
  display: flex;
  flex-wrap: wrap;

  background-color: #ffffff;
`;

export const BoxProduct = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin: 1.5vw;
  margin-top: 1.5vh;
  margin-right: 1.5vw;
  margin-bottom: 1.5vh;
  margin-left: 1.5vw;

  padding-top: 0.75vh;
  padding-right: 0.75vw;
  padding-bottom: 0;
  padding-left: 0.75vw;

  border: 2px solid #cccccc;

  width: 20vw;
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImgProduct = styled.img`
  
  width: 100%;
  :hover {
    cursor: pointer;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5vw;

  :hover {
    cursor: pointer;
  }
`;

export const TitleProductCard = styled.div`
  font-size: 1.4vw;
  font-weight: bold;
  overflow: auto !important;
`;
export const Preco = styled.div`
  font-size: 2.1vw;
  font-weight: bold;
`;

export const BoxButtons = styled.div`
  display: flex;

  width: 100%;

  margin-bottom: 1vh;
`;

export const AdicionarCarrinho = styled(Button)`
  height: 5vh;
  border-radius: 0;
  font-size: 1.1vw;
  font-weight: bold;

  margin-right: 0.25vw;
  margin-bottom: 0;
`;

export const HeartButton = styled(Button)`
  
  width: 5vw;
  border: 0;
  border-radius: 0;
  background-color: #707070;

  margin-left: 0.25vw;
  margin-bottom: 0;
`;
