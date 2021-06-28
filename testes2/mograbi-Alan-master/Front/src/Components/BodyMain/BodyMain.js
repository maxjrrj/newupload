import { useContext } from "react";
import Context from "../../GlobalState/Context";
import tricoimg1 from "../../Images/trico1.jpeg"
import tricoimg2 from "../../Images/trico2.jpeg"
import tricoimg3 from "../../Images/trico3.jpeg"
import tricoimg4 from "../../Images/trico4.jpeg"
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
        <CarouselImage src={tricoimg1} alt="First slide" />

        <CarouselImage src={tricoimg2} alt="Second slide" />

        <CarouselImage src={tricoimg3} alt="Third slide" />

        <CarouselImage src={tricoimg4} alt="Third slide" />
      </CarouselBox>
    </CarouselContainer>
  );
};

export default BodyMain;
