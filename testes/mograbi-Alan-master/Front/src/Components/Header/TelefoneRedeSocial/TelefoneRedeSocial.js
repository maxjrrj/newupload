import { useContext } from "react";
import Context from "../../../GlobalState/Context";
import {
  TelephoneRedes,
  Telefone,
  RedesSociais,
  RedesSociaisImages
} from "./TelefoneRedeSocial_styled.js";

import { Nav, Navbar, Image } from "react-bootstrap";

import telephone from "../../../Images/telephone.svg";
import facebook from "../../../Images/facebook.svg";
import envelope from "../../../Images/envelope.svg";
import instagram from "../../../Images/instagram.svg";

const TelefoneRedeSocial = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <TelephoneRedes>
      <Telefone>
        <Image src={telephone} alt="telephone" />
        <Navbar.Brand style={{ color: "white" }}>
          +55 (21) 3269-2869
        </Navbar.Brand>
      </Telefone>
      <Nav className="mr-auto"></Nav>
      <RedesSociais>
        <Nav.Link>
          <RedesSociaisImages src={facebook} alt="facebook" />
        </Nav.Link>

        <Nav.Link>
          <RedesSociaisImages src={envelope} alt="envelope" />
        </Nav.Link>

        <Nav.Link>
          <RedesSociaisImages src={instagram} alt="instagram" />
        </Nav.Link>
      </RedesSociais>
    </TelephoneRedes>
  );
};

export default TelefoneRedeSocial;
