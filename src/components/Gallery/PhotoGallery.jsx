import  { useEffect, useState } from "react";
import SinglePhotoGallery from "./SinglePhotoGallery";
import PhotoLoader from "../../utility/Loaders/PhotoLoader";


const PhotoGallery = () => {
  const [appartments, setAppartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("db.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setAppartments(data);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  console.log(appartments)


  //decide what to render

  let content = "";
  if (loading && !error) {
    content = (
      <>
        <PhotoLoader />
        <PhotoLoader />
        <PhotoLoader />
        <PhotoLoader />
        <PhotoLoader />
        <PhotoLoader />
       
      </>
    );
  }
  if (!loading && error) {
    content = <div>Error: {error.message}</div>;
  }
  if (!loading && !error && appartments.length === 0) {
    content = <div>No appartments found.</div>;
  }
  if (!loading && !error && appartments.length > 0) {
    content = (
      <>
        {appartments &&
          appartments.map((appartment) => {
            return <SinglePhotoGallery key={appartment.id} appartment={appartment} />;
          })}
      </>
    );
  }

  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {content}
      </div>
    </div>
  );
};

export default PhotoGallery;