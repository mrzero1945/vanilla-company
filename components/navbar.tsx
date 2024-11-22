"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[rgb(34,139,34)] text-[rgb(245,245,220)] relative z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="hover:text-[rgb(139,69,19)] transition-colors">
              PT Nature's Exquisite Nusantara
            </span>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-[rgb(245,245,220)] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu */}
        <ul
          className={`flex-col md:flex md:flex-row md:space-x-6 text-lg absolute md:static bg-[rgb(34,139,34)] w-full left-0 top-[4.5rem] md:justify-end transform transition-transform duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="text-center md:text-left">
            <Link
             href="/"
             className="block py-2 px-6 md:p-0 hover:text-[rgb(139, 69, 19)] transition-colors"
             onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              href="/about"
              className="block py-2 px-6 md:p-0 hover:text-[rgb(139,69,19)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              href="/products"
              className="block py-2 px-6 md:p-0 hover:text-[rgb(139,69,19)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              href="/sustainability"
              className="block py-2 px-6 md:p-0 hover:text-[rgb(139,69,19)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sustainability
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              href="/contact"
              className="block py-2 px-6 md:p-0 hover:text-[rgb(139,69,19)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
