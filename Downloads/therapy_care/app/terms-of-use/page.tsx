"use client";
import React from "react";
import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <div className="bg-gradient-to-b  from-gray-50 mt-2 to-white min-h-screen text-gray-800 font-poppins">
      {/* --- Hero Header --- */}
      <header className=" text-[#5b2d91] py-6 px-6 md:grid md:grid-cols-3 font-heading bg-white/60 backdrop-blur-sm shadow-md">
         <Link href="/">
         <img
          src="/images/therapy_logo.png"
          alt="therapy logo"
          className="w-32 sm:w-36 md:w-40 h-auto md:ml-40 ml-30"
        />
         </Link>

        <h1 className="text-3xl sm:text-4xl font-bold pt-2 uppercase tracking-wide text-center font-heading" >
          Terms of Use
        </h1>
       
      </header>

      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 py-10 space-y-10 leading-relaxed">
        {/* Intro */}
        <section>
          <p>
            Welcome to <Link href="/" target="_blank" className="underline hover:text-[#1C7896]">Therapy Care Options </Link>This website is
            owned and operated by Therapy Care Options. By visiting our website
            and accessing the information, resources, services, products, and
            tools we provide, you agree to comply with the following Terms and
            Conditions (the “User Agreement”) as well as our{" "}Privacy Policy
            {/* <Link
              href="/privacy-policy"
              className="text-[#1C7896] hover:underline"
            >
              Privacy Policy
            </Link> */}

            .
          </p>
          <p className="mt-4">
            We reserve the right to change this User Agreement at any time
            without notice. Continued use of this site signifies your acceptance
            of any modified terms.
          </p>
        </section>

        {/* Responsible Use */}
        <section>
          <h2 className="text-2xl font-semibold text-[#5b2d91] mb-3">
            Responsible Use and Conduct
          </h2>
          <p>
            By using our website and accessing our resources (“Resources”), you
            agree to use them only for lawful purposes and in accordance with
            this User Agreement. You agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              You will provide accurate and up-to-date information when required
              to access Resources.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account information and all activity under your account.
            </li>
            <li>
              You will not attempt to access our Resources through automated,
              unethical, or unconventional means.
            </li>
            <li>
              You will not engage in activity that disrupts or interferes with
              our Resources or servers.
            </li>
            <li>
              You may not copy, sell, or redistribute any part of our Resources.
            </li>
          </ul>
          <p className="mt-3">
            You agree to indemnify and hold harmless Therapy Care Options and
            its affiliates from any losses or damages resulting from your
            violation of this agreement.
          </p>
        </section>

        {/* Privacy */}
        <section>
          <h2 className="text-2xl font-semibold text-[#5b2d91] mb-3">
            Privacy
          </h2>
          <p>
            Your privacy is important to us. Please review our{" "}
            <Link
              href="/privacy-policy"
              className="text-[#1C7896] hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            to understand how we collect, use, and protect your personal
            information.
          </p>
        </section>

        {/* Warranties */}
        <section>
          <h2 className="text-2xl font-semibold text-[#5b2d91] mb-3">
            Limitation of Warranties
          </h2>
          <p>
            You acknowledge that all Resources provided are “as is” and “as
            available.” We make no warranties that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Our Resources will meet your expectations or requirements.</li>
            <li>Use of our Resources will be uninterrupted or error-free.</li>
            <li>The information obtained will be accurate or reliable.</li>
            <li>Any defects will be corrected.</li>
          </ul>
        </section>

        {/* Liability */}
        <section>
          <h2 className="text-2xl font-semibold text-[#5b2d91] mb-3">
            Limitation of Liability
          </h2>
          <p>
            Therapy Care Options shall not be liable for any direct, indirect,
            incidental, or consequential damages arising from your use of our
            Resources or website. Your sole remedy is to discontinue use of our
            services.
          </p>
        </section>

        {/* Copyright */}
        <section>
          <h2 className="text-2xl font-semibold text-[#5b2d91] mb-3">
            Copyrights and Trademarks
          </h2>
          <p>
            All content on this site, including text, graphics, code, and logos,
            is the property of Therapy Care Options and is protected by
            copyright and trademark laws. Unauthorized use or reproduction is
            prohibited.
          </p>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-2xl font-semibold text-[#5b2d91] mb-3">
            Termination of Use
          </h2>
          <p>
            We may suspend or terminate your access to our website at any time
            without notice for violation of this agreement or other
            inappropriate behavior.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-2xl font-semibold text-[#5b2d91] mb-3">
            Governing Law
          </h2>
          <p>
            This site is operated in the United States. By using this site, you
            agree that the laws of the State of Louisiana (or applicable
            jurisdiction) govern this agreement and any disputes.
          </p>
        </section>

        {/* Medical Disclaimer */}
        <section>
          <h2 className="text-2xl font-semibold text-[#5b2d91] mb-3">
            Medical Disclaimer
          </h2>
          <p>
            The information on this website is for educational purposes only and
            is not intended as medical advice. Always seek the guidance of a
            qualified healthcare provider regarding any medical condition,
            treatment, or exercise program.
          </p>
          <p className="mt-2">
            If you think you may be experiencing a medical emergency, contact
            your doctor or call 911 immediately.
          </p>
        </section>

        {/* Last Section */}
        <section className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Care Options Therapy. All Rights Reserved.
            Reserved.
          </p>
        </section>
      </main>
    </div>
  );
}
