"use client";

import { useState } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Custom Home Theatre",
    location: "Kochi",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0d0d10] border border-white/10 rounded-xl shadow-2xl p-6 md:p-8 text-[#f0f0f2]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 transition-colors rounded-full hover:bg-white/5"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#e02020]/20 border border-[#e02020] rounded-full flex items-center justify-center mx-auto text-[#e02020]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-outfit text-2xl font-bold text-white">Consultation Requested!</h3>
            <p className="text-sm text-[#b1b1b2] max-w-sm mx-auto">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. Our certified AV specialist will contact you shortly at <span className="text-[#e02020] font-medium">{formData.phone}</span>.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 bg-[#e02020] hover:bg-[#c01818] font-outfit font-bold text-sm text-white rounded-md transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-[2px] bg-[#e02020]" />
                <span className="font-outfit font-bold text-xs uppercase tracking-wider text-[#e02020]">
                  Free Consultation
                </span>
              </div>
              <h3 className="font-outfit text-2xl font-extrabold text-white">
                Book Your Design Session
              </h3>
              <p className="text-xs text-[#b1b1b2] mt-1">
                Tell us about your space and audio-visual goals in Kerala.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-outfit font-semibold text-[#b1b1b2] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Varma"
                  className="w-full bg-[#111115] border border-white/10 rounded-md px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#e02020] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-outfit font-semibold text-[#b1b1b2] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#111115] border border-white/10 rounded-md px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#e02020] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-outfit font-semibold text-[#b1b1b2] mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Kakkanad, Kochi"
                    className="w-full bg-[#111115] border border-white/10 rounded-md px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#e02020] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-outfit font-semibold text-[#b1b1b2] mb-1">
                  Interested Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#111115] border border-white/10 rounded-md px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#e02020] transition-colors"
                >
                  <option value="Custom Home Theatre">Custom Home Theatre</option>
                  <option value="HiFi Audio">HiFi Audio System</option>
                  <option value="Acoustic Treatments">Acoustic Treatments</option>
                  <option value="Home Automation">Home Automation</option>
                  <option value="Commercial AV">Commercial Audio & Video</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-outfit font-semibold text-[#b1b1b2] mb-1">
                  Project Details / Room Dimensions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us room size, budget, or preferred timeline..."
                  className="w-full bg-[#111115] border border-white/10 rounded-md px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#e02020] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#e02020] hover:bg-[#c01818] font-outfit font-bold text-sm text-white rounded-md shadow-lg shadow-[#e02020]/20 transition-all hover:scale-[1.01]"
              >
                Confirm Consultation Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
