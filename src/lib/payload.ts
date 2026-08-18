import { getPayload } from "payload";
import configPromise from "@payload-config";

export interface PortfolioProject {
  id: number | string;
  image: string;
  category: string;
  featured: boolean;
  title: string;
  location: string;
  year: string;
  description?: string;
  equipment?: string[];
  gallery?: string[];
}

export const FALLBACK_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    image: "/assets/portfolio-kakkanad.png",
    category: "Home Theatre",
    featured: true,
    title: "Private Cinema — Kakkanad Residence",
    location: "Kakkanad, Kochi",
    year: "2024",
    description:
      "A dedicated 12-seat private cinema with 4K laser projection, Dolby Atmos 9.1.4 surround, and custom velvet seating. The room was designed from the slab up with full acoustic isolation.",
    equipment: [
      "Sony VPL-XW5000 Laser Projector",
      "Denon AVC-X8500H",
      "Klipsch THX Reference System",
      "Screen Innovations Zero Edge Screen",
      "Control4 Automation",
    ],
    gallery: [
      "/assets/portfolio-kakkanad.png",
      "/assets/portfolio-panampilly.png",
      "/assets/hero.png",
      "/assets/cta-bg.png",
    ],
  },
  {
    id: 2,
    image: "/assets/portfolio-marinedrive.png",
    category: "HiFi Audio",
    featured: true,
    title: "Audiophile Listening Room — Marine Drive",
    location: "Marine Drive, Kochi",
    year: "2024",
    description:
      "A dedicated audiophile listening sanctuary overlooking the backwaters on Marine Drive. Custom engineered for pristine two-channel stereo imaging, featuring hand-crafted acoustic diffusers and reference tube amplification.",
    equipment: [
      "Focal Utopia Reference Speakers",
      "McIntosh MC275 Vacuum Tube Amplifiers",
      "Denon DCD-3000NE SACD Player",
      "Custom Hardwood Quadratic Diffusers",
      "Isolated Ground Power Conditioner",
    ],
    gallery: [
      "/assets/portfolio-marinedrive.png",
      "/assets/portfolio-kakkanad.png",
      "/assets/hero.png",
      "/assets/cta-bg.png",
    ],
  },
  {
    id: 3,
    image: "/assets/portfolio-panampilly.png",
    category: "Home Theatre",
    featured: true,
    title: "Luxury Screening Room — Panampilly Nagar",
    location: "Panampilly Nagar, Kochi",
    year: "2023",
    description:
      "An intimate 8-seat luxury screening room equipped with 7.2.4 Dolby Atmos audio, motorized custom leather loungers, and intelligent mood lighting scenes.",
    equipment: [
      "Epson EH-LS12000B 4K Laser Projector",
      "Anthem MRX 1140 AV Receiver",
      "Paradigm CI Pro Architectural Speakers",
      "Stewart Filmscreen Acoustic Transparent Screen",
      "Lutron Homeworks Lighting System",
    ],
    gallery: [
      "/assets/portfolio-panampilly.png",
      "/assets/portfolio-kakkanad.png",
      "/assets/portfolio-marinedrive.png",
      "/assets/hero.png",
    ],
  },
  {
    id: 4,
    image: "/assets/portfolio-edappally.png",
    category: "Home Automation",
    featured: true,
    title: "Smart Home Integration — Edappally Villa",
    location: "Edappally, Kochi",
    year: "2024",
    description:
      "Complete smart home integration for a 6,000 sq ft luxury villa in Edappally, unifying multi-room audio, climate control, automated shades, and security.",
    equipment: [
      "Control4 EA-5 Entertainment Authority Processor",
      "Triad Multi-Room Audio Amplifiers",
      "Lutron Palladiom Keypads & Shades",
      "Axis Communications IP Security Matrix",
      "Ruckus Enterprise Wi-Fi 6 Mesh Network",
    ],
    gallery: [
      "/assets/portfolio-edappally.png",
      "/assets/hero.png",
      "/assets/portfolio-kakkanad.png",
      "/assets/cta-bg.png",
    ],
  },
  {
    id: 5,
    image: "/assets/hero.png",
    category: "Commercial AV",
    featured: false,
    title: "Heritage Hotel Ballroom AV — Fort Kochi",
    location: "Fort Kochi",
    year: "2024",
    description:
      "High-output commercial audio-visual deployment for a luxury heritage ballroom in Fort Kochi.",
    equipment: ["Bose Professional System", "Crestron DigitalMedia Matrix"],
    gallery: ["/assets/hero.png", "/assets/cta-bg.png"],
  },
  {
    id: 6,
    image: "/assets/cta-bg.png",
    category: "Acoustic Treatments",
    featured: false,
    title: "Studio-Grade Acoustic Treatment — Thrippunithura",
    location: "Thrippunithura, Kochi",
    year: "2023",
    description:
      "Engineered room treatment with bass traps and absorption panels for a private recording studio.",
    equipment: ["Vicoustic Wavewood Panels", "Custom Corner Bass Traps"],
    gallery: ["/assets/cta-bg.png", "/assets/hero.png"],
  },
];

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const dbUri = process.env.DATABASE_URI || process.env.POSTGRES_URL || "";
  const isPlaceholder =
    !dbUri ||
    dbUri.includes("YOUR-PROJECT-REF") ||
    dbUri.includes("YOUR-PASSWORD") ||
    dbUri.includes("postgres.xxx");

  if (isPlaceholder) {
    return FALLBACK_PROJECTS;
  }

  try {
    const payload = await getPayload({ config: configPromise }).catch((err) => {
      console.warn("Payload CMS connection attempt failed:", err?.message || err);
      return null;
    });

    if (!payload) {
      return FALLBACK_PROJECTS;
    }

    const { docs } = await payload.find({
      collection: "projects",
      depth: 2,
      limit: 100,
    });

    if (!docs || docs.length === 0) {
      return FALLBACK_PROJECTS;
    }

    return docs.map((doc: any, index: number) => {
      const categoryName =
        doc.workType ||
        (typeof doc.category === "object" && doc.category?.title
          ? doc.category.title
          : doc.categoryName || "Home Theatre");

      const coverImg =
        typeof doc.coverImage === "object" && doc.coverImage?.url
          ? doc.coverImage.url
          : doc.coverImageUrl || FALLBACK_PROJECTS[index % FALLBACK_PROJECTS.length].image;

      const galleryList = Array.isArray(doc.gallery)
        ? doc.gallery.map((g: any) =>
            typeof g.image === "object" && g.image?.url
              ? g.image.url
              : g.imageUrl || coverImg
          )
        : [coverImg];

      const equipmentList = Array.isArray(doc.equipment)
        ? doc.equipment.map((e: any) => e.item || e)
        : [];

      return {
        id: doc.id || index + 1,
        title: doc.title,
        category: categoryName,
        location: doc.location || "Kochi, Kerala",
        year: doc.year || "2024",
        featured: Boolean(doc.featured),
        description: doc.description || "",
        equipment: equipmentList.length > 0 ? equipmentList : ["Custom Audio-Visual Solution"],
        image: coverImg,
        gallery: galleryList.length > 0 ? galleryList : [coverImg],
      };
    });
  } catch (error) {
    console.warn("Payload CMS connection fallback to static data:", error);
    return FALLBACK_PROJECTS;
  }
}

export async function getPortfolioProjectById(
  id: string | number
): Promise<PortfolioProject> {
  const all = await getPortfolioProjects();
  const numericId = typeof id === "string" ? parseInt(id, 10) : id;
  const found = all.find((p) => String(p.id) === String(id) || p.id === numericId);
  return found || all[0];
}
