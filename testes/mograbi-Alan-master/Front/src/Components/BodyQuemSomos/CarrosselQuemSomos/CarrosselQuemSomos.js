import { useContext } from "react";
import Context from "../../../GlobalState/Context";
import {
  CarouselContainer,
  CarouselImage,
  CarouselBox,
} from "./CarrosselQuemSomos_styled";

import MograbiQuemSomos from "../../../Images/MograbiQuemSomos.svg";

const CarrosselQuemSomos = () => {
  const { states, setters, requests } = useContext(Context);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <CarouselContainer>
      <CarouselBox responsive={responsive}>
        <CarouselImage src={MograbiQuemSomos} alt="First slide" />

        <CarouselImage src={MograbiQuemSomos} alt="Second slide" />

        <CarouselImage src={MograbiQuemSomos} alt="Third slide" />
      </CarouselBox>
    </CarouselContainer>
  );
};

export default CarrosselQuemSomos;
