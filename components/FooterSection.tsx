"use client";

import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="bg-[#D3BD9E] text-white py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo and About */}
          <div>
            <div className=" mb-4">
              <Image
                src="/logo icon 1 (1).png"
                alt="logo icon 1 (1).png"
                width={30}
                height={60}
              />
              <span className="text-xl font-bold text-amber-300">Vestvale</span>
            </div>
            {/* Quick Links */}
            <div className="mb-4">
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-amber-100 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-amber-100 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#service"
                    className="text-amber-100 hover:text-white"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#properties"
                    className="text-amber-100 hover:text-white"
                  >
                    Virtual Tour
                  </a>
                </li>
                <li>
                  <a
                    href="#appliances"
                    className="text-amber-100 hover:text-white"
                  >
                    Home Decor
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Properties</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#properties"
                  className="text-amber-100 hover:text-white"
                >
                  3 Bedroom
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  className="text-amber-100 hover:text-white"
                >
                  Great Vile Estate
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  className="text-amber-100 hover:text-white"
                >
                  Rayna for Startups
                </a>
              </li>
            </ul>
          </div>

          {/* Home Decor */}
          <div>
            <h3 className="text-lg font-bold mb-4">Home Decoration</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#appliances"
                  className="text-amber-100 hover:text-white"
                >
                  Russia
                </a>
              </li>
              <li>
                <a
                  href="#appliances"
                  className="text-amber-100 hover:text-white"
                >
                  Italy
                </a>
              </li>
              <li>
                <a
                  href="#appliances"
                  className="text-amber-100 hover:text-white"
                >
                  China
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-5 ">
            <div className="flex space-x-4">
              <a href="#" className="text-amber-100 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-amber-100 hover:text-white">
                <FaInstagram />
              </a>

              <a href="#" className="text-amber-100 hover:text-white">
                <FaLinkedin />
              </a>
            </div>
            <ul>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Cookie Policy</a></li>
              <li><a href="">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-6 text-center text-sm text-amber-100">
          <p>
            &copy; {new Date().getFullYear()} Vestvale Homes & Decor. All rights
            reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
