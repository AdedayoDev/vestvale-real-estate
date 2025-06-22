"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";

const OurStory = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className=" py-16 bg-[#17120F] text-white"
    >
      <div className="container  mx-auto px-4">
        <div className="flex flex-col md:gap-20 lg:flex-row items-center">
          {/* Right Text */}
          <div className="lg:w-1/2 h-auto">
            <h3 className="text-3xl md:text-4xl font-bold  mb-4">About us</h3>
            <div className="w-20 h-1 bg-white mb-6"></div>
            <p className=" mb-4">
              Vestvale Estate is a visionary real estate development based in
              Abuja, Nigeria. Designed for those who seek more than a home,
              Vestvale offers a lifestyle that combines architectural elegance
              with nature, international influences, and luxury
            </p>
            <p className=" mb-6">
              Nestled amidst serene hills and natural landscapes, we are
              creating a new standard in residential living. With every home, we
              deliver impeccable craftsmanship, premium finishes, and
              intelligent space planning-fused with global design inspiration
              from Russia, China, Morocco, and Italy.
            </p>
            {/* <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <FaCheck className="text-amber-800 mt-1 mr-3" />
                <span className="text-gray-700">
                  Over 200 historic properties restored and sold
                </span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-amber-800 mt-1 mr-3" />
                <span className="text-gray-700">
                  Original craftsmen workshops in England and France
                </span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-amber-800 mt-1 mr-3" />
                <span className="text-gray-700">
                  Recipient of the Royal Institute of British Architects
                  Conservation Award
                </span>
              </li>
            </ul> */}
            <button className="bg-[#D3BD9E] hover:bg-amber-900 text-black px-6 py-3 rounded font-medium transition">
              Read more
            </button>
          </div>

          {/* Left Image */}
          <div className="lg:w-5/12 mb-8 lg:mb-0 ">
            <div className="w-full flex flex-col p-7 items-center justify-center rounded-lg shadow-lg overflow-hidden aspect-video bg-white  ">
              <div className="text-black text-center  space-y-3 pb-2">
                <h2 className="font-medium text-[#0d0c0c] text-3xl ">
                  Virtual Tour
                </h2>
                <p>3D wallkthrough video of the Vestvale Estate duplex units</p>
              </div>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vestvale Estate Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full "
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
