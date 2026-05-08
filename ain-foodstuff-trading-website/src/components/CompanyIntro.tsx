import { CheckCircle } from "lucide-react";

export default function CompanyIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Premium food products warehouse"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white rounded-2xl p-6 shadow-xl">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block">
              <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
                About AIN Foodstuff
              </span>
              <div className="h-1 w-12 bg-gold-500 mt-2 rounded-full" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              Your Reliable Partner in{" "}
              <span className="text-primary-700">Foodstuff Trading</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              AIN Foodstuff Trading LLC, based in Dubai, UAE, is a premier
              import-export and wholesale distribution company specializing in
              essential food commodities. We bridge the gap between global
              manufacturers and regional markets, ensuring consistent supply of
              high-quality food products.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              With a robust logistics network and strong relationships with
              producers across Asia, Europe, and South America, we deliver
              competitive pricing, reliable supply chains, and unmatched customer
              service to wholesale buyers, supermarkets, hotels, and restaurants
              throughout the UAE and beyond.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "ISO 22000 Certified",
                "Direct Factory Sourcing",
                "Bulk & Custom Orders",
                "UAE-wide Distribution",
                "Export to 20+ Countries",
                "Competitive Wholesale Prices",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary-600 shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
            >
              Learn More About Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
