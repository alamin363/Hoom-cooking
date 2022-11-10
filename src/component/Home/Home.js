import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import Location from "../Location/Location";
import Carousel from "./Carousel/Carocel";
import Cooking from "./CookingList/Cooking";
import useTitle from "../Hooks/useTitel";
import imge1 from "../../img/home1.jpg";
import imge2 from "../../img/home2.jpg";
import imge3 from "../../img/Home3.jpg";
import AnimatedText from "react-animated-text-content";

const Home = () => {
  const { data } = useLoaderData();
  useTitle("Home");
  return (
    <div className="bg-[#F1F5F8] container">
      <div className="xl:ml-40">
        <Carousel />
      </div>
      <div className="mt-10 mb-5 grid grid-cols-1 md:grid-cols-2 justify-items-center">
        {data.map((singleData) => (
          <Cooking key={singleData._id} singleData={singleData} />
        ))}
      </div>
      <div className="ml-10">
        <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="p"
          className="animated-paragraph text-yellow-400 text-4xl mb-3"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          Hey My Name Is MS.Sumaiya and I am House wife And i Am Very Sensitive
          about Food. We Want to give dining experience with this sensitivity
          and beauty.
        </AnimatedText>
      </div>
      <div className="flex align-middle w-full">
        <Link
          className="border hover:bg-green-300 flex px-10 py-4"
          to="/services"
        >
          View All Items <FaAngleDoubleRight className="ml-2" />{" "}
        </Link>
      </div>
      <div className="m-4">
        <div className="flex flex-col md:flex-row border">
          <img src={imge1} className="w-full md:w-80" alt="" />
          <h1 className="text-2xl m-10">
            Roast broccoli until caramelized. <br /> Heat olive oil in a pan and
            add tomatoes; cook until saucy. Add cooked chickpeas, garlic, and
            Calabrian chili paste.
            <br /> Add the roasted broccoli and more oil to taste.
            <br /> Finish with chopped parsley and a squeeze of lemon. Eat over
            toasted bread.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row-reverse border mt-5">
          <img src={imge2} className="w-full md:w-80" alt="" />
          <h1 className="text-2xl m-10">
            shredded chicken, carnitas, beans, multiple <br /> salsas, cheese,
            cream, cabbage slaw, <br />
            radishes, cilantro. Make chilaquiles with the leftovers!.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row border mt-5">
          <img src={imge3} className="w-full md:w-80" alt="" />
          <h1 className="text-2xl m-10">
            Do what you don’t want to do, and dirty an extra bowl, so you <br />{" "}
            can get the vegetables well-coated with salt and olive oil. Then
            spread them out on a baking sheet in a single layer, making sure
            there is room between them. Roast at 400 or 425, occasionally
            turning pieces.
          </h1>
        </div>
      </div>
      <div className="mt-72 md:m-50">
        <Location />
      </div>
    </div>
  );
};

export default Home;
