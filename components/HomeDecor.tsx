"use client";

import React, { useState } from "react";

const HomeDecor = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((_, ref) => {

  const decorItems = [
    {
      id: 1,
      tag: "All Items",
      cotent: [
        { id: 1,
          image: "/image-01.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        { 
          id: 2,
          image: "/image-06.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {
          id: 3,
          image: "/image-08.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        { id: 4,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        { 
          id: 5,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        { id: 6,
          image: "/image-01.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        { 
          id: 7,
          image: "/image-01.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
      ],
    },
    {
      id: 2,
      tag: "Italy",
      cotent: [
        {

          id: 1,
          image: "image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {

          id: 2,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {

          id: 3,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {
          id: 4,
          image: "/image-01.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
      ],
    },
    {
      id: 3,
      tag: "Russia",
      cotent: [
        {
          id: 1,
          image: "image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {
          id: 2,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {
          id: 3,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {
          id: 4,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
      ],
    },
    {
      id: 4,
      tag: "Morroco",
      cotent: [
        {
          id: 1,
          image: "image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {
          id: 2,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {
          id: 3,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {
          id: 4,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
      ],
    },
    {
      id: 5,
      tag: "China",
      cotent: [
        {
          id: 1,
          image: "image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {
          id: 2,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {

          id: 3,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
        {
          id: 4,
          image: "/image-05.svg",
          title: "Vintage Edison Bulb",
          desc: "Set of 3 - Warm bulb",
        },
      ],
    },
  ];
  const [active, setActive] = useState(decorItems[0].id);

  

  return (
    <section ref={ref} id="homedecor"  className="container md:w-10/12 mx-auto font-inter overflow-x-hidden">
      <div className="py-4">
        <h2 className="font-medium text-5xl text-white text-center">Interior Decors</h2>
        <p className="font-normal text-lg text-center text-white">
          Complete your vintage home with our curated selection of classic home
          decor
        </p>
      </div>
      <div className="flex flex-wrap justify-center mb-6">
        {decorItems.map((tabs) => (
          <button
            key={tabs.id}
            onClick={() => setActive(tabs.id)}
            className={`px-4 py-2  rounded-full m-2 cursor-pointer ${
              active === tabs.id
                ? "bg-[#D3BD9E] text-black"
                : "text-black bg-white"
            }`}
          >
            {tabs.tag}
          </button>
        ))}
      </div>

      <div>
        {active ? (
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center mb-10">
            {decorItems
              .find((item) => item.id === active)
              ?.cotent.map((content, index) => (
                <div key={index} className="p-4 rounded-lg shadow-md bg-[#17120F]">
                  <div className="mb-4 w-full">
                    <div className="w-full h-48 mx-auto overflow-hidden rounded">
                      <img
                        src={content.image || "https://via.placeholder.com/150"}
                        alt={content.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg text-white font-semibold mb-2">
                    {content.title}
                  </h3>
                  <p className="text-gray-400">{content.desc}</p>
                </div>
              ))}
          </div>
        ) : (
          null
        )}
      </div>
    </section>
  );
});

HomeDecor.displayName = "homedecor";

export default HomeDecor;
