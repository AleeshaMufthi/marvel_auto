"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Battery, Droplets, Car, Gauge, Disc } from "lucide-react";

const services = [
  {
    icon: <Car className="w-14 h-14 mx-auto text-black" />,
    title: "General Auto Repair",
    desc: "From minor tune-ups to major repairs, our expert technicians handle all makes and models with precision and care.",
  },
  {
    icon: <Gauge className="w-14 h-14 mx-auto text-black" />,
    title: "Engine Diagnostics",
    desc: "Accurate and efficient engine diagnostics to detect and fix any issue before it becomes a major repair.",
  },
  {
    icon: <Battery className="w-14 h-14 mx-auto text-black" />,
    title: "Battery & Electrical",
    desc: "Comprehensive testing and replacement for batteries, alternators, and electrical systems.",
  },
  {
    icon: <Droplets className="w-14 h-14 mx-auto text-black" />,
    title: "Oil Change & Maintenance",
    desc: "High-quality oil and filter replacement to keep your car running efficiently and extend engine life.",
  },
  {
    icon: <Wrench className="w-14 h-14 mx-auto text-black" />,
    title: "Brake Service",
    desc: "Reliable brake inspections, repairs, and replacements to ensure your safety on the road.",
  },
  {
    icon: <Disc className="w-14 h-14 mx-auto text-black" />,
    title: "Tire Service",
    desc: "Professional tire installation, balancing, and wheel alignment for maximum grip and durability.",
  },
];

const OurServices: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-center py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* ===== Title Section ===== */}
      <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 sm:mb-10">
        Our Services
      </h2>
      <p className="text-white mb-16 sm:mb-24 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
        From routine maintenance to major repairs, we’ve got you covered.
      </p>

      {/* ===== Services Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="relative rounded-xl bg-white overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl"
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)} // mobile toggle
          >
            <AnimatePresence mode="wait">
              {activeIndex === idx ? (
                // ===== Expanded View =====
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 sm:p-8 min-h-[260px] flex flex-col justify-start items-center bg-white"
                >
                  <div className="mb-3 sm:mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-1 sm:px-3">
                    {service.desc}
                  </p>
                </motion.div>
              ) : (
                // ===== Default (Compact) View =====
                <motion.div
                  key="default"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col justify-between h-[240px] sm:h-[260px]"
                >
                  <div className="p-6 sm:p-8">{service.icon}</div>
                  <div className="bg-yellow-400 py-4 sm:py-5 px-3 text-black text-center">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base mt-1 font-medium hover:underline">
                      Learn More
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
