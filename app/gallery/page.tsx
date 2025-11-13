"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const servicesData = {
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
  const images = servicesData[activeService];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ===== HEADER SECTION ===== */}
      <section className="relative">
        <Image
          src="/ourservice.png"
          alt="Our Services Banner"
          width={1920}
          height={1000}
          className="w-full h-[500px] object-cover opacity-70"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-6 text-center">
          <div className="bg-zinc-900 bg-opacity-70 px-10 py-8 rounded-xl max-w-6xl">
            <h2 className="text-5xl font-bold mb-2">
              <span className="text-gray-300 font-normal">Our </span>
              <span className="text-white">Gallery</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              A glimpse of dedication, precision and passion in action
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICE FILTER BUTTONS ===== */}
      <section className="bg-black py-12 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {Object.keys(servicesData).map((title) => (
            <button
              key={title}
              onClick={() => setActiveService(title)}
              className={`px-6 py-2 rounded-full border text-sm transition ${
                activeService === title
                  ? "bg-yellow-400 text-black font-medium border-yellow-400"
                  : "border-gray-500 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
              }`}
            >
              {title}
            </button>
          ))}
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