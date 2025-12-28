"use client";
import React from "react";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-28"
      style={{
        backgroundImage: "url('/Team.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>


    <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 z-10">
        <div className="flex-1 space-y-10 text-gray-200">
          <h2 className="text-5xl font-semibold mb-20 text-white">Connect Us</h2>
          

          <div>
            <div className="flex items-center gap-3 mb-2 text-xl">
              <MapPin className="text-white w-8 h-8 mr-8" />
              {/* <p className="relative inline-block pb-6">120 Falcon St #7,<br></br> London, ON N5W 4Z1 */}
              <a className="relative inline-block pb-6 cursor-pointer"
                 href="https://www.google.com/maps/place/Marvel+Auto+Repair/@42.9883723,-81.1737981,17z/data=!4m6!3m5!1s0x882ef3969fee8b81:0xa73d129e96d1c3f5!8m2!3d42.9883723!4d-81.1737981!16s%2Fg%2F11l2d881mg?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                 target="_blank"
                 rel="noopener noreferrer">
                    120 Falcon St #7,<br />
                    London, ON N5W 4Z1
                <span className="block border-b-2 border-gray-400 w-52 mt-6"></span>
              </a>
              {/* </p> */}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2 text-xl">
              <Phone className="text-white w-8 h-8 mr-8" />
              {/* <p className="relative inline-block pb-6"> */}
              <a className="relative inline-block pb-6 cursor-pointer"
                 href="tel:+12266376785">
                 (226) 637-6785
                 <span className="block border-b-2 border-gray-400 w-48 mt-6"></span>
              </a>
               
              
              {/* </p> */}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2 text-xl">
              <Mail className="text-white w-8 h-8 mr-8" />
              {/* <p className="relative inline-block pb-6"> */}
              <a className="relative inline-block pb-6 cursor-pointer"
                 href="mailto:hello@marvel.com">
                 hello@marvel.com
              <span className="block border-b-2 border-gray-400 w-52 mt-6"></span>
              </a>
              {/* </p> */}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2 text-xl">
              <Globe className="text-white w-8 h-8 mr-8" />
              {/* <p className="relative inline-block pb-6"> */}
              <a className="relative inline-block pb-6 cursor-pointer"
                  href="https://marvelautolondon.ca/"
                  target="_blank"
                  rel="noopener noreferrer">
                www.marvelautolondon.ca
              <span className="block border-b-2 border-gray-400 w-68 mt-6"></span>
              </a>
              {/* </p> */}
            </div>
          </div>

        <div>
          <div className="flex items-start gap-3 mb-2 text-xl">
            <Clock className="text-White w-8 h-8 mr-8" />
            <div className="flex flex-col">
            <p>Mon - Fri : 09:00 AM – 05:30 PM</p>
            <p className="mt-3">Saturday : 09:00 AM – 02:00 PM</p>
            <p className="mt-3">Sunday : Closed</p>
            <p className="mt-3">Closed on all Ontario public holidays.</p>
            </div>
          </div>
        </div>
          
    </div>

<div className="flex-1 relative flex flex-col">
  <p className="text-white font-semibold text-3xl mb-14">
    Hi! We’re here!
  </p>

  <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
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
    </section>
  );
}
