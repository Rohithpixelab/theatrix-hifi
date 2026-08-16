import Image from "next/image";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      num: "01",
      title: "Premium Quality",
      desc: "Every component we specify is sourced from world-class manufacturers — no compromises on the signal chain.",
    },
    {
      num: "02",
      title: "Expert Installation",
      desc: "Our certified technicians bring years of hands-on experience to every cable run, mount, and calibration.",
    },
    {
      num: "03",
      title: "Cutting-Edge Technology",
      desc: "We stay ahead of the curve so you get the latest in 4K/8K projection, immersive audio, and smart control.",
    },
    {
      num: "04",
      title: "Personalized Service",
      desc: "No two rooms are the same. We design around your space, your taste, and your budget — every single time.",
    },
  ];

  return (
    <section id="why-us" className="w-full bg-[#0d0d10] py-20 lg:py-28 text-[#f0f0f2]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-[2px] bg-[#C82127]" />
            <span className="font-outfit font-bold text-sm text-[#C82127]">
              Why Choose Us
            </span>
          </div>

          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-[48px] text-[#f0f0f2] max-w-[500px]">
            The TheatrixHifi Difference
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#050507] border border-white/5 rounded-xl p-[28px] py-[32px] overflow-hidden group hover:border-[#C82127]/30 transition-all duration-300 shadow-md"
            >
              {/* Check Icon */}
              <div className="w-9 h-9 bg-[#C82127]/10 rounded-full flex items-center justify-center mb-5 border border-[#C82127]/20">
                <Image
                  src="/assets/icon-check.svg"
                  alt="Check"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </div>

              {/* Title & Desc */}
              <h3 className="font-outfit font-bold text-base text-[#f0f0f2] mb-2.5">
                {item.title}
              </h3>

              <p className="font-inter font-medium text-xs md:text-sm text-[#f0f0f2]/50 leading-[20px]">
                {item.desc}
              </p>

              {/* Big Translucent Number */}
              <span className="absolute top-3 right-4 font-outfit font-extrabold text-5xl text-[#C82127]/10 select-none pointer-events-none group-hover:text-[#C82127]/20 transition-colors">
                {item.num}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
