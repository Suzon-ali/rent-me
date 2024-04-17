

import  { useEffect, useState } from "react";
import AppartMentLoader from "../../utility/Loaders/AppartmentLoader";
import Blog from "./Blog";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  console.log(blogs)


  //decide what to render

  let content = "";
  if (loading && !error) {
    content = (
      <>
        <AppartMentLoader />
        <AppartMentLoader />
        <AppartMentLoader />
        <AppartMentLoader />
        <AppartMentLoader />
        <AppartMentLoader />
       
      </>
    );
  }
  if (!loading && error) {
    content = <div>Error: {error.message}</div>;
  }
  if (!loading && !error && blogs.length === 0) {
    content = <div>No Blogs found.</div>;
  }
  if (!loading && !error && blogs.length > 0) {
    content = (
      <>
        {blogs &&
          blogs.map((blog) => {
            return <Blog key={blog.id} blog={blog} />;
          })}
      </>
    );
  }

  return (

    <>
    <div className="py-10">
        <h2 className="text-5xl text-center font-bold py-4">
          Latest Blogs
        </h2>
        <hr className="w-20 mx-auto border border-success" />
        <p className="font-semibold text-center py-4">
          FIND OUR LATEST NEWS!
        </p>
      </div>

      <div className="max-w-[1170px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-10">
        {content}
      </div>
    </div>
    </>
    
  );
};

export default Blogs;