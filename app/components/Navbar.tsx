"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Plus, X, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Payment & Service History", href: "/history" },
    { name: "Contact", href: "/contact" },
  ];

  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});


  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

const handleSubmit = async (e: any) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("phone", form.phone);
  formData.append("subject", form.subject);
  formData.append("message", form.message);

  if (file) {
    formData.append("file", file);
  }

  const res = await fetch("/api/book-now", {
    method: "POST",
    body: formData, // ⬅ NO HEADERS FOR FORMDATA
  });

  const data = await res.json();

  if (data.success) {
    alert("Enquiry sent successfully!");
    setShowForm(false);
    setFile(null);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  } else {
    alert("Failed to send enquiry");
  }
};


  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 ml-4 md:ml-28">
          <Image src="/marvel_logo.jpg" alt="Logo" width={100} height={100} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black hover:text-yellow-400 hover:font-semibold transition-colors duration-200 text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Right Buttons */}
        <div className="hidden lg:flex items-center space-x-8 mr-8 md:mr-28">
          <Link
            href="https://www.google.com/maps/place/Marvel+Auto+Repair/@42.9883723,-81.1737981,17z/data=!3m1!4b1!4m6!3m5!1s0x882ef3969fee8b81:0xa73d129e96d1c3f5!8m2!3d42.9883723!4d-81.1737981!16s%2Fg%2F11l2d881mg?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
            className="text-black hover:text-yellow-400 flex items-center space-x-1"
          >
            <MapPin size={28} />
          </Link>

          <Link
            href="tel:+910000000000"
            className="text-black hover:text-yellow-400 flex items-center space-x-1"
          >
            <Phone size={28} />
          </Link>

          <button
            onClick={() => setShowForm(true)}
            className="font-semibold rounded-full border-2 border-yellow-400 text-black px-6 py-3 hover:bg-yellow-400 transition"
          >
            Book Now
          </button>

          <Link href="/getquote">
            <button className="font-semibold rounded-full bg-yellow-400 text-black px-6 py-3 hover:bg-yellow-300 transition">
              Get Your Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu Dropdown ===== */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-black text-lg font-medium hover:text-yellow-400 transition"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center justify-start gap-4 pt-4 border-t border-gray-200">
              <Link href="https://www.google.com/maps/place/Marvel+Auto+Repair/@42.9883723,-81.1737981,17z/data=!3m1!4b1!4m6!3m5!1s0x882ef3969fee8b81:0xa73d129e96d1c3f5!8m2!3d42.9883723!4d-81.1737981!16s%2Fg%2F11l2d881mg?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" onClick={() => setMenuOpen(false)}>
                <MapPin size={24} className="text-black hover:text-yellow-400" />
              </Link>

              <Link href="tel:+910000000000" onClick={() => setMenuOpen(false)}>
                <Phone size={24} className="text-black hover:text-yellow-400" />
              </Link>
            </div>

            <button
              onClick={() => {
                setShowForm(true);
                setMenuOpen(false);
              }}
              className="w-full border-2 border-yellow-400 text-black font-semibold rounded-full py-3 hover:bg-yellow-400 transition"
            >
              Book Now
            </button>

            <Link href="/getquote" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-yellow-400 text-black font-semibold rounded-full py-3 hover:bg-yellow-300 transition">
                Get Your Quote
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* ===== Enquiry Form Popup ===== */}
      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-black text-white rounded-xl shadow-2xl w-full max-w-3xl mx-4 overflow-hidden border-t-4 border-yellow-400">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition"
            >
              <X size={28} />
            </button>

            {/* Form */}
            <section className="py-10 px-6 md:px-12">
              <h2 className="text-2xl font-semibold mb-8">Enquiry</h2>

              <form
              onSubmit={handleSubmit}
               className="space-y-8">
                {/* Name */}
                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-500 bg-transparent rounded-md px-6 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                </div>

                {/* Subject + Message */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-gray-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">
                      Write your enquiry
                    </label>
                    <textarea
                      rows={3}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                    ></textarea>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Upload photo or document
                  </label>
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

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-yellow-400 text-black px-28 py-3 rounded-full font-medium hover:bg-yellow-300 transition"
                >
                  Submit
                </button>
              </form>
            </section>
          </div>
        </div>
      )}
    </nav>
  );
}
