import { useContext, useEffect } from "react";
import Context from "../../GlobalState/Context";

import {
  GridContainer,
  Breadcrumbs,
  Pages,
  FiltroTags,
  
} from "./BodyProducts_styled";

import ProductsGrid from "./ProductsGrid/ProductsGrid";
import CategoryName from "./CategoryName/CategoryName.js";
import BoxFiltroTags from "./BoxFiltroTags/BoxFiltroTags.js";

const BodyProducts = () => {
  const { states, setters, requests } = useContext(Context);

  useEffect(() => {}, []);

  return (
    <>
      {/* <Breadcrumbs>Breadcrumbs</Breadcrumbs> */}
      <CategoryName />
      <GridContainer>
        {/* <FiltroTags>
          <BoxFiltroTags />
        </FiltroTags> */}
        <ProductsGrid />
        {/* <Pages>Pages</Pages> */}
      </GridContainer>
    </>
  );
};

export default BodyProducts;
