"use client";
import Image from "next/image";
import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
}

export default function TestimonialsSection(): JSX.Element {
  const testimonials: Testimonial[] = [
    {
      name: "Micheal B.",
      text: "Christy is phenomenal and top tier. She attended to my needs thoroughly. I would definitely come back to get treatment if I need it.",
    },
    {
      name: "Jean L.",
      text: "My neck and back was in constant pain, and now I can walk and move with no difficulty. I am able to do workouts without pain. If it wasn’t for Therapy Care Options, I don’t know where I would be.",
    },
    {
      name: "Takenia R.",
      text: "I enjoyed coming to physical therapy — my pain went away and I feel better. I recommend that you call today!",
    },
    {
      name: "Tisha R.",
      text: "I was having really bad pain, and she helped me get through the pain and now I am so much better.",
    },
  ];

  const [current, setCurrent] = useState<number>(0);
  const total = testimonials.length;

  const nextTestimonial = (): void => setCurrent((prev) => (prev + 1) % total);
  const prevTestimonial = (): void =>
    setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section className="bg-white py-16 sm:py-20 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10">
      {/* Section Heading */}
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 12,
          duration: 0.5,
        }}
        whileHover={{ scale: 1.05 }}
        className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#5A3192] font-heading mb-16 sm:mb-20 text-center tracking-tight"
      >
        What Our Clients Say
      </motion.h2>

      {/* Testimonial Card */}
      <div className="relative group bg-white w-full max-w-[90%] sm:max-w-3xl lg:max-w-4xl mx-auto rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-6 sm:p-10 md:p-14 text-center transition-all duration-300">
        {/* Quote Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4 }}
            className="absolute -top-14 sm:-top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md sm:shadow-lg"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full">
              <Image
                src="/images/quotes.png"
                alt="Quote Icon"
                width={120}
                height={120}
                className="object-contain w-full h-full"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Testimonial Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-10 sm:mt-14 md:mt-2"
          >
            <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold italic text-[#5A3192] font-poppins">
              {testimonials[current].name}
            </h3>
            <p className="mt-3 sm:mt-4 leading-relaxed sm:leading-8 text-sm sm:text-base md:text-base italic font-poppins px-2 sm:px-6 md:px-10 text-gray-800">
              “{testimonials[current].text}”
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
     {/* Navigation Arrows */}
{/* Navigation Arrows */}
<button
  onClick={prevTestimonial}
  aria-label="Previous testimonial"
  className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 
             text-[#135D4B] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
             transition-all duration-300 hover:scale-110"
>
  <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9" />
</button>

<button
  onClick={nextTestimonial}
  aria-label="Next testimonial"
  className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 
             text-[#135D4B] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
             transition-all duration-300 hover:scale-110"
>
  <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9" />
</button>


      </div>
    </section>
  );
}
