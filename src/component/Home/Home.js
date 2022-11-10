import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import Location from "../Location/Location";
import Carousel from "./Carousel/Carocel";
import Cooking from "./CookingList/Cooking";
import useTitle from "../Hooks/useTitel";

const Home = () => {
  const { data } = useLoaderData();
  useTitle("Home");
  return (
    <div className="bg-[#F1F5F8] container">
      <div>
        <Carousel />
      </div>
      <div className="mt-10 mb-5 grid grid-cols-1 md:grid-cols-2 justify-items-center">
        {data.map((singleData) => (
          <Cooking key={singleData._id} singleData={singleData} />
        ))}
      </div>
      <div className="flex align-middle w-full">
        <Link
          className="border hover:bg-green-300 flex px-10 py-4"
          to="/services"
        >
          View All Recipes <FaAngleDoubleRight className="ml-2" />{" "}
        </Link>
      </div>
      <div className="mt-80 md:m-50">
        <Location />
      </div>
    </div>
  );
};

export default Home;
