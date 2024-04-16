import {  useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assets/logo.png'

const navitems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Listed Books",
    url: "/listed-books",
  },
  {
    name: "Pages to Read",
    url: "/pages-to-read",
  },
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handelMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar fixed w-full top-0 left-0 py-4 px-2 font_worksans max-h-20 bg-white z-10">
      <div className="flex justify-between items-center max-w-[1170px] mx-auto">
        <div className="logo flex items-center font-bold text-2xl text-nowrap">
          <div onClick={handelMenu} className="lg:hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M17.5493 10.7632H3.54932"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5493 6.76318H3.54932"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5493 14.7632H3.54932"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5493 18.7632H3.54932"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Link to={"/"}>
            <div><img className="w-24" src={logo} alt="" /></div>
          </Link>
        </div>
        <div
          className={`${
            !isMenuOpen && "hidden  lg:block"
          } absolute lg:static left-0 top-16 bg-white w-full lg:w-auto py-2 top-bottom`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 items-center">
            {navitems &&
              navitems.length > 0 &&
              navitems.map((nav) => {
                return (
                  <NavLink
                    onClick={handleMenuClose}
                    key={nav.name}
                    className="p-2 rounded-lg hover:outline outline-1 hover:outline-success"
                    to={nav.url}
                  >
                    {nav.name}
                  </NavLink>
                );
              })}
          </ul>
        </div>
        <div className="flex gap-2 text-nowrap">
          <NavLink to={'/login'} className="bg-success  px-4 py-2 rounded-lg text-white">
           Login
          </NavLink>
          <NavLink to={'/register'} className="bg-info hidden md:block px-4 py-2 rounded-lg text-white">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
