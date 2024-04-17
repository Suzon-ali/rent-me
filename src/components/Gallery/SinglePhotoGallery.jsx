/* eslint-disable react/prop-types */


const SinglePhotoGallery = ({appartment}) => {
  return (
    <div  className="px-2 md:px-3" >
      <img className="w-full" data-aos="zoom-in" src={appartment?.image} alt="" />
    </div>
  )
}

export default SinglePhotoGallery