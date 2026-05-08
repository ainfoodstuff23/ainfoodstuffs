"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="green-gradient text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>📍 Dubai, United Arab Emirates</span>
            <span className="hidden sm:inline">📞 050 968 2959 / 055 138 6161</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">✉️ ainfoodstuff23@gmail.com</span>
            <span>Sat-Thu: 8AM - 6PM</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 green-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-800 leading-tight">
                AIN Foodstuff
              </h1>
              <p className="text-[10px] text-gold-600 font-semibold tracking-widest uppercase">
                Trading LLC
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact#inquiry"
              className="ml-4 gold-gradient text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact#inquiry"
              onClick={() => setIsOpen(false)}
              className="block text-center gold-gradient text-white px-6 py-3 rounded-lg font-semibold mt-3"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
