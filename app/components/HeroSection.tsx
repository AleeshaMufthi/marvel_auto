  "use client";
  import Image from "next/image";
  import { useState, useEffect } from "react";
  import { ChevronLeft, ChevronRight } from "lucide-react";
  import { motion, AnimatePresence } from "framer-motion";

  const offers = [
    { id: 1, image: "/offer.jpg" },
    { id: 2, image: "/tyrefull.jpg" },
    { id: 3, image: "/tyreprint.jpg" },
    { id: 4, image: "/staytuned.jpg" },
  ];

  const logos = [
    "mercedes(1).png",
    "audi-removebg-preview.png",
    "bmw-logo.png",
    "lexus-removebg-preview.png",
    "porscheimg.png",
    "pngwing.com.png",
    "mazda.png",
    "toyota.png",
    "RAM.png",
    "dodge.png",
    "ford.png",
    "Chrysler.png",
    "chevrolet.png",
    "gmc.png",
  ];

  export default function HeroSection() {
    const [active, setActive] = useState(0);
    const [visible, setVisible] = useState(true);

    const [index, setIndex] = useState(0);

    useEffect(() => {
  if (!visible || offers.length <= 1) return;

  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % offers.length);
  }, 4000); // ⏱️ change every 4 seconds (readable)

  return () => clearInterval(interval);
}, [visible, offers.length]);


    const next = () => setIndex((index + 1) % logos.length);
    const prev = () => setIndex((index - 1 + logos.length) % logos.length);

    return (
      <>
        {/* ======================= TEXT SECTION ======================= */}
        <section className="bg-black pt-[130px] md:pt-[180px] pb-1 md:pb-2">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            {/* <h1 className="text-white text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-loose tracking-wider mb-2 md:mb-8">
              MARVEL AUTO <span className="text-yellow-400 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-loose tracking-wider mb-2 md:mb-8">LONDON</span>
            </h1> */}
            <h2 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-loose tracking-wider">
              RELIABLE AUTO REPAIR
            </h2>

            <h2 className="text-gray-300 mt-0 md:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-loose tracking-wider">
              YOU CAN{" "}
              <span className="text-yellow-400 font-medium">TRUST</span>
            </h2>

            <p className="text-gray-200 mt-4 md:mt-6 max-w-xl text-base md:text-lg leading-relaxed">
              We keep your car running smoothly with expert service, honest
              pricing, and fast turnaround.
            </p>
          </div>
        </section>

        {/* ======================= HERO IMAGE + OFFER CARD ======================= */}
        <section className="relative bg-black pb-10 md:pb-14">
            
            {/* Hero Image - Full width */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/aaaa.png"
                alt="Hero Car"
                fill
                className="object-cover"
                priority
              />
            </div>

            <AnimatePresence>
              {visible && (

<motion.div
  key={offers[active].id}
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -40 }}
  transition={{ duration: 0.4 }}
  className="
                    fixed
                    top-[200px] sm:top-[120px] md:top-[180px]
                    right-8 sm:right-8 md:right-12 lg:right-20
                    w-[140px] sm:w-[260px] md:w-[300px] lg:w-[340px]
                    z-[999]
                  "
                >
                  <div className="relative h-[180px] sm:h-[380px] md:h-[420px] lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={offers[active].image}
                      alt="Offer"
                      fill
                      className="object-cover"
                    />

                    <button
                      onClick={() => setVisible(false)}
                      className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-light transition-colors"
                      aria-label="Close offer"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Dots Navigation */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {offers.map((_, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setActive(i)}
                        animate={{
                          width: i === active ? 32 : 8,
                          backgroundColor: i === active ? "#FACC15" : "#6B7280",
                        }}
                        transition={{ duration: 0.3 }}
                        className="h-2 rounded-full cursor-pointer"
                        aria-label={`Go to offer ${i + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </section>

{/* ======================= BRAND LOGOS ======================= */}
<section className="py-10 md:py-14 lg:py-20 bg-black overflow-hidden">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">

    {/* ================= MARQUEE FOR ALL SCREENS ================= */}
<div className="relative w-full overflow-hidden py-4">
  <motion.div
    className="flex items-center w-max"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      ease: "linear",
      duration: 30,
      repeat: Infinity,
    }}
  >
    {/* First set */}
    {[...logos, ...logos].map((logo, idx) => (
      <div
        key={idx}
        className="
          w-[120px] 
          h-[120px] 
          flex-shrink-0 
          flex 
          items-center 
          justify-center 
          mx-4
        "
      >
        <Image
          src={`/${logo}`}
          alt={`Brand ${idx}`}
          width={120}
          height={120}
          className="
            w-[80px] 
            h-[80px] 
            object-contain 
            grayscale 
            hover:grayscale-0 
            transition-all 
            duration-200
          "
        />
      </div>
    ))}
  </motion.div>
</div>


  </div>
</section>

      </>
    );
  }