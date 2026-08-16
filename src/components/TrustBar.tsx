import React from "react";
import Image from "next/image";

export default function TrustBar() {
  const brands = [
    { name: "Sony", src: "/assets/brands/Sony1.svg", alt: "Sony Logo" },
    { name: "Denon", src: "/assets/brands/denon.svg", alt: "Denon Logo" },
    { name: "Marantz", src: "/assets/brands/Marantz.svg", alt: "Marantz Logo" },
    { name: "JBL", src: "/assets/brands/jbl.svg", alt: "JBL Logo" },
    { name: "KEF", src: "/assets/brands/kef.svg", alt: "KEF Logo" },
    { name: "Yamaha", src: "/assets/brands/yamaha.svg", alt: "Yamaha Logo" },
    { name: "Pioneer", src: "/assets/brands/Pioneer.svg", alt: "Pioneer Logo" },
    { name: "Onkyo", src: "/assets/brands/Onkyo.svg", alt: "Onkyo Logo" },
    { name: "BenQ", src: "/assets/brands/BenQ-Logo 1.svg", alt: "BenQ Logo" },
    { name: "Epson", src: "/assets/brands/epson.svg", alt: "Epson Logo" },
  ];

  // Triple brands array to create a 100% seamless infinite loop
  const marqueeBrands = [...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-[#C82127] text-white py-4 md:py-5 shadow-lg overflow-hidden relative select-none z-20">
      {/* Left & Right red gradient edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#C82127] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#C82127] to-transparent z-10 pointer-events-none" />

      {/* Auto-scrolling marquee track */}
      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 md:gap-16">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center shrink-0 px-2 py-1 group cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={120}
                height={40}
                className="h-7 md:h-9 w-auto object-contain brightness-200 opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
