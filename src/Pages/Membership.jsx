import { Helmet } from "react-helmet";

const Membership = () => {
    return (
      <>
      
      <Helmet>
        <title>Membership</title>
      </Helmet>

      <div className="bg-gray-100 min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Join Our Community</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Basic Membership</h3>
              <p className="text-gray-600 mb-2">$X/month</p>
              <p className="text-gray-600 mb-2">Access to exclusive content</p>
              <p className="text-gray-600 mb-2">Limited support</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Join Now</button>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Premium Membership</h3>
              <p className="text-gray-600 mb-2">$XX/month</p>
              <p className="text-gray-600 mb-2">Full access to all features</p>
              <p className="text-gray-600 mb-2">Priority support</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Join Now</button>
            </div>
          </div>
  
          <form className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Join Now</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-gray-100 border-b border-gray-300 py-2 px-4 mb-4 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-gray-100 border-b border-gray-300 py-2 px-4 mb-4 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-gray-100 border-b border-gray-300 py-2 px-4 mb-4 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Join Now</button>
          </form>
  
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="text-gray-600">
              <li>Exclusive Content</li>
              <li>Discounts on Services</li>
              <li>Personalized Recommendations</li>
            </ul>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
            <p className="text-gray-600 mb-2">How do I cancel my membership?</p>
            <p className="text-gray-600">What payment methods do you accept?</p>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Membership;
  