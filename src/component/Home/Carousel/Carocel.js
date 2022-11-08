// import { Carousel } from "flowbite-react";
import React from "react";
import Slider from "react-slick";

import img1 from "../../../img/Oven-Baked_Steak-3.webp";
import img2 from "../../../img/Railway_Cake_2.webp";
import img3 from "../../../img/Tough_Guy_Casserole_2.webp";
const Carouse = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
    <div>
      <img src={img1} alt="" />
    </div>
    <div>
    <img src={img2} alt="" />
    </div>
    <div>
    <img src={img3} alt="" />
    </div>
  </Slider>
  );
};

export default Carouse;
