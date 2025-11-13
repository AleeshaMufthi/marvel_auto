"use client";
import Image from "next/image";
import { Wrench, Gauge, Cog, DollarSign, Users, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="font-poppins">
      {/* ===== HEADER SECTION ===== */}
      <section className="relative">
        <Image
          src="/ourservice.png"
          alt="Our Services Banner"
          width={1920}
          height={1000}
          className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover opacity-70"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 md:space-y-6 px-4 text-center">
          <div className="bg-zinc-900/70 px-6 md:px-10 py-6 rounded-xl max-w-3xl md:max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              <span className="text-gray-300 font-normal">About </span>
              <span className="text-white">Marvel Auto Repair</span>
            </h2>
            <p className="text-xs md:text-base text-gray-300">
              From Repairs to Maintenance – We’ve Got You Covered
            </p>
          </div>

          <div className="px-4 md:px-8 py-6 max-w-3xl md:max-w-4xl">
            <p className="text-gray-300 text-xs md:text-base leading-relaxed mb-3">
              At Marvel Auto Repair, we believe your vehicle deserves expert care and
              attention. With a team of skilled technicians and state-of-the-art
              equipment, we provide reliable repairs, regular maintenance, and auto care
              solutions for all makes and models.
            </p>
            <p className="text-gray-300 text-xs md:text-base leading-relaxed">
              Our mission is simple: to deliver honest, transparent, and high-quality
              service that keeps you safe on the road and gives you peace of mind.
              Whether it’s a routine oil change or a complex repair, we treat every car as
              if it were our own.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section className="relative bg-white text-black py-16 md:py-24 overflow-hidden">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Marvel Auto Repair?
          </h2>
        </div>

        <div className="relative flex justify-center items-center px-4">
          {/* Concentric yellow circles */}
          <div className="hidden md:block absolute w-[250px] md:w-[450px] lg:w-[650px] h-[250px] md:h-[450px] lg:h-[650px] border border-yellow-400 rounded-full"></div>
          <div className="hidden md:block absolute w-[150px] md:w-[250px] lg:w-[450px] h-[150px] md:h-[250px] lg:h-[450px] border border-yellow-400 rounded-full"></div>
          <div className="hidden md:block absolute w-[100px] md:w-[150px] lg:w-[250px] h-[100px] md:h-[150px] lg:h-[250px] border border-yellow-400 rounded-full"></div>

          {/* Center Car */}
          <Image
            src="/car-removebg-preview.png"
            alt="Top view car"
            width={300}
            height={300}
            className="relative z-10 object-contain w-[150px] md:w-[300px] lg:w-[400px]"
            priority
          />

          {/* Desktop Left side features */}
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col justify-between h-[480px] pl-10">
            <Feature icon={<Wrench className="text-yellow-400 w-8 h-8" />} title="Expert Technicians" desc="Skilled mechanics with years of experience" />
            <Feature icon={<Cog className="text-yellow-400 w-8 h-8" />} title="Quality Parts" desc="Quick service without compromising quality" />
            <Feature icon={<DollarSign className="text-yellow-400 w-8 h-8" />} title="Honest Pricing" desc="Transparent quotes, no hidden fees" />
          </div>

          {/* Desktop Right side features */}
          <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col justify-between h-[480px] pr-10 text-right">
            <FeatureRight icon={<Clock className="text-yellow-400 w-8 h-8" />} title="Fast & Reliable" desc="Quick service without compromising quality" />
            <FeatureRight icon={<Cog className="text-yellow-400 w-8 h-8" />} title="Modern Equipments" desc="Advanced diagnostic & repair systems" />
            <FeatureRight icon={<Users className="text-yellow-400 w-8 h-8" />} title="Customer-Centric Service" desc="Your satisfaction is our priority" />
          </div>
        </div>

        {/* Mobile stacked features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 mt-12 px-8 max-w-5xl mx-auto">
          <Feature icon={<Wrench className="text-black w-8 h-8" />} title="Expert Technicians" desc="Skilled mechanics with years of experience" />
          <FeatureRight icon={<Clock className="text-black w-8 h-8" />} title="Fast & Reliable" desc="Quick service without compromising quality" />
          <Feature icon={<DollarSign className="text-black w-8 h-8" />} title="Honest Pricing" desc="Transparent quotes, no hidden fees" />
          <FeatureRight icon={<Cog className="text-black w-8 h-8" />} title="Modern Equipments" desc="Advanced diagnostic & repair systems" />
          <Feature icon={<Cog className="text-black w-8 h-8" />} title="Quality Parts" desc="OEM-grade components for durability" />
          <FeatureRight icon={<Users className="text-black w-8 h-8" />} title="Customer-Centric Service" desc="Your satisfaction is our priority" />
        </div>
      </section>

      {/* ===== READY SECTION ===== */}
      <section className="relative mt-6 md:mt-0">
        <Image
          src="/ourservice.png"
          alt="Background"
          width={1920}
          height={800}
          className="w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover opacity-70"
        />

        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 lg:px-24 bg-zinc-900/70 text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-snug">
              We’re ready when <br className="hidden md:block" /> you are
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Schedule your appointment today and keep <br className="hidden md:block" /> your vehicle running at its best!
            </p>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-full transition">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}

/* ==== Reusable Feature Components ==== */
const Feature = ({ icon, title, desc }: any) => (
  <div className="flex items-center gap-3">
    {icon}
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);

const FeatureRight = ({ icon, title, desc }: any) => (
  <div className="flex items-center gap-3 justify-end">
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
    {icon}
  </div>
);
