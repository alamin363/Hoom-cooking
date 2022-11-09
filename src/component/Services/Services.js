import React, { useState, useEffect } from "react";
import { FaAddressCard } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import ServiceCart from "../Services/ServiceCart";
const Services = () => {
  const { allData } = useLoaderData();
  const [modal, setModel] = useState(false);
  const toggleModal = (e) => {
    e.preventDefault();
    setModel(!modal);
  };
  // const [allData, setAllData] = useState({})
  // useEffect(() => {
  //   fetch('http://localhost:5000/products')
  //   .then(res => res.json())
  //   .then(data => {
  //     setAllData(data.allData)
  //   })
  // },[allData.length])
  const handelUserReviwe = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    const rating = form.rating.value;
    const img_url = form.img_url.value;
    const product = {
      name,
      // nameOfItem,
      message,
      rating,
      img_url,
      // product_id: _id,
      // picture,
      // currentUser
    };
    console.log(product);
    if (product) {
      form.reset();
      // setLoader(!loader)
    }

    fetch(`http://localhost:5000/products`, {
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
        <button
          onClick={toggleModal}
          className="border block ml-4 px-5 py-3 flex hover:bg-blue-400"
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
      </div>
    </div>
  );
};

export default Services;
