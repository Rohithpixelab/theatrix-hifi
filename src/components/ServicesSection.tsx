import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      icon: "/assets/icon-theatre.svg",
      title: "Custom Home Theatre",
      desc: "Cinema-grade screens, projection, and surround sound systems designed and calibrated for your space.",
    },
    {
      icon: "/assets/icon-hifi.svg",
      title: "HiFi Audio",
      desc: "Two-channel and multi-room audio systems built around world-class components for true audiophile sound.",
    },
    {
      icon: "/assets/icon-acoustic.svg",
      title: "Acoustic Treatments",
      desc: "Room acoustics engineered to eliminate echo, control bass, and unlock your system's full potential.",
    },
    {
      icon: "/assets/icon-automation.svg",
      title: "Home Automation",
      desc: "One-touch control over lighting, climate, security, and entertainment — all from your phone.",
    },
    {
      icon: "/assets/icon-commercial.svg",
      title: "Commercial Audio & Video",
      desc: "AV systems for hotels, restaurants, offices, and event spaces, built for reliability at scale.",
    },
  ];

  return (
    <section id="services" className="w-full bg-[#111115] py-20 lg:py-28 text-[#f0f0f2]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-[580px] space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-[2px] bg-[#e02020]" />
            <span className="font-outfit font-bold text-sm text-[#e02020]">
              What We Do
            </span>
          </div>

          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-[48px] leading-[1.2] text-[#f0f0f2]">
            Every Service, Perfected
            <br />
            From First Spec to Final Note.
          </h2>

          <p className="font-inter font-medium text-base text-[#b1b1b2] leading-[28px]">
            Whether you&apos;re building a dedicated cinema room or fitting out a hotel
            ballroom, we bring the same obsessive attention to detail to every project.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-[#0d0d10] border border-white/10 rounded-xl p-7 flex flex-col justify-between hover:border-[#e02020]/40 transition-all duration-300 hover:-translate-y-1 group shadow-lg shadow-black/40"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-14 h-14 bg-[#e02020]/10 border border-[#e02020]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#e02020]/20 transition-colors">
                  <Image
                    src={srv.icon}
                    alt={srv.title}
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </div>

                <h3 className="font-outfit font-bold text-base text-[#f0f0f2] mb-2.5">
                  {srv.title}
                </h3>

                <p className="font-inter font-medium text-xs md:text-sm text-[#b1b1b2] leading-[20px]">
                  {srv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
