import React from "react";

function About() {
  return (
    <>
      <section className="container lg:w-[90%] m-auto">
        <div className="mx-auto max-w-screen-2xl px-4  py-16 sm:px-6 lg:px-8 dark:bg-gray-900">
          <h1 className=" text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            About Us
          </h1>
          <div className="grid mt-3 sm:mt-0 grid-cols-1 lg:h-full lg:grid-cols-2">
            <div className="relative z-[1] lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-96">
                <img
                  alt=""
                  src="https://camo.githubusercontent.com/c4eda68ed08f4be1f7d996c937ed3a2d0b916c65e744c41e528816e69bc5e82b/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313239323637372f73637265656e73686f74732f363133393136372f6d656469612f66636637666430633631396262383737303635333330373932343039313566332e676966"
                  className="absolute inset-0 h-full rounded-lg w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-900">
              <div className="p-2 sm:p-16 lg:p-16 lg:pb-60">
                <h2 className="text-2xl font-bold sm:text-2xl">
                  I am a Full stack web developer. I have made some projects
                  using HTML, CSS, Javascript, React, Redux still learning...
                </h2>
                <p className="mt-2 text-gray-300">
                  I am passionate about solving real-world problems in the field
                  of web development and software engineering. Eager to be a
                  part of a team which gives me ability to learn and grow . My
                  hobbies are Watching movies, Travelling, listening music
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
