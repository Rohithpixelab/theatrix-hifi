import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theatrixhifi.com"),
  title: {
    default: "TheatrixHiFi | Custom Home Theatre & HiFi Audio Specialists in Kochi, Kerala",
    template: "%s | TheatrixHiFi Kochi",
  },
  description:
    "Kerala's trusted name in custom 4K Dolby Atmos home theatres, high-end HiFi two-channel audio systems, acoustic room treatments, and smart home automation. Based in Kalady, Kochi.",
  keywords: [
    "Home Theatre Kochi",
    "HiFi Audio Kerala",
    "Dolby Atmos Cinema Kochi",
    "Acoustic Treatment Kochi",
    "Smart Home Automation Ernakulam",
    "AV Installation Kerala",
    "Custom Cinema Kochi",
    "TheatrixHiFi",
  ],
  authors: [{ name: "TheatrixHiFi" }],
  creator: "TheatrixHiFi",
  publisher: "TheatrixHiFi",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://theatrixhifi.com",
    title: "TheatrixHiFi | Premier Home Theatre & HiFi Audio in Kerala",
    description:
      "Transform your space into a cinematic wonderland. Certified custom home theatre design, acoustic calibration, and installation in Kochi, Kerala.",
    siteName: "TheatrixHiFi",
    images: [
      {
        url: "/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "TheatrixHiFi Custom Home Theatre Cinema Room Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheatrixHiFi | Home Theatre & HiFi Specialists Kochi",
    description: "Custom 4K Dolby Atmos home cinemas & high-end audio calibration in Kochi, Kerala.",
    images: ["/assets/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="bg-[#111115] text-[#f0f0f2] font-sans antialiased selection:bg-[#C82127] selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
