"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

export default function GetQuotePage() {
  const [carForm, setCarForm] = useState({
    name: "",
    email: "",
    phone: "",
    vin: "",
    subject: "",
    details: "",
    file: null as File | null | undefined,
  });

  const [tyreForm, setTyreForm] = useState({
    name: "",
    email: "",
    phone: "",
    frontWidth: "",
    frontProfile: "",
    frontWheel: "",
    frontSeason: "",
    rearWidth: "",
    rearProfile: "",
    rearWheel: "",
    rearSeason: "",
  });

  const [activeTab, setActiveTab] = useState<"car" | "tyre">("car");
  const [showRear, setShowRear] = useState(false);

  // ---------------- CAR FORM SUBMIT ----------------
  const handleCarSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/send-car-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carForm),
    });

    const data = await res.json();
    alert(data.success ? "Car Quote Sent!" : "Failed to send car quote");
  };

  // ---------------- TYRE FORM SUBMIT ----------------
  const handleTyreSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/send-tyre-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tyreForm),
    });

    const data = await res.json();
    alert(data.success ? "Tyre Quote Sent!" : "Failed to send tyre quote");
  };

  return (
    <>
      {/* Header Section */}
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
              max-w-xl md:max-w-5xl sm:max-w-2xl
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
              <span className="text-white font-normal">Get Your </span>
              <span className="text-white">Quote</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              Get an instant quote for your next car service or tyre purchase.
              Fill out the form below and our team will get back to you with accurate pricing and expert recommendations
            </p>
            <p className="text-white font-medium"> Fast transparent and hussle free.</p>
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
                ? "text-gray-700 font-semibold text-xl md:text-3xl border-b-4 border-yellow-400"
                : "text-gray-700 font-semibold text-xl md:text-3xl"
            }`}
            onClick={() => setActiveTab("car")}
          >
            Car Service Quote
          </button>

          <button
            className={`px-8 py-3 font-medium ${
              activeTab === "tyre"
                ? "text-gray-700 font-semibold text-xl md:text-3xl border-b-4 border-yellow-400"
                : "text-gray-700 font-semibold text-xl md:text-3xl"
            }`}
            onClick={() => setActiveTab("tyre")}
          >
            Tyre Purchase Quote
          </button>
        </div>

        <div className="max-w-6xl mx-auto py-12 px-6">
          {/* ==================== CAR SERVICE FORM ==================== */}
          {activeTab === "car" && (
            <form
              onSubmit={handleCarSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* NAME */}
              <div>
                <label className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  value={carForm.name}
                  onChange={(e) =>
                    setCarForm({ ...carForm, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="flex flex-col md:flex-row gap-6 md:col-span-2">
                <div className="flex-1">
                  <label className="block text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    value={carForm.email}
                    onChange={(e) =>
                      setCarForm({ ...carForm, email: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm mb-2">Phone Number</label>
                  <input
                    type="text"
                    value={carForm.phone}
                    onChange={(e) =>
                      setCarForm({ ...carForm, phone: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* VIN + SUBJECT */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">VIN/Plate Number</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setCarForm({ ...carForm, vin: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setCarForm({ ...carForm, subject: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* DETAILS */}
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Details about the Quote</label>
                <textarea
                  rows={3}
                  onChange={(e) =>
                    setCarForm({ ...carForm, details: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                ></textarea>
              </div>

              {/* FILE UPLOAD */}
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Upload photo or document</label>

                <label
                  className="w-16 h-16 border border-gray-300 rounded-md
        flex items-center justify-center cursor-pointer hover:border-yellow-400"
                >
                  <Plus className="text-gray-400" size={28} />
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      setCarForm({ ...carForm, file: e.target.files?.[0] })
                    }
                  />
                </label>
              </div>

              {/* SUBMIT BUTTON */}
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
              {/* Common Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    value={tyreForm.name}
                    onChange={(e) =>
                      setTyreForm({ ...tyreForm, name: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    value={tyreForm.email}
                    onChange={(e) =>
                      setTyreForm({ ...tyreForm, email: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone Number</label>
                  <input
                    type="text"
                    value={tyreForm.phone}
                    onChange={(e) =>
                      setTyreForm({ ...tyreForm, phone: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* Tyre Sizes – Only tab */}
              <div className="flex border-b border-gray-300 mt-4 mb-8">
                <button className="px-6 py-2 font-medium border-b-4 border-yellow-400 text-black">
                  Tyre Sizes
                </button>
              </div>

              {/* TYRE SIZE SECTION */}
              <form onSubmit={handleTyreSubmit} className="space-y-8">
                <h2 className="text-lg font-medium text-gray-700">Search Tyres By Size</h2>

                {/* Add rear size toggle */}
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

                {/* FRONT + optional REAR */}
                <div className={`grid ${showRear ? "md:grid-cols-2" : "grid-cols-1"} gap-10`}>

                  {/* FRONT */}
                  <div>
                    <h3 className="font-medium mb-4">Front Tyres</h3>

                    {/* Width */}
                    <div className="mb-4">
                      <label className="block text-sm mb-1">Width</label>
                      <select
                        value={tyreForm.frontWidth}
                        onChange={(e) =>
                          setTyreForm({ ...tyreForm, frontWidth: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                      >
                        <option>Select Width</option>
                        <option>155</option>
                        <option>165</option>
                        <option>175</option>
                        <option>185</option>
                        <option>195</option>
                        <option>205</option>
                        <option>215</option>
                        <option>225</option>
                      </select>
                    </div>

                    {/* Profile */}
                    <div className="mb-4">
                      <label className="block text-sm mb-1">Profile</label>
                      <select
                        value={tyreForm.frontProfile}
                        onChange={(e) =>
                          setTyreForm({ ...tyreForm, frontProfile: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                      >
                        <option>Select Profile</option>
                        <option>50</option>
                        <option>55</option>
                        <option>60</option>
                        <option>65</option>
                        <option>70</option>
                      </select>
                    </div>

                    {/* Wheel */}
                    <div className="mb-4">
                      <label className="block text-sm mb-1">Wheel Size</label>
                      <select
                        value={tyreForm.frontWheel}
                        onChange={(e) =>
                          setTyreForm({ ...tyreForm, frontWheel: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                      >
                        <option>Select Wheel Size</option>
                        <option>13"</option>
                        <option>14"</option>
                        <option>15"</option>
                        <option>16"</option>
                        <option>17"</option>
                      </select>
                    </div>

                    {/* Season */}
                    <div className="mb-4">
                      <label className="block text-sm mb-1">Season</label>
                      <select
                        value={tyreForm.frontSeason}
                        onChange={(e) =>
                          setTyreForm({ ...tyreForm, frontSeason: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                      >
                        <option>Select Season</option>
                        <option>All-Season</option>
                        <option>Summer</option>
                        <option>Winter</option>
                      </select>
                    </div>
                  </div>

                  {/* REAR */}
                  {showRear && (
                    <div>
                      <h3 className="font-medium mb-4">Rear Tyres</h3>

                      {/* Width */}
                      <div className="mb-4">
                        <label className="block text-sm mb-1">Width</label>
                        <select
                          value={tyreForm.rearWidth}
                          onChange={(e) =>
                            setTyreForm({ ...tyreForm, rearWidth: e.target.value })
                          }
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                        >
                          <option>Select Width</option>
                          <option>155</option>
                          <option>165</option>
                          <option>175</option>
                          <option>185</option>
                          <option>195</option>
                          <option>205</option>
                          <option>215</option>
                          <option>225</option>
                        </select>
                      </div>

                      {/* Profile */}
                      <div className="mb-4">
                        <label className="block text-sm mb-1">Profile</label>
                        <select
                          value={tyreForm.rearProfile}
                          onChange={(e) =>
                            setTyreForm({ ...tyreForm, rearProfile: e.target.value })
                          }
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                        >
                          <option>Select Profile</option>
                          <option>50</option>
                          <option>55</option>
                          <option>60</option>
                          <option>65</option>
                          <option>70</option>
                        </select>
                      </div>

                      {/* Wheel */}
                      <div className="mb-4">
                        <label className="block text-sm mb-1">Wheel Size</label>
                        <select
                          value={tyreForm.rearWheel}
                          onChange={(e) =>
                            setTyreForm({ ...tyreForm, rearWheel: e.target.value })
                          }
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                        >
                          <option>Select Wheel Size</option>
                          <option>13"</option>
                          <option>14"</option>
                          <option>15"</option>
                          <option>16"</option>
                          <option>17"</option>
                        </select>
                      </div>

                      {/* Season */}
                      <div className="mb-4">
                        <label className="block text-sm mb-1">Season</label>
                        <select
                          value={tyreForm.rearSeason}
                          onChange={(e) =>
                            setTyreForm({ ...tyreForm, rearSeason: e.target.value })
                          }
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                        >
                          <option>Select Season</option>
                          <option>All-Season</option>
                          <option>Summer</option>
                          <option>Winter</option>
                        </select>
                      </div>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}
