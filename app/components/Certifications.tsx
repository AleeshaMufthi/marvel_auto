"use client";
import React, { useState } from "react";
import { Wrench, Battery, Droplets, Car, Gauge, Disc } from "lucide-react";

const certificates = [
  {
    icon: "/service1.png",
    title: "ASE Certified Technicians Canada",
    desc: "Our certified mechanics are trained and tested to deliver accurate diagnostics, reliable repairs, and expert maintenance for all types of vehicles.",
  },
  {
    icon: "/service1.png",
    title: "Red Seal Certified Interprovincial Standard, Canada",
    desc: "Our technicians are Red Seal Certified, which means they have met national standards through extensive training, testing, and practical experience.",
  },
  {
    icon: "/service1.png",
    title: "ASE Certified Technicians Canada",
    desc: "Our certified mechanics are trained and tested to deliver accurate diagnostics, reliable repairs, and expert maintenance for all types of vehicles.",
  },
  {
    icon: "/service1.png",
    title: "Red Seal Certified Interprovincial Standard, Canada",
    desc: "High-quality oil and filter replacement to keep your car running efficiently and extend engine life.",
  },
  {
    icon: "/service1.png",
    title: "ASE Certified Technicians Canada",
    desc: "Our certified mechanics are trained and tested to deliver accurate diagnostics, reliable repairs, and expert maintenance for all types of vehicles.",
  },
  {
    icon: "/service1.png",
    title: "Red Seal Certified Interprovincial Standard, Canada",
    desc: "Professional tire installation, balancing, and wheel alignment for maximum grip and durability.",
  },
];

const Certifications: React.FC = () => {
  const [active, setActive] = useState(0);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(certificates.length / cardsPerPage);
  const visibleCards = certificates.slice(active * cardsPerPage, active * cardsPerPage + cardsPerPage);

  return (
    <section className="bg-black text-center py-20 sm:py-28 px-4 sm:px-8 md:px-12 font-poppins">
      {/* ===== Header ===== */}
      <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 sm:mb-10">
        Certifications & Achievements
      </h2>
      <p className="text-white mb-16 sm:mb-24 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
        At <span className="font-semibold">Marvel Auto Repair</span>, we take pride in our industry-recognized achievements and certifications that reflect our dedication to quality, safety, and customer trust.
      </p>

      {/* ===== Cards Section ===== */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-20 max-w-7xl mx-auto">
        {visibleCards.map((certificate, idx) => (
          <div
            key={idx}
            className="bg-white hover:bg-gray-200 rounded-xl shadow-md transition-all duration-300 
                       w-[280px] sm:w-[340px] md:w-[360px] lg:w-[360px] 
                       h-auto sm:h-[480px] md:h-[520px] lg:h-[550px] 
                       p-6 sm:p-8 flex flex-col items-center text-center"
          >

            <div className="flex-1 flex items-center justify-center mb-4">
              <img
                src={certificate.icon}
                alt={certificate.title}
                className="w-20 h-20 object-contain"
              />
            </div>


            {/* Title Section */}
            <div className="flex-1 flex items-center justify-center mb-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black px-2">
                {certificate.title}
              </h3>
            </div>

            {/* Description Section */}
            <div className="flex-[1.5] flex items-start justify-center">
              <p className="text-md sm:text-base md:text-xl text-black font-normal leading-relaxed text-center">
                {certificate.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Dots Section ===== */}
      <div className="flex justify-center mt-8 space-x-3">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "bg-yellow-400 w-8" : "bg-gray-400 w-3"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
