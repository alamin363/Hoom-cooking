import { Rating, Table } from "flowbite-react";
import React, { useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const { img_url, message, name, picture, rating, _id, nameOfItem } = review;
  const [modal, setModel] = useState(false);
  // const [loader, setLoader] = useState(true);
  const handeldelete = (id) => {
    fetch(`https://cooking-backend.vercel.app/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("delete success");
          if (data.data.acknowledged) {
          }
        }
      });
  };
  const toggleModal = (e) => {
    e.preventDefault();
    setModel(!modal);
  };

  const handelUserReviwe = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    const rating = form.rating.value;
    const img_url = form.img_url.value;
    if (typeof name !== "undefined" || name !== undefined || null) {
      const reviews = {
        name,
        nameOfItem,
        message,
        rating,
        img_url,
        product_id: _id,
        picture,
      };
      if (reviews) {
        // form.reset();
        // setLoader(!loader);
      }
      fetch(`https://cooking-backend.vercel.app/review/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(reviews),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert("edit success");
          }
        });
      console.log(_id);
    }
  };

  return (
    <div>
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell className="!p-4">Delete</Table.HeadCell>
          <Table.HeadCell>user image</Table.HeadCell>
          <Table.HeadCell>foot image</Table.HeadCell>
          <Table.HeadCell>food name</Table.HeadCell>
          <Table.HeadCell>message</Table.HeadCell>
          <Table.HeadCell>user Name</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4">
              <button onClick={() => handeldelete(_id)} className="font-bold">
                X
              </button>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <img src={img_url} className="h-120 w-20 rounded" alt="" />
            </Table.Cell>
            <Table.Cell>
              <img src={picture} className="h-120 w-20 rounded" alt="" />
            </Table.Cell>
            <Table.Cell>{nameOfItem ? nameOfItem : "not found"}</Table.Cell>
            <Table.Cell>{message}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>
              {/* <button
                onClick={() => editReview(_id)}
                className="text-blue-600 underline"
              >
                EDIT
              </button> */}
              <button
                onClick={toggleModal}
                className="border block ml-4 px-5 py-3  hover:bg-blue-400"
                disabled={modal}
              >
                Edit Review <FaAddressCard className="ml-3" />
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

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
                <p className="mb-5 mt-2 text-white">your name</p>
                <input
                  name="name"
                  className="mb-5"
                  type="text"
                  placeholder="input your name"
                  required
                  defaultValue={name}
                />
                <p className="mb-5 mt-2 text-white">message</p>
                <input
                  name="message"
                  className="mb-5"
                  type="text"
                  placeholder="input your message"
                  defaultValue={message}
                  required
                />
                <p className="mb-5 mt-2 text-white">Rating</p>
                <input
                  name="rating"
                  className="mb-5"
                  type="text"
                  placeholder="rating now"
                  defaultValue={rating}
                  required
                />
                {/* <input
                  name="img_url"
                  className="mb-5"
                  type="text"
                  placeholder="input your img url"
                  defaultValue={img_url}
                  required
                /> */}
                <p className="mb-5 mt-2 text-white">Image url</p>
                <textarea
                  name="img_url"
                  placeholder="input your img url"
                  className="mb-5"
                  id=""
                  cols="30"
                  defaultValue={img_url}
                  rows="10"
                ></textarea>
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
  );
};

export default ReviewCard;
