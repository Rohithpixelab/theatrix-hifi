"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import OurProcessSection from "@/components/OurProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function TheatrixHifiHomepage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  return (
    <main className="min-h-screen bg-[#111115] text-[#f0f0f2] flex flex-col font-sans selection:bg-[#C82127] selection:text-white">
      {/* Navigation Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Hero Section */}
      <HeroSection onOpenConsultation={handleOpenConsultation} />

      {/* Red Trust Bar */}
      <TrustBar />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <PortfolioSection onOpenConsultation={handleOpenConsultation} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Our Process Section */}
      <OurProcessSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <CtaBanner onOpenConsultation={handleOpenConsultation} />

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </main>
  );
}
