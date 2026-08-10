import Image from "next/image";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  return (
    <footer id="contact" className="w-full bg-[#050507] border-t border-white/5 text-[#f0f0f2]">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-10 space-y-12">
        {/* Top Brand & Social Row */}
        <div className="pb-10 border-b border-white/5 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-3 max-w-[360px]">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <span className="font-outfit font-extrabold text-[22px] text-[#f0f0f2] tracking-[2.2px]">
                THEATRIX
              </span>
              <span className="font-outfit font-semibold text-[22px] text-[#e02020] tracking-[2.2px]">
                HiFi
              </span>
            </div>

            <p className="font-inter font-medium text-xs text-[#b1b1b2] leading-[18px]">
              Your Premier Destination for Residential and Commercial High-End Audio-Visual and Acoustic Solutions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center hover:border-[#e02020] hover:bg-[#e02020]/10 transition-colors"
              >
                <Image src="/assets/icon-instagram.svg" alt="Instagram" width={18} height={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center hover:border-[#e02020] hover:bg-[#e02020]/10 transition-colors"
              >
                <Image src="/assets/icon-facebook.svg" alt="Facebook" width={18} height={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                title="YouTube"
                className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center hover:border-[#e02020] hover:bg-[#e02020]/10 transition-colors"
              >
                <Image src="/assets/icon-youtube.svg" alt="YouTube" width={18} height={18} />
              </a>
              <a
                href="https://wa.me/918943585212"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
                className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors"
              >
                <Image src="/assets/icon-whatsapp1.svg" alt="WhatsApp" width={18} height={18} />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Column Links & Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Services */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-sm text-[#b1b1b2]">
              Services
            </h4>
            <ul className="space-y-2 font-inter font-medium text-sm text-[#68686a]">
              <li>
                <a href="#services" className="hover:text-[#f0f0f2] transition-colors">
                  Custom Home Theatre
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f0f0f2] transition-colors">
                  HiFi Audio Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f0f0f2] transition-colors">
                  Acoustic Treatments
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f0f0f2] transition-colors">
                  Home Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f0f0f2] transition-colors">
                  Commercial AV
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-sm text-[#b1b1b2]">
              Quick Links
            </h4>
            <ul className="space-y-2 font-inter font-medium text-sm text-[#68686a]">
              <li>
                <a href="#process" className="hover:text-[#f0f0f2] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#f0f0f2] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#f0f0f2] transition-colors">
                  Brands We Carry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0f0f2] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0f0f2] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f0f0f2] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-sm text-[#b1b1b2]">
              Contact
            </h4>
            <div className="space-y-3 font-inter font-medium text-sm text-[#68686a]">
              <div className="flex gap-2.5 items-start">
                <Image
                  src="/assets/icon-mappin.svg"
                  alt="Location"
                  width={16}
                  height={16}
                  className="w-4 h-4 shrink-0 mt-1"
                />
                <p className="leading-tight">
                  Building No. 3/99, Ground Floor,
                  <br />
                  Kalady, Kochi, Kerala, India
                </p>
              </div>

              <div className="flex gap-2.5 items-center">
                <Image
                  src="/assets/icon-phone.svg"
                  alt="Phone"
                  width={18}
                  height={18}
                  className="w-4 h-4 shrink-0"
                />
                <a href="tel:+918943585212" className="hover:text-[#f0f0f2] transition-colors">
                  +91 89435 85212
                </a>
              </div>

              <div className="flex gap-2.5 items-center">
                <Image
                  src="/assets/icon-mail.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  className="w-4 h-4 shrink-0"
                />
                <a
                  href="mailto:contact@theatrixhifi.com"
                  className="hover:text-[#f0f0f2] transition-colors"
                >
                  contact@theatrixhifi.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Showroom Hours */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-sm text-[#b1b1b2]">
              Showroom Hours
            </h4>
            <div className="space-y-2">
              <div>
                <p className="font-outfit font-bold text-sm text-[#68686a]">
                  Mon – Sat
                </p>
                <p className="font-inter font-medium text-sm text-[#68686a]">
                  10:00 AM – 7:00 PM
                </p>
              </div>

              <div className="pt-1">
                <p className="font-outfit font-bold text-sm text-[#68686a]">
                  Sunday
                </p>
                <p className="font-inter font-medium text-sm text-[#68686a]">
                  By Appointment
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenConsultation}
                  className="font-outfit font-semibold text-xs text-[#e02020] tracking-wider uppercase hover:underline"
                >
                  Book a Visit →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 font-inter font-medium text-xs text-[#68686a]">
          <p>© 2024 TheatrixHifi. All rights reserved.</p>
          <p>Kochi, Kerala, India</p>
        </div>
      </div>
    </footer>
  );
}
