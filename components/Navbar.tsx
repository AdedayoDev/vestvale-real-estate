"use client";

import React, { useState } from "react";
import { FaHome, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type SectionKey =
  | "navbar"
  | "hero"
  | "about"
  | "products"
  | "services"
  | "testimonials"
  | "contact"
  | "properties"
  | "homedecor"
  | "service"
  | "interior-decor";
  
interface NavbarProps {
  onNavClick?: (section: SectionKey) => void;
  // ...other props...
}

const navLinks: { label: string; section: SectionKey; href: string }[] = [
  { label: "About Us", section: "about", href: "#about" },
  { label: "Our Properties", section: "products", href: "#products" },
  { label: "Interior Decor", section: "interior-decor", href: "#services" },
  { label: "Services", section: "services", href: "#services" },
  { label: "Virtual Tour", section: "testimonials", href: "#testimonials" },
  { label: "Contact", section: "contact", href: "#contact" },
];

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md font-inter">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/vestvale logo 1.png"
            alt="Vestvale Logo"
            width={118}
            height={52}
            className="md:w-30 w-24"
          />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8">
          {navLinks
            .filter((link) => link.label !== "Contact")
            .map((link) => (
              <Link
                key={link.section}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick?.(link.section);
                }}
                className="text-[#141414] font-medium hover:text-[#222222] transition"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          {navLinks
            .filter((link) => link.label === "Contact")
            .map((link) => (
              <button
                key={link.section}
                className="bg-[#D3BD9E]  font-semibold text-base md:text-xl text-[#17120f] w-26 h-10 md:w-44 md:h-14 rounded-2xl"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick?.(link.section);
                }}
              >
                Contact
              </button>
            ))}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#9d6b53] focus:outline-none"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#9d6b53] text-white"
          >
            <div className="px-4 py-2 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.section}
                  href={link.href}
                  className="block py-2 hover:bg-amber-900 px-2 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick?.(link.section);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
