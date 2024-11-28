import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogCard from './BlogCard';

const SingleBlog = () => {
  const location = useLocation();

  const { state } = location;
  console.log(state);
  return (
    <div className="min-h-screen">
      <div className="w-full ">
        <img className="w-full h-[300px]" src={state?.image} />
      </div>
      <span className="block text-right px-4 py-1 bg-secondary">
        {new Date(state?.date).toLocaleString()}
      </span>
      <div className="mx-2 lg:mx-4">
        {state?.data.map((ele, i) => (
          <BlogCard {...ele} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SingleBlog;
