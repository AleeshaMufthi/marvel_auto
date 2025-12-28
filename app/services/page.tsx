"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    title: "General Auto Repair",
    image: "/ourservices1.jpg",
    desc: "From minor tune-ups to major repairs, our technicians handle all makes and models with precision and care. We ensure your vehicle runs safely and smoothly — no matter the challenge.",
  },
  // {
  //   title: "Engine Diagnostics",
  //   image: "/ourservices1.jpg",
  //   desc: "We use advanced diagnostic tools to quickly identify and resolve engine problems, ensuring your car performs at its best and avoids costly breakdowns.",
  // },
    {
    title: "Tire Sales & Services",
    image: "/ourservices1.jpg",
    desc: "Reliable tire sales with professional installation, balancing, and alignment for safe, long-lasting traction.",
  },
  {
    title: "Drive-On Safety & Emission Inspections",
    image: "/safety.png",
    desc: "Thorough safety and emission inspections to ensure your vehicle meets regulatory standards and delivers safe, eco-friendly performance on every drive.",
  },
  {
    title: "Oil Change & Periodic Maintenance",
    image: "/ourservices1.jpg",
    desc: "Keep your engine healthy and efficient with our high-quality oil changes, filter replacements, and routine maintenance services.",
  },
  {
    title: "Heating and Cooling",
    image: "/ourservices1.jpg",
    desc: "Your engine is the heart of your vehicle, and keeping it in top condition ensures smooth performance and long-lasting reliability. Our expert technicians provide complete engine diagnostics, repairs, and maintenance",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(4); 
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);

  const active = servicesData[activeService];

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }
  }, [activeService]);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ===== HEADER SECTION ===== */}
      <section className="relative w-full">
  <Image
    src="/ourservice.png"
    alt="Our Services Banner"
    width={1920}
    height={800}
    className="
      w-full 
      h-[360px] 
      sm:h-[350px] 
      md:h-[450px] 
      lg:h-[550px] 
      object-cover 
      opacity-70
    "
  />

  <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
    <div
      className="
        bg-zinc-800 bg-opacity-80 
        px-4 py-4 
        sm:px-10 sm:py-8 
        md:px-16 md:py-10 
        rounded-3xl 
        text-center 
        max-w-xl sm:max-w-2xl
      "
    >
      <h2
        className="
          text-3xl 
          sm:text-4xl 
          md:text-5xl 
          lg:text-6xl 
          font-bold 
          mb-2
        "
      >
        <span className="font-normal">Our </span>
        <span className="text-white">Services</span>
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-300">
        From Repairs to Maintenance – We’ve Got You Covered
      </p>
    </div>
  </div>
</section>


      {/* ===== MAIN CONTENT SECTION ===== */}
{/* ===== MAIN CONTENT SECTION ===== */}
<section
  className="
    max-w-6xl 
    mx-auto 
    py-28 
    px-4                   /* Mobile padding */
    grid 
    grid-cols-1 
    lg:grid-cols-[1.5fr_0.9fr] 
    gap-10 
    lg:gap-16
  "
>
  {/* LEFT */}
  <div className="text-center lg:text-left">
    <AnimatePresence mode="wait">
      <motion.div
        key={active.title}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
      >
        <h3
          className="
            text-3xl 
            sm:text-4xl 
            lg:text-5xl 
            font-semibold 
            mb-6 
            lg:mb-10
          "
        >
          {active.title}
        </h3>

        <div className="flex justify-center lg:block">
          <Image
            ref={imageRef}
            src={active.image}
            alt={active.title}
            width={700}
            height={500}
            className="
              w-[85%]           /* Smaller image on mobile */
              sm:w-[90%]
              lg:w-full         /* Desktop remains full */
              object-cover
              mb-10 
              lg:mb-16
              rounded-md
            "
          />
        </div>

        <p
          className="
            text-gray-300 
            text-base 
            sm:text-lg 
            lg:text-xl 
            leading-relaxed 
            max-w-xl 
            mx-auto           /* Center text on mobile */
            lg:mx-0           /* Normal on desktop */
            px-3              /* LR spacing mobile */
            lg:px-0
            text-center 
            lg:text-left
          "
        >
          {active.desc} —{" "}
          <span className="text-gray-300 cursor-pointer hover:underline ml-1 font-semibold">
            View more
          </span>
        </p>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* RIGHT — Category List */}
  <aside
    className="
      bg-neutral-800 
      p-6 
      sm:p-8 
      lg:p-10 
      mt-10 
      lg:mt-20 
      rounded-md 
      w-[85%]            /* Narrower on mobile */
      sm:w-[90%]
      lg:w-full          /* Normal on desktop */
      mx-auto            /* Center on mobile */
      lg:mx-0
      max-h-[300px] 
      sm:max-h-[400px] 
      lg:max-h-none 
      overflow-y-auto
    "
    style={{ height: imageHeight || "auto" }}
  >
    <ul className="space-y-3 sm:space-y-4 lg:space-y-5 text-center lg:text-left">
      {servicesData.map((service, index) => (
        <li
          key={index}
          onClick={() => setActiveService(index)}
          className={`
            text-lg 
            sm:text-xl 
            cursor-pointer 
            transition 
            hover:text-yellow-400
            ${index === activeService}
          `}
        >
          {service.title}
        </li>
      ))}
    </ul>
  </aside>
</section>


      {/* ===== CATEGORY PILLS SECTION (BOTTOM FULL WIDTH) ===== */}
      <section className="mt-0 mb-20">
        <div className="max-w-8xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {servicesData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-6 py-2 rounded-full border text-lg transition ${
                index === activeService
                  ? "bg-yellow-400 text-black font-medium border-yellow-400"
                  : "border-gray-500 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
