import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The team at TheatrixHifi transformed our basement into a genuine cinema experience. The calibration alone took three hours — that level of attention to detail is rare.",
      name: "Rajan Menon",
      location: "Private Home Theatre, Kakkanad",
    },
    {
      quote:
        "I was skeptical that a room upgrade could make my audio system sound so different. Their acoustic treatment work revealed layers I had never heard before. Phenomenal.",
      name: "Priya Nair",
      location: "HiFi Listening Room, Marine Drive",
    },
    {
      quote:
        "From the consultation to final handover, the whole process was professional and transparent. Our hotel lobby now sounds as good as it looks.",
      name: "Suresh Pillai",
      location: "Commercial AV, Heritage Hotel Kochi",
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-[#0d0d10] py-20 lg:py-28 text-[#f0f0f2]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-[2px] bg-[#C82127]" />
            <span className="font-outfit font-bold text-sm text-[#C82127]">
              Testimonials
            </span>
          </div>

          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#f0f0f2] tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#050507] border border-white/5 rounded-xl p-[28px] py-[32px] flex flex-col justify-between hover:border-[#e02020]/30 transition-all duration-300 shadow-md"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/assets/icon-star.svg"
                      alt="Star"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-inter italic font-medium text-sm md:text-base text-[#b1b1b2] leading-[28px] mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-5 border-t border-white/5">
                <p className="font-outfit font-bold text-sm text-[#f0f0f2]">
                  {t.name}
                </p>
                <p className="font-inter font-medium text-xs text-[#b1b1b2] mt-0.5">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
