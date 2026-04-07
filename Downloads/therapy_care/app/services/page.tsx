"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "Orthopedic Post-Op Surgical Recovery",
      image: "/images/service-img1.png",
      description:
        "We help clients recover from spinal surgery, total knee and hip replacements, arthroscopy procedures, fractures, shoulder repairs, tendon repairs, and more.",
      points: [
        "Sprains",
        "Strains",
        "Pain Management of Spine, Knee, Back, Hip, and Shoulders",
      ],
    },
    {
      title: "Pelvic Floor Retraining",
      image: "/images/service-img2.png",
      description:
        "We work with clients dealing with pelvic floor dysfunction to provide specialized retraining and strengthening programs.",
      points: ["Incontinence", "Stress and Urinary Frequency"],
    },
    {
      title: "Injury and Wellness",
      image: "/images/service-img3.png",
      description:
        "If you’ve recently been in an accident or have an attorney, we can help you with pain and injury recovery.",
      points: [],
    },
  ];

  return (
    <section id="services" className="bg-[#f8f9f4]  py-16 px-4 sm:px-8 md:px-10">
      {/* Section Title */}
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 12,
          duration: 0.5,
        }}
        className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#5A3192] font-heading mb-12 text-center tracking-tight"
      >
        What We Offer
      </motion.h2>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 p-5 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-[200px] sm:h-[230px] md:h-[250px] mb-5 rounded-lg overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#1580a3] text-center mb-3 transition-colors duration-300 group-hover:text-[#F74f22]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 text-start font-sans mb-3 md:mt-2 ">
              {service.description}
            </p>

            {/* Points */}
            {service.points.length > 0 && (
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1 ">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
