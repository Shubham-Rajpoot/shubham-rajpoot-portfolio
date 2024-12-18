import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-sm">
              I am passionate about coding and technology, always looking for new
              opportunities to grow and contribute to impactful projects. Let's
              connect and collaborate!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  About Me
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:shubhamrajpoot@example.com"
                className="text-gray-400 hover:text-white"
              >
                shubhamrajpoot@example.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-gray-400 hover:text-white"
              >
                +123 456 7890
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; 2024 Shubham Rajpoot. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
