'use client';

import React from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-16 bg-[#9d6b53] text-white" id="newsletter" 
     style={{ backgroundImage: 'url(/image-07.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center"
      >
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Subscribe to our newsletter to get updates on our latest offers</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
         Get 20% off your first purchase when you subscribe to our newsletter!
        </p>

        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow p-3 bg-white rounded-l rounded text-[#9d6b53] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#D3BD9E] hover:bg-[#D3BD9E]/80 px-6 py-3 text-black font-semibold rounded-2xl font-medium transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-white mt-4 opacity-80">We respect your privacy. Unsubscribe at any time.</p>
      </motion.div>
    </section>
  );
});

NewsletterSection.displayName = 'NewsletterSection';

export default NewsletterSection;
