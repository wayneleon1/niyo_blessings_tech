"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import GalleryComponent from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <GalleryComponent />
      {/* <Portfolio /> */}
      <Contact />
    </>
  );
}
