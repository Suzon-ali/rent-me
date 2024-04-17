import { Helmet } from "react-helmet";
import PhotoGallery from "../components/Gallery/PhotoGallery";

function Gallery() {
  return (
    <>
    <Helmet>
      <title>Gallery</title>
    </Helmet>
    <div className=" min-h-screen mt-20">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Photo Gallery</h1>
        <PhotoGallery />
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 mt-12 text-center">Video Gallery</h1>
        <PhotoGallery />
      </div>
    </div>
    </>
  );
}

export default Gallery;
