import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

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
  title: "TheatrixHifi - Kerala's Premier Custom Home Theatre & Audiophile Specialists",
  description: "Kerala's trusted name in custom home theatres, HiFi audio, acoustic treatment, and smart home automation in Kochi, Kerala.",
  keywords: ["Home Theatre Kochi", "HiFi Audio Kerala", "Acoustic Treatments", "Smart Home Automation", "TheatrixHifi"],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
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

