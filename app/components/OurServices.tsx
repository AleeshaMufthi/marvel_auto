"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Battery, Droplets, Car, Gauge, Disc } from "lucide-react";

const services = [
  {
    icon: <Car className="w-14 h-14 mx-auto text-black" />,
    title: "General Auto Repair",
    desc: "From minor tune-ups to major repairs, our expert technicians handle all makes and models with precision and care.",
    image: "/service1.png",
  },
  {
    icon: <Gauge className="w-14 h-14 mx-auto text-black" />,
    title: "Engine Diagnostics",
    desc: "Accurate and efficient engine diagnostics to detect and fix any issue before it becomes a major repair.",
    image: "/service2.png",
  },
  {
    icon: <Battery className="w-14 h-14 mx-auto text-black" />,
    title: "Battery & Electrical",
    desc: "Comprehensive testing and replacement for batteries, alternators, and electrical systems.",
    image: "/service3.png",
  },
  {
    icon: <Droplets className="w-14 h-14 mx-auto text-black" />,
    title: "Oil Change & Periodic Maintenance",
    desc: "High-quality oil and filter replacement to keep your car running efficiently and extend engine life.",
    image: "/service4.png",
  },
  {
    icon: <Wrench className="w-14 h-14 mx-auto text-black" />,
    title: "Drive-On Safety & Emission Inspections",
    desc: "Reliable brake inspections, repairs, and replacements to ensure your safety on the road.",
    image: "/service5.png",
  },
  {
    icon: <Disc className="w-14 h-14 mx-auto text-black" />,
    title: "Tire Sales and Service",
    desc: "Reliable tire sales with professional installation, balancing, and alignment for safe, long-lasting traction.",
    image: "/service6.png",
  },
];

const OurServices: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-center py-18 sm:py-26 px-4 sm:px-8 md:px-12 lg:px-20">
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
      {activeIndex !== idx ? (
        // ================= NORMAL VIEW (NOW WHITE CARD WITH IMAGE + TEXT) =================
        <motion.div
          key="normal"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="p-6 sm:p-8 min-h-[350px] flex flex-col items-center text-center bg-gray-300"
        >
          {/* Replace with your actual image */}
          <div className="w-full mb-8 flex justify-center items-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 object-cover rounded-lg content-center"
            />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-black mb-8">
            {service.title}
          </h3>

          <p className="text-black text-xl sm:text-lg leading-relaxed">
            {service.desc}
          </p>
        </motion.div>
      ) : (
        // ================= HOVER VIEW (YOUR OLD DEFAULT COMPACT VIEW) =================
        <motion.div
          key="hover"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col justify-between h-[280px] sm:h-[280px]"
        >
          <div className="w-full mb-8 flex justify-center items-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-40 h-40 object-cover rounded-lg content-center"
            />
          </div>

          <div className="bg-yellow-400 py-6 md:py-16 sm:py-5 text-black text-center">
            <h3 className="text-lg sm:text-xl font-semibold">
              {service.title}
            </h3>
            {/* <p className="text-sm sm:text-base mt-1 font-medium">
              Learn More
            </p> */}
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
