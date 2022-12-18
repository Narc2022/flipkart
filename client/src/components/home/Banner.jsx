import React from "react";
import Carousel from "react-multi-carousel";
import {styled} from "@mui/material"
import { bannerData } from "../../constants/data";
import 'react-multi-carousel/lib/styles.css'

const Image = styled('img')({
    height:'40vh',
    width:'100vw'
})
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    item: 1,
  },
};
const Banner = () => {
  return (
    <>
      <Carousel 
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      dotListClass='custom-dot-list-style'
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      >
        {bannerData.map((data) => (
          <Image src={data.url} alt="banner" />
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
