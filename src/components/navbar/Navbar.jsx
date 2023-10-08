/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import userImage from "../../assets/man-client-1.jpg";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, isOpen] = useState(false);
  const user = false;
  return (
    <header>
      <nav className="flex justify-between items-center py-5 text-lg font-medium text-gray">
        <div>
          <Link>
            <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-tr from-primary-color to-gray">
              Amara
            </h1>
          </Link>
        </div>
        {/* desktop navbar */}
        <div className="flex justify-center items-center gap-5">
          <ul className="hidden md:flex justify-center items-center gap-5">
            <Link to={"/"}>
              <li
                className={`${
                  pathname == "/" && "border-primary-color text-primary-color"
                } border-b border-white hover:text-primary-color`}
              >
                Home
              </li>
            </Link>
            <Link to={"/about-us"}>
              <li
                className={`${
                  pathname == "/about-us" &&
                  "border-primary-color text-primary-color"
                } border-b border-white hover:text-primary-color`}
              >
                About Us
              </li>
            </Link>
            <Link to={"/services"}>
              <li
                className={`${
                  pathname == "/services" &&
                  "border-primary-color text-primary-color"
                } border-b border-white hover:text-primary-color`}
              >
                Services
              </li>
            </Link>
            <Link to={"/our-works"}>
              <li
                className={`${
                  pathname == "/our-works" &&
                  "border-primary-color text-primary-color"
                } border-b border-white hover:text-primary-color`}
              >
                Our Works
              </li>
            </Link>
            {user ? (
              <>
                <img
                  className="w-14 h-14 rounded-full"
                  src={userImage}
                  alt="user-image"
                />
                <Link className="text-white bg-black px-5 py-2 font-medium rounded-md">
                  <button>Log Out</button>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={"/register"}
                  className="text-white bg-black px-5 py-2 font-medium rounded-md"
                >
                  <button>Register</button>
                </Link>
                <Link
                  to={"/login"}
                  className="text-white bg-black px-5 py-2 font-medium rounded-md"
                >
                  <button>Login</button>
                </Link>
              </>
            )}
          </ul>
          <BiMenu
            onClick={() => isOpen(!open)}
            className="md:hidden text-4xl"
          />
        </div>
        {/* mobile navbar */}
        <ul
          className={`${
            !open && "hidden"
          } absolute top-16 right-7 bg-slate-100 md:hidden flex flex-col gap-5 pr-10 pl-5 py-5 rounded`}
        >
          <Link to={"/"}>
            <li
              className={`${
                pathname == "/" && "border-primary-color text-primary-color"
              } border-b border-transparent hover:text-primary-color`}
            >
              Home
            </li>
          </Link>
          <Link to={"/about-us"}>
            <li
              className={`${
                pathname == "/about-us" &&
                "border-primary-color text-primary-color"
              } border-b border-transparent hover:text-primary-color`}
            >
              About Us
            </li>
          </Link>
          <Link to={"/services"}>
            <li
              className={`${
                pathname == "/services" &&
                "border-primary-color text-primary-color"
              } border-b border-transparent hover:text-primary-color`}
            >
              Services
            </li>
          </Link>
          <Link to={"/our-works"}>
            <li
              className={`${
                pathname == "/our-works" &&
                "border-primary-color text-primary-color"
              } border-b border-transparent hover:text-primary-color`}
            >
              Our Works
            </li>
          </Link>
          {user ? (
            <>
              <img
                className="w-14 h-14 rounded-full"
                src={userImage}
                alt="user-image"
              />
              <Link className="text-white bg-black px-5 py-2 font-medium rounded-md">
                <button>Log Out</button>
              </Link>
            </>
          ) : (
            <>
              <Link
                to={"/register"}
                className="text-white bg-black px-5 py-2 font-medium rounded-md"
              >
                <button>Register</button>
              </Link>
              <Link
                to={"/login"}
                className="text-white bg-black px-5 py-2 font-medium rounded-md"
              >
                <button>Login</button>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
