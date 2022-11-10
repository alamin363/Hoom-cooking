import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitel";
import BlogCard from "./BlogCard";
const Blog = () => {
  const {data} = useLoaderData()
  useTitle("Blog")
  return (
    <div className="m-5">
    {data.map(blog => <BlogCard key={blog._id}blog={blog} />)}
    </div>
  );
};

export default Blog;
