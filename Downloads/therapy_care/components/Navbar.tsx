"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaPhone,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaBars,
} from "react-icons/fa6";

import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },

    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="shadow-sm fixed z-40 w-full">
      {/* --- Top Purple Bar --- */}
      <div className="bg-[#5b2d91] text-white flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 sm:px-8 md:px-16 lg:px-40 py-2 sm:py-3 text-center sm:text-left">
        {/* Phone Number */}
        <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs sm:text-sm mb-2 sm:mb-0">
          <FaPhone className="font-heading text-[#49b8e8]" />
          <span>(225) 888-7705</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-3">
          {[
            { icon: <FaFacebookF size={14} />, href: "#" },
            { icon: <FaXTwitter size={14} />, href: "#" },
            { icon: <FaInstagram size={14} />, href: "#" },
            { icon: <FaYoutube size={14} />, href: "#" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#49b8e8] p-1.5 rounded-sm hover:opacity-80 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* --- Main White Navbar --- */}
      <nav className="bg-white py-3 sm:py-4 px-4 sm:px-8 md:px-16 lg:px-40 flex justify-between items-center relative">
        {/* Logo */}
      <Link href="/">
        <img
          src="/images/therapy_logo.png"
          alt="therapy logo"
          className="w-32 sm:w-36 md:w-40 h-auto"
        />
      </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-heading text-[16px] md:text-[18px] lg:text-[20px] font-bold text-[#1580A3] hover:text-[#61b1e5] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1580A3] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 flex flex-col items-center py-4 space-y-4 md:hidden z-30">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-[18px] font-semibold text-[#1580A3] hover:text-[#61b1e5] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
