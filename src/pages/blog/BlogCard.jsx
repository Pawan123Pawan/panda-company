import React from 'react';
import HtmlContent from '../../components/html_content/HtmlContent';

const BlogCard = ({ heading, description, image }) => {
  return (
    <div>
      <div className="flex space-x-2 space-y-4 px-2 py-2">
        {/* <div className="">
          <img src={image} alt="topic image" className="" />
        </div> */}
        <div>
          <h className="text-2xl font-bold">{heading}</h>
          <HtmlContent htmlContent={description} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
