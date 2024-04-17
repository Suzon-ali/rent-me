import { useContext } from "react"
import Banner from "../components/Banner/Banner"
import RoomsAndAppartMents from "../components/RoomsAppertMent/RoomsAndAppartMents"
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from "react-helmet";
import Blogs from "../components/Blogs/Blogs";


const Home = () => {
  const {user} = useContext(AuthContext)

  console.log(user)
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