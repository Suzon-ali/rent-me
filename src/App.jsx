
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

function App() {
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
         <Route path="/appartment/:id" element={<AppartMentDetails />} />
         

         <Route path="*" element={<ErrorPage message={"The following route is not found"} />} />
       </Routes>
       <Footer />
       </div>
     </div>
   </BrowserRouter>
  )
}

export default App
