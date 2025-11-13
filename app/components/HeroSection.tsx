"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offers = [
  { id: 1, image: "/offer.jpg" },
  { id: 2, image: "/offer.jpg" },
  { id: 3, image: "/offer.jpg" },
  { id: 4, image: "/offer.jpg" },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <section className="relative bg-black text-white overflow-hidden font-poppins pt-[100px] min-h-screen flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/banner_img.jpg"
            alt="Car background"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

        {/* Content Section */}
        <div
          className="
            relative z-20 
            max-w-8xl mx-auto px-6 sm:px-10 md:px-16 lg:px-32
            flex flex-col lg:flex-row 
            items-center lg:items-start 
            justify-between
            gap-10 lg:gap-20
          "
        >
          {/* ==== Text Section ==== */}
          <div className="text-center lg:text-left lg:w-1/2 mt-[-40px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-relaxed">
              RELIABLE AUTO REPAIR
              <br />
              <span className="text-gray-300 font-medium text-2xl sm:text-3xl md:text-4xl">
                YOU CAN{" "}
                <span className="text-yellow-400 font-semibold">TRUST</span>
              </span>
            </h1>

            <p className="text-gray-300 mt-5 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg">
              We keep your car running smoothly with expert service, honest
              pricing, and fast turnaround.
            </p>
          </div>

          {/* ==== Offer Card ==== */}
          <AnimatePresence>
            {visible && (
              <motion.div
                key={offers[active].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                className="relative w-full sm:w-[340px] md:w-[380px] lg:w-[360px] mt-10 lg:mt-0"
              >
                <div className="relative rounded-3xl overflow-hidden h-[400px] sm:h-[440px] md:h-[480px] shadow-2xl border border-yellow-400">
                  <Image
                    src={offers[active].image}
                    alt="Offer"
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => setVisible(false)}
                    className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full w-7 h-7 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  {offers.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setActive(i)}
                      animate={{
                        width: i === active ? 24 : 8,
                        backgroundColor: i === active ? "#FACC15" : "#9CA3AF",
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-2 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ==== Brand Logos Section ==== */}
      <section
        className="
          py-20 bg-black opacity-90 z-20 
          flex flex-wrap justify-center items-center 
          gap-10 sm:gap-14 md:gap-20 lg:gap-28 
          px-6
        "
      >
        {[
          "mercedes(1).png",
          "audi-removebg-preview.png",
          "bmw-logo.png",
          "rolls-royce-logo-removebg-preview.png",
          "jaguar-removebg-preview.png",
          "lexus-removebg-preview.png",
          "porsche-Logo.png",
        ].map((logo, idx) => (
          <div key={idx} className="w-20 sm:w-24 md:w-28 lg:w-32 flex justify-center">
            <Image
              src={`/${logo}`}
              alt="brand"
              width={90}
              height={90}
              className="grayscale hover:grayscale-0 transition duration-300 object-contain"
            />
          </div>
        ))}
      </section>
    </>
  );
}
