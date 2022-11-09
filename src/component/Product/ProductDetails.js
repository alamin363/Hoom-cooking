import React, { useEffect, useState } from "react";
import { FaComment, FaCommentDots, FaRupeeSign } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { data } = useLoaderData();
  const {
    nameOfItem,
    title,
    phone,
    balance,
    picture,
    _id,
    email,
    details,
    about,
    company,
  } = data[0];

  const [modal, setModel] = useState(false);
  const [review, setReview] = useState({})

  const toggleModal = (e) => {
    e.preventDefault();
    setModel(!modal);
  };
  // display is bloced with open modal
  // if (modal) {
  //   document.body.classList.add("active-modal")
  // }else{
  //   document.body.classList.remove("active-modal")
  // }

  const handelUserReviwe = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    const rating = form.rating.value;
    const img_url = form.img_url.value;
    const reviews = {name, message, rating, img_url, product_id:_id , picture}
    if (reviews) {
      form.reset()
    }
    if (reviews.name) {
      setReview(reviews)
    };
  }
  useEffect(()=>{
    fetch(`http://localhost:5000/review`,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
        if (data.data.acknowledged) {
         toast.success("comment succesfuly")
        }

    })
    .catch(err => toast.error(err.message))
  },[review && review.name])
 
  return (
    <main>
      <div className="grid justify-items-center">
        <div className="borderes h-full w-8/12 mb-5 ml-5">
          <img className="w-full h-96" src={picture} alt="" />
          <h2 className="text-2xl m-4">item name: {nameOfItem}</h2>
          <h2 className="text-2xl m-4">Phone: {phone}</h2>
          <p className="ml-4 flex ">
            price: <FaRupeeSign className="ml-2" />
            {balance}
          </p>
          <p className="ml-4 flex ">
            {" "}
            Collection:
            {about}
          </p>
          <p className="ml-4 text-2xl flex flex-wrap underline">
            Contect Us: <FaCommentDots className="ml-2" />
            {email}
          </p>

          <h1 className="text-2xl m-4">{title}</h1>
          <p className="m-3">{details}</p>
  
          <button
            onClick={toggleModal}
            className="border block ml-4 px-5 py-3 flex"
            disabled={modal}
          >
            Review Now <FaComment className="ml-3" />
          </button>
        </div>
      </div>

    <div className="flex justify-center">
    {modal &&(
      <div className="modal w-80 h-full  bg-green-900">
      {/* type body to remove */}
        {/* <div
          onClick={toggleModal}
          className="overlay text-white top-0 right-0 bottom-0 left-0 fixed"
        >
          {" "}
        </div> */}

        <div className="modal-content">
          <div className="flex justify-between">
          <h2 className=" text-white">input your message</h2> <button onClick={toggleModal} className="border text-white py-2 px-4 close-modal rounded">
            Close
          </button>
          </div>
          <form onSubmit={handelUserReviwe} className="grid justify-items-center mt-2">
          <input name="name" className="mb-5" type="text" placeholder="input your name" required/>
          <br />
          <input name="message" className="mb-5" type="text" placeholder="input your message" required/>
          <input name="rating" className="mb-5" type="text" placeholder="rating now" required/>
          <input name="img_url" className="mb-5" type="text" placeholder="input your img url" required/>
          <button type="submit" className="border text-white py-2 mb-2 px-4">Submit</button>

          </form>

          
        </div>
        
      </div>
    )}
    </div>
      
      <div>
        <h1>this is comment section </h1>
      </div>
    </main>
  );
};

export default ProductDetails;
