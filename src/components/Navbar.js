import React, { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  let [isopen, setisopen] = useState(false);
  return (
    <>
      <div className="shadow-lg shadow-[#213469] w-full fixed top-0 dark:bg-gray-900 left-0 z-50 lg:z-50 md:z-auto ">
        <div className="md:px-10 py-4 px-7 md:flex justify-between items-center  dark:bg-gray-900">
          {/* logo */}
          <div className="flex gap-2 text-2xl cursor-pointer items-center">
            <span className="font-bold">
              Sh
              <span className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                ivam
              </span>
            </span>
          </div>

          {/* menu icon toggeler */}
          <div
            onClick={() => setisopen(!isopen)}
            className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden "
          >
            {isopen ? (
              <HiXMark className="w-5 h-5" />
            ) : (
              <HiBars3BottomRight className="w-5 h-5" />
            )}
          </div>

          {/* nav links here */}
          <ul
            className={`md:flex gap-2 pl-5 md:pl-0 md:items-center md:pb-0 pb-12 lg:z-20
             absolute md:z-auto z-50 left-0 w-full text-center  dark:bg-gray-900 
            md:static md:w-auto  transition-all duration-500 ease-in ${
              isopen ? "top-12" : "top-[-490px]"
            }`}
          >
            <li className="my-7 md:my-0 md:ml-8 font-bold bg-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
              {" "}
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                {" "}
                Home
              </Link>
            </li>
            <li className="my-7 md:my-0 md:ml-8 font-bold bg-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
              {" "}
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-10}
              >
                {" "}
                About
              </Link>
            </li>
            <li className="my-7 md:my-0 md:ml-8 font-bold  bg-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
              {" "}
              <Link
                to="skills"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {" "}
                Skills
              </Link>
            </li>
            <li className="my-7 md:my-0 md:ml-8 font-bold  bg-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
              {" "}
              <Link
                to="tools"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {" "}
                Tools
              </Link>
            </li>
            <li className="my-7 md:my-0 md:ml-8 font-bold  bg-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
              {" "}
              <Link
                to="projects"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                Projects
              </Link>
            </li>
            <li className="my-7 md:my-0 md:ml-8 font-bold  bg-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
              {" "}
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={15}
                duration={500}
              >
                {" "}
                Contact
              </Link>
            </li>
            <li className="my-7 md:my-0 md:ml-8 font-bold ">
              <NavLink
                className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                to="https://drive.google.com/file/d/1K6haQhPKADTOXgMYU2fX9wD92GsQf6yv/view"
                target="_blank"
              >
                <span className="block rounded-full dark:bg-gray-900 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  Resume Download
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
