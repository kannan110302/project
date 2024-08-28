import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-100 shadow-lg "> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lglg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex">
             {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img src='https://htmldemo.net/edule/eduLe/assets/images/logo.png'></img>
              
              {/* <a href="/" className="text-2xl font-bold text-green-600 no-underline "><FaBookOpen /></a>
              <a href="/" className="text-2xl font-bold text-green-600 ml-2 no-underline ">EduLe</a> */}
            </div>
          </div>
          {/* Hamburger menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-black-500 hover:bg-black-100 focus:outline-none focus:bg-black-100 focus:text-black-500"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Navbar Links */}
          <div className="hidden md:flex md:items-center md:space-x-7  ">
            <a href="/" className="text-gray-800 hover:text-green-600 no-underline ">Home</a>
            <a href="/courses" className="text-gray-800 hover:text-green-600 no-underline">All Course</a>
            <a href="/pages" className="text-gray-800 hover:text-green-600 no-underline">Pages</a>
            <a href="/blog" className="text-gray-800 hover:text-green-600 no-underline">Blog</a>
            <a href="/contact" className="text-gray-800 hover:text-green-600 no-underline">Contact</a>
          </div>
          {/* Sign In and Sign Up Buttons */}
          <div className="hidden md:flex md:items-center space-x-5">
            <a href="/signin" className="text-gray-800 hover:text-green-600 no-underline">Sign In</a>
            <a href="/signup" className="px-4 py-2 bg-white border-green-500 text-black rounded-md hover:bg-green-700 no-underline">Sign Up</a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-gray-800 hover:text-green-600">Home</a>
            <a href="/courses" className="block text-gray-800 hover:text-green-600">All Course</a>
            <a href="/pages" className="block text-gray-800 hover:text-green-600">Pages</a>
            <a href="/blog" className="block text-gray-800 hover:text-green-600">Blog</a>
            <a href="/contact" className="block text-gray-800 hover:text-green-600">Contact</a>
            <a href="/signin" className="block text-gray-800 hover:text-green-600">Sign In</a>
            <a href="/signup" className="block px-4 py-2 bg-green-600 text-black rounded-md hover:bg-green-700">Sign Up</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
