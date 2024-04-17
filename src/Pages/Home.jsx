
import Banner from "../components/Banner/Banner"
import RoomsAndAppartMents from "../components/RoomsAppertMent/RoomsAndAppartMents"
import { Helmet } from "react-helmet";
import Blogs from "../components/Blogs/Blogs";


const Home = () => {

  return (
    <>
    <Helmet>
      <title>Rent Me | Home</title>
    </Helmet>
    <Banner />
    <RoomsAndAppartMents />
    <Blogs />
    </>
  )
}

export default Home