/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function AppartMent({ appartment }) {
  return (
    <div className="rounded-xl">
      <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden border border-gray-300">
        <img src={appartment.image} alt={appartment.appartment_title} className="w-full h-60 rounded-t-lg" />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{appartment.appartment_title}</h2>
          <p className="text-gray-600 mb-2 font-bold">{appartment.price}</p>
          <p className="text-gray-600 mb-2">{appartment.area}</p>
          <p className="text-gray-600 mb-4">Location: {appartment.location}</p>
          <Link  to={`/appartment/${appartment.id}`} className="bg-success/80 text-white text-nowrap px-4 py-2 rounded-md hover:bg-success focus:outline-none focus:bg-success">View Property</Link>
          
        </div>
      </div>
    </div>
  );
}

export default AppartMent;
