import styled from "styled-components";

export const Grid_container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr 1fr 1.5fr;
  grid-template-rows: 6fr 1fr 0.5fr;
  gap: 0% 0%;
  grid-template-areas:
    "logo Sobre Precisa_de_Ajuda infos"
    "Formas_de_Pagamento Formas_de_Pagamento Formas_de_Pagamento Formas_de_Pagamento"
    "powered powered powered powered";
`;

export const LogoCol = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  
`;

export const Sobre = styled.div`
  grid-area: Sobre;
  background-color: black;
  display:flex;
  flex-direction:column;
  justify-content: start;
  padding-top: 5vh;
`;
export const Titulo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

export const Texto = styled.div`
  font-size: 28;
  cursor: pointer;
  margin: 1vh 1vw 1vh 0;
  opacity: 0.64;
  color: white;
`;

export const TextoMenor = styled.div`
  font-size: 22;
  opacity: 0.64;
  color: white;
`;

export const Precisa_de_Ajuda = styled.div`
  grid-area: Precisa_de_Ajuda;
  background-color: black;
  display:flex;
  flex-direction:column;
  justify-content: start;
  padding-top: 5vh;
`;
export const RedesSociaisBox = styled.div`
  width: 100%;
  padding: 1vh 1vw 1vh 0;
`;

export const MiniRedeSocial = styled.img`
  width: 3vw;
  height: 5vh;
  cursor: pointer;
`;

export const Infos = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: start;
  grid-area: infos;
  background-color: black;
  padding-top: 5vh;
`;

export const Formas_de_Pagamento = styled.div`
  grid-area: Formas_de_Pagamento;
  background-color: white;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
`;




export const FormasDePagamentoText = styled.div`
font-size:39px;
color:black;
`

export const FormasDePagamentoImage = styled.img`
`

export const Powered = styled.div`
  grid-area: powered;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #444444;
  border-bottom: 1vh solid #707070;
  color: white;
  height:5vh;
  font-size:22px;
`;

export const TextLeft = styled.div`
padding-left: 4vw;
`

export const TextRight = styled.div`
font-weight: italic;
padding-right: 4vw;
`