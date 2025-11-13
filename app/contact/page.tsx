"use client";
import Image from "next/image";
import React, {useState} from "react";
import { MapPin, Phone, Mail, Globe, Clock, Plus } from "lucide-react";


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


  return (
    <main className="bg-black text-white min-h-screen">
      {/* ===== HEADER SECTION ===== */}
            <section className="relative">
              <Image
                src="/ourservice.png"
                alt="Our Services Banner"
                width={1920}
                height={800}
                className="w-full h-[700px] object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-zinc-900 bg-opacity-70 px-8 py-6 rounded-xl text-center max-w-4xl">
                  <h2 className="text-5xl font-bold mb-2">
                    <span className="text-gray-300 font-normal">Let's Get </span>
                    <span className="text-white">Connected</span>
                  </h2>
                  <p className="text-sm md:text-base text-gray-300">
                    Have a question or need a service estimate? Fill out the form below and our team will get back to you <br />shortly.
                  </p>
                </div>
              </div>
            </section>


<section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12">
        {/* LEFT FORM SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Enquiry</h2>

          <form className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-gray-300">Your Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-300">Phone Number</label>
                <input
                  type="text"
                  className="w-full border border-gray-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
              </div>
            </div>

            {/* Subject + Message */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-gray-300">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-300">Write your enquiry</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                ></textarea>
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
              {file && (
                <p className="text-sm text-gray-400 mt-2">{file.name}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-400 text-black px-28 py-3 rounded-full font-medium hover:bg-yellow-300 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT CONTACT SECTION */}
        <div className="space-y-10">
          {/* Contact Card */}
          <div className="bg-neutral-900 rounded-lg p-8 space-y-5">
            <h3 className="text-xl font-semibold mb-4">Connect Us</h3>
            <div className="space-y-5 text-gray-300 text-sm">
              <p className="flex items-center gap-3 border-b border-gray-700 pb-2">
                <MapPin size={18} /> 1567, late george Rd
              </p>
              <p className="flex items-center gap-3 border-b border-gray-700 pb-2">
                <Phone size={18} /> +1 234-567-8910
              </p>
              <p className="flex items-center gap-3 border-b border-gray-700 pb-2">
                <Mail size={18} /> hello@marvel.com
              </p>
              <p className="flex items-center gap-3 border-b border-gray-700 pb-2">
                <Globe size={18} /> www.marvel.com
              </p>
              <p className="flex items-start gap-3">
                <Clock size={18} /> 
                <span>
                  Mon - Fri : 08.00 - 2.00 <br /> Sat - Sun : 10.00 - 16.00
                </span>
              </p>
            </div>
          </div>

          {/* Map */}
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
