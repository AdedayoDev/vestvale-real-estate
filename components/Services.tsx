import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const serviceItem = [
  {
    id: 1,
    image: "/house-icon.svg",
    heading: "Luxury Real Estate Development",
    paragraph:
      "We design and build premium duplexes and estate homes with custom finishes, modern amenities, and timeless exteriors.",
  },
  {
    id: 2,
    image: "/crane-icon.svg",
    heading: "Property Management",
    paragraph:
      "Comprehensive property management services to ensure your investment is well maintained and profitable.",
  },
  {
    id: 3,
    image: "/window-icon.svg",
    heading: "Interior Design",
    paragraph:
      "Transform your space with our expert interior design and furnishing solutions tailored to your taste.",
  },
  {
    id: 4,
    image: "/landscape-icon.svg",
    heading: "Consultancy",
    paragraph:
      "Get expert advice on real estate investment, market trends, and property acquisition.",
  },
  {
    id: 5,
    image: "/smart-home-icon.svg",
    heading: "Renovation & Restoration",
    paragraph:
      "We restore and renovate properties to preserve their charm while adding modern comfort.",
  },
  {
    id: 6,
    image: "/construction-icon.svg",
    heading: "Legal Advisory",
    paragraph:
      "Our legal team ensures all your real estate transactions are secure and compliant.",
  },
  {
    id: 7,
    image: "/chair-icon.svg",
    heading: "Facility Management",
    paragraph:
      "We provide ongoing facility management for residential and commercial properties.",
  },
  {
    id: 8,
    image: "/property-icon.svg",
    heading: "Custom Builds",
    paragraph:
      "Bring your dream home to life with our custom building solutions.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, type: "spring" as const },
  }),
};

const Services = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="relative bg-cover bg-center w-full min-h-screen py-20"
      style={{
        backgroundImage: "url('/image-11.svg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItem.map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-white/10 shadow-lg rounded-xl p-8 flex flex-col items-center text-center backdrop-blur-md hover:scale-105 transition-transform duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="mb-4">
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#D3BD9E] mb-2">
                {item.heading}
              </h3>
              <p className="text-white/80 text-sm">{item.paragraph}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";

export default Services;
