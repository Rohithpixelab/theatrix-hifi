"use client";

import Image from "next/image";
import Button from "./Button";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[1000px] w-full flex items-center overflow-hidden bg-[#111115]">
      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/assets/hero.png"
          alt="Home Theatre Setup"
          fill
          priority
          className="object-cover object-center brightness-90 scale-105"
        />
        {/* Figma linear gradients */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(10, 10, 12, 0.80) 0%, rgba(10, 10, 12, 0.00) 60%), linear-gradient(90deg, rgba(10, 10, 12, 0.95) 32.21%, rgba(10, 10, 12, 0.55) 53.37%)",
          }}
        />
        {/* Radial ambient glow */}
        <div
          className="absolute left-[-100px] bottom-[100px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(200,33,39,0.3) 0%, rgba(200,33,39,0) 70%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-20 lg:py-32 w-full">
        <div className="max-w-[728px] space-y-6">
          {/* Section Subhead Label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1.5px] bg-[#C82127]" />
            <span className="font-outfit font-semibold text-xs md:text-[11px] text-[#C82127] tracking-[2.42px] uppercase">
              Kerala&apos;s Premier AV Specialists
            </span>
          </div>

          {/* Heading 1 */}
          <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] text-[#f0f0f2] tracking-tight">
            Transform Your Home
            <br />
            Into a{" "}
            <span className="relative inline-block text-[#C82127]">
              Cinematic
              {/* Red underline accent from Figma */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C82127] to-transparent" />
            </span>{" "}
            Wonderland.
          </h1>

          {/* Paragraph */}
          <p className="font-inter font-medium text-base md:text-[16px] leading-[28px] text-[#b1b1b2] max-w-[560px]">
            Kerala&apos;s trusted name in custom home theatres, HiFi audio, and smart home
            automation — designed, installed, and calibrated by certified specialists.
          </p>

          {/* CTA Button Group */}
          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <Button
              variant="primary"
              size="lg"
              href="tel:+918943585212"
              text="Contact us now"
            />
            <Button
              variant="outlined"
              size="lg"
              href="/portfolio"
              text="View Our Work"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
