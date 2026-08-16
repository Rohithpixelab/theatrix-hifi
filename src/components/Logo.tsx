import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  href?: string;
}

export function LogoIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative ${className} shrink-0 inline-flex items-center justify-center`}>
      <Image
        src="/assets/logo.png"
        alt="TheatrixHiFi Logo"
        width={200}
        height={200}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}

export default function Logo({
  className = "",
  size = "xl",
  href = "#",
}: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-18 h-18 md:w-20 md:h-20",
    "2xl": "w-26 h-26 md:w-28 md:h-28",
  };

  const content = (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      <div className="transition-transform duration-300 group-hover:scale-105 shrink-0">
        <LogoIcon className={iconSizes[size]} />
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
