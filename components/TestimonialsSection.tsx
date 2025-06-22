'use client';

import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah J.',
    location: 'Chicago, USA',
    review:
      'Vestvale found us the perfect 1920s bungalow that had all the original charm but with modern updates. Their attention to detail is unmatched.',
    rating: 5,
    date: 'Feb 2024',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
  {
    id: 2,
    name: 'Michael T.',
    location: 'Boston, USA',
    review:
      'The vintage lighting and wallpaper we purchased transformed our apartment into a cozy, nostalgic retreat. Quality products and excellent service!',
    rating: 5,
    date: 'Jul 2023',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Emily R.',
    location: 'New York, USA',
    review:
      'As first-time buyers, we were nervous about purchasing an older home. Vestvale guided us through every step and found us our dream home.',
    rating: 4.5,
    date: 'Nov 2022',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

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

const TestimonialsSection = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-16 bg-[#17120F] text-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#9d6b53] mb-2">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-amber-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-amber-50 p-6 rounded-lg shadow-sm"
            >
              {/* Stars & Date */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-1">{renderStars(item.rating)}</div>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>

              {/* Quote */}
              <p className="italic text-gray-700 mb-6 flex items-start">
                <FaQuoteLeft className="text-amber-800 mr-2 text-lg mt-1" /> {item.review}
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="relative w-14 h-14 mr-4">
                  <div className="absolute inset-0 rounded-full bg-white p-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full border-2 border-[#9d6b53]"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#9d6b53]">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;
