import React from "react";
import profile from "../assets/ph1.jpg";
import leetcode from "../assets/LeetCode_logo_black.png";
import codeforces from "../assets/codeforces.jpg";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto w-full">
          <div className="flex justify-center mb-8 md:mb-0 md:w-1/2">
            <img
              src={profile}
              alt="Shubham Rajpoot"
              className="rounded-full h-80 w-80 md:h-96 md:w-96 object-cover shadow-lg"
            />
          </div>

          <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start">
            <p className="text-lg text-slate-200 mb-2">Hello I'm</p>

            <h1 className="text-7xl md:text-8xl font-extrabold mb-2 text-transparent bg-gradient-to-r from-cyan-300 via-stone-100 to-pink-800 bg-clip-text">
              Shubham
            </h1>
            <span
              className="text-6xl md:text-8xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-teal-200 via-pink-600 to-red-400 bg-clip-text leading-[1.2] relative"
              style={{ paddingBottom: "0.9rem" }}
            >
              Rajpoot
            </span>

            <h2 className="text-4xl md:text-6xl font-semibold text-gray-200 mb-6 mt-2 tracking-wider">
              Coder & Developer
            </h2>

            <div className="flex justify-center md:justify-start gap-6 mt-4">
              <a
                href="#"
                className="bg-gray-800 text-white px-6 py-4 rounded-lg hover:bg-gray-700 transition"
              >
                Download CV
              </a>
              <a
                href="#"
                className="bg-white text-black px-6 py-4 rounded-lg hover:bg-gray-200 transition"
              >
                Contact Info
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  className="h-10 w-10"
                />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                  className="h-10 w-10"
                />
              </a>
              <a href="https://leetcode.com" target="_blank" rel="noreferrer">
                <img
                  src={leetcode}
                  alt="LeetCode"
                  className="h-10 w-10 border border-gray-400"
                />
              </a>
              <a href="https://codeforces.com" target="_blank" rel="noreferrer">
                <img
                  src={codeforces}
                  alt="Codeforces"
                  className="h-10 w-10 border border-gray-400"
                />
              </a>
            </div>

            <div className="mt-9 animate-bounce">
              <FaArrowDown className="text-gray-400 text-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-12 relative">
        {/* Title Section */}
        <p className="text-lg text-gray-300 mb-2 tracking-wider uppercase">
          Get To Know More
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white text-center animate-pulse">
          About Me
        </h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full mx-auto gap-8">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="rounded-lg h-80 w-80 object-cover shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-6 text-center md:text-left">
            {/* Certifications */}
            <div className="flex-1 bg-zinc-900 rounded-lg p-6 shadow-lg border-solid border-2 border-teal-600">
              <h2 className="text-3xl font-semibold text-white mb-2 flex items-center justify-center gap-2">
                <span>🎓</span> Certifications
              </h2>
              <p className="text-white text-sm mb-1">
                IT Specialist - HTML and CSS
              </p>
              <p className="text-white text-xs mb-4">
                Certiport - A Pearson VUE Business
              </p>
              <p className="text-white text-sm">
                Red Hat Certified System Administrator (RHCSA)
              </p>
              <p className="text-white text-xs">Red Hat</p>
            </div>

            {/* Education */}
            <div className="flex-1 bg-zinc-900 rounded-lg p-6 shadow-lg border-solid border-2 border-teal-600">
              <h2 className="text-3xl font-semibold text-white mb-2 flex items-center justify-center gap-2">
                <span>👨‍💻</span> Education
              </h2>
              <p className="text-white text-1xl mb-1">
                B.Tech. Computer Science(AI)
              </p>
              <p className="text-white text-xs">
                Meerut Institute of Engineering and Technology
              </p>
              <p className="text-white text-xs">CGPA - 8.2</p>
            </div>
          </div>
        </div>

        {/* Personal Introduction */}
        <div className="mt-12 max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
          <p>
            Hello! I am{" "}
            <span className="text-white font-semibold">Shubham Rajpoot</span>, a
            B.Tech graduate in Computer Science specializing in AI. Skilled in
            C++, Data Structures and Algorithms, and MERN stack development,
            I’ve built projects like Nirman Saathi to solve real-world
            challenges. I’m passionate about technology and eager to contribute
            my skills to a dynamic organization.
          </p>
        </div>

        {/* Arrow Indicator */}
        <div className="mt-6 animate-bounce">
          <FaArrowDown className="text-gray-400 text-3xl" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
