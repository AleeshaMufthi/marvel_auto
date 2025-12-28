"use client";
import {
  MapPin,
  Phone,
  Send,
  Globe,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-14">
      <div
        className="
          max-w-8xl mx-auto px-6 
          grid grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-[2.2fr_1.2fr_.9fr_1fr] 
          gap-12
        "
      >
        {/* ===== Column 1 ===== */}
        <div className="ml-0 md:ml-10 lg:ml-36">
          <div className="flex flex-col items-start space-y-3">
            <Link href="/">
            <Image
              src="/marvel_png_logo.png"
              alt="Marvel Auto Repair"
              width={110}
              height={110}
              className="mb-2"
            />
            </Link>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Marvel Auto Repair
              </h3>
              <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">
                We keep your car running smoothly <br />
                with expert service, honest pricing, and fast <br />
                turnaround.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg md:text-xl font-medium text-white mb-2">
              Opening Hours
            </h4>
            <p className="text-base md:text-lg">Mon - Fri : 09:00 AM – 05:30 PM</p>
            <p className="text-base md:text-lg">Saturday : 09:00 AM – 02:00 PM</p>
            <p className="text-base md:text-lg">Sunday : Closed</p>
            <p className="text-base md:text-lg">Closed on all Ontario public holidays.</p>
          </div>
        </div>

        {/* ===== Column 2 — Reach to Us ===== */}
        <div>
          <h4 className="text-xl font-medium text-white mb-6">Reach Us</h4>
          <ul className="space-y-5 text-gray-400 text-base md:text-lg">
            <li className="flex items-center gap-3">
              <MapPin className="text-white w-5 h-5" />
              <a
                 href="https://www.google.com/maps/place/Marvel+Auto+Repair/@42.9883723,-81.1737981,17z/data=!4m6!3m5!1s0x882ef3969fee8b81:0xa73d129e96d1c3f5!8m2!3d42.9883723!4d-81.1737981!16s%2Fg%2F11l2d881mg?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                 target="_blank"
                 rel="noopener noreferrer">
                    120 Falcon St #7, London, ON N5W 4Z1
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-white w-5 h-5" />
              <a href="tel:+12266376785">(226) 637-6785</a>
            </li>
            <li className="flex items-center gap-3">
              <Send className="text-white w-5 h-5" />
              <a href="mailto:hello@marvel.com">hello@marvel.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="text-white w-5 h-5" />
              <a href="https://marvelautolondon.ca/" target="_blank" rel="noopener noreferrer">
                www.marvelautolondon.ca
              </a>
            </li>
          </ul>
        </div>

        {/* ===== Column 3 — Quick Links ===== */}
        <div>
          <h4 className="text-xl font-medium text-white mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-base md:text-lg">
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Pricing
              </a>
            </li> */}
            <li>
              <a href="/gallery" className="hover:text-yellow-400 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Careers
              </a>
            </li> */}
          </ul>
        </div>

        {/* ===== Column 4 — Connect with Us ===== */}
        <div className="lg:pr-6">
          <h4 className="text-xl font-medium text-white mb-6">
            Connect with Us
          </h4>
          <ul className="space-y-5 text-gray-400 text-base md:text-lg">
            {/* <li className="flex items-center gap-3">
              <Youtube className="text-white w-5 h-5" />
              <span>Youtube</span>
            </li>
            <li className="flex items-center gap-3">
              <Twitter className="text-white w-5 h-5" />
              <span>Twitter</span>
            </li> */}
            <li className="flex items-center gap-3">
              <Instagram className="text-white w-5 h-5" />
              <span>Instagram</span>
            </li>
            <li className="flex items-center gap-3">
              <Facebook className="text-white w-5 h-5" />
              <span>Facebook</span>
            </li>
          </ul>
        </div>
      </div>

      
    </footer>
  );
}
