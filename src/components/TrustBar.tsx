export default function TrustBar() {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "200+", label: "Installations Completed" },
    { value: "Certified", label: "Technicians" },
    { value: "Kochi-Based", label: "Showroom" },
  ];

  return (
    <section className="w-full bg-[#e02020] text-[#f0f0f2] shadow-md">
      <div className="max-w-[1280px] mx-auto px-6 py-5 md:py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-[#f2d2d2]/30">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center px-4 py-2"
            >
              <span className="font-outfit font-bold text-xl md:text-[20px] leading-tight text-white">
                {item.value}
              </span>
              <span className="font-outfit font-bold text-xs md:text-[14px] leading-tight text-[#f0f0f2]/90 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
