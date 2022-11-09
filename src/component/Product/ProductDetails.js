import React, { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleDown, FaComment, FaCommentDots, FaRupeeSign } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { contextProvider } from "../Context/AuthContext";
import Reviews from "./Reviews";

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
  const { user, } = useContext(contextProvider);
  const [modal, setModel] = useState(false);
  const [userRivew, setUserReview] = useState([]);
  const [loader, setLoader] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  useEffect(()=>{
    if (user.email) {
      setCurrentUser(user.email)
    }
  },[user])

//  eorror curect user
// console.log(review)

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

  const handelUserReviwe = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    const rating = form.rating.value;
    const img_url = form.img_url.value;
    const reviews = {
      name,
      nameOfItem,
      message,
      rating,
      img_url,
      product_id: _id,
      picture,
      currentUser
    };
    console.log(reviews);
    if (reviews) {
      form.reset();
      setLoader(!loader)
    }

   
    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("comment succesfuly");
        }else{
          toast.error("unauentication")
        }
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data[0].name) {
          setUserReview(data?.data);
          setLoader(!loader)
        }
      });
  }, [loader]);
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
        {modal && (
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
                <h2 className=" text-white">input your message</h2>{" "}
                <button
                  onClick={toggleModal}
                  className="border text-white py-2 px-4 close-modal rounded"
                >
                  Close
                </button>
              </div>
              <form
                onSubmit={handelUserReviwe}
                className="grid justify-items-center mt-2"
              >
                <input
                  name="name"
                  className="mb-5"
                  type="text"
                  placeholder="input your name"
                  required
                />
                <br />
                <input
                  name="message"
                  className="mb-5"
                  type="text"
                  placeholder="input your message"
                  required
                />
                <input
                  name="rating"
                  className="mb-5"
                  type="text"
                  placeholder="rating now"
                  required
                />
                <input
                  name="img_url"
                  className="mb-5"
                  type="text"
                  placeholder="input your img url"
                  required
                />
                <button
                  type="submit"
                  className="border text-white py-2 mb-2 px-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="m-5 flex justify-center align-middle">
 <h1 className="text-5xl flex">All Reviews <FaArrowAltCircleDown className="ml-5" /></h1>
      </div>

      <div className="mt-5">
        {userRivew.map((review) => (
          <Reviews review={review} key={review._id} />
        ))}
      </div>
    </main>
  );
};

export default ProductDetails;
