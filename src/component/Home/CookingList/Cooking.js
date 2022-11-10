import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaOutdent, FaRupeeSign} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Cooking.css";
const Cooking = ({ singleData }) => {
  const { nameOfItem, title, balance, picture,_id, email, details } =
    singleData;
  return (
    <div className="borders w-8/12 mb-5 ml-5">
      <PhotoProvider>
      <div className="foo">
        <PhotoView src={picture}>
          <img className="img" src={picture} alt="" />
        </PhotoView>
      </div>
    </PhotoProvider>
      <h2 className="text-2xl ml-4">item name: {nameOfItem}</h2>
      <p className="ml-4 flex ">price: <FaRupeeSign className="ml-2"/>{balance}</p>
        <h1 className="text-2xl m-4">{title.length > 50 ? title.slice(0, 50) : title}</h1>
        <p className="m-3">{details.length > 100 ? details.slice(0,100) + "..." : details}</p>
        <Link to={`/products/${_id}`}>
          <button className="border hover:bg-slate-300 flex  px-5 py-3 m-4">Details <FaOutdent className="ml-4" /></button>
        </Link>
    
    </div>
  );
};

export default Cooking;
