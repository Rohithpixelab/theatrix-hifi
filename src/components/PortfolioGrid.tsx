"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioProject } from "@/lib/payload";

interface PortfolioGridProps {
  initialProjects: PortfolioProject[];
}

export default function PortfolioGrid({ initialProjects }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { label: "All", key: "All", count: initialProjects.length },
    {
      label: "Home Theatre",
      key: "Home Theatre",
      count: initialProjects.filter((p) => p.category === "Home Theatre").length,
    },
    {
      label: "HiFi Audio",
      key: "HiFi Audio",
      count: initialProjects.filter((p) => p.category === "HiFi Audio").length,
    },
    {
      label: "Acoustic Treatments",
      key: "Acoustic Treatments",
      count: initialProjects.filter((p) => p.category === "Acoustic Treatments").length,
    },
    {
      label: "Home Automation",
      key: "Home Automation",
      count: initialProjects.filter((p) => p.category === "Home Automation").length,
    },
    {
      label: "Commercial AV",
      key: "Commercial AV",
      count: initialProjects.filter((p) => p.category === "Commercial AV").length,
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Chips */}
      <div className="flex items-center justify-start flex-wrap gap-2.5 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-full font-outfit font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
              activeCategory === cat.key
                ? "bg-[#C82127] text-white shadow-md shadow-[#C82127]/25"
                : "bg-[#111115] text-[#b1b1b2] hover:text-white hover:bg-white/5 border border-white/10"
            }`}
          >
            <span>{cat.label}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                activeCategory === cat.key
                  ? "bg-white/20 text-white"
                  : "bg-white/10 text-[#b1b1b2]"
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* 3-Column Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <Link
            key={proj.id}
            href={`/portfolio/${proj.id}`}
            className="group relative bg-[#0c0c0e] rounded-xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 shadow-xl flex flex-col justify-between block cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-[240px] sm:h-[260px] w-full overflow-hidden bg-[#15151a]">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-90" />

              {/* Category Badge */}
              <span className="absolute top-4 left-4 px-2.5 py-1 bg-black/60 border border-[#C82127]/50 backdrop-blur-md rounded font-outfit font-extrabold text-[10px] uppercase tracking-wider text-[#C82127]">
                {proj.category}
              </span>

              {/* Featured Badge */}
              {proj.featured && (
                <span className="absolute top-4 right-4 px-2.5 py-1 bg-[#C82127] rounded font-outfit font-extrabold text-[10px] uppercase tracking-wider text-white shadow-md">
                  FEATURED
                </span>
              )}
            </div>

            {/* Bottom Content Container */}
            <div className="p-5 bg-[#0c0c0e] space-y-2.5 z-10">
              <h3 className="font-outfit font-bold text-base md:text-lg text-white leading-snug group-hover:text-[#C82127] transition-colors">
                {proj.title}
              </h3>

              <div className="flex items-center gap-4 text-xs font-inter font-medium text-[#b1b1b2]">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-[#b1b1b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {proj.location}
                </span>

                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-[#b1b1b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {proj.year}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
