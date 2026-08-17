import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theatrixhifi.com";

  const projectIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const portfolioRoutes: MetadataRoute.Sitemap = projectIds.map((id) => ({
    url: `${baseUrl}/portfolio/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...portfolioRoutes,
  ];
}
