import { Nav } from "react-bootstrap";
import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const CarouselImage = styled.img`
  display: flex;
  
  justify-content: center;

  width: auto;
  height: 50vh;

  overflow: hidden;

 
  
`;

export const CarouselContainer = styled(Nav)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50vh;

  background-color: black;
  
`;


export const CarouselBox = styled(Carousel)`
width: 100%;
`