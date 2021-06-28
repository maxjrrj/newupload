import {
  Grid_container,
  LogoCol,
  Sobre,
  Precisa_de_Ajuda,
  Infos,
  Formas_de_Pagamento,
  Powered,
  Titulo,
  Texto,
  TextoMenor,
  RedesSociaisBox,
  MiniRedeSocial,
  FormasDePagamentoText,
  FormasDePagamentoImage,
  TextLeft,
  TextRight
} from "./Footer_styled";

import Mograbi_Logo_Black from "../../Images/Mograbi_Logo_Black.svg";
import facebook from "../../Images/facebook.svg";
import envelope from "../../Images/envelope.svg";
import instagram from "../../Images/instagram.svg";
import pagamento from "../../Images/formasdepagamento.svg";

const Footer = () => {
  return (
    <Grid_container>
      <LogoCol>
        <img src={Mograbi_Logo_Black} />
      </LogoCol>
      <Sobre>
        <Titulo>SOBRE</Titulo>
        <Texto>A empresa</Texto>
        <Texto>Fale conosco</Texto>
        <Texto>Clientes</Texto>
        <Texto>Eventos</Texto>
        <Texto>Parcerias</Texto>
      </Sobre>
      <Precisa_de_Ajuda>
        <Titulo>PRECISA DE AJUDA?</Titulo>
        <Texto>Como comprar?</Texto>
        <Texto>Trocas e Devoluções</Texto>
        <Texto>Dúvidas Frequentes</Texto>
        <Texto>Fretes e Entregas</Texto>
        <Texto>Política de Frete Grátis</Texto>
        <Texto>Políticas de Privacidade</Texto>
        <Texto>Minha conta</Texto>
        <Texto>Meus pedidos­</Texto>
      </Precisa_de_Ajuda>
      <Infos>
        <Titulo>ENDEREÇO</Titulo>
        <TextoMenor>Rio de Janeiro - RJ</TextoMenor>
        <TextoMenor>Rua Aristides Lobo, 80 e Av. Paulo de Frontin,</TextoMenor>
        <TextoMenor>333 lojas 125 - Rio Comprido - Polo Textil</TextoMenor>
        <Titulo>TELEFONE</Titulo>
        <TextoMenor>(21) 3333-4444</TextoMenor>
        <Titulo>Redes Sociais</Titulo>
        <RedesSociaisBox>
          <MiniRedeSocial src={facebook} />
          <MiniRedeSocial src={envelope} />
          <MiniRedeSocial src={instagram} />
        </RedesSociaisBox>
      </Infos>
      <Formas_de_Pagamento>
        <FormasDePagamentoText>Formas de Pagamento</FormasDePagamentoText>
        <FormasDePagamentoImage src={pagamento} />
      </Formas_de_Pagamento>
      <Powered>
        <TextLeft>
          2021 - mograbi tecidos - Todos os direitos reservados
        </TextLeft>
        <TextRight>Powered by Brutalit</TextRight>
      </Powered>
    </Grid_container>
  );
};

export default Footer;
