"use client"
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Events', route: '/' },
    { name: 'Prize Money', route: '/' },
    { name: 'Login', route: '/' },
    { name: 'Blog', route: '/' },
    { name: 'Privacy Policy', route: '/' },
    { name: 'Shop', route: '/' },
    { name: 'About Us', route: '/about-us' },
    { name: 'Enter Site', route: '/snooker-oracle' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* You can replace "Logo" with your actual logo component or image */}
        <div className="text-xl font-bold">Logo</div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.route}
                  className="text-lg font-sans transition-transform duration-300 ease-in-out hover:scale-110 hover:text-green-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? (
              // Close icon (×)
              <span>&times;</span>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.route}
                  className="block text-lg font-sans transition-transform duration-300 ease-in-out hover:scale-105 hover:text-green-500"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
