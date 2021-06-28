import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const ImgProductDetail = styled.img`
  height: 70vh;
  width: auto;
  
`;

export const ContainerImageInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 5%;

  width: 100%;
  padding: 0 15vw;
`;
export const BoxProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  
  grid-area: 1 / 1 / 2 / 2;
`;
export const BoxInfo = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  width:30vw;
  /* background-color: pink; */
  
`;
export const NomeCompWish = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NomeComp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NomeDoProduto = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const Composition = styled.div`
  font-size: 20px;
  color: #888888;
`;

export const ButtonWish = styled(Button)`
  background-color: white;
  border-radius: 0;
`;

export const ImgButtonWish = styled.img``;

export const AboutProduct = styled.div``;

export const ContainerLerMais = styled.div`
  width: 100%;
`;

export const LerMais = styled.div`
  display: inline;
  border-bottom: 1px solid black;
  :hover {
    cursor: pointer;
  }

  font-size: 19px;
  font-weight: bold;

  text-align: start;

  background-color: white;
  color: black;
`;

export const InformacoesProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const BoxLarguraPrecometroPedidominimo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: 1vh 0;

  width: 100%;
`;

const ImgBase = styled.img``;

export const ImgLargura = styled(ImgBase)`

`;

export const ImgPrecoMetro = styled(ImgBase)``;

export const ImgPedidoMinimo = styled(ImgBase)``;

export const BoxInformacoesProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #f6f6f6;
  width: 80vh 60vw;
  max-width: 60vw;
  padding: 2vh 1vw;

  margin: 10vh 0;
`;

export const TitleInformacoesProduct = styled.div`
  font-size: 44px;
  font-weight: bold;
`;

export const TextInformacoesProduct = styled.div``;

const ContainerPadraoLarguraPrecoMinimo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContainerLargura = styled(ContainerPadraoLarguraPrecoMinimo)``;
export const ContainerPrecoMetro = styled(ContainerPadraoLarguraPrecoMinimo)`
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

export const ContainerPedidoMinimo = styled(
  ContainerPadraoLarguraPrecoMinimo
)``;

const TextosSubImg = styled.div`
  font-size: 16px;
  color: #535353;
`;
export const TextoLargura = styled(TextosSubImg)``;

export const TextoPrecoMetro = styled(TextosSubImg)``;

export const TextoPedidoMinimo = styled(TextosSubImg)``;

export const BoxComprimentoComprar = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
`;

export const ColunaComprimentoPreco = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

export const ColunaBoxComprar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxComprar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
`;
const MaisMenosButton = styled(Button)`
  border-radius: 0;
`;

export const MenosButton = styled(MaisMenosButton)`
  grid-area: 2 / 1 / 3 / 2;
`;
export const MaisButton = styled(MaisMenosButton)`
  grid-area: 2 / 3 / 3 / 4;
`;

export const InputComprimento = styled.input`
  grid-area: 2 / 2 / 3 / 3;
`;

export const DivTextoSuperior = styled.div`
  display: flex;
  align-items: flex-end;

  grid-area: 1 / 2 / 2 / 3;

  text-transform: uppercase;
`;
export const DivTextoInferior = styled.div`
  display: flex;
  align-items: flex-start;

  grid-area: 3 / 2 / 4 / 3;

  text-transform: uppercase;
`;
export const SideBySide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-bottom: 1px solid black;
`;
export const BoxPreço = styled.div``;
export const DivPor = styled.div``;
export const Preco = styled.div`
  font-weight: bold;
  font-size: 39px;
`;
export const SubPreco = styled.div`
  font-size: 15px;
`;

export const ContainerBoxCinza = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;

  padding: 1vh 1vw;
  grid-area: 1 / 2 / 2 / 3;
`;
export const BoxCinza = styled.div`
  border: 1px dashed black;

  background-color: #e8e8e8;
`;
export const TextoBoxCinza = styled.div`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
export const CliqueAquiWpp = styled.a`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  :hover {
    cursor: pointer;
  }
  color: #077120;
`;

export const ContainerButtonCompra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ButtonComprar = styled(Button)`
  border-radius: 0;
`;
