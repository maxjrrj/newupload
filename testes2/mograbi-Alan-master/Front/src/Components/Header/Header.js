import { useContext } from "react";
import Context from "../../GlobalState/Context";
import Button from "react-bootstrap/Button";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Col,
  Row,
  Image,
} from "react-bootstrap";

import {
  ImageSearchIcon,
  ImagePersonIcon,
  ImageHeartIcon,
  ImageCartIcon
} from "./Header_styled"
import ResponsiveSelectMenu from "../ResponsiveSelectMenu/ResponsiveSelectMenu";
import TelefoneRedeSocial from "./TelefoneRedeSocial/TelefoneRedeSocial.js";

import personIcon from "../../Images/person.svg";
import heartIcon from "../../Images/heart.svg";
import searchIcon from "../../Images/search.svg";
import cartIcon from "../../Images/cart.svg";

import Mograbi_logo from "../../Images/Mograbi_logo.svg";
import {useHistory} from "react-router-dom";

import {
  ColLogoMograbi,
  ColLadoLogo,
  RowSearchEBotoes,
  FormSearch,
  InputSearchBar,
  ButtonMinhaConta,
  ButtonWishList,
  ButtonCart,
  RowResponsiveMenu,
  ImageMograbiLogo
} from "./Header_styled.js";
import { goToPage } from "../../Router/Walker";

const Header = () => {
  const history = useHistory();
  const { states, setters, requests } = useContext(Context);

  return (
    <>
      <TelefoneRedeSocial />

      {/* LOGO */}
      <Row style={{margin: 0, padding: 0}}>
        <ColLogoMograbi xs lg="4" onClick={() => goToPage(history, "/")}>
          <ImageMograbiLogo src={Mograbi_logo} alt="logo" />
        </ColLogoMograbi>
        {/* Coluna com navbar, botões e search */}
        <ColLadoLogo>
          <RowSearchEBotoes>
            <Col>
              <FormSearch inline>
                <InputSearchBar
                  type="text"
                  placeholder="Digite aqui o que procura..."
                />
                <Button variant="primary">
                  <ImageSearchIcon src={searchIcon} alt="search" />
                </Button>
              </FormSearch>
            </Col>
            <Col>
              <ButtonMinhaConta variant="outlined">
                <ImagePersonIcon src={personIcon} alt="person" />
                Minha Conta
                <personIcon />
              </ButtonMinhaConta>
            </Col>

            <Col>
              <ButtonWishList variant="outlined">
                <ImageHeartIcon src={heartIcon} alt="heart" />
                Lista de Desejos
              </ButtonWishList>
            </Col>

            <Col>
              <ButtonCart>
                <ImageCartIcon src={cartIcon} alt="cart" />
              </ButtonCart>
            </Col>
          </RowSearchEBotoes>

          <RowResponsiveMenu>
            <ResponsiveSelectMenu />
          </RowResponsiveMenu>
        </ColLadoLogo>
      </Row>
    </>
  );
};

export default Header;
