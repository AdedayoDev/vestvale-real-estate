"use client"

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const propertyData = [
  {
    id: 1,
    title: 'The Heritage Loft',
    location: '124 Maple Street, Boston',
    price: '$450,000',
    tag: 'Historical Landmark',
    beds: 3,
    baths: 2,
    area: '1,850 sq.ft',
    built: 1990,
    image: '/image-09.svg',
    gallery: ['/image-09.svg', '/image-10.svg'],
    description: `This magnificent Grade II listed country house sits on 50 acres of prime Cotswold countryside. Originally built as the country seat of the Blackwood family in 1848, the estate combines Georgian architectural elegance with modern amenities and working equestrian facilities.
    
    The principal residence features stunning original plasterwork, multiple marble fireplaces, a grand staircase, and period detailing throughout. Recent sympathetic renovations have added modern luxuries while preserving the home's historic character.
    
    The estate includes stables, a pool house, walled kitchen gardens, vineyards producing about 800 bottles per year, and numerous outbuildings with potential for conversion (subject to planning permission).`
  },
  // ...other properties
];

interface PropertyDetailsProps {
  id?: string;
}

type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  tag: string;
  beds: number;
  baths: number;
  area: string;
  built: number;
  image: string;
  gallery: string[];
  description: string;
};

const PropertyDetails = (props: PropertyDetailsProps) => {
  const { id } = props;

  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    if (id) {
      const selected = propertyData.find((p) => p.id === parseInt(id));
      setProperty(selected ?? null);
    }
  }, [id]);

  if (!property) return <div className="text-center text-white py-20">Loading...</div>;

  return (
    <div className="bg-[#17120F] text-white">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${property.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute bottom-8 left-8">
          <h1 className="text-4xl font-bold">{property.title}</h1>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <FaMapMarkerAlt className="text-amber-600" />
            <span>{property.location}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white text-black p-4 rounded shadow">
              <FaBed className="text-amber-700 mb-2" /> {property.beds} Bedrooms
            </div>
            <div className="bg-white text-black p-4 rounded shadow">
              <FaBath className="text-amber-700 mb-2" /> {property.baths} Bathrooms
            </div>
            <div className="bg-white text-black p-4 rounded shadow">
              <FaRulerCombined className="text-amber-700 mb-2" /> {property.area}
            </div>
            <div className="bg-white text-black p-4 rounded shadow">
              🏗️ Year Built: {property.built}
            </div>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">{property.price}</h2>
          <p className="mb-2">Monthly Maintenance: $1,200</p>
          <button className="bg-amber-700 hover:bg-amber-900 w-full text-white py-2 rounded">
            Contact Advisor
          </button>
        </div>
      </div>

      {/* Property Description */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4">Property Description</h2>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">{property.description}</p>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-12">
        <div className="border-t border-gray-600 pt-6">
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-400" /> Historic architecture with modern upgrades
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-400" /> Private gardens and vineyards
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-400" /> Potential for expansion and conversion
            </li>
          </ul>
          <div className="border-t border-gray-600 mt-6"></div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6">Gallery</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {property.gallery.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt="Gallery image"
              className="rounded-lg w-full object-cover h-64"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
