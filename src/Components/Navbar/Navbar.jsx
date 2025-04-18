import React, { useContext } from "react";
import { NavLink } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { CartContext } from "../../Providers/Context";
import Cart from "../../Pages/Cart/Cart";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <div className="navbar bg-base-100 shadow-sm w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/Cart"
              >
                <FaCartArrowDown size={20} />
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/Favourite"
              >
                <FaBookmark size={20} />
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className=" text-xl">
          FlagshipFaceOff
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/Cart"
            >
              <FaCartArrowDown size={20} />
              <p>{cart.length}</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/Favourite"
            >
              <FaBookmark size={20} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
