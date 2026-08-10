export default function OurProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "We listen to your vision, assess the space, and understand your budget and goals.",
    },
    {
      num: "02",
      title: "Design",
      desc: "Our team creates a custom room layout, equipment selection, and acoustic plan tailored to you.",
    },
    {
      num: "03",
      title: "Installation",
      desc: "Certified technicians handle every cable, mount, and connection with precision and care.",
    },
    {
      num: "04",
      title: "Calibration",
      desc: "We dial in the system — display geometry, audio imaging, and room correction — to reference standard.",
    },
    {
      num: "05",
      title: "Support",
      desc: "Post-installation support, firmware updates, and ongoing assistance whenever you need us.",
    },
  ];

  return (
    <section id="process" className="w-full bg-[#050507] py-20 lg:py-28 text-[#f0f0f2]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-[2px] bg-[#e02020]" />
            <span className="font-outfit font-bold text-sm text-[#e02020]">
              How It Works
            </span>
          </div>

          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-[48px] text-[#f0f0f2]">
            Our Process
          </h2>

          <p className="font-inter font-medium text-sm text-[#b1b1b2]">
            Five steps from brief to breathtaking.
          </p>
        </div>

        {/* Steps Grid with Timeline Line */}
        <div className="relative mt-16">
          {/* Horizontal Line behind icons on desktop */}
          <div
            className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px pointer-events-none z-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(224, 32, 32, 0) 0%, rgba(224, 32, 32, 0.4) 33%, rgba(224, 32, 32, 0.4) 66%, rgba(224, 32, 32, 0) 100%)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                {/* Circle Number Badge */}
                <div className="w-14 h-14 rounded-full bg-[#e02020]/10 border border-[#e02020]/40 flex items-center justify-center shadow-lg group-hover:bg-[#e02020] transition-colors duration-300">
                  <span className="font-outfit font-extrabold text-sm text-[#e02020] tracking-wider group-hover:text-white transition-colors">
                    {st.num}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-outfit font-bold text-base text-[#f0f0f2]">
                  {st.title}
                </h3>

                {/* Step Description */}
                <p className="font-inter font-medium text-xs md:text-sm text-[#b1b1b2] leading-[20px]">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
