"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "971509682959";
  const message = encodeURIComponent(
    "Hello! I'm interested in your foodstuff products. Could you please provide more information?"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative pulse-ring">
        <div className="w-14 h-14 bg-[#25d366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg transition-colors animate-float">
          <MessageCircle size={28} className="text-white" fill="white" />
        </div>
      </div>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with us on WhatsApp
      </div>
    </a>
  );
}
