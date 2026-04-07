"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Handle field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.firstName || !formData.email || !formData.message) {
      setError("Please fill in all required fields (First name, Email, Message).");
      return;
    }

    setSubmitting(true);
    try {
      const resp = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || "Submission failed.");
      }

      setSuccess("✅ Thank you! Your message has been received.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      console.error("Form submit error:", err);
      setError(err.message || "Submission failed. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#f8f9f4] py-12 px-4 sm:px-8 md:px-16 lg:px-20 font-poppins"
    >
      {/* Heading */}
      <h1 className="text-center font-semibold text-base sm:text-lg">
        Want to Get in Touch?
      </h1>

      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 12, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#5A3192] font-heading mb-10 sm:mb-14 text-center tracking-tight pt-2"
      >
        Contact Us
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* --- Left Section: Contact Info --- */}
        <div className="space-y-8 sm:space-y-10">
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#1580a3] p-3 sm:p-4 rounded-full shrink-0">
              <Phone className="text-white w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <div>
              <h3 className="text-[#1580a3] font-heading font-bold text-2xl sm:text-3xl">
                Call Us
              </h3>
              <p className="text-base sm:text-lg pt-1 sm:pt-2 text-black">
                P: (225) 888-7705
              </p>
            </div>
          </div>

          {/* Fax */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#1580a3] p-3 sm:p-4 rounded-full shrink-0">
              <Phone className="text-white w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <div>
              <h3 className="text-[#1580a3] font-heading font-bold text-2xl sm:text-3xl">
                Business Fax
              </h3>
              <p className="text-base sm:text-lg pt-1 sm:pt-2 text-black">
                P: (833) 693-1200
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#1580a3] p-3 sm:p-4 rounded-full shrink-0">
              <Mail className="text-white w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <div>
              <h3 className="text-[#1580a3] font-heading font-bold text-2xl sm:text-3xl">
                Email Us
              </h3>
              <p className="text-base sm:text-lg pt-1 sm:pt-2 text-black break-words">
                admin@therapycareoptions.com
              </p>
            </div>
          </div>

          <p className="italic mt-6 sm:mt-8 font-sans font-semibold text-base sm:text-lg text-gray-700">
            Send referrals via fax or email
          </p>
        </div>

        {/* --- Right Section: Contact Form --- */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 sm:space-y-6 bg-white/60 backdrop-blur-sm p-6  rounded-2xl shadow-md"
        >
          {error && (
            <p className="text-red-600 font-medium bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-700 font-medium bg-green-50 border border-green-200 px-4 py-2 rounded-lg">
              {success}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              placeholder="First Name*"
              required
                className="w-full p-3 sm:p-4 rounded-lg bg-[#f3f5fa] outline-none focus:ring-2 focus:ring-[#5A3192] text-black placeholder-gray-900 placeholder:font-light"
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Last Name*"
              required
                            className="w-full p-3 sm:p-4 rounded-lg bg-[#f3f5fa] outline-none focus:ring-2 focus:ring-[#5A3192] text-black placeholder-gray-900 placeholder:font-light"

            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address*"
              required
                       className="w-full p-3 sm:p-4 rounded-lg bg-[#f3f5fa] outline-none focus:ring-2 focus:ring-[#5A3192] text-black placeholder-gray-900 placeholder:font-light"

            />
             <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone Number*"
              required
                             className="w-full p-3 sm:p-4 rounded-lg bg-[#f3f5fa] outline-none focus:ring-2 focus:ring-[#5A3192] text-black placeholder-gray-900 placeholder:font-light"

            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message*"
            required
            rows={5}
                     className="w-full p-3 sm:p-4 rounded-lg bg-[#f3f5fa] outline-none focus:ring-2 focus:ring-[#5A3192] text-black placeholder-gray-900 placeholder:font-light"

          />

          <div className="flex justify-center sm:justify-end">
            <button
              type="submit"
              disabled={submitting}
              className={`relative bg-[#5A3192] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-lg shadow-[6px_6px_0px_#1a7c91] transition-all ${
                submitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:translate-x-0.5 hover:translate-y-0.5"
              }`}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}



