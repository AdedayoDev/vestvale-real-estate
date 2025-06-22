"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = React.forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    className="relative bg-cover bg-center text-white py-20 md:py-32"
    style={{
      backgroundImage: 'url("/image-3.svg")',
      height: "100vh",
      display: "flex",
      alignItems: "center", 
      justifyContent: "center",
    }}
  >
    <div
      className="absolute inset-0 bg-black"
      style={{ opacity: 0.5, zIndex: 1 }}
      aria-hidden="true"
    />

    <div className="container mx-auto px-4 text-center relative z-10">
      <h1 className="text-2xl md:text-4xl text-[#ebebeb]  font-bold mb-4  flex flex-col items-center gap-4 justify-center">
        <span>Redefining Real Estate in Nigeria - Welcome to</span>
        <span> Vestvale Estate</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
        Experience the fusion of timeless architecture, international interior
        design, and modern eco-conscious living.
      </p>

      <div className="max-w-2xl mx-auto bg-none bg-opacity-20  rounded-lg p-4">
        <div className="flex flex-col md:flex-row gap-2">
          <button className="flex-grow p-3 rounded-2xl bg-opacity-90  bg-[#D3BD9E] text-[#17120F] font-semibold text-xl  ">
            Explore Our Homes
          </button>
          <button className="flex-grow p-3 rounded-2xl bg-none bg-opacity-90 text-white border  border-[#9d6b53] font-semibold text-xl ">
          See Our Decors
          </button>
          
        </div>
      </div>
    </div>
  </section>
));

Hero.displayName = "Hero";

export default Hero;
