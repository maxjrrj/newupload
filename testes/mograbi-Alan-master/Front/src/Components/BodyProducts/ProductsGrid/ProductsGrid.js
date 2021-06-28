import { useContext } from "react";
import Context from "../../../GlobalState/Context";

import {
  BoxProduct,
  ImgProduct,
  TextBox,
  TitleProductCard,
  Preco,
  BoxButtons,
  AdicionarCarrinho,
  HeartButton,
  BoxImage,
  Products,
} from "./ProductsGrid_styled";

import whiteHeartIcon from "../../../Images/whiteHeartIcon.svg";

import { useHistory } from "react-router-dom";
import { goToPage } from "../../../Router/Walker";
import { entrada } from "../../../Constants/ProdutosTeste";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductsGrid = () => {
  const history = useHistory();
  const params = useParams();
  // console.log("params", params);

  const { states, setters, requests } = useContext(Context);

  const produtos = entrada;
  // const produtos = states.products

  return (
    <Products>
      {produtos.map((product) => {
        console.log(produtos.productCtg, "===", params.categoryName);
        if (
          product.productCtg === params.categoryName &&
          params.categoryName !== "Ver Todos"
        ) {
          return (
            <BoxProduct>
              <BoxImage>
                <ImgProduct
                  onClick={() => goToPage(history, `/product/${product.pk}`)}
                  src={product.productPicture[0]}
                />
              </BoxImage>
              <TextBox
                onClick={() => goToPage(history, `/product/${product.pk}`)}
              >
                <TitleProductCard>{product.productName}</TitleProductCard>
                <Preco>R$ {product.productValue}</Preco>
              </TextBox>
              <BoxButtons>
                <AdicionarCarrinho>Adicionar ao carrinho</AdicionarCarrinho>
                <HeartButton>
                  <img src={whiteHeartIcon} />
                </HeartButton>
              </BoxButtons>
            </BoxProduct>
          );
        }

        if (params.categoryName === "Ver Todos") {
          return (
            <BoxProduct>
              <BoxImage>
                <ImgProduct
                  onClick={() => goToPage(history, `/product/${product.pk}`)}
                  src={product.productPicture[0]}
                />
              </BoxImage>
              <TextBox
                onClick={() => goToPage(history, `/product/${product.pk}`)}
              >
                <TitleProductCard>{product.productName}</TitleProductCard>
                <Preco>R$ {product.productValue}</Preco>
              </TextBox>
              <BoxButtons>
                <AdicionarCarrinho>Adicionar ao carrinho</AdicionarCarrinho>
                <HeartButton>
                  <img src={whiteHeartIcon} />
                </HeartButton>
              </BoxButtons>
            </BoxProduct>
          );
        }
      })}
    </Products>
  );
};

export default ProductsGrid;
