import Iconshoppingcart from "../../../Images/Icon-feather-shopping-cart.svg";
import axios from 'axios'
import React from "react";
import useSWR from 'swr';
import { Suspense } from "react";

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



const url = 'https://cd8wxyy7ba.execute-api.sa-east-1.amazonaws.com/dev/products';
/*
const pegaProducts = async() => new Promise((resolve, reject) => {
  axios.get('https://cd8wxyy7ba.execute-api.sa-east-1.amazonaws.com/dev/products', (err, contents) => {
    if(err){
      reject(err)
    } else {
      resolve(contents)
    }
  })
})

const produtinhos = pegaProducts().then(contents => {
  console.log(contents)
})

console.log(produtinhos)

*/

/*const pega = async() => {
  const data = await axios.get('https://cd8wxyy7ba.execute-api.sa-east-1.amazonaws.com/dev/products')
  return data
}


const pk = pega().then( data => {
  
   return data
})

console.log(pk)*/


const fetcher = (...params) => axios
  .get(...params)
  .then(resp => resp.data)

  const useProjectInfo = () => {
    const {data, error} = useSWR(
      url,
      fetcher
    )

    return {
      isLoading: !data && !error,
      data,
      error, 
    }
  }

  const CatchDados = () => {
  const data = useProjectInfo()

  if (!data) {
    return <div>LOADING</div>
  }

  if (data.data){

    return <> <h1>{data.data[1].pk} </h1> </>
  }

  data.onchange = ()=>{ console.log('sruvydgcfvbireusgbvoouvouv')}
  //   if (!data){
  //     return <h1>LOADING</h1>
  //   } 
    
  //   return (

  //           <CarrosselItem>
  //             <CardItem
  //               //onClick={() => goToPage(history, `/product/${product.pk}`)}
  //             >
  //               <ImgProduct src={product.productPicture[0]} />
  //               <TituloCard>{product.productName}</TituloCard>
  //               <SubTituloCard>{product.ProductCtg}</SubTituloCard>
  //               <BoxTextosEButton>
  //                 <TextoPrecos>
  //                   <PrecoAnterior>
  //                     R${product.productValueDiscount}
  //                   </PrecoAnterior>
  //                   <PrecoOficial>R${product.productValue}</PrecoOficial>
  //                 </TextoPrecos>
  //                 <ButtonOff disabled="true">30% Off</ButtonOff>
  //               </BoxTextosEButton>
  //               <ButtonAddCart>
  //                 Adicionar ao carrinho
  //                 <ImgLogoCart src={Iconshoppingcart} />
  //               </ButtonAddCart>
  //             </CardItem>
  //           </CarrosselItem>
    
  //   )
    
  }
  


// #################################################################

function pegaDados() {
  return new Promise((resolve, reject) => {
    resolve( axios.get('https://cd8wxyy7ba.execute-api.sa-east-1.amazonaws.com/dev/products'))
  })
  
}

const dados = pegaDados().then( data => { return data.data})
console.log(dados)

//const resolvida = Promise.resolve(pk).then((value) => {return value})





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
          {//entradaCortada.map((product) => {

          
          entradaCortada.map((product) => {
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
