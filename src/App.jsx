
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar/Navbar';
import ErrorPage from './components/ErrorPgae/ErrorPage';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Toaster />
     <div className="main max-w-[1170px] mx-auto px-2">
       <Navbar />
       <div className="mt-24">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/Register" element={<Register />} />
         


         <Route path="*" element={<ErrorPage message={"The following route is not found"} />} />
       </Routes>
       </div>
     </div>
   </BrowserRouter>
  )
}

export default App
