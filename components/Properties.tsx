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
    title: "Golden Castle Estate, (3 Bedroom Apartment)",
    location: "15B Maple Street, Maitama Abuja.",
    beds: 3,
    baths: 3,
    area: "Furnished",
    built: 1920,
    image: "/image-09.svg",
    description:
      "This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities.The principal residence features stunning original plasterwork, multiple marble fireplaces, a grand staircase, and period detailing throughout. Recent sympathetic renovations have added modern luxuries while preserving the home's historic character.The estate includes stables, a pool house, walled kitchen gardens, vineyards producing about 800 bottles per year, and numerous outbuildings with potential for conversion (subject to planning permission).",
    tag: "Featured",
    gallery: ["/image-09.svg"],
  },
  {
    id: 2,
    title: "3 Bedroom Luxury Apartment",
    location: "Abuja",
    beds: 3,
    baths: 3,
    area: "Furnished",
    built: 1910,
    image: "/image-10.svg",
    description:
      "This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities.The principal residence features stunning original plasterwork, multiple marble fireplaces, a grand staircase, and period detailing throughout. Recent sympathetic renovations have added modern luxuries while preserving the home's historic character.The estate includes stables, a pool house, walled kitchen gardens, vineyards producing about 800 bottles per year, and numerous outbuildings with potential for conversion (subject to planning permission).",
    tag: "New",
    gallery: ["/image-10.svg"],
  },
  {
    id: 3,
    title: "3 Bedroom Luxury Apartment",
    location: "Abuja",
    beds: 3,
    baths: 3,
    area: "Furnished",
    built: 1945,
    image: "/image-11.svg",
    description:
      "This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities.",
    tag: "Popular",
    gallery: ["/image-11.svg"],
  },
  {
    id: 4,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",
    beds: 2,
    baths: 1,
    area: "1,200 sq.ft",
    built: 1945,
    image: "/image-13.svg",
    description:
      "Charming cottage with vintage details, updated kitchen, and large backyard.",
    tag: "Popular",
    gallery: ["/image-13.svg"],
  },
  {
    id: 5,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",

    beds: 2,
    baths: 1,
    area: "1,200 sq.ft",
    built: 1945,
    image: "/image-04.svg",
    description:
      "Charming cottage with vintage details, updated kitchen, and large backyard.",
    tag: "Popular",
    gallery: ["/image-04.svg"],
  },
  {
    id: 6,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",

    beds: 2,
    baths: 1,
    area: "Furnished",
    built: 1945,
    image: "/image-15.svg",
    description:
      "This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities. The principal residence features stunning original plasterwork, multiple marble fireplaces, a grand staircase, and period detailing throughout. Recent sympathetic renovations have added modern luxuries while preserving the home's historic character.The estate includes stables, a pool house, walled kitchen gardens, vineyards producing about 800 bottles per year, and numerous outbuildings with potential for conversion (subject to planning permission).",
    tag: "Popular",
    gallery: ["/image-15.svg"],
  },
  {
    id: 7,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",

    beds: 2,
    baths: 1,
    area: "Furnished",
    built: 1945,
    image: "/image-12.svg",
    description:
      "This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities. The principal residence features stunning original plasterwork, multiple marble fireplaces, a grand staircase, and period detailing throughout. Recent sympathetic renovations have added modern luxuries while preserving the home's historic character.The estate includes stables, a pool house, walled kitchen gardens, vineyards producing about 800 bottles per year, and numerous outbuildings with potential for conversion (subject to planning permission).",
    tag: "Popular",
    gallery: ["/image-12.svg"],
  },
  {
    id: 8,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",

    beds: 2,
    baths: 1,
    area: "Furnished",
    built: 1945,
    image: "/image-14.svg",
    description:
      "This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities. The principal residence features stunning original plasterwork, multiple marble fireplaces, a grand staircase, and period detailing throughout. Recent sympathetic renovations have added modern luxuries while preserving the home's historic character.The estate includes stables, a pool house, walled kitchen gardens, vineyards producing about 800 bottles per year, and numerous outbuildings with potential for conversion (subject to planning permission).",
    tag: "Popular",
    gallery: ["/image-14.svg"],
  },
  {
    id: 9,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",

    beds: 2,
    baths: 1,
    area: "Furnished",
    built: 1945,
    image: "/image-16.svg",
    description:
      "This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities. The principal residence features stunning original plasterwork, multiple marble fireplaces, a grand staircase, and period detailing throughout. Recent sympathetic renovations have added modern luxuries while preserving the home's historic character.The estate includes stables, a pool house, walled kitchen gardens, vineyards producing about 800 bottles per year, and numerous outbuildings with potential for conversion (subject to planning permission).",
    tag: "Popular",
    gallery: ["/image-16.svg"],
  },
  {
    id: 10,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",

    beds: 2,
    baths: 1,
    area: "Furnished",
    built: 1945,
    image: "/image-18.svg",
    description:
      "This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities. The principal residence features stunning original plasterwork, multiple marble fireplaces, a grand staircase, and period detailing throughout. Recent sympathetic renovations have added modern luxuries while preserving the home's historic character.The estate includes stables, a pool house, walled kitchen gardens, vineyards producing about 800 bottles per year, and numerous outbuildings with potential for conversion (subject to planning permission).",
    tag: "Popular",
    gallery: ["/image-18.svg"],
  },
  {
    id: 11,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",

    beds: 2,
    baths: 1,
    area: "Furnished",
    built: 1945,
    image: "/image-15.svg",
    description:
      "This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities. The principal residence features stunning original plasterwork, multiple marble fireplaces, a grand staircase, and period detailing throughout. Recent sympathetic renovations have added modern luxuries while preserving the home's historic character.The estate includes stables, a pool house, walled kitchen gardens, vineyards producing about 800 bottles per year, and numerous outbuildings with potential for conversion (subject to planning permission).",
    tag: "Popular",
    gallery: ["/image-15.svg"],
  },
  {
    id: 12,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",

    beds: 2,
    baths: 1,
    area: "Furnished",
    built: 1945,
    image: "/image-19.svg",
    description:
      "This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities. The principal residence features stunning original plasterwork, multiple marble fireplaces, a grand staircase, and period detailing throughout. Recent sympathetic renovations have added modern luxuries while preserving the home's historic character.The estate includes stables, a pool house, walled kitchen gardens, vineyards producing about 800 bottles per year, and numerous outbuildings with potential for conversion (subject to planning permission).",
    tag: "Popular",
    gallery: ["/image-19.svg"],
  },
  {
    id: 12,
    title: "Cozy Vintage Cottage",
    location: "32 Pine Road, Chicago",

    beds: 2,
    baths: 1,
    area: "Furnished",
    built: 1945,
    image: "/image-20.svg",
    description:
      "This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities. The principal residence features stunning original plasterwork, multiple marble fireplaces, a grand staircase, and period detailing throughout. Recent sympathetic renovations have added modern luxuries while preserving the home's historic character.The estate includes stables, a pool house, walled kitchen gardens, vineyards producing about 800 bottles per year, and numerous outbuildings with potential for conversion (subject to planning permission).",
    tag: "Popular",
    gallery: ["/image-20.svg"],
  },

  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 8,
    title: `Vintage Home #${i + 8}`,
    location: `Location ${i + 8}`,
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

const MAX_CARDS = 12;

const PropertiesSection = React.forwardRef<HTMLElement>((_, ref) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProperties = propertyData.slice(0, visibleCount);
  const [selectedProp, setSelectedProp] = useState<
    (typeof propertyData)[0] | null
  >(null);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, MAX_CARDS));
  };

  const handleContactAdvisor = (property: (typeof propertyData)[0]) => {
    setSelectedProp(null); // Close modal first

    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Small delay to let modal visually disappear
  };

  return (
    <section
      ref={ref}
      id="properties"
      className=" container md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter"
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
              className="bg-black/10 border border-white rounded-lg overflow-hidden shadow-md transition duration-300"
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
                <p className="text-white/90 mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-white/90 mr-2" />{" "}
                  {property.location}
                </p>
                <div className="flex justify-between text-sm text-white/90 mb-4">
                  <span>
                    <FaBed className="inline-block text-white/90 mr-1" />{" "}
                    {property.beds} Beds
                  </span>
                  <span>
                    <FaBath className="inline-block text-white/90 mr-1" />{" "}
                    {property.baths} Baths
                  </span>
                  <span>
                    <FaRulerCombined className="inline-block text-white/90 mr-1" />{" "}
                    {property.area}
                  </span>
                </div>
                {/* <p className="text-gray-700 mb-4">{property.description}</p> */}

                <button
                  className="w-full bg-[#D3BD9E] hover:bg-[#c7b091] text-black font-semibold hover:text-black py-2 rounded transition"
                  onClick={() => setSelectedProp(property)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < Math.min(propertyData.length, MAX_CARDS) && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-[#D3BD9E] hover:bg-[#c7b091] text-black font-semibold px-6 py-3 rounded transition"
            >
              See all <FaArrowRight className="inline-block ml-2" />
            </button>
          </div>
        )}

        {/* ✅ Show Modal if a property is selected */}
        {selectedProp && (
          <PropertyModal
            property={selectedProp}
            onClose={() => setSelectedProp(null)}
            onContactAdvisor={handleContactAdvisor}
          />
        )}
      </div>
    </section>
  );
});

PropertiesSection.displayName = "PropertiesSection";

export default PropertiesSection;
