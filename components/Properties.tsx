"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaArrowRight,
} from "react-icons/fa";
import PropertyModal from "./PropertyModal";

const propertyData = [
  {
    id: 1,
    title: "The Heritage Loft",
    location: "124 Maple Street, Boston",
    price: "$450,000",
    beds: 3,
    baths: 2,
    area: "1,850 sq.ft",
    built: 1920,
    image: "/image-09.svg",
    description:
      "A beautifully restored loft with original hardwood floors and exposed brick walls.",
    tag: "Featured",
    gallery: ["/image-09.svg"],
  },
  {
    id: 2,
    title: "Classic Brownstone",
    location: "78 Oak Avenue, New York",
    price: "$650,000",
    beds: 4,
    baths: 3,
    area: "2,400 sq.ft",
    built: 1910,
    image: "/image-10.svg",
    description:
      "Stunning brownstone with original details, fireplace, and private garden.",
    tag: "New",
    gallery: ["/image-10.svg"],
  },
  {
    id: 3,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",
    price: "$320,000",
    beds: 2,
    baths: 1,
    area: "1,200 sq.ft",
    built: 1945,
    image: "/image-11.svg",
    description:
      "Charming cottage with vintage details, updated kitchen, and large backyard.",
    tag: "Popular",
    gallery: ["/image-11.svg"],
  },
  {
    id: 4,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",
    price: "$320,000",
    beds: 2,
    baths: 1,
    area: "1,200 sq.ft",
    built: 1945,
    image: "/image-11.svg",
    description:
      "Charming cottage with vintage details, updated kitchen, and large backyard.",
    tag: "Popular",
    gallery: ["/image-11.svg"],
  },
  {
    id: 5,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",
    price: "$320,000",
    beds: 2,
    baths: 1,
    area: "1,200 sq.ft",
    built: 1945,
    image: "/image-11.svg",
    description:
      "Charming cottage with vintage details, updated kitchen, and large backyard.",
    tag: "Popular",
    gallery: ["/image-11.svg"],
  },
  {
    id: 6,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",
    price: "$320,000",
    beds: 2,
    baths: 1,
    area: "1,200 sq.ft",
    built: 1945,
    image: "/image-11.svg",
    description:
      "Charming cottage with vintage details, updated kitchen, and large backyard.",
    tag: "Popular",
    gallery: ["/image-11.svg"],
  },

  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 7,
    title: `Vintage Home #${i + 7}`,
    location: `Location ${i + 7}`,
    price: `$${(300000 + i * 25000).toLocaleString()}`,
    beds: 2 + (i % 3),
    baths: 1 + (i % 2),
    area: `${1200 + i * 100} sq.ft`,
    built: 1900 + i,
    image: `https://source.unsplash.com/random/800x600?vintage+house+${i}`,
    description:
      "Beautiful vintage property with a unique story and timeless design.",
    tag: "Vintage",
    gallery: [
      `https://source.unsplash.com/random/800x600?vintage+house+${i}`,
      `https://source.unsplash.com/random/800x600?vintage+interior+${i}`,
    ],
  })),
];

const PropertiesSection = React.forwardRef<HTMLElement>((_, ref) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProperties = propertyData.slice(0, visibleCount);
  const [selectedProp, setSelectedProp] = useState<
    (typeof propertyData)[0] | null
  >(null);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, propertyData.length));
  };

  return (
    <section
      ref={ref}
      id="properties"
      className="py-16 bg-[#17120F] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-2">Our Homes</h2>
          <div className="w-20 h-1 bg-amber-800 mx-auto"></div>
          <p className=" mt-4 max-w-2xl mx-auto">
            Explore our curated selection of vintage properties with character
            and charm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-amber-800 mr-2" />{" "}
                  {property.location}
                </p>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>
                    <FaBed className="inline-block text-amber-800 mr-1" />{" "}
                    {property.beds} Beds
                  </span>
                  <span>
                    <FaBath className="inline-block text-amber-800 mr-1" />{" "}
                    {property.baths} Baths
                  </span>
                  <span>
                    <FaRulerCombined className="inline-block text-amber-800 mr-1" />{" "}
                    {property.area}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{property.description}</p>

                <button
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white py-2 rounded transition"
                  onClick={() => setSelectedProp(property)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button logic */}
        {selectedProp && (
          <PropertyModal
            property={selectedProp}
            onClose={() => setSelectedProp(null)}
          />
        )}
      </div>
    </section>
  );
});

PropertiesSection.displayName = "PropertiesSection";

export default PropertiesSection;
