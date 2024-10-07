import React from 'react';
import { useParams } from 'react-router-dom';
import { blogCardDb } from '../db';

const BlogDetail = () => {
  const { id } = useParams();
  const blogPost = blogCardDb[id];

  if (!blogPost) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="mt-36 md:w-3/4 lg:w-[600px] mx-auto bg-gray-100 rounded-lg shadow-md">
      <img src={blogPost.image} alt="Blog Post" className="w-full rounded-lg mb-10"/>
      <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
      <div className="flex items-center mb-4">
        <img src={blogPost.icon} alt="Icon" className="h-8 mr-2" />
        <span className="font-semibold">{blogPost.date}</span>
      </div>
      <p className="text-xl font-bold mb-4">{blogPost.heading}</p>
      <p className="text-lg mb-4 ">{blogPost.description}</p>
      {/* Additional blog post details */}
    </div>
  );
};

export default BlogDetail;
