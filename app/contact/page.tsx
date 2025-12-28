"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Clock, Plus } from "lucide-react";
import toast from "react-hot-toast";


const servicesList = [
  "General Auto Repair",
  "Engine Diagnostics",
  "Brake Service",
  "Oil Change & Maintenance",
  "General Auto Repair",
  "Engine Diagnostics",
  "Oil Change & Maintenance",
  "Brake Service",
];

export default function ServicesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;

const validateField = (name: string, value: string) => {
  let error = "";

  switch (name) {
    case "name":
      if (!value.trim()) error = "!Name is required";
      break;

    case "email":
      if (!value.trim()) error = "!Email is required";
      else if (!emailRegex.test(value))
        error = "!Please enter a valid email address";
      break;

    case "phone":
      if (!phoneRegex.test(value))
        error = "!Please enter a valid 10-digit phone number";
      break;

    case "subject":
      if (!value.trim()) error = "!Subject is required";
      break;

    case "message":
      if (!value.trim()) error = "!Message is required";
      break;
  }

  setErrors((prev) => ({ ...prev, [name]: error }));
};


  // input handler
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  // Allow only numbers for phone
  const newValue =
    name === "phone" ? value.replace(/\D/g, "") : value;

  setFormData({ ...formData, [name]: newValue });
  validateField(name, newValue);
};



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const newErrors = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  let hasError = false;

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
    hasError = true;
  }

  if (!emailRegex.test(formData.email)) {
    newErrors.email = "Please enter a valid email address";
    hasError = true;
  }

  if (!phoneRegex.test(formData.phone)) {
    newErrors.phone = "Please enter a valid 10-digit phone number";
    hasError = true;
  }

    if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required";
    hasError = true;
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
    hasError = true;
  }

  // Stop submit if validation fails
  if (hasError) {
    setErrors(newErrors);
    return;
  }

  setErrors(newErrors);

  const body = new FormData();
  body.append("name", formData.name);
  body.append("email", formData.email);
  body.append("phone", formData.phone);
  body.append("subject", formData.subject);
  body.append("message", formData.message);

  if (file) {
    body.append("file", file);
  }

  const res = await fetch("/api/contact", {
    method: "POST",
    body,
  });

  const data = await res.json();
  if (data.success) {
    toast.success("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setFile(null);
    setErrors({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  } else {
    toast.error("Failed to send message. Please try again.");
  }
};


  return (
    <main className="bg-black text-white min-h-screen">

      {/* YOUR SAME BANNER SECTION */}
      <section className="relative w-full">
        <Image
          src="/ourservice.png"
          alt="Our Services Banner"
          width={1920}
          height={800}
          className="w-full h-[360px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover opacity-70"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <div className="bg-zinc-800 bg-opacity-80 px-4 py-4 sm:px-10 sm:py-8 md:px-16 md:py-10 rounded-3xl text-center max-w-xl md:max-w-5xl sm:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <span className="font-normal">Let's Get </span>
              <span className="text-white">Connected</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              Have a question or need more information? Fill out the form below, and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-black text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12">

          {/* LEFT FORM */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Enquiry</h2>

            <form className="space-y-8" onSubmit={handleSubmit}>
              
              {/* Name */}
<div>
  <label className="block text-sm mb-2 text-gray-300">
    Your Name <span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    className={`w-full border rounded-md px-4 py-2 bg-transparent focus:outline-none ${
      errors.name ? "border-red-500" : "border-gray-500 focus:border-yellow-400"
    }`}
  />
  {errors.name && (
    <p className="text-sm text-red-500 mt-1">{errors.name}</p>
  )}
</div>

<div>
  <label className="block text-sm mb-2 text-gray-300">
    Your Phone <span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    className={`w-full border rounded-md px-4 py-2 bg-transparent focus:outline-none ${
      errors.phone ? "border-red-500" : "border-gray-500 focus:border-yellow-400"
    }`}
  />
  {errors.phone && (
    <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
  )}
</div>

  {/* <label className="block text-sm text-gray-300">
      Your Phone <span className="text-red-500">*</span>
  </label>
  <input
  type="text"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  maxLength={10}
  className={`w-full border rounded-md px-4 py-2 bg-transparent focus:outline-none ${
    errors.phone ? "border-red-500" : "border-gray-500 focus:border-yellow-400"
  }`}
  />
  {errors.phone && (
  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
  )} */}


{/* Email + Phone */}
<div>
  <label className="block text-sm mb-2 text-gray-300">
    Your Email
  </label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className={`w-full border rounded-md px-4 py-2 bg-transparent focus:outline-none ${
      errors.email ? "border-red-500" : "border-gray-500 focus:border-yellow-400"
    }`}
  />
  {errors.email && (
    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
  )}
</div>


              {/* Subject + Message */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Subject<span className="text-red-500"> *</span></label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                  {errors.subject && (<p className="text-sm text-red-500 mt-1">{errors.subject}</p>)}
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Write your enquiry<span className="text-red-500"> *</span></label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                  ></textarea>
                  {errors.message && ( <p className="text-sm text-red-500 mt-1">{errors.message}</p> )}
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">Upload photo or document</label>
                <label className="w-16 h-16 border border-gray-500 rounded-md flex items-center justify-center cursor-pointer hover:border-yellow-400 transition">
                  <Plus className="text-gray-400" size={28} />
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                </label>
                {file && <p className="text-sm text-gray-400 mt-2">{file.name}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-yellow-400 text-black px-28 py-3 rounded-full font-medium hover:bg-yellow-300 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT SIDE CONTACT — unchanged */}

          <div className="space-y-10">
            <div className="bg-neutral-900 rounded-lg p-8 space-y-5">
              <h3 className="text-xl font-semibold mb-4">Connect Us</h3>
              <div className="space-y-5 text-gray-300 text-sm">
                <p className="flex items-center gap-3 border-b border-gray-700 pb-2">
                  <MapPin size={18} /><a
                 href="https://www.google.com/maps/place/Marvel+Auto+Repair/@42.9883723,-81.1737981,17z/data=!4m6!3m5!1s0x882ef3969fee8b81:0xa73d129e96d1c3f5!8m2!3d42.9883723!4d-81.1737981!16s%2Fg%2F11l2d881mg?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                 target="_blank"
                 rel="noopener noreferrer">
                    120 Falcon St #7, London, ON N5W 4Z1
              </a>
                </p>
                <p className="flex items-center gap-3 border-b border-gray-700 pb-2">
                  <Phone size={18} /> <a href="tel:+12266376785">(226) 637-6785</a>
                </p>
                <p className="flex items-center gap-3 border-b border-gray-700 pb-2">
                  <Mail size={18} /> <a href="mailto:hello@marvel.com">hello@marvel.com</a>
                </p>
                <p className="flex items-center gap-3 border-b border-gray-700 pb-2">
                  <Globe size={18} /> <a href="https://marvelautolondon.ca/" target="_blank" rel="noopener noreferrer">www.marvelautolondon.ca</a>
                </p>
                <p className="flex items-start gap-3">
                  <Clock size={18} />
                  <span>
                    Mon - Fri : 09:00 AM – 05:30 PM <br /> Saturday : 09:00 AM – 02:00 PM <br /> Sunday : Closed <br /> Closed on all Ontario public holidays.
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Hi! We’re here!</h3>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.6491831049465!2d-81.176373!3d42.9883723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef3969fee8b81%3A0xa73d129e96d1c3f5!2sMarvel%20Auto%20Repair!5e0!3m2!1sen!2sca!4v1731223445555!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
