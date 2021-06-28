import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from "../Pages/MainPage/MainPage";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import ProductDetailPage from "../Pages/ProductDetailPage/ProductDetailPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>        

        <Route exact path="/product/:id">
          <ProductDetailPage />
        </Route>

        <Route exact path="/all/products">
          <ProductsPage />
        </Route>

        <Route exact path="/:categoryName/:subCategoryName">
          <ProductsPage />
        </Route>
        <Route exact path="/:categoryName">
          <ProductsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
