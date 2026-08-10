import Image from "next/image";

interface CtaBannerProps {
  onOpenConsultation: () => void;
}

export default function CtaBanner({ onOpenConsultation }: CtaBannerProps) {
  return (
    <section className="relative w-full py-24 bg-[#111115] overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <Image
          src="/assets/cta-bg.png"
          alt="CTA background"
          fill
          className="object-cover"
        />
      </div>

      {/* Linear Gradient Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(160deg, rgba(10, 10, 12, 0.95) 0%, rgba(19, 10, 12, 0.8) 25%, rgba(34, 10, 12, 0.6) 50%, rgba(89, 10, 11, 0.35) 85%, rgba(140, 10, 10, 0.2) 100%)",
        }}
      />

      {/* Red Glow Radial Background */}
      <div
        className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[600px] h-[350px] pointer-events-none opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(224,32,32,0.4) 0%, rgba(224,32,32,0) 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center space-y-6">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e02020]/10 border border-[#e02020]/30 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e02020] animate-pulse" />
          <span className="font-outfit font-bold text-xs md:text-sm text-[#e02020]">
            Now Accepting New Projects
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-[48px] text-[#f0f0f2] leading-[1.2]">
          Ready to Build Your
          <br />
          <span className="text-[#e02020]">Dream Theatre?</span>
        </h2>

        {/* Paragraph */}
        <p className="font-inter font-medium text-base sm:text-lg text-[#f0f0f2]/60 max-w-[520px] mx-auto leading-[30px]">
          Book a free, no-obligation consultation with our design team. We&apos;ll assess
          your space, discuss your vision, and build a proposal tailored to you.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-[#e02020] hover:bg-[#c01818] border-2 border-[#e02020] rounded-md font-outfit font-bold text-sm text-[#f0f0f2] transition-all hover:shadow-xl hover:shadow-[#e02020]/30 active:scale-95"
          >
            Get Started
          </button>

          <a
            href="https://wa.me/918943585212"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#25D366]/20 border-2 border-[#25D366]/40 hover:bg-[#25D366]/30 rounded-md font-outfit font-semibold text-sm text-[#f0f0f2] transition-all flex items-center gap-2.5 active:scale-95"
          >
            <Image
              src="/assets/icon-whatsapp.svg"
              alt="WhatsApp"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
