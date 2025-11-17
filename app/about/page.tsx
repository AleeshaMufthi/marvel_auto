"use client";
import Image from "next/image";
import { Wrench, Gauge, Cog, DollarSign, Users, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="font-poppins">
      {/* ===== HEADER SECTION ===== */}
<section className="relative w-full">
  <Image
    src="/ourservice.png"
    alt="Our Services Banner"
    width={1920}
    height={800}
    className="
      w-full 
      h-[800px] 
      sm:h-[400px] 
      md:h-[550px] 
      lg:h-[850px] 
      object-cover 
      opacity-70
    "
  />

  {/* MAIN BOX */}
  <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-6 -translate-y-40 sm:-translate-y-40 md:-translate-y-40 lg:-translate-y-40">
    <div
      className="
        bg-zinc-800 bg-opacity-80 
        px-4 py-4 
        sm:px-10 sm:py-8 
        md:px-16 md:py-10 
        rounded-3xl 
        text-center 
        max-w-2xl md:max-w-5xl
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
        <span className="font-normal text-white">About </span>
        <span className="text-white">Marvel Auto Repair</span>
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-300">
        From Repairs to Maintenance – We’ve Got You Covered
      </p>
    </div>
  </div>

  {/* PARAGRAPHS BELOW THE BOX */}
  <div className="absolute bottom-24 sm:bottom-32 md:bottom-40 lg:bottom-40 left-1/2 -translate-x-1/2 w-full px-4 sm:px-10 md:px-20 max-w-6xl text-center">
    <p className="text-gray-200 text-md sm:text-sm md:text-xl leading-relaxed mb-3">
      At Marvel Auto Repair, we believe your vehicle deserves expert care and
      attention. With a team of skilled technicians and state-of-the-art
      equipment, we provide reliable repairs, regular maintenance, and auto
      care solutions for all makes and models.
    </p>

    <p className="text-gray-200 text-md sm:text-sm md:text-xl leading-relaxed">
      Our mission is simple: to deliver honest, transparent, and high-quality
      service that keeps you safe on the road and gives you peace of mind.
      Whether it’s a routine oil change or a complex repair, we treat every car
      as if it were our own.
    </p>
  </div>
</section>


{/* ===== WHY CHOOSE SECTION ===== */}
<section className="relative bg-white text-black py-16 md:py-24 overflow-hidden">

  {/* SECTION HEADING */}
  <div className="px-4 mb-12 md:mb-32">
    <h2 className="text-2xl md:text-5xl font-bold text-left ml-8 md:ml-16">
      Why Choose Marvel Auto Repair?
    </h2>
  </div>

  {/* MAIN WRAPPER */}
  <div className="relative flex justify-center items-center px-4">

    {/* === 3 Concentric Yellow Circles === */}
    <div className="hidden md:block absolute w-[550px] h-[550px] lg:w-[900px] lg:h-[900px] border border-yellow-400 rounded-full"></div>
    <div className="hidden md:block absolute w-[380px] h-[380px] lg:w-[700px] lg:h-[700px] border border-yellow-400 rounded-full"></div>
    <div className="hidden md:block absolute w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] border border-yellow-400 rounded-full"></div>

    {/* === CENTER CAR IMAGE === */}
    <Image
      src="/car-removebg-preview.png"
      alt="Car top view"
      width={350}
      height={350}
      className="relative z-10 object-contain w-[360px] md:w-[300px] lg:w-[450px]"
    />

    {/* === LEFT 3 FEATURES === */}
    <div className="hidden lg:flex absolute left-52 top-[40%] -translate-y-1/2 flex-col gap-24 h-[520px] pl-10">

      {/* Feature 1 */}
     <div className="flex flex-col items-center text-center gap-2">
        <Image src="/service1.png" width={80} height={80} alt="Equipment" />

        <h4 className="font-semibold text-2xl">Expert Technicians</h4>
        <p className="text-lg text-black max-w-xs">Skilled mechanics with years of experience</p>
      </div>

      {/* Feature 2 */}
     <div className="flex flex-col items-center text-center gap-2">
        <Image src="/service1.png" width={80} height={80} alt="Equipment" />

        <h4 className="font-semibold text-2xl">Quality Parts</h4>
        <p className="text-lg text-black max-w-xs">Quick Service without compromising quality</p>
      </div>

      {/* Feature 3 */}
     <div className="flex flex-col items-center text-center gap-2">
        <Image src="/service1.png" width={80} height={80} alt="Equipment" />

        <h4 className="font-semibold text-2xl">Honest Pricing</h4>
        <p className="text-lg text-black max-w-xs">Transparent quotes, no hidden fees</p>
      </div>

    </div>

    {/* === RIGHT 3 FEATURES === */}
    <div className="hidden lg:flex absolute right-52 top-[40%] gap-24 -translate-y-1/2 flex-col justify-between h-[520px] pr-10 text-right">

      {/* Feature 4 */}
     <div className="flex flex-col items-center text-center gap-2">
        <Image src="/service1.png" width={80} height={80} alt="Equipment" />

        <h4 className="font-semibold text-2xl">Fast & Reliable</h4>
        <p className="text-lg text-black max-w-xs">Quick Service without compromising quality</p>
      </div>

      {/* Feature 5 */}
     <div className="flex flex-col items-center text-center gap-2">
        <Image src="/service1.png" width={80} height={80} alt="Equipment" />

        <h4 className="font-semibold text-2xl">Modern Equipments</h4>
        <p className="text-lg text-black max-w-xs">Quick Service without compromising quality</p>
      </div>

      {/* Feature 6 */}
     <div className="flex flex-col items-center text-center gap-2">
        <Image src="/service1.png" width={80} height={80} alt="Equipment" />

        <h4 className="font-semibold text-2xl">Customer-centric service</h4>
        <p className="text-lg text-black max-w-xs">Transparent Quotes, no hidden feel</p>
      </div>


    </div>
  </div>

  {/* === MOBILE STACKED VIEW === */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-10 mt-16 px-8 max-w-5xl mx-auto">

    <FeatureMobile img="/service1.png" title="Expert Technicians" desc="Skilled mechanics with years of experience" />
    <FeatureMobile img="/service2.png" title="Fast & Reliable" desc="Quick service without compromise" />

    <FeatureMobile img="/service3.png" title="Honest Pricing" desc="Transparent quotes, no hidden fees" />
    <FeatureMobile img="/service4.png" title="Modern Equipments" desc="Advanced diagnostic systems" />

    <FeatureMobile img="/service5.png" title="Quality Parts" desc="OEM-grade components & durability" />
    <FeatureMobile img="/service6.png" title="Customer-Centric Service" desc="Your satisfaction is our priority" />

  </div>
</section>


      {/* ===== READY SECTION ===== */}
<section className="relative mt-6 md:mt-0">
  <Image
    src="/ourservice.png"
    alt="Background"
    width={1920}
    height={800}
    className="w-full h-[300px] md:h-[550px] lg:h-[550px] object-cover opacity-70"
  />

  {/* OVERLAY STRIP */}
  <div className="absolute inset-0 flex items-center">
    <div className="w-full bg-black/60 py-10 md:py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10">
        
        {/* TEXT LEFT */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            We’re ready when <br className="hidden md:block" /> you are
          </h2>

          <p className="text-gray-300 text-sm md:text-base mt-3">
            Schedule your appointment today and keep <br className="hidden md:block" />
            your vehicle running at its best!
          </p>
        </div>

        {/* BUTTON RIGHT */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-5 rounded-full transition">
          Contact Us
        </button>

      </div>
    </div>
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

const FeatureMobile = ({ img, title, desc }: any) => (
  <div className="flex items-center gap-4">
    <Image src={img} width={50} height={50} alt={title} />
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);

