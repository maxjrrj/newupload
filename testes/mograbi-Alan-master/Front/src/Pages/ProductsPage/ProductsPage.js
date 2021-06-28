import { useContext, useEffect } from "react";
import Context from "../../GlobalState/Context";

import Footer from "../../Components/Footer/Footer.js"
import Header from "../../Components/Header/Header";
import BodyProducts from "../../Components/BodyProducts/BodyProducts.js"

const ProductsPage = () => {
  const { states, setters, requests } = useContext(Context);

  useEffect(()=>{
    requests.getAllProducts()
  }, [])


  return (
  <>
  <Header/>  
  <BodyProducts/>
  <Footer/>
  </>
  );
};

export default ProductsPage;
