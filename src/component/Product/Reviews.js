import { Table } from "flowbite-react";
import React, { useState } from "react";
import useTitle from "../Hooks/useTitel";

const Reviews = ({ review }) => {
  const { img_url, message, name, picture, rating, _id, nameOfItem } = review;
  useTitle("Review")
  return (
    <Table hoverable={true}>
  <Table.Head>
    
    <Table.HeadCell>
    user image
    </Table.HeadCell>
    <Table.HeadCell>
    foot image
    </Table.HeadCell>
    <Table.HeadCell>
    food name
    </Table.HeadCell>
    <Table.HeadCell>
    message
    </Table.HeadCell>
    <Table.HeadCell>
      user Name
    </Table.HeadCell>
    
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <img src={img_url} className="h-120 w-20 rounded" alt="" />
      </Table.Cell>
      <Table.Cell>
      <img src={picture} className="h-120 w-20 rounded" alt="" />
      </Table.Cell>
      <Table.Cell>
        {nameOfItem ? nameOfItem : "not found"}
      </Table.Cell>
      <Table.Cell>
       {message}
      </Table.Cell>
      <Table.Cell>
       {name}
      </Table.Cell>
      
    </Table.Row>
  </Table.Body>
</Table>
  );
};

export default Reviews;
