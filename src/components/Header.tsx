"use client";

import { useState } from "react";
import Image from "next/image";

import Logo from "./Logo";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#111115]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 py-1.5 md:py-2 min-h-[60px] md:min-h-[64px] flex items-center justify-between relative">
        {/* Logo */}
        <Logo href="#" size="xl" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
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
            className="w-9 h-9 border border-white/12 rounded-full flex items-center justify-center transition-colors hover:border-[#C82127] hover:bg-[#C82127]/10"
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
            className="px-5 py-2.5 bg-[#25D366]/20 border-2 border-[#25D366]/40 hover:bg-[#25D366]/30 rounded-md font-outfit font-semibold text-xs md:text-sm text-[#f0f0f2] transition-all flex items-center gap-2.5 active:scale-95"
          >
            <Image
              src="/assets/icon-whatsapp.svg"
              alt="WhatsApp"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://wa.me/918943585212"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-[#25D366]/20 border-2 border-[#25D366]/40 hover:bg-[#25D366]/30 rounded-md font-outfit font-semibold text-xs text-[#f0f0f2] transition-all flex items-center gap-2 active:scale-95"
          >
            <Image
              src="/assets/icon-whatsapp.svg"
              alt="WhatsApp"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Chat</span>
          </a>
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
            <a href="tel:+918943585212" className="p-2.5 bg-white/5 rounded-full flex items-center gap-2 font-outfit text-xs font-semibold text-gray-300">
              <Image src="/assets/icon-phone1.svg" alt="Phone" width={18} height={18} />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/918943585212"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#25D366]/20 border-2 border-[#25D366]/40 hover:bg-[#25D366]/30 rounded-md font-outfit font-semibold text-xs text-[#f0f0f2] transition-all flex items-center gap-2 active:scale-95"
            >
              <Image src="/assets/icon-whatsapp.svg" alt="WhatsApp" width={16} height={16} className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
