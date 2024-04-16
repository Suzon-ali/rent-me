import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            About Us
          </h1>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 px-6 py-8 md:p-10">
                <h2 className="text-xl font-semibold mb-4">Who We Are</h2>
                <p className="text-gray-600 mb-6">
                  We are a dedicated team of professionals committed to
                  providing the best residential living experience to our
                  community.
                </p>
                <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  Our mission is to create comfortable and welcoming homes where
                  families can thrive and create lasting memories.
                </p>
                <h2 className="text-xl font-semibold mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Commitment to Excellence</li>
                  <li>Integrity</li>
                  <li>Community</li>
                  <li>Continuous Improvement</li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-100 px-6 py-8 md:p-10">
                <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-600 mb-6">
                  We envision a future where every individual and family has
                  access to safe, affordable, and high-quality residential
                  living.
                </p>
                <h2 className="text-xl font-semibold mb-4">Our Commitment</h2>
                <p className="text-gray-600">
                  We are committed to continuously improving our services,
                  maintaining the highest standards of professionalism, and
                  fostering a sense of belonging within our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
