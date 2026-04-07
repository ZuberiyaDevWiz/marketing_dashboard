"use client";
import { JSX } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-white py-10 px-4 sm:px-8 md:px-16 flex flex-col items-center justify-center space-y-6">
      {/* --- Social Icons --- */}
      <div className="flex space-x-3 sm:space-x-2">
        {[
          { icon: FaFacebookF, label: "Facebook" },
          { icon: FaInstagram, label: "Instagram" },
          { icon: FaXTwitter, label: "X (Twitter)" },
          { icon: FaLinkedinIn, label: "LinkedIn" },
        ].map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="text-gray-500 hover:bg-[#F74f22] hover:text-white hover:rounded-full p-2 transition-all duration-300"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* --- Copyright + Terms --- */}
      <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-3">
        <p className="text-sm sm:text-sm text-[#1C7896] ">
          © {new Date().getFullYear()} Care Options Therapy. All Rights Reserved.
        </p>

        <span className="hidden sm:block text-[#1C7896] pb-1">|</span>

        <Link
          href="/terms-of-use"
          target="_blank"
          className="text-sm  text-[#1C7896] hover:text-[#F74f22]  transition-colors"
        >
          Terms Of Use
        </Link>
      </div>

      {/* --- Bottom Logo --- */}
      {/* <Link
        href="https://remiah.com/"
        target="_blank"
        className="flex flex-col items-center space-y-1 cursor-pointer"
      >
        <Image
          src="/images/footer-img.png"
          alt="REMIAH Logo"
          width={120}
          height={40}
          className="object-contain w-28 sm:w-32 md:w-36"
        />
      </Link> */}
    </footer>
  );
}
