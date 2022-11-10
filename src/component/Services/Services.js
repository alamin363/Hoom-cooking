import React, { useEffect, useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../Hooks/useTitel";
import ServiceCart from "../Services/ServiceCart";
const Services = () => {
  const [load, Loadrs] = useState(true);
  const [allData, setAllData] = useState([]);
  useTitle("Services");

  const [modal, setModel] = useState(false);
  const toggleModal = (e) => {
    e.preventDefault();
    setModel(!modal);
  };
  // console.log(allData);
  useEffect(() => {
    fetch("https://cooking-backend.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setAllData(data.allData));
  }, [load]);

  const handelUserReviwe = (e) => {
    e.preventDefault();
    const form = e.target;
    const nameOfItem = form.name.value;
    const email = form.email.value;
    const title = form.message.value;
    const balance = form.rating.value;
    const picture = form.img_url.value;
    const details = form.details.value;
    if (typeof nameOfItem !== "undefined" || nameOfItem !== undefined || null) {
      const product = {
        nameOfItem,
        email,
        title,
        balance,
        picture,
        details,
      };
      if (product) {
        Loadrs(!load)
        form.reset();
      }
      fetch(`https://cooking-backend.vercel.app/products`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("comment succesfuly");
          } else {
            toast.error("unauentication");
          }
        })
        .catch((err) => toast.error(err.message));
    }
  };

  if (allData?.length < 1 || allData === null || allData === undefined) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div>
      <div>
        <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          {allData?.map((singleData) => (
            <ServiceCart key={singleData._id} singleData={singleData} />
          ))}
        </section>
      </div>
      <div>
        <br />

        <button
          onClick={toggleModal}
          className="border block ml-4 px-5 py-3  hover:bg-blue-400"
          disabled={modal}
        >
          Add Product <FaAddressCard className="ml-3" />
        </button>
      </div>
      <div>
        <div className="flex justify-center">
          {modal && (
            <div className="modal w-80 h-full  bg-green-900">
              {/* type body to remove */}
              {/* <div
                onClick={toggleModal}
                 className="overlay text-white top-0 right-0 bottom-0 left-0 fixed"
                  >
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
                    placeholder="input of food name"
                    required
                  />
                  <input
                    name="email"
                    className="mb-5"
                    type="text"
                    placeholder="input your email"
                    required
                  />
                  <input
                    name="message"
                    className="mb-5"
                    type="text"
                    placeholder="input product Title"
                    required
                  />
                  <input
                    name="rating"
                    className="mb-5"
                    type="text"
                    placeholder="food price"
                    required
                  />
                  <input
                    name="img_url"
                    className="mb-5"
                    type="text"
                    placeholder="input pood img url"
                    required
                  />
                  <textarea
                    placeholder="input of food details"
                    name="details"
                    id=""
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="border text-white py-2 m-2 px-4"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
