import React from "react";
import { NavLink } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profile from "../assets/newPic (2).jpg";

function Homepage() {
  const [text] = useTypewriter({
    words: [
      "React Js Developer.",
      "Full Stack Developer.",
      "MERN Stack Developer.",
    ],
    loop: {},
  });
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 mt-4 sm:mt-0 py-8 sm:px-6 sm:py-12 lg:px-9 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-44">
          <div className="relative h-64 w-64 mx-auto md:mx-0   items-center overflow-hidden rounded-full  md:w-[330px] lg:mt-5   lg:order-last lg:h-[75%]">
            <img
              alt="myprofile"
              // src="https://avatars.githubusercontent.com/u/155292217?s=400&u=dbee3321af6b149a123e91de55916622a1f9cb02&v=4"
              src={profile}
              className="absolute md:h-[361px]  w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-2xl"> Hi, my name is </h2>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text ">
              Shivam Saini
            </h2>
            <h1 className="text-3xl font-semibold">
              I'm a{" "}
              <span className="  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text ">
                {text}
              </span>
              <Cursor />
            </h1>

            <p className="mt-4 text-gray-300">
              Programming is an art where mind paints the logic on the
              Computer.... -Donald Knuth
            </p>
            <NavLink
              className="group mt-8  inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              to="https://drive.google.com/file/d/1K6haQhPKADTOXgMYU2fX9wD92GsQf6yv/view"
              target="_blank"
            >
              <span className="block rounded-full dark:bg-gray-900 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                Resume Download
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
