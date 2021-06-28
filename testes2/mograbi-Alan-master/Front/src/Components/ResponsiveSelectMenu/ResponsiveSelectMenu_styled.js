import { Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

export const MenuInterativo = styled(Nav)`
  display: flex;
  background-color: black;
  width: 60vw;
  color: white;

  font-size: 1.5vw;
  height: 10vh;

  justify-content: space-between;
  align-items: center;
`;

export const ItemSingular = styled(Nav.Link)`
  color: white;
  :hover {
    color: gray;
  }
`;

export const ItemDropdown = styled(NavDropdown)`
  
  img{
    background-color:black;
  }
  div{
    border: 0;
    border-radius: 0;

    padding-top: 0;
    padding-bottom:0;
  }
  a {
    color: white;
  }
`;

export const ItemImageDropdown = styled(NavDropdown.Item)`
width:100%;
  background-color: black !important;
`;

export const ItemDropdownModal = styled(ItemDropdown.Item)`
  background-color: white;
  color: black !important;
  

  :active{
    background-color:gray;
  }
`;

export const MenuSemImages = styled.div`
  color: white !important;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;
