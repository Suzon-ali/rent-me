
import { useParams } from 'react-router-dom';

import blogData from "/public/blogs.json";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find(blog => blog.id === parseInt(id));


  return (
    <div className="container mx-auto mt-24">
      {blog ? (
        <div className="max-w-3xl mx-auto">
          <img src={blog.image} alt={blog.title} className="mb-4 rounded-lg" />
          <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
          <p className="text-gray-700 mb-4">{blog.content}</p>
          <p className="text-sm text-gray-500">Published on {blog.date}</p>
        </div>
      ) : (
        <p>Blog not found.</p>
      )}
    </div>
  );
};

export default BlogDetails;
