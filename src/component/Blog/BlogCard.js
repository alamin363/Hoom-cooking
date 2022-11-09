import { Card } from 'flowbite-react';
import React from 'react';
import { FaArrowCircleRight, FaQuestionCircle } from 'react-icons/fa';

const BlogCard = ({blog}) => {
  const {question, ans} = blog;
  return (
    <Card className='mb-5'>
  <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white flex">
    <FaQuestionCircle className='mr-5'/> {question}
  </h5>
  <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg flex">
   <FaArrowCircleRight /> Ans: {ans}
  </p>
</Card>
  );
};

export default BlogCard;