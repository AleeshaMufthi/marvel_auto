// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Phone, MapPin, Plus, X, Menu } from "lucide-react";
// import { useState } from "react";

// export default function Navbar() {

  
//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services" },
//     { name: "About Us", href: "/about" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Payment & Service History", disabled: true }, // no href
//     { name: "Contact Us", href: "/contact" },
//   ];

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [showForm, setShowForm] = useState(false);
//   const [file, setFile] = useState<File | null>(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const BOOK_NOW_ENABLED = false;

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           <Link href="/">
//             <Image
//               src="/marvel_logo.jpg"
//               alt="Logo"
//               width={100}
//               height={100}
//               className="w-[120px] h-auto"
//             />
//           </Link>
//         </div>

//         {/* Desktop Nav Links */}
//         <div className="hidden lg:flex items-center space-x-6">
//           {navLinks.map((link) =>
//             // If href exists render Link, else render a span (no navigation)
//             link.href ? (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-black hover:text-yellow-400 hover:font-semibold transition-colors duration-200 text-lg"
//               >
//                 {link.name}
//               </Link>
//             ) : (
//               <span
//                 key={link.name}
//                 className="text-black hover:text-yellow-400 hover:font-semibold transition-colors duration-200 text-lg cursor-not-allowed"
//               >
//                 {link.name}
//               </span>
//             )
//           )}
//         </div>

//         {/* Desktop Right Buttons */}
//         <div className="hidden lg:flex items-center space-x-8 mr-8 md:mr-28">

//           <div className="relative group">
//   <a
//     href="https://www.google.com/maps/place/Marvel+Auto+Repair/@42.9883723,-81.1737981,17z/data=!4m6!3m5!1s0x882ef3969fee8b81:0xa73d129e96d1c3f5!8m2!3d42.9883723!4d-81.1737981!16s%2Fg%2F11l2d881mg"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-black hover:text-yellow-400 flex items-center"
//   >
//     <MapPin size={28} />
//   </a>

//   {/* Tooltip */}
//   <span
//     className="
//       absolute left-10 top-1/2 -translate-y-1/2
//       whitespace-nowrap
//       bg-black text-white text-sm px-3 py-1 rounded-md
//       opacity-0 group-hover:opacity-100
//       transition duration-200
//       pointer-events-none
//     "
//   >
//     120 Falcon St #7, London, ON
//   </span>
// </div>


// <div className="relative group">
//   <a
//     href="tel:+12266376785"
//     className="text-black hover:text-yellow-400 flex items-center"
//   >
//     <Phone size={28} />
//   </a>

//   {/* Tooltip */}
//   <span
//     className="
//       absolute left-10 top-1/2 -translate-y-1/2
//       whitespace-nowrap
//       bg-black text-white text-sm px-3 py-1 rounded-md
//       opacity-0 group-hover:opacity-100
//       transition duration-200
//       pointer-events-none
//     "
//   >
//     (226) 637-6785
//   </span>
// </div>


//           {/* Book Now kept as visual-only (no action) */}
//           <button
//             onClick={(e) => {
//               // prevent default and don't open form
//               e.preventDefault();
//             }}
//             className="font-semibold rounded-full border-2 border-yellow-400 px-6 py-3 transition text-black hover:bg-yellow-400"
//           >
//             Book Now
//           </button>

//           <Link href="/getquote"
//              className="font-semibold rounded-full bg-yellow-400 text-black px-6 py-3 hover:bg-yellow-300 transition">
//               Get Your Quote  
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden flex items-center">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
//             {menuOpen ? <X size={30} /> : <Menu size={30} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
//           <div className="flex flex-col px-6 py-4 space-y-4">
//             {navLinks.map((link) =>
//               link.href ? (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="text-black text-lg font-medium hover:text-yellow-400 transition"
//                 >
//                   {link.name}
//                 </Link>
//               ) : (
//                 <span
//                   key={link.name}
//                   className="text-black text-lg font-medium cursor-not-allowed"
//                 >
//                   {link.name}
//                 </span>
//               )
//             )}

//             {/* Mobile Icons */}
//             <div className="flex items-center justify-start gap-4 pt-4 border-t border-gray-200">
//           <div className="relative group">
//   <a
//     href="https://www.google.com/maps/place/Marvel+Auto+Repair/@42.9883723,-81.1737981,17z/data=!4m6!3m5!1s0x882ef3969fee8b81:0xa73d129e96d1c3f5!8m2!3d42.9883723!4d-81.1737981!16s%2Fg%2F11l2d881mg"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-black hover:text-yellow-400 flex items-center"
//   >
//     <MapPin size={24} />
//   </a>

//   {/* Tooltip */}
//   <span
//     className="
//       absolute left-10 top-1/2 -translate-y-1/2
//       whitespace-nowrap
//       bg-black text-white text-sm px-3 py-1 rounded-md
//       opacity-0 group-hover:opacity-100
//       transition duration-200
//       pointer-events-none
//     "
//   >
//     120 Falcon St #7, London, ON
//   </span>
// </div>

//               <div className="relative group">
//   <a
//     href="tel:+12266376785"
//     className="text-black hover:text-yellow-400 flex items-center"
//   >
//     <Phone size={24} />
//   </a>

//   {/* Tooltip */}
//   <span
//     className="
//       absolute left-10 top-1/2 -translate-y-1/2
//       whitespace-nowrap
//       bg-black text-white text-sm px-3 py-1 rounded-md
//       opacity-0 group-hover:opacity-100
//       transition duration-200
//       pointer-events-none
//     "
//   >
//     (226) 637-6785
//   </span>
// </div>
//             </div>

//             {/* Mobile Book Now – visual-only */}
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//               }}
//               className="w-full border-2 border-yellow-400 font-semibold rounded-full py-3 text-black hover:bg-yellow-400 transition"
//             >
//               Book Now
//             </button>

//             <Link 
//             href="/getquote" 
//             onClick={() => setMenuOpen(false)}
//             className="w-full text-center bg-yellow-400 text-black font-semibold rounded-full py-3 hover:bg-yellow-300 transition">
//                 Get Your Quote
//             </Link>
//           </div>
//         </div>
//       )}

//       {/* Keep popup but unreachable */}
//       {showForm && (
//         <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm">
//           <div className="relative bg-black text-white rounded-xl shadow-2xl w-full max-w-3xl mx-4 overflow-hidden border-t-4 border-yellow-400">
//             <button
//             type="button"
//               onClick={() => setShowForm(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition"
//             >
//               <X size={28} />
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, X, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Payment & Service History", disabled: true },
    { name: "Contact Us", href: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* =======================
          TOP WHITE BAR
      ======================== */}
      <div className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/marvel_logo.jpg"
              alt="Marvel Auto"
              width={90}
              height={90}
              className="w-[90px] h-auto"
            />
            <h1 className="text-2xl font-bold text-black">
              Marvel Auto <span className="text-yellow-400">London</span>
            </h1>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-black"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* =======================
          YELLOW RIBBON BAR
      ======================== */}
      <div className="bg-yellow-400">
        <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black font-medium hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              ) : (
                <span
                  key={link.name}
                  className="text-black font-medium cursor-not-allowed opacity-70"
                >
                  {link.name}
                </span>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Location */}
            <div className="relative group">
              <a
                href="https://www.google.com/maps/place/Marvel+Auto+Repair/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <MapPin size={26} />
              </a>
              <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                120 Falcon St #7, London, ON
              </span>
            </div>

            {/* Phone */}
            <div className="relative group">
              <a href="tel:+12266376785" className="text-black">
                <Phone size={26} />
              </a>
              <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                (226) 637-6785
              </span>
            </div>

            {/* Buttons */}
            <button className="border-2 border-black px-5 py-2 rounded-full font-semibold hover:bg-black hover:text-yellow-400 transition">
              Book Now
            </button>

            <Link
              href="/getquote"
              className="bg-black text-yellow-400 px-5 py-2 rounded-full font-semibold hover:bg-gray-900 transition"
            >
              Get Your Quote
            </Link>
          </div>
        </div>
      </div>

      {/* =======================
          MOBILE MENU
      ======================== */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-black text-lg font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <span
                  key={link.name}
                  className="text-black text-lg font-medium opacity-70"
                >
                  {link.name}
                </span>
              )
            )}

            <div className="relative group">
              <a
                href="https://www.google.com/maps/place/Marvel+Auto+Repair/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <MapPin size={26} />
              </a>
              <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                120 Falcon St #7, London, ON
              </span>
            </div>

            {/* Phone */}
            <div className="relative group">
              <a href="tel:+12266376785" className="text-black">
                <Phone size={26} />
              </a>
              <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                (226) 637-6785
              </span>
            </div>

            <Link
              href="/getquote"
              onClick={() => setMenuOpen(false)}
              className="bg-yellow-400 text-black font-semibold rounded-full py-3 text-center"
            >
              Get Your Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

