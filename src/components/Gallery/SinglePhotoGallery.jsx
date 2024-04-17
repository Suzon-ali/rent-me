/* eslint-disable react/prop-types */


const SinglePhotoGallery = ({appartment}) => {
  return (
    <div>
      <img data-aos="zoom-in" src={appartment?.image} alt="" />
    </div>
  )
}

export default SinglePhotoGallery