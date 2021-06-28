import Iconshoppingcart from "../../../Images/Icon-feather-shopping-cart.svg";

import {
  CarrosselContainer,
  PreviousButton,
  CarrosselBox,
  CarrosselItem,
  NextButton,
  CardItem,
  TituloCard,
  SubTituloCard,
  ButtonAddCart,
  BoxTextosEButton,
  PrecoAnterior,
  PrecoOficial,
  TextoPrecos,
  ButtonOff,
  ImgProduct,
  ImgLogoCart,
} from "./Carrossel_styled";

import { entrada } from "../../../Constants/ProdutosTeste";
import { goToPage } from "../../../Router/Walker";
import { useHistory } from "react-router-dom";

const Carrossel = (props) => {
  console.log(props);
  const history = useHistory();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  let entradaCortada = entrada.slice(props.inicio, props.fim);
  console.log("entradaCortada", entradaCortada, typeof entradaCortada);

  return (
    <CarrosselContainer>
      {/* <PreviousButton id="previous">A</PreviousButton> */}
      <CarrosselBox responsive={responsive}>
        {entradaCortada.map((product) => {
          return (
            <CarrosselItem>
              <CardItem
                onClick={() => goToPage(history, `/product/${product.pk}`)}
              >
                <ImgProduct src={product.productPicture[0]} />
                <TituloCard>{product.productName}</TituloCard>
                <SubTituloCard>{product.ProductCtg}</SubTituloCard>
                <BoxTextosEButton>
                  <TextoPrecos>
                    <PrecoAnterior>
                      R${product.productValueDiscount}
                    </PrecoAnterior>
                    <PrecoOficial>R${product.productValue}</PrecoOficial>
                  </TextoPrecos>
                  <ButtonOff disabled="true">30% Off</ButtonOff>
                </BoxTextosEButton>
                <ButtonAddCart>
                  Adicionar ao carrinho
                  <ImgLogoCart src={Iconshoppingcart} />
                </ButtonAddCart>
              </CardItem>
            </CarrosselItem>
          );
        })}
      </CarrosselBox>

      {/* <NextButton id="next">B</NextButton> */}
    </CarrosselContainer>
  );
};

export default Carrossel;
