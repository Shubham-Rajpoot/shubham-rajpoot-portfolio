
import React from "react";

const Mainsection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold mb-8">Explore My <span className="text-gray-400">Skills</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        
        {/* Programming Languages */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
          <ul className="space-y-3">
            <li>✅ <strong>C++</strong> <span className="text-gray-400">Intermediate</span></li>
            <li>✅ <strong>Java</strong> <span className="text-gray-400">Intermediate</span></li>
            <li>✅ <strong>Python</strong> <span className="text-gray-400">Intermediate</span></li>
          </ul>
        </div>

        {/* Web Technologies */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Web Technologies</h3>
          <ul className="space-y-3">
            <li>✅ <strong>HTML</strong> <span className="text-gray-400">Experienced</span></li>
            <li>✅ <strong>CSS</strong> <span className="text-gray-400">Experienced</span></li>
            <li>✅ <strong>JavaScript</strong> <span className="text-gray-400">Basic</span></li>
            <li>✅ <strong>SQL</strong> <span className="text-gray-400">Intermediate</span></li>
          </ul>
        </div>

        {/* System Skills */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">System Skills</h3>
          <ul className="space-y-3">
            <li>✅ <strong>RedHat Linux</strong> <span className="text-gray-400">Intermediate</span></li>
            <li>✅ <strong>Git</strong> <span className="text-gray-400">Intermediate</span></li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Mainsection;
