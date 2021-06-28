import {
  ContainerFrete,
  TitleFretePrazo,
  SubtitleFretePrazo,
  InputCEP,
} from "./FreteEPrazo_styled";

const FreteEPrazo = () => {
  return (
    <ContainerFrete>
      <TitleFretePrazo>Frete e Prazo</TitleFretePrazo>
      <SubtitleFretePrazo>
        SIMULE O FRETE E O PRAZO DE ENTREGA ESTIMADOS PARA SUA REGIÃO:
      </SubtitleFretePrazo>
      <InputCEP placeholder="Insira o seu CEP"></InputCEP>
    </ContainerFrete>
  );
};

export default FreteEPrazo;
