import React from "react";

const Mainsection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-500 text-white min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center sm:text-5xl lg:text-6xl text-teal-300">
        Explore My <span className="text-white">Skills</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Programming Languages */}
        <div className="bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-500 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl border-2 border-teal-500 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6 text-center">
            Programming Languages
          </h3>
          <ul className="space-y-4 sm:space-y-6 text-lg sm:text-xl text-gray-300">
            <li className="flex items-center space-x-3">
              <span className="text-xl sm:text-2xl text-teal-400">✅</span>
              <strong className="text-teal-200">C++</strong>
              <span className="ml-2 text-gray-400">Intermediate</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-xl sm:text-2xl text-teal-400">✅</span>
              <strong className="text-teal-200">Java</strong>
              <span className="ml-2 text-gray-400">Intermediate</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-xl sm:text-2xl text-teal-400">✅</span>
              <strong className="text-teal-200">Python</strong>
              <span className="ml-2 text-gray-400">Intermediate</span>
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-500 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl border-2 border-teal-500 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6 text-center">
            Skills
          </h3>
          <ul className="space-y-4 sm:space-y-6 text-lg sm:text-xl text-gray-300">
            <li className="flex items-center space-x-3">
              <span className="text-xl sm:text-2xl text-teal-400">✅</span>
              <strong className="text-teal-200">Linux</strong>
              <span className="ml-2 text-gray-400">Advanced</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-xl sm:text-2xl text-teal-400">✅</span>
              <strong className="text-teal-200">Docker</strong>
              <span className="ml-2 text-gray-400">Intermediate</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-xl sm:text-2xl text-teal-400">✅</span>
              <strong className="text-teal-200">AWS</strong>
              <span className="ml-2 text-gray-400">Intermediate</span>
            </li>
          </ul>
        </div>

        {/* System Skills */}
        <div className="bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-500 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl border-2 border-teal-500 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6 text-center">
            System Skills
          </h3>
          <ul className="space-y-4 sm:space-y-6 text-lg sm:text-xl text-gray-300">
            <li className="flex items-center space-x-3">
              <span className="text-xl sm:text-2xl text-teal-400">✅</span>
              <strong className="text-teal-200">Git</strong>
              <span className="ml-2 text-gray-400">Advanced</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-xl sm:text-2xl text-teal-400">✅</span>
              <strong className="text-teal-200">Jenkins</strong>
              <span className="ml-2 text-gray-400">Intermediate</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-xl sm:text-2xl text-teal-400">✅</span>
              <strong className="text-teal-200">Kubernetes</strong>
              <span className="ml-2 text-gray-400">Intermediate</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mainsection;
