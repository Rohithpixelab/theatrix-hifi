import ClientPageLayout from "@/components/ClientPageLayout";
import PortfolioGrid from "@/components/PortfolioGrid";
import { getPortfolioProjects } from "@/lib/payload";

export const revalidate = 60; // Revalidate dynamic content every 60 seconds

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();

  return (
    <ClientPageLayout>
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

      {/* Portfolio Projects Section */}
      <section className="py-12 md:py-20 bg-[#08080a]">
        <div className="max-w-[1280px] mx-auto px-6">
          <PortfolioGrid initialProjects={projects} />
        </div>
      </section>
    </ClientPageLayout>
  );
}
