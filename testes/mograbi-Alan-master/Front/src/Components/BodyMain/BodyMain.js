import { useContext } from "react";
import Context from "../../GlobalState/Context";
import ImagemInicialHome from "../../Images/ImagemInicialHome.svg";
import {
  CarouselContainer,
  CarouselImage,
  CarouselBox,
} from "./BodyMain_styled";

const BodyMain = () => {
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
      <CarouselBox removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
        <CarouselImage src={ImagemInicialHome} alt="First slide" />

        <CarouselImage src={ImagemInicialHome} alt="Second slide" />

        <CarouselImage src={ImagemInicialHome} alt="Third slide" />
      </CarouselBox>
    </CarouselContainer>
  );
};

export default BodyMain;
