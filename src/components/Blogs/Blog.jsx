/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import 'animate.css/animate.css';



const Blog = ({blog}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden border m-4 animate__animated animate__fadeInLeft">
      <img src={blog?.image} alt={blog?.title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{blog?.title}</div>
        <p className="text-gray-700 text-base">{blog?.content.substring(0, 100)}...</p>
      </div>
      <div className="px-6 py-4">
        <Link to={`/blog/${blog?.id}`} className="bg-success/80 hover:bg-success text-white py-2 px-4 rounded">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Blog