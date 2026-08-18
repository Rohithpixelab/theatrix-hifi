"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CtaBanner from "./CtaBanner";
import ConsultationModal from "./ConsultationModal";

interface ClientPageLayoutProps {
  children: React.ReactNode;
  showCta?: boolean;
}

export default function ClientPageLayout({
  children,
  showCta = true,
}: ClientPageLayoutProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  return (
    <div className="min-h-screen bg-[#111115] text-[#f0f0f2] flex flex-col font-sans selection:bg-[#C82127] selection:text-white">
      <Header onOpenConsultation={handleOpenConsultation} />
      {children}
      {showCta && <CtaBanner onOpenConsultation={handleOpenConsultation} />}
      <Footer onOpenConsultation={handleOpenConsultation} />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
