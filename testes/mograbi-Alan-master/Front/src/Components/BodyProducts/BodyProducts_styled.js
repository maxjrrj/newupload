import styled from "styled-components";

import Button from "react-bootstrap/Button";

export const Breadcrumbs = styled.div`
  background-color: orange;
`;

export const CategoryName = styled.div`
  width: 100%;
`;

///////////////////////  GRID  ///////////////////////
export const GridContainer = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  max-width: 100vw;
  overflow: hidden;
  white-space: nowrap;

  grid-template-columns: 0.5fr 2.5fr;
  grid-template-rows: 2fr 0.25fr;
  gap: 2% 1%;
  grid-template-areas:
    "FiltroTags Products"
    "Pages Pages";
`;

export const Pages = styled.div`
  grid-area: Pages;
  background-color: yellow;
`;
export const FiltroTags = styled.div`
  grid-area: FiltroTags;
  background-color: green;
`;
