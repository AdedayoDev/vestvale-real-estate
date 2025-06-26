"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="relative font-inter bg-cover bg-center text-white py-20 md:py-32"
      style={{
        backgroundImage: 'url("/image-3.svg")',
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.5, zIndex: 1 }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Animated Heading */}
        <motion.h1
          className="text-2xl md:text-4xl text-[#ebebeb] font-bold mb-4 flex flex-col items-center gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Redefining Real Estate in Nigeria - Welcome to
          </motion.span>

          <motion.span
            className="text-[#D3BD9E]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Typewriter
              words={["Vestvale Estate"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.span>
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          Experience the fusion of timeless architecture, international interior
          design, and modern eco-conscious living.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="max-w-2xl mx-auto bg-opacity-20 rounded-lg p-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <motion.button
              className="flex-grow p-3 rounded-2xl bg-opacity-90 bg-[#D3BD9E] text-[#17120F] font-semibold text-xl"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                x: [0, -3, 3, -2, 2, 0], // Shake effect
                transition: { duration: 0.4 },
              }}
              onClick={() => {
                const el = document.getElementById("properties");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Homes
            </motion.button>

            <motion.button
              className="flex-grow p-3 rounded-2xl text-white border border-[#9d6b53] font-semibold text-xl"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                x: [0, -3, 3, -2, 2, 0],
                transition: { duration: 0.4 },
              }}

               onClick={() => {
        const el = document.getElementById("homedecor");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
            >
              See Our Decors
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
