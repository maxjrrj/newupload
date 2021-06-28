import { Nav, NavDropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {
  MenuInterativo,
  ItemSingular,
  ItemDropdown,
  MenuSemImages,
  ItemDropdownModal,
  ModalDropDown,
  ItemImageDropdown
} from "./ResponsiveSelectMenu_styled.js";


import PolygonPequenoDireita from "../../Images/PolygonPequenoDireita.svg";
import PolygonPequenoEsquerda from "../../Images/PolygonPequenoEsquerda.svg";
import PolygonDropdown from "../../Images/PolygonDropdown.svg"

import { useContext } from "react";
import Context from "../../GlobalState/Context";

import { goToPage } from "../../Router/Walker";
import { useHistory } from "react-router-dom";

import { entradaMenu } from "../../Constants/ProdutosTeste";

const ResponsiveSelectMenu = () => {
  const history = useHistory();

  const { states, setters, requests } = useContext(Context);

  const entrada = entradaMenu;
  // const entrada = states.category

  useEffect(() => {
    requests.getAllCategories();
  }, []);

  return (
    <MenuInterativo>
      <img src={PolygonPequenoEsquerda} />

      {entrada.map((category) => {
        if (category.subcategories === [] || !category.subcategories) {
          return (
            <ItemSingular
              onClick={() => goToPage(history, `/${category.categoryName}`)}
            >
              {category.categoryName}
            </ItemSingular>
          );
        } else {
          return (
            <ItemDropdown title={category.categoryName}>
             
              <img src={PolygonDropdown}/>
              
            
              
                {category.subcategories.map((sub) => {
                  return (
                    <ItemDropdownModal
                      onClick={() =>
                        goToPage(
                          history,
                          `/${category.categoryName}/${sub.categoryName}`
                        )
                      }
                    >
                      {sub}
                    </ItemDropdownModal>
                  );
                })}
              
            </ItemDropdown>
          );
        }
      })}

      <img src={PolygonPequenoDireita} />
    </MenuInterativo>
  );
};

export default ResponsiveSelectMenu;
