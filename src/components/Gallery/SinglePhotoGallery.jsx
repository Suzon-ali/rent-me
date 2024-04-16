/* eslint-disable react/prop-types */


const SinglePhotoGallery = ({appartment}) => {
  return (
    <div>
      <img src={appartment?.image} alt="" />
    </div>
  )
}

export default SinglePhotoGallery