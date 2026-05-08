import Link from "next/link";
import { ArrowRight, Shield, Truck, Globe2, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')",
        }}
      >
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Award size={16} className="text-gold-400" />
            <span className="text-white/90 text-sm font-medium">
              Trusted Since Establishment in Dubai, UAE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Trusted Global{" "}
            <span className="text-gold-400">Foodstuff Supplier</span> in UAE
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
            AIN Foodstuff Trading LLC is a leading importer and distributor of
            premium edible oils, rice, sugar, flour, pulses, and dairy products
            — serving wholesale buyers across UAE, GCC, Africa, and Asia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 gold-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Explore Products
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact#inquiry"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, label: "Quality Assured", sub: "ISO Certified" },
              { icon: Globe2, label: "Global Reach", sub: "20+ Countries" },
              { icon: Truck, label: "Fast Delivery", sub: "Logistics Network" },
              { icon: Award, label: "Trusted Partner", sub: "500+ Clients" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10"
              >
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    {item.label}
                  </p>
                  <p className="text-white/60 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40L60 36C120 32 240 24 360 28C480 32 600 48 720 52C840 56 960 48 1080 40C1200 32 1320 24 1380 20L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
