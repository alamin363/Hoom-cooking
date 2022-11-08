import { Carousel } from "flowbite-react";
import React from "react";
import img1 from "../../../img/Oven-Baked_Steak-3.webp";
import img2 from "../../../img/Railway_Cake_2.webp";
import img3 from "../../../img/Tough_Guy_Casserole_2.webp";
const Carouse = () => {
  return (
    <div className="sm:h-64 xl:h-80 2xl:h-96 relative">
      <Carousel className="h-96">
        <img
          src={img1}
          alt="..."
        />
        <img
          src={img2}
          alt="..."
        />
        <img
          src={img3}
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
      <div className="absolute top-0 right-0">
        <h1>hi i am alamin</h1>
      </div>
    </div>
  );
};

export default Carouse;
