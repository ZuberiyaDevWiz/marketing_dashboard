// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import About from "./about/page";
// import Services from "./services/page";
// import Testimonials from "@/components/Testimonials";
// import Footer from "@/components/Footer";
// import ContactPage from "./contact/page";

// export default function Home() {
//   return (
//     <main className="">
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Testimonials />
//       <ContactPage/>
//       <Footer />
//       {/* <h1 className="">APPLICATION ERROR..</h1> */}
//     </main>
//   );
// }
"use client";

export default function Error() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>500 - Server Error</h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
}