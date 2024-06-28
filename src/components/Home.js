import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import About from "./About";
import Skills from "./Skills";
import Tools from "./Tools";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Projects from "./Projects";
import Spinner from "./Spinner";

function Home() {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1800);
  }, []);
  return (
    <>
      {loader ? (
        <div className="text-center pt-40">
          <Spinner />
        </div>
      ) : (
        <div className="h-screen dark:bg-gray-900">
          <Navbar />
          <div className="pt-10 h-screen w-full ">
            {/* main section  */}
            <section className="bg-gray-900 " name="home">
              <Homepage />
            </section>

            {/*  About Section */}
            <section className="bg-gray-900 " name="about">
              <About />
            </section>

            {/*  Skills Section */}
            <section className="bg-gray-900 " name="skills">
              <Skills />
            </section>

            {/*  Tools Section */}
            <section className="bg-gray-900 " name="tools">
              <Tools />
            </section>

            {/* Projects */}
            <section className="bg-gray-900 " name="projects">
              <Projects />
            </section>

            {/*  Contact Section */}
            <section className="bg-gray-900 " name="contact">
              <Contact />
            </section>
            {/*  Footer Section */}
            <section className="bg-gray-900 ">
              <Footer />
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
