import { useContext } from "react";
import Context from "../../../GlobalState/Context";
import {
  TextQuemSomos,
  ContainerDivQuemSomos,
  BoxWithPolygons,
} from "./DivQuemSomos_styled";
import PolygonPequenoDireita from "../../../Images/PolygonPequenoDireita.svg";
import PolygonPequenoEsquerda from "../../../Images/PolygonPequenoEsquerda.svg";

const DivQuemSomos = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    
      <ContainerDivQuemSomos>
        <BoxWithPolygons>
          <img src={PolygonPequenoEsquerda}/>
          <TextQuemSomos>Quem Somos</TextQuemSomos>
          <img src={PolygonPequenoDireita} />
        </BoxWithPolygons>
      </ContainerDivQuemSomos>
    
  );
};

export default DivQuemSomos;
