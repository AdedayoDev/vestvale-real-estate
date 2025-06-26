"use client";

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const OurStory = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="font- w-10/12 mx-auto py-10 md:py-16 bg-[#17120F] text-white"
    >
      <div className="container  mx-auto px-4">
        <div className="flex flex-col gap-20 lg:flex-row ">
          {/* Right Text */}
          <div className="lg:w-1/2 h-auto space-y-20 flex flex-col items-start gap-10">
            <h3 className="text-3xl md:text-6xl font-medium  mb-4">About us</h3>
            <div>
              <p className=" mb-4 text-base font-normal text-[#fffdfd] ">
                Vestvale Estate is a visionary real estate development based in
                Abuja, Nigeria. Designed for those who seek more than a home,
                Vestvale offers a lifestyle that combines architectural elegance
                with nature, international influences, and luxury
              </p>
              <p className=" mb-6 text-base font-normal text-[#fffdfd]">
                Nestled amidst serene hills and natural landscapes, we are
                creating a new standard in residential living. With every home,
                we deliver impeccable craftsmanship, premium finishes, and
                intelligent space planning-fused with global design inspiration
                from Russia, China, Morocco, and Italy.
              </p>

              <button className="bg-[#D3BD9E] hover:bg-amber-900 text-black px-6 py-3 rounded  transition font-bold">
                Explore Homes
              </button>
            </div>
          </div>

          {/* Left Image */}
          <div className="lg:w-1/2  mb-8 lg:mb-0">
            <div className="w-full max-w-[900px] h-[500px] aspect-square flex flex-col p-7 items-center justify-center  shadow-lg overflow-hidden bg-white mx-auto">
              <div className="text-black text-center space-y-3 pb-2">
                <h2 className="font-medium text-[#0d0c0c] text-3xl">
                  Virtual Tour
                </h2>
                <p>3D walkthrough video of the Vestvale Estate duplex units</p>
              </div>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vestvale Estate Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OurStory.displayName = "OurStory";

export default OurStory;
