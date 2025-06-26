"use client";

import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const FooterSection = () => {
  return (
    <footer className="bg-[#D3BD9E] text-black py-12 sm:py-16 font-inter overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo Centered Above */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo icon 1 (1).png"
            alt="Vestvale logo"
            width={80}
            height={80}
          />
        </div>

        {/* Flex Grouped Sections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left"
        >
          {/* Vestvale + Navigation */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-[#361B06]">Vestvale</h2>
            <ul className="space-y-2">
              {["About", "Contact", "Service", "Virtual Tour", "Home Decor"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Properties */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-bold text-[#361B06]">Our Properties</h3>
            <ul className="space-y-2">
              {["3 Bedroom", "Great Vile Estate", "Rayna for Startups"].map((item) => (
                <li key={item}>
                  <a href="#properties" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Home Decoration */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-bold text-[#361B06]">Home Decoration</h3>
            <ul className="space-y-2">
              {["Russia", "Italy", "China"].map((item) => (
                <li key={item}>
                  <a href="#appliances" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Socials and Policies */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-4">
            {[FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
          <ul className="flex space-x-6 text-sm">
            {["Privacy Policy", "Cookie Policy", "Security"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="border-t font-inter border-black pt-4 mt-8 text-center text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Vestvale Homes & Decor. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
