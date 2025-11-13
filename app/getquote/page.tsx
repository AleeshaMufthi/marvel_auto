"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

export default function GetQuotePage() {
  const [activeTab, setActiveTab] = useState<"car" | "tyre">("car");
  const [tyreSubTab, setTyreSubTab] = useState<"brand" | "size">("brand");
  const [showRear, setShowRear] = useState(false);

  return (
    <>
      {/* Header Section */}
      <section className="relative">
        <Image
          src="/ourservice.png"
          alt="Our Services Banner"
          width={1920}
          height={800}
          className="w-full h-[600px] object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-zinc-900 bg-opacity-70 px-8 py-6 rounded-xl text-center max-w-4xl">
            <h2 className="text-5xl font-bold mb-2">
              <span className="text-gray-300 font-normal">Get Your </span>
              <span className="text-white">Quote</span>
            </h2>
            <p className="text-gray-200 max-w-3xl text-sm md:text-base">
              Get an instant quote for your next car service or tire purchase. Fill out the form
              below and our team will get back to you with accurate pricing and expert recommendations.
              <br />
              Fast, transparent, and hassle-free.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <div className="bg-white text-black min-h-screen">
        {/* Main Tabs */}
        <div className="flex justify-evenly mt-0 border-b border-gray-300">
          <button
            className={`px-8 py-3 font-medium ${
              activeTab === "car"
                ? "text-gray-700 font-semibold text-2xl border-b-4 border-yellow-400"
                : "text-gray-700 font-semibold text-2xl"
            }`}
            onClick={() => setActiveTab("car")}
          >
            Car Service Quote
          </button>
          <button
            className={`px-8 py-3 font-medium ${
              activeTab === "tyre"
                ? "text-gray-700 font-semibold text-2xl border-b-4 border-yellow-400"
                : "text-gray-700 font-semibold text-2xl"
            }`}
            onClick={() => setActiveTab("tyre")}
          >
            Tyre Purchase Quote
          </button>
        </div>

        <div className="max-w-6xl mx-auto py-12 px-6">
          {/* ==================== CAR SERVICE FORM ==================== */}
          {activeTab === "car" && (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:col-span-2">
                <div className="flex-1">
                  <label className="block text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-2">Phone Number</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">VIN/Plate Number</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Details about the Quote</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Upload photo or document</label>
                <div className="w-16 h-16 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:border-yellow-400">
                  <Plus className="text-gray-400" size={28} />
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-full hover:bg-yellow-300 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {/* ==================== TYRE PURCHASE FORM ==================== */}
          {activeTab === "tyre" && (
            <>
              {/* Common Fields for Tyre Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone Number</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* Sub Tabs for Tyre */}
              <div className="flex border-b border-gray-300 mt-4 mb-8">
                <button
                  className={`px-6 py-2 font-medium ${
                    tyreSubTab === "brand"
                      ? "border-b-4 border-yellow-400 text-black"
                      : "text-gray-400"
                  }`}
                  onClick={() => setTyreSubTab("brand")}
                >
                  Vehicle Brands
                </button>
                <button
                  className={`px-6 py-2 font-medium ${
                    tyreSubTab === "size"
                      ? "border-b-4 border-yellow-400 text-black"
                      : "text-gray-400"
                  }`}
                  onClick={() => setTyreSubTab("size")}
                >
                  Tyre Sizes
                </button>
              </div>

              {/* BRAND SECTION */}
              {tyreSubTab === "brand" && (
                <form className="space-y-8">
                  <h2 className="text-lg font-medium text-gray-700">Search Tyres By</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <select className="border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400">
                      <option>Vehicle Brand</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400">
                      <option>Tyre Size</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-full hover:bg-yellow-300 transition"
                  >
                    Submit
                  </button>
                </form>
              )}

              {/* TYRE SIZE SECTION */}
              {tyreSubTab === "size" && (
                <form className="space-y-8">
                  <h2 className="text-lg font-medium text-gray-700">Search Tyres By</h2>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">
                      {showRear ? (
                        <span
                          className="cursor-pointer underline"
                          onClick={() => setShowRear(false)}
                        >
                          Hide Rear Sizes
                        </span>
                      ) : (
                        <span
                          className="cursor-pointer underline"
                          onClick={() => setShowRear(true)}
                        >
                          Add Different Rear Sizes
                        </span>
                      )}
                    </p>
                  </div>

                  <div
                    className={`grid ${
                      showRear ? "md:grid-cols-2" : "grid-cols-1"
                    } gap-10`}
                  >
                    {/* Front Tyres */}
                    <div>
                      <h3 className="font-medium mb-4">Front Tyres</h3>
                      {["Width", "Profile", "Wheel Size", "Season"].map((label) => (
                        <div key={label} className="mb-4">
                          <label className="block text-sm mb-1">{label}</label>
                          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400">
                            <option>Select</option>
                          </select>
                        </div>
                      ))}
                    </div>

                    {/* Rear Tyres */}
                    {showRear && (
                      <div>
                        <h3 className="font-medium mb-4">Back Tyres</h3>
                        {["Width", "Profile", "Wheel Size", "Season"].map((label) => (
                          <div key={label} className="mb-4">
                            <label className="block text-sm mb-1">{label}</label>
                            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400">
                              <option>Select</option>
                            </select>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <Image
                      src="/tyre.jpg"
                      alt="Tyre Diagram"
                      width={400}
                      height={300}
                      className="object-contain"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-full hover:bg-yellow-300 transition"
                  >
                    Submit
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
