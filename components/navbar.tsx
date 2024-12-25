"use client";

import Link from "next/link";
import { useState } from "react";
import LogoWhite from "../resources/logo-white.png";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[rgb(84,150,136)] text-[rgb(245,245,220)] relative z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Image
        src={LogoWhite.src}
        alt=""
        width={1000}
        height={1000}
        className="md:w-64 md:h-auto w-48 mx-auto"
        />
     

        {/* Hamburger Button */}
        <button
          className="md:hidden text-[rgb(245,245,220)] flex-none  focus:outline-none"
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
          className={`flex-col md:flex md:flex-row md:space-x-6 text-lg absolute md:static bg-[rgb(84,150,136)] w-full left-0 top-[4.5rem] md:justify-end transform transition-transform duration-300 z-50 ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="text-center md:text-left mt-5 md:mt-0">
            <Link
             href="/"
             className="block py-2 px-6 md:p-0 hover:text-[rgb(139,69,19)] transition-colors"
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
          <li className="text-center md:text-left">
            <Link
              href="/news"
              className="block py-2 px-6 md:p-0 hover:text-[rgb(139,69,19)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
          </li>
          
        </ul>
      </div>
      
      {/* Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-[50px] fill-[rgb(244,234,197)]"
        >
          <path d="M0,120 C300,60 600,180 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </nav>
  );
};

export { Navbar };