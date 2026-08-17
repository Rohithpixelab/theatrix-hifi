import React from "react";
import Link from "next/link";
import Image from "next/image";

export type ButtonVariant = "primary" | "secondary" | "outlined" | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  showWhatsappIcon?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  text?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  showWhatsappIcon,
  fullWidth = false,
  children,
  text,
  className = "",
  disabled,
  onClick,
  type = "button",
  ...props
}: ButtonProps) {
  // Base classes according to Figma design specs: rounded-full (pill), font-outfit, flex items-center justify-center
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-outfit font-bold transition-all duration-300 active:scale-95 text-center cursor-pointer select-none";

  // Size variations
  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5",
  };

  // Variant styling according to Figma specifications
  const variantClasses = {
    primary:
      "bg-[#C82127] text-[#f0f0f2] border-2 border-[#C82127] hover:bg-[#a81a1f] hover:border-[#a81a1f] hover:shadow-lg hover:shadow-[#C82127]/25",
    secondary:
      "bg-[#F2D2D2] text-[#C82127] border-2 border-[#F2D2D2] hover:bg-[#ebd0d0] hover:border-[#ebd0d0] hover:shadow-md",
    outlined:
      "bg-transparent text-[#f0f0f2] border-2 border-white/20 hover:border-white/40 hover:bg-white/5",
    whatsapp:
      "bg-[#25D366]/20 text-[#f0f0f2] border-2 border-[#25D366]/40 hover:bg-[#25D366]/30 hover:border-[#25D366]/60 font-semibold",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 pointer-events-none" : "";

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`.trim();

  const content = (
    <>
      {(variant === "whatsapp" || showWhatsappIcon) && !icon && (
        <Image
          src="/assets/icon-whatsapp.svg"
          alt="WhatsApp"
          width={size === "sm" ? 16 : 18}
          height={size === "sm" ? 16 : 18}
          className={`${size === "sm" ? "w-4 h-4" : "w-[18px] h-[18px]"} shrink-0`}
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children || text}</span>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={combinedClasses}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
