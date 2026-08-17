"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Button from "./Button";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isPortfolioActive = pathname?.startsWith("/portfolio");

  return (
    <header className="sticky top-0 z-40 w-full bg-[#111115]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 py-1.5 md:py-2 min-h-[60px] md:min-h-[64px] flex items-center justify-between relative">
        {/* Logo */}
        <Logo href="/" size="xl" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className={`px-3.5 py-1.5 font-outfit font-bold text-sm rounded-md transition-colors ${
              isHomeActive
                ? "text-white bg-white/10 shadow-sm"
                : "text-[#b1b1b2] hover:text-[#f0f0f2] hover:bg-white/5"
            }`}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className={`px-3.5 py-1.5 font-outfit font-bold text-sm rounded-md transition-colors ${
              isPortfolioActive
                ? "text-white bg-white/10 shadow-sm"
                : "text-[#b1b1b2] hover:text-[#f0f0f2] hover:bg-white/5"
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/#cta"
            className="px-3.5 py-1.5 font-outfit font-bold text-sm text-[#b1b1b2] hover:text-[#f0f0f2] rounded-md transition-colors hover:bg-white/5"
          >
            Contact
          </Link>
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

          <Button
            variant="whatsapp"
            href="https://wa.me/918943585212"
            target="_blank"
            size="md"
            text="Chat on WhatsApp"
          />
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="whatsapp"
            href="https://wa.me/918943585212"
            target="_blank"
            size="sm"
            text="Chat"
          />
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
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-outfit font-bold text-sm py-1.5 px-3 rounded-md transition-colors ${
              isHomeActive ? "text-white bg-white/10" : "text-[#b1b1b2] hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-outfit font-bold text-sm py-1.5 px-3 rounded-md transition-colors ${
              isPortfolioActive ? "text-white bg-white/10" : "text-[#b1b1b2] hover:text-white"
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-outfit font-bold text-sm text-[#b1b1b2] hover:text-white py-1.5 px-3"
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a href="tel:+918943585212" className="p-2.5 bg-white/5 rounded-full flex items-center gap-2 font-outfit text-xs font-semibold text-gray-300">
              <Image src="/assets/icon-phone1.svg" alt="Phone" width={18} height={18} />
              <span>Call Us</span>
            </a>
            <Button
              variant="whatsapp"
              href="https://wa.me/918943585212"
              target="_blank"
              size="sm"
              text="Chat on WhatsApp"
            />
          </div>
        </div>
      )}
    </header>
  );
}
