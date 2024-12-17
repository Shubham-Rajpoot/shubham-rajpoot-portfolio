import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 py-5 font-thin z-10 transition-all duration-300 ${
        isScrolled
          ? 'bg-black bg-opacity-40 backdrop-blur-md shadow-lg'
          : 'bg-black'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-5">
        {/* Logo */}
        <div className="text-3xl text-white font-thin">
          <p>Shubham Rajpoot</p>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex text-white">
          <ul className="flex items-center gap-6">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Blogs</li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400">
              GitHub
            </button>
          </ul>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white p-4 absolute top-0 right-0 w-full h-screen">
          {/* Close Button (X) */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>

          <ul className="flex flex-col items-center gap-4 mt-12">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Blogs</li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400">
              GitHub
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
