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

const propertyData = [
  {
    id: 1,
    title: "The Heritage Loft",
    location: "124 Maple Street, Boston",
    price: "$450,000",
    tag: "Historical Landmark",
    beds: 3,
    baths: 2,
    area: "1,850 sq.ft",
    image: "/image-09.svg",
    description:
      "A beautifully restored loft with original hardwood floors and exposed brick walls.",
  },
  {
    id: 2,
    title: "Classic Brownstone",
    location: "78 Oak Avenue, New York",
    price: "$725,000",
    tag: "Penthouse",
    beds: 4,
    baths: 3,
    area: "2,400 sq.ft",
    image: "/image-10.svg",
    description:
      "Stunning brownstone with original details, fireplace, and private garden.",
  },
  {
    id: 3,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",
    price: "$325,000",
    tag: "Equestrian Facility",
    beds: 2,
    baths: 1,
    area: "1,200 sq.ft",
    image: "/image-11.svg",
    description:
      "Charming cottage with vintage details, updated kitchen, and large backyard.",
  },
  {
    id: 4,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",
    price: "$325,000",
    tag: "Equestrian Facility",
    beds: 2,
    baths: 1,
    area: "1,200 sq.ft",
    image: "/image-11.svg",
    description:
      "Charming cottage with vintage details, updated kitchen, and large backyard.",
  },
  {
    id: 5,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",
    price: "$325,000",
    tag: "Equestrian Facility",
    beds: 2,
    baths: 1,
    area: "1,200 sq.ft",
    image: "/image-11.svg",
    description:
      "Charming cottage with vintage details, updated kitchen, and large backyard.",
  },
  {
    id: 6,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",
    price: "$325,000",
    tag: "Equestrian Facility",
    beds: 2,
    baths: 1,
    area: "1,200 sq.ft",
    image: "/image-11.svg",
    description:
      "Charming cottage with vintage details, updated kitchen, and large backyard.",
  },

  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 4,
    title: `Vintage Home #${i + 4}`,
    location: `Location ${i + 4}`,
    price: `$${(300000 + i * 25000).toLocaleString()}`,
    tag: [
      "Historic Landmark",
      "Penthouse",
      "Equestrian Facility",
      "Garden Estate",
    ][i % 4],
    beds: 2 + (i % 3),
    baths: 1 + (i % 2),
    area: `${1200 + i * 100} sq.ft`,
    image: `https://source.unsplash.com/random/800x600?vintage+house+${i}`,
    description:
      "Beautiful vintage property with a unique story and timeless design.",
  })),
];

const PropertiesSection = React.forwardRef<HTMLElement>((_, ref) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProperties = propertyData.slice(0, visibleCount);

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
                <div className="absolute top-4 right-4 bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.tag}
                </div>
                <div className="absolute bottom-4 left-4 bg-white text-[#9d6b53] px-3 py-1 rounded-full text-sm font-medium">
                  {property.price}
                </div>
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
                <Link href={`/property/${property.id}`}>
                  <button className="w-full bg-amber-800 hover:bg-amber-900 text-white py-2 rounded transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < propertyData.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-[#9d6b53] hover:bg-amber-900 text-white px-6 py-3 rounded font-medium transition"
            >
              Browse More Properties{" "}
              <FaArrowRight className="inline-block ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

PropertiesSection.displayName = "PropertiesSection";

export default PropertiesSection;
