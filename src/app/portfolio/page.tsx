"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import ConsultationModal from "@/components/ConsultationModal";

export default function PortfolioPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      image: "/assets/portfolio-kakkanad.png",
      category: "Home Theatre",
      featured: true,
      title: "Private Cinema — Kakkanad Residence",
      location: "Kakkanad, Kochi",
      year: "2024",
    },
    {
      id: 2,
      image: "/assets/portfolio-marinedrive.png",
      category: "HiFi Audio",
      featured: true,
      title: "Audiophile Listening Room — Marine Drive",
      location: "Marine Drive, Kochi",
      year: "2024",
    },
    {
      id: 3,
      image: "/assets/portfolio-panampilly.png",
      category: "Home Theatre",
      featured: true,
      title: "Luxury Screening Room — Panampilly Nagar",
      location: "Panampilly Nagar, Kochi",
      year: "2023",
    },
    {
      id: 4,
      image: "/assets/portfolio-edappally.png",
      category: "Home Automation",
      featured: true,
      title: "Smart Home Integration — Edappally Villa",
      location: "Edappally, Kochi",
      year: "2024",
    },
    {
      id: 5,
      image: "/assets/hero.png",
      category: "Commercial AV",
      featured: false,
      title: "Heritage Hotel Ballroom AV — Fort Kochi",
      location: "Fort Kochi",
      year: "2024",
    },
    {
      id: 6,
      image: "/assets/cta-bg.png",
      category: "Acoustic Treatments",
      featured: false,
      title: "Studio-Grade Acoustic Treatment — Thrippunithura",
      location: "Thrippunithura, Kochi",
      year: "2023",
    },
    {
      id: 7,
      image: "/assets/portfolio-marinedrive.png",
      category: "HiFi Audio",
      featured: false,
      title: "Premium HiFi Showroom System — MG Road",
      location: "MG Road, Kochi",
      year: "2023",
    },
    {
      id: 8,
      image: "/assets/portfolio-kakkanad.png",
      category: "Commercial AV",
      featured: false,
      title: "Fine Dining Restaurant AV — Aluva",
      location: "Aluva, Ernakulam",
      year: "2023",
    },
    {
      id: 9,
      image: "/assets/portfolio-panampilly.png",
      category: "Home Theatre",
      featured: false,
      title: "Compact Dedicated Theatre — Palarivattom",
      location: "Palarivattom, Kochi",
      year: "2023",
    },
    {
      id: 10,
      image: "/assets/portfolio-edappally.png",
      category: "Home Automation",
      featured: false,
      title: "Smart Apartment Automation — Vyttila Hub",
      location: "Vyttila, Kochi",
      year: "2022",
    },
    {
      id: 11,
      image: "/assets/hero.png",
      category: "Commercial AV",
      featured: false,
      title: "Corporate Office AV — Infopark Phase 2",
      location: "Infopark, Kochi",
      year: "2022",
    },
    {
      id: 12,
      image: "/assets/cta-bg.png",
      category: "Acoustic Treatments",
      featured: false,
      title: "Dedicated Acoustic Room Treatment — Kaloor",
      location: "Kaloor, Kochi",
      year: "2022",
    },
  ];

  const categories = [
    { label: "All", key: "All", count: projects.length },
    { label: "Home Theatre", key: "Home Theatre", count: projects.filter(p => p.category === "Home Theatre").length },
    { label: "HiFi Audio", key: "HiFi Audio", count: projects.filter(p => p.category === "HiFi Audio").length },
    { label: "Acoustic Treatments", key: "Acoustic Treatments", count: projects.filter(p => p.category === "Acoustic Treatments").length },
    { label: "Home Automation", key: "Home Automation", count: projects.filter(p => p.category === "Home Automation").length },
    { label: "Commercial AV", key: "Commercial AV", count: projects.filter(p => p.category === "Commercial AV").length },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  return (
    <main className="min-h-screen bg-[#111115] text-[#f0f0f2] flex flex-col font-sans selection:bg-[#C82127] selection:text-white">
      {/* Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Portfolio Page Hero Section */}
      <section className="relative bg-[#0d0d10] py-20 lg:py-28 border-b border-white/5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-[2px] bg-[#C82127]" />
              <span className="font-outfit font-bold text-xs uppercase tracking-wider text-[#C82127]">
                OUR WORK
              </span>
            </div>

            <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-white tracking-tight leading-tight">
              Portfolio
            </h1>

            <p className="font-inter font-medium text-base md:text-lg text-[#b1b1b2] max-w-[620px] leading-relaxed">
              Every project in this portfolio was designed, installed, and calibrated in-house — from initial site visit to final listening session.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter & 3-Column Projects Grid Section */}
      <section className="py-12 md:py-20 bg-[#08080a]">
        <div className="max-w-[1280px] mx-auto px-6 space-y-10">
          {/* Left-Aligned Category Chips */}
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

          {/* 3-Column Grid matching Figma design screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <Link
                key={proj.id}
                href={`/portfolio/${proj.id}`}
                className="group relative bg-[#0c0c0e] rounded-xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 shadow-xl flex flex-col justify-between block cursor-pointer"
              >
                {/* Image Container with Top Badges */}
                <div className="relative h-[240px] sm:h-[260px] w-full overflow-hidden bg-[#15151a]">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-90" />

                  {/* Top Left Category Badge */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-black/60 border border-[#C82127]/50 backdrop-blur-md rounded font-outfit font-extrabold text-[10px] uppercase tracking-wider text-[#C82127]">
                    {proj.category}
                  </span>

                  {/* Top Right Featured Badge (If Featured) */}
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
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenConsultation={handleOpenConsultation} />

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </main>
  );
}
