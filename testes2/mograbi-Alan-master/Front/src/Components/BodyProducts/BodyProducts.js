import { useContext, useEffect } from "react";
import Context from "../../GlobalState/Context";

import {
  GridContainer,
  Pages,
  FiltroTags,
  Breadcrumbsdiv,
} from "./BodyProducts_styled";

import ProductsGrid from "./ProductsGrid/ProductsGrid";
import CategoryName from "./CategoryName/CategoryName.js";
import BoxFiltroTags from "./BoxFiltroTags/BoxFiltroTags.js";

import Breadcrumbs from "./Breadcrumbs/Breadcrumbs.js";
import Pagination from "./Pagination/Pagination.js";

const BodyProducts = () => {
  const { states, setters, requests } = useContext(Context);

  useEffect(() => {}, []);

  return (
    <>
      <Breadcrumbsdiv>
        <Breadcrumbs />
      </Breadcrumbsdiv>
      <CategoryName />
      <GridContainer>
        <FiltroTags>
          <BoxFiltroTags />
        </FiltroTags>
        <ProductsGrid />
        {/* <Pages>
          <Pagination />
        </Pages> */}
      </GridContainer>
    </>
  );
};

export default BodyProducts;
