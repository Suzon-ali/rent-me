import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../providers/AuthProvider";

const privateNavItems = [
  {
    name: "User Profile",
    url: "/profile",
  },
  {
    name: "Update Profile",
    url: "/update-profile",
  },
];

const navitems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Gallery",
    url: "/gallery",
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
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  const handelMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className=" bg-[#1c1c1c] fixed w-full top-0 left-0 py-4 px-2 font_worksans max-h-20 z-10">
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
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5493 6.76318H3.54932"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5493 14.7632H3.54932"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5493 18.7632H3.54932"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Link to={"/"}>
            <div>
              <img className="w-24 select-none" src={logo} alt="" />
            </div>
          </Link>
        </div>
        <div
          className={`${
            !isMenuOpen && "hidden  lg:block"
          } absolute lg:static left-0 top-[70px] bg-[#1c1c1c] lg:bg-transparent w-full lg:w-auto py-2 top-bottom text-white`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 items-center">
            {navitems &&
              navitems.length > 0 &&
              navitems.map((nav) => {
                return (
                  <NavLink
                    onClick={handleMenuClose}
                    key={nav.name}
                    className="p-2 rounded-sm hover:outline outline-1 hover:outline-success"
                    to={nav.url}
                  >
                    {nav.name}
                  </NavLink>
                );
              })}
            {user && (
              <>
                {privateNavItems &&
                  privateNavItems.length > 0 &&
                  privateNavItems.map((nav) => {
                    return (
                      <NavLink
                        onClick={handleMenuClose}
                        key={nav.name}
                        className="p-2 rounded-sm hover:outline outline-1 hover:outline-success"
                        to={nav.url}
                      >
                        {nav.name}
                      </NavLink>
                    );
                  })}
              </>
            )}
          </ul>
        </div>
        {user ? (
          <div
            className="flex items-center gap-2 "
            
          >
            <div data-tip={user?.displayName} className="tooltip tooltip-bottom ">
            <img
              
              className="w-10 h-10 border rounded-full cursor-pointer  "
              src={user.photoURL}
              alt=""
            />
            </div>
            <div onClick={handleSignOut} className="cursor-pointer tooltip tooltip-right" data-tip="Logout">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>{" "}
          </div>
        ) : (
          <div className="flex gap-2 text-nowrap">
            <NavLink
              to={"/login"}
              className="bg-success  px-4 py-2 rounded-sm text-white"
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className="bg-info hidden md:block px-4 py-2 rounded-sm text-white"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
