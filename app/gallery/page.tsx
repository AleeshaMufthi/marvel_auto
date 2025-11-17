"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const servicesData = {
    "All": [
    "/VanRepair.jpg",
    "/toolkit.jpg",
    "/engine detail.png",
    "/classic_car.png",
    "/workshop.jpg",
    "/gallery1.jpg",
    "/Team.png",
    "/engine detail.png",
  ],
  "General Auto Repair": [
    "/gallery1.jpg",
    "/Team.png",
    "/engine detail.png",
    "/toolkit.jpg",
    "/engine detail.png",
    "/VanRepair.jpg",
    "/classic_car.png",
    "/workshop.jpg",
  ],
  "Engine Diagnostics": [
    "/engine detail.png",
    "/toolkit.jpg",
    "/gallery1.jpg",
    "/VanRepair.jpg",
    "/classic_car.png",
    "/workshop.jpg",
    "/Team.png",
    "/engine detail.png",
  ],
  "Brake Service": [
    "/Team.png",
    "/classic_car.png",
    "/engine detail.png",
    "/gallery1.jpg",
    "/toolkit.jpg",
    "/VanRepair.jpg",
    "/workshop.jpg",
    "/engine detail.png",
  ],
  "Oil Change & Maintenance": [
    "/VanRepair.jpg",
    "/toolkit.jpg",
    "/engine detail.png",
    "/classic_car.png",
    "/workshop.jpg",
    "/gallery1.jpg",
    "/Team.png",
    "/engine detail.png",
  ],
};

export default function ServicesPage() {

  const [activeService, setActiveService] = useState("General Auto Repair");
  const images = servicesData[activeService as keyof typeof servicesData];


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
        <span className="text-white">Gallery</span>
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-300">
        A Glimpse of dedication, precision, and passion in action.
      </p>
    </div>
  </div>
</section>

{/* ===== SERVICE FILTER BUTTONS WITH ARROWS BELOW (RIGHT SIDE) ===== */}
<section className="bg-black py-12 border-b border-gray-800">
  <div className="max-w-6xl mx-auto px-6">

    {/* ===== SLIDER BUTTONS (TOP) ===== */}
    <div
      id="service-slider"
      className="flex gap-4 overflow-x-auto no-scrollbar md:scrollbar-thin
 scroll-smooth pb-4"
    >
      {Object.keys(servicesData).map((title) => (
        <button
          key={title}
          onClick={() => setActiveService(title)}
          className={`whitespace-nowrap px-6 py-4 rounded-full border text-lg transition ${
            activeService === title
              ? "bg-yellow-400 text-black font-medium border-yellow-400"
              : "border-gray-500 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
          }`}
        >
          {title}
        </button>
      ))}
    </div>

    {/* ===== ARROWS BELOW (RIGHT SIDE) ===== */}
    <div className="flex justify-end gap-14 mt-2">

      {/* LEFT ARROW */}
      <button
        onClick={() => {
          document.getElementById("service-slider")?.scrollBy({
            left: -200,
            behavior: "smooth",
          });
        }}
        className="bg-black/70 border border-gray-600 hover:border-yellow-400 
                   p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => {
          document.getElementById("service-slider")?.scrollBy({
            left: 200,
            behavior: "smooth",
          });
        }}
        className="bg-black/70 border border-gray-600 hover:border-yellow-400 
                   p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  </div>
</section>




      {/* ===== FIXED LAYOUT GALLERY ===== */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="relative h-64 w-full">
              <Image src={images[0]} alt="Gallery 1" fill className="object-cover" />
            </div>
            <div className="relative h-64 w-full">
              <Image src={images[1]} alt="Gallery 2" fill className="object-cover" />
            </div>
            <div className="relative h-64 w-full">
              <Image src={images[2]} alt="Gallery 3" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md w-16 h-16 flex items-center justify-center rounded-full hover:bg-white/40 transition">
                  <Play className="text-white w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="relative h-48 w-full">
              <Image src={images[3]} alt="Gallery 4" fill className="object-cover" />
            </div>
            <div className="relative h-72 w-full">
              <Image src={images[4]} alt="Gallery 5" fill className="object-cover" />
            </div>
            <div className="relative h-[300px] w-full">
              <Image src={images[5]} alt="Gallery 6" fill className="object-cover" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[300px] w-full">
              <Image src={images[6]} alt="Gallery 7" fill className="object-cover" />
            </div>
            <div className="relative h-[490px] w-full">
              <Image src={images[7]} alt="Gallery 8" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}