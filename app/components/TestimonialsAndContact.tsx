"use client";
import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Joseph Sam",
    role: "Customer",
    image: "/review1.png",
    text: `"Marvel Auto Repair is more than just a workshop, it feels like a professional service hub. The facility is clean, modern, and equipped with the latest diagnostic tools, which gave me confidence in their work. The staff explained every detail clearly, and I could actually see the well organized bays and advanced equipment being used on my car. I left knowing my vehicle was in the best hands."`,
  },
  {
    name: "Johanna Davis",
    role: "Customer",
    image: "/review2.png",
    text: `"Marvel Auto Repair provided top-notch service. The team was friendly and professional."`,
  },
  {
    name: "John D",
    role: "Customer",
    image: "/review1.png",
    text: `"Very satisfied with the service quality and transparency. Highly recommend!"`,
  },
];

export default function TestimonialsAndContact() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-18 md:py-26">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-10 text-gray-300 text-center">
          What Our Customers Say
        </h2>

        {/* Testimonial Text */}
        <p className="max-w-4xl mx-auto text-gray-200 leading-relaxed text-lg md:text-2xl mb-8 text-center font-normal px-2">
          {testimonials[active].text}
        </p>

        {/* Stars */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="flex text-gray-300 space-x-1 text-3xl md:text-4xl">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
        </div>
        
<div className="relative flex items-center justify-center gap-4 md:gap-6 mt-10 flex-wrap">
  {testimonials.map((t, i) => {
    const isActive = active === i;

    return (
      <button
        key={i}
        onClick={() => setActive(i)}
        className={`
          relative transition-all duration-300 ease-out transform
          flex items-center gap-4 md:gap-5
          px-6 py-2 md:px-10 md:py-1
          w-full sm:w-auto max-w-[320px] md:max-w-[380px] hover:scale-105 rounded-xl
          ${isActive ? "bg-yellow-400" : "bg-gray-700"}
          overflow-hidden   /* Critical: enables rounded corners */
        `}
        style={{
          clipPath: "polygon(0% 0%, 88% 0%, 100% 100%, 12% 100%)",
        }}
      >
        <div
          className={`
            w-full h-full flex items-center gap-4 md:gap-5
            px-6 py-4 md:px-8 md:py-5
            rounded-2xl
            ${isActive ? "bg-yellow-400" : "bg-gray-700"}
          `}
        >
          {/* Profile Image */}
          <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white">
            <Image
              src={t.image}
              alt={t.name}
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name & Stars */}
          <div className="flex flex-col items-start flex-1 min-w-0">
            <h4 className="font-semibold text-base md:text-lg truncate w-full text-left text-black">
              {t.name}
            </h4>
            <div className="flex mt-1 text-black text-sm md:text-2xl gap-1 md:gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
          </div>
        </div>
      </button>
    );
  })}
</div>
</div>
</section>
);
}