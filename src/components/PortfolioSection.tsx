import Image from "next/image";

interface PortfolioSectionProps {
  onOpenConsultation: () => void;
}

export default function PortfolioSection({ onOpenConsultation }: PortfolioSectionProps) {
  const projects = [
    {
      image: "/assets/portfolio-kakkanad.png",
      tag: "Home Theatre",
      title: "Private Cinema — Kakkanad Residence",
    },
    {
      image: "/assets/portfolio-marinedrive.png",
      tag: "HiFi Audio",
      title: "Audiophile Listening Room — Marine Drive",
    },
    {
      image: "/assets/portfolio-panampilly.png",
      tag: "Home Theatre",
      title: "Luxury Screening Room — Panampilly Nagar",
    },
    {
      image: "/assets/portfolio-edappally.png",
      tag: "Home Automation",
      title: "Smart Home Integration — Edappally Villa",
    },
  ];

  return (
    <section id="portfolio" className="w-full bg-[#050507] py-20 lg:py-28 text-[#f0f0f2]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top bar with heading and right link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-[552px]">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-[2px] bg-[#e02020]" />
              <span className="font-outfit font-bold text-sm text-[#e02020]">
                Our Work
              </span>
            </div>

            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-[48px] text-[#f0f0f2]">
              Recent Installations
            </h2>

            <p className="font-inter font-medium text-base text-[#b1b1b2]">
              A look at the theatres, listening rooms, and smart homes we&apos;ve brought to life.
            </p>
          </div>

          <a
            href="#portfolio"
            className="inline-flex items-center px-5 py-2.5 border border-[#e02020]/30 rounded-md font-outfit font-bold text-sm text-[#e02020] hover:bg-[#e02020]/10 transition-colors w-fit"
          >
            View Full Portfolio →
          </a>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative h-[342px] bg-[#0d0d10] rounded-xl overflow-hidden border border-white/5 hover:border-[#e02020]/40 transition-all duration-300 shadow-xl"
            >
              {/* Cover Image */}
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/40 to-transparent pointer-events-none" />

              {/* Card Footer Content */}
              <div className="absolute bottom-5 left-5 right-5 space-y-2">
                <span className="inline-block px-3 py-1 bg-[#e02020]/15 border border-[#e02020]/30 rounded font-outfit font-bold text-xs text-[#e02020]">
                  {proj.tag}
                </span>

                <h3 className="font-outfit font-bold text-lg md:text-xl text-[#f0f0f2] drop-shadow-md">
                  {proj.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Center CTA Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 bg-[#e02020] hover:bg-[#c01818] border-2 border-[#e02020] rounded-md font-outfit font-bold text-sm text-[#f0f0f2] shadow-lg shadow-[#e02020]/20 transition-all hover:scale-105"
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
