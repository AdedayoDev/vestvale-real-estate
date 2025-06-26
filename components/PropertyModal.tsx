"use client";

import React from "react";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";

type Property = {
  id: number;
  title: string;
  location: string;
  tag: string;
  beds: number;
  baths: number;
  area: string;
  built: number;
  image: string;
  gallery: string[];
  description: string;
};

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
  onContactAdvisor: (property: Property) => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose,  onContactAdvisor, }) => {


   const handleContactClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onContactAdvisor(property); // Will scroll and close via parent
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center font-inter backdrop-blur-md  bg-opacity-60 p-4 overflow-auto"
      
    >
      <div className="relative bg-[#f7e9d5]  text-black rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl z-50 hover:text-amber-600"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Hero Section */}
        <div
          className="relative h-[40vh] bg-cover bg-center rounded-t-xl"
          style={{ backgroundImage: `url(${property.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-xl"></div>
          <div className="absolute bottom-6 left-6">
            <h1 className="text-4xl font-bold">{property.title}</h1>
          </div>
        </div>

        {/* Details Section */}
        <div className="container mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
          {/* Info Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-balck  text-sm">
              <FaMapMarkerAlt className="text-amber-600" />
              <span>{property.location}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-black text-sm">
              <div className="bg-white p-4 rounded shadow flex items-center gap-2">
                <FaBed className="text-amber-700" /> {property.beds} Beds
              </div>
              <div className="bg-white p-4 rounded shadow flex items-center gap-2">
                <FaBath className="text-amber-700" /> {property.baths} Baths
              </div>
              <div className="bg-white p-4 rounded shadow flex items-center gap-2">
                <FaRulerCombined className="text-amber-700" /> {property.area}
              </div>
              <div className="bg-white p-4 rounded shadow flex items-center gap-2">
                🏗️ Built in {property.built}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-black whitespace-pre-line">
                {property.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Features</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-black" /> Historic architecture
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-black" /> Private garden &
                  vineyards
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-black" /> Expansion potential
                </li>
              </ul>
            </div>
          </div>

          {/* Price & Contact */}
          <aside className="h-24 bg-white text-black p-6 rounded-lg shadow">
            <button className="w-full bg-amber-700 hover:bg-amber-900 text-white py-2 rounded"  onClick={handleContactClick}>
              Contact Advisor
            </button>
          </aside>
        </div>

        {/* Gallery */}
        <div className="container mx-auto px-6 pb-8">
          <h2 className="text-xl font-semibold mb-4">Gallery</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {property.gallery.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="rounded-lg w-full object-cover h-48"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
function onContactAdvisor(property: Property) {
  throw new Error("Function not implemented.");
}

