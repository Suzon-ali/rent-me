
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar/Navbar';
import ErrorPage from './components/ErrorPgae/ErrorPage';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './components/Footer/Footer';
import Gallery from './Pages/Gallery';
import AppartMentDetails from './Pages/AppartMentDetails';
import Profile from './Pages/Profile';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import UpdateProfile from './Pages/UpdateProfile';
import { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import BlogDetails from './Pages/BlogDetails';
import Membership from './Pages/Membership';

function App() {
  const {Loading} = useContext(AuthContext);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  if(Loading){
    return <Loading />
  }

  return (
    <BrowserRouter>
    <Toaster />
     <div className="main mx-auto">
       <Navbar />
       <div>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/blog/:id" element={<BlogDetails />} />
         <Route path="/appartment/:id" element={<PrivateRoute><AppartMentDetails /></PrivateRoute>} />
         
         <Route path="/profile" element={<PrivateRoute>
          <Profile />
         </PrivateRoute>} />
         <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
         <Route path="/membership" element={<PrivateRoute><Membership /></PrivateRoute>} />
         

         <Route path="*" element={<ErrorPage message={"The following route is not found"} />} />
       </Routes>
       <Footer />
       </div>
     </div>
   </BrowserRouter>
  )
}

export default App
