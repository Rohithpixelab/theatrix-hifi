import ClientPageLayout from "@/components/ClientPageLayout";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import { getPortfolioProjectById, getPortfolioProjects } from "@/lib/payload";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const currentProject = await getPortfolioProjectById(resolvedParams.id);
  const allProjects = await getPortfolioProjects();

  const currentIndex = allProjects.findIndex(
    (p) => String(p.id) === String(currentProject.id)
  );

  const nextIndex = (currentIndex + 1) % allProjects.length;
  const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;

  const nextProject = allProjects[nextIndex] || allProjects[0];
  const prevProject = allProjects[prevIndex] || allProjects[0];

  return (
    <ClientPageLayout showCta={false}>
      <ProjectDetailClient
        currentProject={currentProject}
        nextProject={nextProject}
        prevProject={prevProject}
      />
    </ClientPageLayout>
  );
}
