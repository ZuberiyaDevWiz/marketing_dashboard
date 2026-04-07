"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function Hero() {
  const handleCalendlyClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/admin-therapycareoptions",
      });
    } else {
      window.open("https://calendly.com/admin-therapycareoptions", "_blank");
    }
  };

  return (
    <section
      className="relative flex items-center justify-center h-[90vh] sm:h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 140px",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(61, 90, 219, 0.30) 1%, rgba(90, 49, 146, 0.9) 100%)",
        }}
      ></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 text-center text-white pt-40 sm:pt-48 md:pt-54"
      >
        <h1 className="font-heading font-bold uppercase drop-shadow-lg md:leading-18 leading-tight  text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.3rem] xl:text-[4.5rem]">
          YOUR PATH TO BETTER PHYSICAL WELLNESS STARTS HERE
        </h1>

        <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl drop-shadow-md max-w-4xl mx-auto px-2">
          We provide holistic physical therapy services that transform you from the inside out
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-6 sm:mt-6">
          <Link href="/" target="_blank">
            <motion.button
              onClick={handleCalendlyClick}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="group relative cursor-pointer flex items-center justify-center font-heading text-base sm:text-lg md:text-xl rounded-full bg-[#2B99AD] px-5 sm:px-6 md:px-8 py-2.5 sm:py-2 font-semibold text-white hover:bg-[#1F7181] transition-all duration-200"
            >
              Schedule a Consultation
              <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 right-2 transform -translate-x-3 group-hover:translate-x-0">
                <IoIosArrowForward />
              </span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
