"use client";

import React, { useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaArrowRight,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const decorItems = [
  {
    id: 1,
    name: "Vintage Edison Bulb",
    desc: "Set of 3 - Warm White",
    price: "$24.99",
    tag: "BestSeller",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=2070&q=80",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Victorian Floral Wallpaper",
    desc: 'Roll (20.5" x 33")',
    price: "$39.99",
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1586023492125-27c2d015d4f7?auto=format&fit=crop&w=1180&q=80",
    rating: 4,
  },
  {
    id: 3,
    name: "Antique Brass Chandelier",
    desc: '6-Light, 24" Wide',
    price: "$189.99",
    tag: "Sale",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1180&q=80",
    rating: 4,
  },
];

const HomeDecorSection = React.forwardRef<HTMLElement>((_, ref) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <section
      ref={ref}
      id="appliances"
      className="container py-16 bg-white bg-cover bg-center font-inter overflow-x-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1170&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#9d6b53] mb-10">
              Luxury Home Furnishings
            </h2>
            <p className="bg-gray-600 text-white px-4 py-10 rounded mt-4 max-w-2xl mx-auto">
              Authentic period pieces and reproductions to complete your vintage-inspired home
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {decorItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-100 transition duration-300"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="absolute top-2 left-2 bg-amber-800 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                    {item.tag}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-[#9d6b53] mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-[#9d6b53]">
                      {item.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      {renderStars(item.rating)}
                    </div>
                  </div>
                  <button className="w-full bg-amber-800 hover:bg-amber-900 text-white py-2 rounded transition flex items-center justify-center gap-2">
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#9d6b53] hover:bg-amber-900 text-white px-6 py-3 rounded font-medium transition">
              Browse All Decor <FaArrowRight className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

HomeDecorSection.displayName = "HomeDecorSection";

export default HomeDecorSection;
