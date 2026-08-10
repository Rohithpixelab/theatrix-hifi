"use client";

import { useState } from "react";
import Image from "next/image";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#111115]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col group">
          <span className="font-outfit font-extrabold text-[20px] text-[#f0f0f2] tracking-[2.4px] leading-tight">
            THEATRIX
          </span>
          <span className="font-outfit font-semibold text-[10px] text-[#e02020] tracking-[3.5px] leading-tight -mt-0.5">
            HiFi
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          <a
            href="#"
            className="px-3 py-1.5 font-outfit font-bold text-sm text-[#f0f0f2] rounded-md transition-colors hover:text-white hover:bg-white/5"
          >
            Home
          </a>
          <a
            href="#services"
            className="px-3 py-1.5 font-outfit font-bold text-sm text-[#b1b1b2] hover:text-[#f0f0f2] rounded-md transition-colors hover:bg-white/5"
          >
            What We Do
          </a>
          <a
            href="#portfolio"
            className="px-3 py-1.5 font-outfit font-bold text-sm text-[#b1b1b2] hover:text-[#f0f0f2] rounded-md transition-colors hover:bg-white/5"
          >
            Portfolio
          </a>
          <a
            href="#why-us"
            className="px-3 py-1.5 font-outfit font-bold text-sm text-[#b1b1b2] hover:text-[#f0f0f2] rounded-md transition-colors hover:bg-white/5"
          >
            Brands We Carry
          </a>
          <a
            href="#process"
            className="px-3 py-1.5 font-outfit font-bold text-sm text-[#b1b1b2] hover:text-[#f0f0f2] rounded-md transition-colors hover:bg-white/5"
          >
            About
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 font-outfit font-bold text-sm text-[#b1b1b2] hover:text-[#f0f0f2] rounded-md transition-colors hover:bg-white/5"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons & CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+918943585212"
            title="Call Us"
            className="w-9 h-9 border border-white/12 rounded-full flex items-center justify-center transition-colors hover:border-[#e02020] hover:bg-[#e02020]/10"
          >
            <Image
              src="/assets/icon-phone1.svg"
              alt="Phone"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
          </a>

          <a
            href="https://wa.me/918943585212"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Us"
            className="w-9 h-9 border border-white/12 rounded-full flex items-center justify-center transition-colors hover:border-[#25D366] hover:bg-[#25D366]/10"
          >
            <Image
              src="/assets/icon-whatsapp2.svg"
              alt="WhatsApp"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
          </a>

          <button
            onClick={onOpenConsultation}
            className="px-4 py-2.5 bg-[#e02020] hover:bg-[#c01818] border-2 border-[#e02020] rounded-md font-outfit font-bold text-xs md:text-sm text-[#f0f0f2] transition-all hover:shadow-lg hover:shadow-[#e02020]/25 active:scale-95"
          >
            Book a Free Consultation
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenConsultation}
            className="px-3 py-1.5 bg-[#e02020] rounded font-outfit font-bold text-xs text-white"
          >
            Book Free
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0d0d10] px-6 py-4 space-y-3 animate-in slide-in-from-top-2">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-outfit font-bold text-sm text-white py-1"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-outfit font-bold text-sm text-[#b1b1b2] hover:text-white py-1"
          >
            What We Do
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-outfit font-bold text-sm text-[#b1b1b2] hover:text-white py-1"
          >
            Portfolio
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-outfit font-bold text-sm text-[#b1b1b2] hover:text-white py-1"
          >
            Brands We Carry
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-outfit font-bold text-sm text-[#b1b1b2] hover:text-white py-1"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-outfit font-bold text-sm text-[#b1b1b2] hover:text-white py-1"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-3">
              <a href="tel:+918943585212" className="p-2 bg-white/5 rounded-full">
                <Image src="/assets/icon-phone1.svg" alt="Phone" width={18} height={18} />
              </a>
              <a href="https://wa.me/918943585212" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full">
                <Image src="/assets/icon-whatsapp2.svg" alt="WhatsApp" width={18} height={18} />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="px-4 py-2 bg-[#e02020] font-outfit font-bold text-xs text-white rounded"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
