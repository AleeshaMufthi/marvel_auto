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
    // quantity: "",
    // withRim: "",
    // vin: "",
    frontWidth: "",
    frontProfile: "",
    frontWheel: "",
    frontSeason: "",
    rearWidth: "",
    rearProfile: "",
    rearWheel: "",
    rearSeason: "",

    front: {
    quantity: "",
    withRim: "",
    vin: "",
   },

   rear: {
    quantity: "",
    withRim: "",
    vin: "",
   },
  });

  const [activeTab, setActiveTab] = useState<"car" | "tire">("car");
  const [showRear, setShowRear] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
const alphanumericRegex = /^[a-zA-Z0-9]+$/;

const validateField = (name: string, value: string) => {
  let error = "";

  switch (name) {
    case "name":
      if (!value.trim()) error = "! Name is required";
      break;

    case "email":
      if (value && !emailRegex.test(value)) {
        error = "! Invalid email format. Please enter a valid email address.";
      }
      break;

    case "phone":
      if (!phoneRegex.test(value)) {
        error = "! Please enter a valid 10-digit mobile number.";
      }
      break;

    case "vin":
      if (value) {
        if (!alphanumericRegex.test(value) || value.length > 17) {
          error =
            "! Invalid input. Enter a 17-character VIN or a valid license plate.";
        }
      }
      break;

    case "subject":
      if (!value.trim()) error = "! Subject is required";
      break;

    case "details":
      if (!value.trim()) error = "! Details are required";
      break;
  }

  setErrors((prev) => ({
    ...prev,
    [name]: error,
  }));
};

const validateCarForm = () => {
  const newErrors: Record<string, string> = {};

  if (!carForm.name.trim()) newErrors.name = "! Name is required";
  if (!phoneRegex.test(carForm.phone))
    newErrors.phone = "! Please enter a valid 10-digit mobile number.";
  if (carForm.email && !emailRegex.test(carForm.email))
    newErrors.email =
      "! Invalid email format. Please enter a valid email address.";
  if (
    carForm.vin &&
    (!alphanumericRegex.test(carForm.vin) || carForm.vin.length > 17)
  )
    newErrors.vin =
      "! Invalid input. Enter a 17-character VIN or a valid license plate.";
  if (!carForm.subject.trim()) newErrors.subject = "! Subject is required";
  if (!carForm.details.trim()) newErrors.details = "! Details are required";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const validateTyreForm = () => {
  const newErrors: Record<string, string> = {};

  if (!tyreForm.name.trim()) newErrors.name = "! Name is required";
  if (!phoneRegex.test(tyreForm.phone))
    newErrors.phone = "! Please enter a valid 10-digit mobile number.";
  if (tyreForm.email && !emailRegex.test(tyreForm.email))
    newErrors.email =
      "! Invalid email format. Please enter a valid email address.";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  // ---------------- CAR FORM SUBMIT ----------------
  const handleCarSubmit = async (e: any) => {
    e.preventDefault();

      if (!validateCarForm()) return;

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

    if (!validateTyreForm()) return;

    const res = await fetch("/api/send-tyre-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tyreForm),
    });

    const data = await res.json();
    alert(data.success ? "Tire Quote Sent!" : "Failed to send tire quote");
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
             Get an instant quote for your next car service or tire purchase. Fill out the form below, and our team will get back to you with accurate pricing and expert recommendations.
            </p>
            <p className="text-white font-medium"> Fast, transparent, and hassle free.</p>
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
              activeTab === "tire"
                ? "text-gray-700 font-semibold text-xl md:text-3xl border-b-4 border-yellow-400"
                : "text-gray-700 font-semibold text-xl md:text-3xl"
            }`}
            onClick={() => setActiveTab("tire")}
          >
            Tire Purchase Quote
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
                <label className="block text-sm mb-2">Your Name <span className="text-red-600 text-lg"> *</span></label>
              
                <input
                  type="text"
                  value={carForm.name}
                  onChange={(e) => {
                    setCarForm({ ...carForm, name: e.target.value });
                    validateField("name", e.target.value);
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
                {errors.name && ( <p className="text-sm text-red-500 mt-1">{errors.name}</p> )}
              </div>

              {/* EMAIL + PHONE */}
              <div className="flex flex-col md:flex-row gap-6 md:col-span-2">
                <div className="flex-1">
                  <label className="block text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    value={carForm.email}
                    onChange={(e) => {
                      setCarForm({ ...carForm, email: e.target.value });
                      validateField("email", e.target.value);
                    }}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                  {errors.email && ( <p className="text-sm text-red-500 mt-1">{errors.email}</p> )}
                </div>

                <div className="flex-1">
                  <label className="block text-sm mb-2">Phone Number<span className="text-red-600 text-lg"> *</span></label>
                  <input
                    type="text"
                    value={carForm.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setCarForm({ ...carForm, phone: value });
                      validateField("phone", value);
                    }}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                  {errors.phone && ( <p className="text-sm text-red-500 mt-1">{errors.phone}</p> )}
                </div>
              </div>

              {/* VIN + SUBJECT */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">VIN/Plate Number</label>
                  <input
                    type="text"
                    value={carForm.vin}
                    onChange={(e) => {
                      setCarForm({ ...carForm, vin: e.target.value });
                      validateField("vin", e.target.value);
                    }}
                    maxLength={17}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                  {errors.vin && ( <p className="text-sm text-red-500 mt-1">{errors.vin}</p> )}
                </div>

                <div>
                  <label className="block text-sm mb-2">Subject<span className="text-red-600 text-lg"> *</span></label>
                  <input
                    type="text"
                    value={carForm.subject}
                    onChange={(e) => {
                      setCarForm({ ...carForm, subject: e.target.value });
                      validateField("subject", e.target.value);
                    }}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                  {errors.subject && ( <p className="text-sm text-red-500 mt-1">{errors.subject}</p> )}
                </div>
              </div>

              {/* DETAILS */}
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Details about the Quote<span className="text-red-600 text-lg"> *</span></label>
                <textarea
                  rows={3}
                  value={carForm.details}
                  onChange={(e) => {
                    setCarForm({ ...carForm, details: e.target.value });
                    validateField("details", e.target.value);
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                ></textarea>
                {errors.details && ( <p className="text-sm text-red-500 mt-1">{errors.details}</p>)}
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
          {activeTab === "tire" && (
            <>
              {/* Common Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm mb-2">Your Name<span className="text-red-600 text-lg"> *</span></label>
                  <input
                    type="text"
                    value={tyreForm.name}
                    onChange={(e) => {
                      setTyreForm({ ...tyreForm, name: e.target.value });
                      validateField("name", e.target.value);
                    }}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                  {errors.name && ( <p className="text-sm text-red-500 mt-1">{errors.name}</p>)}
                </div>
                <div>
                  <label className="block text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    value={tyreForm.email}
                    onChange={(e) => {
                      setTyreForm({ ...tyreForm, email: e.target.value });
                      validateField("email", e.target.value);
                    }}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                  {errors.email && ( <p className="text-sm text-red-500 mt-1">{errors.email}</p> )}
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone Number<span className="text-red-600 text-lg"> *</span></label>
                  <input
                    type="text"
                    value={tyreForm.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ""); // only numbers
                      setTyreForm({ ...tyreForm, phone: value });
                      validateField("phone", value);
                    }}
                    maxLength={10}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                  {errors.phone && ( <p className="text-sm text-red-500 mt-1">{errors.phone}</p> )}
                </div>


                  {/* <div>
                    <label className="block text-sm mb-2">Quantity<span className="text-red-600 text-lg"> *</span></label>
                      <select
                        value={tyreForm.quantity}
                        onChange={(e) =>
                        setTyreForm({ ...tyreForm, quantity: e.target.value })
                        }
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                      >
                      <option value="">Select quantity</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      </select>
                  </div> */}

                    {/* With Rim Radio Buttons */}
                      {/* <div>
                        <label className="block text-sm mb-3">With Rim?<span className="text-red-600 text-lg"> *</span></label>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2">
                            <input
                            type="radio"
                            name="withRim"
                            value="yes"
                            checked={tyreForm.withRim === "yes"}
                            onChange={(e) =>
                            setTyreForm({ ...tyreForm, withRim: e.target.value })
                          }
                          required
                          />
                          Yes
                          </label>

                          <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="withRim"
                            value="no"
                            checked={tyreForm.withRim === "no"}
                            onChange={(e) =>
                            setTyreForm({ ...tyreForm, withRim: e.target.value })
                          }
                          required
                          />
                          No
                          </label>
                        </div>
                       </div> */}
                      </div>

              {/* {tyreForm.withRim === "yes" && (
                <div className="mb-8">
                  <label className="block text-sm mb-2">
                    VIN / Plate Number<span className="text-red-600 text-lg"> *</span>
                  </label>
                  <input
                    type="text"
                    value={tyreForm.vin}
                    onChange={(e) => {
                    setTyreForm({ ...tyreForm, vin: e.target.value })
                    validateField("vin", e.target.value);
                    }}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                  {errors.vin && ( <p className="text-sm text-red-500 mt-1">{errors.vin}</p> )}
                  </div>
              )} */}

              {/* Tyre Sizes – Only tab */}
              <div className="flex border-b border-gray-300 mt-4 mb-8">
                <button className="px-6 py-2 font-medium border-b-4 border-yellow-400 text-black">
                  Tire Sizes
                </button>
              </div>

              {/* TYRE SIZE SECTION */}
              <form onSubmit={handleTyreSubmit} className="space-y-8">
                <h2 className="text-lg font-medium text-gray-700">Search Tires By Size</h2>

                {/* Add rear size toggle */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    {showRear ? (
                      <span
                        className="cursor-pointer underline"
                        onClick={() => setShowRear(false)}
                      >
                        Hide Different Tire Size
                      </span>
                    ) : (
                      <span
                        className="cursor-pointer underline"
                        onClick={() => setShowRear(true)}
                      >
                       Add Different Tire Sizes
                      </span>
                    )}
                  </p>
                </div>

                {/* FRONT + optional REAR */}
                <div className={`grid ${showRear ? "md:grid-cols-2" : "grid-cols-1"} gap-10`}>

                  {/* FRONT */}
                  <div>
                    <h3 className="font-medium mb-4">Tire Specifications</h3>

                     <div className="mb-4">
                    <label className="block text-sm mb-2">Quantity<span className="text-red-600 text-lg"> *</span></label>
                      <select
                        value={tyreForm.front.quantity}
                        onChange={(e) => setTyreForm({ ...tyreForm,
                                         front: { ...tyreForm.front, quantity: e.target.value },
                                        })
                        }
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                      >
                      <option value="">Select quantity</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      </select>
                  </div>

                    {/* With Rim Radio Buttons */}
                      <div className="mb-4">
                        <label className="block text-sm mb-3">With Rim?<span className="text-red-600 text-lg"> *</span></label>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2">
                            <input
                            type="radio"
                            name="frontwithRim"
                            value="yes"
                            checked={tyreForm.front.withRim === "yes"}
                            onChange={(e) =>
                                setTyreForm({...tyreForm, front: { ...tyreForm.front, withRim: e.target.value },})
                          }
                          required
                          />
                          Yes
                          </label>

                          <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="frontwithRim"
                            value="no"
                            checked={tyreForm.front.withRim === "no"}
                            onChange={(e) =>
                                setTyreForm({...tyreForm, front: { ...tyreForm.front, withRim: e.target.value },})
                          }
                          required
                          />
                          No
                          </label>
                        </div>
                       </div>

                          {tyreForm.front.withRim === "yes" && (
                <div className="mb-8">
                  <label className="block text-sm mb-2">
                    VIN / Plate Number<span className="text-red-600 text-lg"> *</span>
                  </label>
                  <input
                    type="text"
                    value={tyreForm.front.vin}
                    onChange={(e) => {
                    setTyreForm({...tyreForm, front: { ...tyreForm.front, vin: e.target.value },})
                    validateField("vin", e.target.value);
                    }}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                  {errors.vin && ( <p className="text-sm text-red-500 mt-1">{errors.vin}</p> )}
                  </div>
              )}

                    {/* Width */}
                    <div className="mb-4">
                      <label className="block text-sm mb-1">Tire width<span className="text-red-600 text-lg"> *</span></label>
                      <select
                        value={tyreForm.frontWidth}
                        onChange={(e) =>
                          setTyreForm({ ...tyreForm, frontWidth: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                      >
                        <option>Select Width</option>
                        <option>185</option>
                        <option>195</option>
                        <option>205</option>
                        <option>215</option>
                        <option>225</option>
                        <option>235</option>
                        <option>245</option>
                        <option>255</option>
                        <option>265</option>
                        <option>275</option>
                        <option>285</option>
                        <option>295</option>
                        <option>305</option>
                        <option>315</option>
                        <option>325</option>
                        <option>335</option>
                        <option>345</option>
                      </select>
                    </div>

                    {/* Profile */}
                    <div className="mb-4">
                      <label className="block text-sm mb-1">Aspect ratio<span className="text-red-600 text-lg"> *</span></label>
                      <select
                        value={tyreForm.frontProfile}
                        onChange={(e) =>
                          setTyreForm({ ...tyreForm, frontProfile: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                      >
                        <option>Select Aspect ratio</option>
                        <option>40</option>
                        <option>45</option>
                        <option>50</option>
                        <option>55</option>
                        <option>60</option>
                        <option>65</option>
                        <option>70</option>
                        <option>75</option>
                        <option>80</option>
                      </select>
                    </div>

                    {/* Wheel */}
                    <div className="mb-4">
                      <label className="block text-sm mb-1">Wheel Size<span className="text-red-600 text-lg"> *</span></label>
                      <select
                        value={tyreForm.frontWheel}
                        onChange={(e) =>
                          setTyreForm({ ...tyreForm, frontWheel: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                      >
                        <option>Select Wheel Size</option>
                          <option>14"</option>
                          <option>15"</option>
                          <option>16"</option>
                          <option>17"</option>
                          <option>18"</option>
                          <option>19"</option>
                          <option>20"</option>
                          <option>21"</option>
                          <option>22"</option>
                          <option>23"</option>
                      </select>
                    </div>

                    {/* Season */}
                    <div className="mb-4">
                      <label className="block text-sm mb-1">Season<span className="text-red-600 text-lg"> *</span></label>
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
                      <h3 className="font-medium mb-4">Different Tire Specifications</h3>

                       <div>
                    <label className="block text-sm mb-2">Quantity<span className="text-red-600 text-lg"> *</span></label>
                      <select
                        value={tyreForm.rear.quantity}
                        onChange={(e) =>
                            setTyreForm({...tyreForm, rear: { ...tyreForm.rear, quantity: e.target.value },})
                        }
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                      >
                      <option value="">Select quantity</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      </select>
                  </div>

                    {/* With Rim Radio Buttons */}
                      <div>
                        <label className="block text-sm mb-3">With Rim?<span className="text-red-600 text-lg"> *</span></label>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2">
                            <input
                            type="radio"
                            name="withRim"
                            value="yes"
                            checked={tyreForm.rear.withRim === "yes"}
                            onChange={(e) =>
                            setTyreForm({ ...tyreForm, rear: { ...tyreForm.rear, withRim: e.target.value } })
                          }
                          required
                          />
                          Yes
                          </label>

                          <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="withRim"
                            value="no"
                            checked={tyreForm.rear.withRim === "no"}
                            onChange={(e) =>
                            setTyreForm({ ...tyreForm, rear: { ...tyreForm.rear, withRim: e.target.value } })
                          }
                          required
                          />
                          No
                          </label>
                        </div>
                       </div>

                          {tyreForm.rear.withRim === "yes" && (
                <div className="mb-8">
                  <label className="block text-sm mb-2">
                    VIN / Plate Number<span className="text-red-600 text-lg"> *</span>
                  </label>
                  <input
                    type="text"
                    value={tyreForm.rear.vin}
                    onChange={(e) => {
                    setTyreForm({ ...tyreForm, rear: { ...tyreForm.rear, vin: e.target.value } })
                    validateField("vin", e.target.value);
                    }}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                  {errors.vin && ( <p className="text-sm text-red-500 mt-1">{errors.vin}</p> )}
                  </div>
              )}

                      {/* Width */}
                      <div className="mb-4">
                        <label className="block text-sm mb-1">Tire width<span className="text-red-600 text-lg"> *</span></label>
                        <select
                          value={tyreForm.rearWidth}
                          onChange={(e) =>
                            setTyreForm({ ...tyreForm, rearWidth: e.target.value })
                          }
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                        >
                        <option>Select Width</option>
                        <option>185</option>
                        <option>195</option>
                        <option>205</option>
                        <option>215</option>
                        <option>225</option>
                        <option>235</option>
                        <option>245</option>
                        <option>255</option>
                        <option>265</option>
                        <option>275</option>
                        <option>285</option>
                        <option>295</option>
                        <option>305</option>
                        <option>315</option>
                        <option>325</option>
                        <option>335</option>
                        <option>345</option>
                        </select>
                      </div>

                      {/* Profile */}
                      <div className="mb-4">
                        <label className="block text-sm mb-1">Aspect ratio<span className="text-red-600 text-lg"> *</span></label>
                        <select
                          value={tyreForm.rearProfile}
                          onChange={(e) =>
                            setTyreForm({ ...tyreForm, rearProfile: e.target.value })
                          }
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                        >
                        <option>Select Aspect ratio</option>
                        <option>40</option>
                        <option>45</option>
                        <option>50</option>
                        <option>55</option>
                        <option>60</option>
                        <option>65</option>
                        <option>70</option>
                        <option>75</option>
                        <option>80</option>
                        </select>
                      </div>

                      {/* Wheel */}
                      <div className="mb-4">
                        <label className="block text-sm mb-1">Wheel Size<span className="text-red-600 text-lg"> *</span></label>
                        <select
                          value={tyreForm.rearWheel}
                          onChange={(e) =>
                            setTyreForm({ ...tyreForm, rearWheel: e.target.value })
                          }
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-yellow-400"
                        >
                          <option>Select Wheel Size</option>
                          <option>14"</option>
                          <option>15"</option>
                          <option>16"</option>
                          <option>17"</option>
                          <option>18"</option>
                          <option>19"</option>
                          <option>20"</option>
                          <option>21"</option>
                          <option>22"</option>
                          <option>23"</option>
                        </select>
                      </div>

                      {/* Season */}
                      <div className="mb-4">
                        <label className="block text-sm mb-1">Season<span className="text-red-600 text-lg"> *</span></label>
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
                    src="/tyreimg.png"
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
