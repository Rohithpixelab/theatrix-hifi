"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { PortfolioProject } from "@/lib/payload";

interface ProjectDetailClientProps {
  currentProject: PortfolioProject;
  nextProject: PortfolioProject;
  prevProject: PortfolioProject;
}

export default function ProjectDetailClient({
  currentProject,
  nextProject,
  prevProject,
}: ProjectDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const gallery =
    currentProject.gallery && currentProject.gallery.length > 0
      ? currentProject.gallery
      : [currentProject.image];

  const equipment = currentProject.equipment || ["Custom Audio-Visual Solution"];

  return (
    <div className="flex flex-col min-h-screen bg-[#09090b]">
      {/* Top Header Bar (← Portfolio | Prev Next →) */}
      <div className="bg-[#09090b] border-b border-white/5 py-4">
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-outfit font-medium text-xs sm:text-sm text-[#b1b1b2] hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Portfolio</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href={`/portfolio/${prevProject.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/10 bg-white/5 font-outfit font-medium text-xs text-[#b1b1b2] hover:text-white hover:border-white/20 transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Prev</span>
            </Link>

            <Link
              href={`/portfolio/${nextProject.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/10 bg-white/5 font-outfit font-medium text-xs text-white hover:border-white/20 transition-all"
            >
              <span>Next</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-10 md:py-14 bg-[#09090b]">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column (Image Viewer & Thumbnails) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Viewer */}
            <div className="relative h-[340px] sm:h-[440px] lg:h-[480px] w-full rounded-xl overflow-hidden border border-white/10 bg-[#121215] shadow-2xl group">
              <Image
                src={gallery[activeImageIndex] || currentProject.image}
                alt={currentProject.title}
                fill
                className="object-cover transition-transform duration-500"
              />

              {/* Top-Left Image Counter Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-md font-outfit font-semibold text-xs text-white/90">
                {activeImageIndex + 1} / {gallery.length}
              </div>

              {/* Next Slide Arrow Button */}
              {gallery.length > 1 && (
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev + 1) % gallery.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            {/* Gallery Thumbnails Row */}
            {gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? "border-[#C82127] opacity-100"
                        : "border-white/10 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column (Project Details Panel) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Category & Year Row */}
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#C82127] rounded font-outfit font-extrabold text-[10px] tracking-wider uppercase text-white shadow-sm">
                  {currentProject.category}
                </span>
                <span className="font-outfit font-semibold text-xs text-[#b1b1b2]">
                  {currentProject.year}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                {currentProject.title}
              </h1>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-inter text-[#b1b1b2]">
                <svg className="w-4 h-4 text-[#b1b1b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{currentProject.location}</span>
              </div>

              <div className="h-[1px] bg-white/10 w-full" />

              {/* Description */}
              <p className="font-inter font-normal text-sm sm:text-base text-[#b1b1b2] leading-relaxed">
                {currentProject.description}
              </p>

              <div className="h-[1px] bg-white/10 w-full" />

              {/* Key Equipment List */}
              <div className="space-y-3">
                <span className="font-outfit font-bold text-xs uppercase tracking-wider text-[#b1b1b2] block">
                  KEY EQUIPMENT
                </span>

                <ul className="space-y-2.5 font-inter text-sm text-[#d0d0d5]">
                  {equipment.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C82127] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                href="tel:+918943585212"
                text="Contact us now"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Bottom Section */}
      <section className="py-12 bg-[#09090b] border-t border-white/5">
        <div className="max-w-[1240px] mx-auto px-6 space-y-4">
          <span className="font-outfit font-bold text-xs uppercase tracking-wider text-[#b1b1b2] block">
            NEXT PROJECT
          </span>

          <Link
            href={`/portfolio/${nextProject.id}`}
            className="group max-w-[540px] bg-[#111115] hover:bg-[#16161c] border border-white/5 hover:border-white/15 rounded-xl p-4 flex items-center justify-between transition-all cursor-pointer shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-[#1a1a20] shrink-0">
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <div className="space-y-1">
                <h4 className="font-outfit font-bold text-sm text-white group-hover:text-[#C82127] transition-colors">
                  {nextProject.title}
                </h4>
                <p className="font-inter text-xs text-[#b1b1b2]">
                  {nextProject.category} · {nextProject.location}
                </p>
              </div>
            </div>

            <svg className="w-5 h-5 text-[#b1b1b2] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
