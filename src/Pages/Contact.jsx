function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gray-100 px-6 py-8 md:p-10">
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-4">
                We'd love to hear from you. Please fill out the form below to
                get in touch with us.
              </p>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/2 px-6 py-8 md:p-10">
              <h2 className="text-xl font-semibold mb-4">Visit Us</h2>
              <p className="text-gray-600 mb-4">
                Feel free to visit our office during business hours. We're
                looking forward to seeing you!
              </p>
              <p className="text-gray-600 mb-4">
                123 Maple Avenue
                <br />
                Cityville, State 12345
              </p>
              <h2 className="text-xl font-semibold mb-4">Call Us</h2>
              <p className="text-gray-600 mb-4">Phone: (123) 456-7890</p>
              <h2 className="text-xl font-semibold mb-4">Email Us</h2>
              <p className="text-gray-600">Email: contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
