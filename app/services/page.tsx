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
  {
    title: "Engine Diagnostics",
    image: "/ourservices1.jpg",
    desc: "We use advanced diagnostic tools to quickly identify and resolve engine problems, ensuring your car performs at its best and avoids costly breakdowns.",
  },
  {
    title: "Brake Service",
    image: "/ourservices1.jpg",
    desc: "Your safety is our top priority. We offer expert brake inspections, pad replacements, and fluid checks to ensure confident stopping power every time.",
  },
  {
    title: "Oil Change & Maintenance",
    image: "/ourservices1.jpg",
    desc: "Keep your engine healthy and efficient with our high-quality oil changes, filter replacements, and routine maintenance services.",
  },
  {
    title: "Heating & Cooling",
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
      <section className="relative">
        <Image
          src="/ourservice.png"
          alt="Our Services Banner"
          width={1920}
          height={800}
          className="w-full h-[500px] object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-zinc-900 bg-opacity-70 px-8 py-6 rounded-xl text-center max-w-lg">
            <h2 className="text-5xl font-bold mb-2">
              <span className="text-gray-300">Our </span>
              <span className="text-white">Services</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              From Repairs to Maintenance – We’ve Got You Covered
            </p>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT SECTION ===== */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12">
        {/* LEFT: Image + Description */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-semibold mb-6">{active.title}</h3>

              <Image
                ref={imageRef}
                src={active.image}
                alt={active.title}
                width={700}
                height={500}
                className="rounded-md mb-8 w-full object-cover"
              />

              <p className="text-gray-300 leading-relaxed max-w-xl">
                {active.desc} —{" "}
                <span className="text-gray-300 cursor-pointer hover:underline ml-1">
                  View more
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: Category List aligned to image height */}
        <aside
          className="bg-neutral-900 rounded-md p-10 overflow-y-auto"
          style={{ height: imageHeight || "auto" }}
        >
          <ul className="space-y-5">
            {servicesData.map((service, index) => (
              <li
                key={index}
                onClick={() => setActiveService(index)}
                className={`text-md cursor-pointer transition hover:text-yellow-400 ${
                  index === activeService
                    // ? "text-yellow-400 font-medium"
                    // : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* ===== CATEGORY PILLS SECTION (BOTTOM FULL WIDTH) ===== */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {servicesData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-6 py-2 rounded-full border text-sm transition ${
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
