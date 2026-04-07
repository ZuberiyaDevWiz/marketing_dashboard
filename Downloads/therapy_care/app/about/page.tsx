"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function AboutPage() {
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
    <section id="about" className="">
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-14"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/about-img.png"
            width={800}
            height={800}
            alt="Therapy session"
            className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] h-auto object-cover rounded-lg"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[60%] flex flex-col gap-3 font-heading text-left">
          <p className="text-base sm:text-lg md:text-xl text-[#2c85a3] font-medium">
            + About Us
          </p>

          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[2rem] font-heading font-bold text-[#5a3192] leading-tight">
            Feeling better starts with moving better
          </h1>

          <div className="space-y-4 sm:space-y-5 pt-4 sm:pt-6">
            <p className="font-sans font-semibold text-gray-800 text-sm sm:text-base leading-relaxed">
              With over a decade of experience in physical therapy, our founder
              Christy was struck by a profound insight during a moment of deep
              reflection.
            </p>

            <p className="font-sans font-semibold text-gray-800 text-sm sm:text-base leading-relaxed">
              This realization wasn’t about the multitude of treatment options
              available; instead, it highlighted a necessary shift in our
              therapeutic approach. It became clear that to truly make a lasting
              impact, our interventions need to begin as early as possible.
            </p>

            <p className="font-sans font-semibold text-gray-800 text-sm sm:text-base leading-relaxed">
              Driven by this vision, Therapy Care Options focuses on early
              intervention for patients, recognizing the importance of
              foundational care in physical therapy. From young children to
              older adults, we’re dedicated to setting the stage for a lifetime
              of mobility and well-being.
            </p>

            <p className="font-sans font-semibold text-gray-800 text-sm sm:text-base leading-relaxed">
              If you’re ready to embrace a proactive approach to physical
              therapy, joining us in making a difference from the very beginning,{" "}
              <br className="hidden sm:block" />
              let’s start this transformative journey together!
            </p>

            <p className="font-sans font-semibold text-gray-800 text-sm sm:text-base">
              Let’s make it real.
            </p>
          </div>

          {/* Button */}
           <div className="flex mt-6 sm:mt-6">
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
        </div>
      </motion.section>
    </section>
  );
}
