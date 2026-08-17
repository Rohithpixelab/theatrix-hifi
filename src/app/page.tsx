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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://theatrixhifi.com/#business",
        "name": "TheatrixHiFi",
        "image": "https://theatrixhifi.com/assets/logo.png",
        "url": "https://theatrixhifi.com",
        "telephone": "+918943585212",
        "email": "contact@theatrixhifi.com",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Building No. 3/99, Ground Floor",
          "addressLocality": "Kalady, Kochi",
          "addressRegion": "Kerala",
          "postalCode": "683574",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 10.1667,
          "longitude": 76.4333,
        },
        "areaServed": [
          "Kochi",
          "Ernakulam",
          "Kakkanad",
          "Marine Drive",
          "Panampilly Nagar",
          "Thrissur",
          "Kerala",
        ],
        "knowsAbout": [
          "Home Theatre Installation",
          "Dolby Atmos Surround Sound",
          "HiFi Two-Channel Audio Systems",
          "Room Acoustic Treatments",
          "Control4 Smart Home Automation",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://theatrixhifi.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What AV and audio-visual services does TheatrixHiFi provide in Kochi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TheatrixHiFi specializes in custom 4K Dolby Atmos home cinema design, audiophile HiFi two-channel audio systems, studio-grade acoustic treatments, commercial AV solutions, and smart home automation in Kochi, Kerala.",
            },
          },
          {
            "@type": "Question",
            "name": "Where is TheatrixHiFi located in Kerala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TheatrixHiFi is located at Building No. 3/99, Ground Floor, Kalady, Kochi, Kerala, India (+91 89435 85212).",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#111115] text-[#f0f0f2] flex flex-col font-sans selection:bg-[#C82127] selection:text-white">
      {/* Structured Data for SEO & AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
