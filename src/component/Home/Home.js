import React from "react";
import Carousel from "./Carousel/Carocel";
import Cooking from "./CookingList/Cooking";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="mt-52 grid grid-cols-1 md:grid-cols-3">
        <Cooking />
      </div>
    </div>
  );
};

export default Home;
