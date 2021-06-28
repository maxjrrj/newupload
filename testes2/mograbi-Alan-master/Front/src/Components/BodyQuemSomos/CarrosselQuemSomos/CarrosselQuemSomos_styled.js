import { Nav } from "react-bootstrap";
import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const CarouselContainer = styled(Nav)`
  margin:0;
  padding:0;
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  /* align-items: flex-end; */
  width: 100vw;
  height: 50vh;
  
`;

export const CarouselImage = styled.img`
  display: block;
  width: 100vw;
  height: 50vh;
`;

export const CarouselBox = styled(Carousel)`
  width: 90vw;
`;
