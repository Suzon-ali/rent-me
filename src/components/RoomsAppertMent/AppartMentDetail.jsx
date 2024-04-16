/* eslint-disable react/prop-types */

function AppartmentDetail({ appartment }) {
  return (
    <div className="min-h-screen mt-24">
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <img src={appartment.image} alt={appartment.appartment_title} className="w-full h-96 rounded-t-lg" />
          <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{appartment.appartment_title}</h1>
            <p className="text-gray-600 mb-4">{appartment.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Price</h2>
                <p className="text-gray-600">{appartment.price}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Area</h2>
                <p className="text-gray-600">{appartment.area}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Location</h2>
                <p className="text-gray-600">{appartment.location}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Status</h2>
                <p className="text-gray-600">{appartment.status}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Facilities</h2>
                <ul className="text-gray-600">
                  {appartment.facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-indigo-500 text-white px-8 py-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Contact Agent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppartmentDetail;
