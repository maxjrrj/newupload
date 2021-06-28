import React from "react";

import { ContainerTexto} from "./BodyQuemSomos_styled"
import DivQuemSomos from "./DivQuemSomos/DivQuemSomos.js";
import CarrosselQuemSomos from "./CarrosselQuemSomos/CarrosselQuemSomos";
import CaixaTexto from "./CaixaTexto/CaixaTexto";

const BodyQuemSomos = () => {
  return (
    <>
      <DivQuemSomos />
      <ContainerTexto>
        <CarrosselQuemSomos />
        <CaixaTexto />
      </ContainerTexto>
    </>
  );
};

export default BodyQuemSomos;
