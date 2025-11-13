"use client";
import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Joseph Sam",
    role: "Customer",
    image: "/review1.png",
    text: `“Marvel Auto Repair is more than just a workshop, it feels like a professional service hub. The facility is clean, modern, and equipped with the latest diagnostic tools, which gave me confidence in their work. The staff explained every detail clearly, and I could actually see the well organized bays and advanced equipment being used on my car. I left knowing my vehicle was in the best hands.”`,
  },
  {
    name: "Johanna Davis",
    role: "Customer",
    image: "/review2.png",
    text: `“Marvel Auto Repair provided top-notch service. The team was friendly and professional.”`,
  },
  {
    name: "John D",
    role: "Customer",
    image: "/review1.png",
    text: `“Very satisfied with the service quality and transparency. Highly recommend!”`,
  },
];

export default function TestimonialsAndContact() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-10 text-left text-gray-300">
          What Our Customers Say
        </h2>

        {/* Testimonial Text */}
        <p className="max-w-5xl mx-auto text-gray-200 leading-relaxed text-lg md:text-2xl mb-8 text-center font-normal px-2">
          {testimonials[active].text}
        </p>

        {/* Stars */}
        <div className="flex justify-center mb-6">
          <div className="flex text-gray-300 space-x-1 text-3xl md:text-4xl">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 mt-10 flex-wrap">
          {testimonials.map((t, i) => {
            const isActive = active === i;
            const tilt =
              i === 0 ? "-rotate-3" : i === 2 ? "rotate-3" : "rotate-0";
            const zIndex = isActive ? "z-20" : "z-10";
            const scale = isActive ? "scale-105" : "scale-95";
            const bg = isActive ? "bg-yellow-400 text-black" : "bg-gray-800";
            const textColor = isActive ? "text-black" : "text-white";

            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative transition-all duration-500 ease-out transform 
                  ${tilt} ${scale} ${zIndex} hover:scale-105 hover:rotate-0 
                  rounded-xl shadow-lg flex flex-col items-center 
                  px-6 py-6 md:px-8 md:py-8 w-72 sm:w-64 md:w-72 ${bg}`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4
                  className={`font-semibold text-lg md:text-xl ${textColor} text-center`}
                >
                  {t.name}
                </h4>
                <div className="flex justify-center mt-2 text-yellow-400">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
