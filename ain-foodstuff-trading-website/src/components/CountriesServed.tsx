import { MapPin } from "lucide-react";

const regions = [
  {
    region: "United Arab Emirates",
    countries: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK", "Fujairah"],
    emoji: "🇦🇪",
    highlight: true,
  },
  {
    region: "GCC Countries",
    countries: ["Saudi Arabia", "Oman", "Kuwait", "Bahrain", "Qatar"],
    emoji: "🌍",
    highlight: false,
  },
  {
    region: "Africa",
    countries: ["Kenya", "Tanzania", "Ethiopia", "Nigeria", "Somalia", "Sudan"],
    emoji: "🌍",
    highlight: false,
  },
  {
    region: "South Asia",
    countries: ["India", "Pakistan", "Bangladesh", "Sri Lanka"],
    emoji: "🌏",
    highlight: false,
  },
];

export default function CountriesServed() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 green-gradient opacity-95" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">
            Our Reach
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
            Serving Clients Across the Globe
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            From our base in Dubai, we export and distribute food products to
            wholesale buyers across multiple continents.
          </p>
        </div>

        {/* Regions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <div
              key={region.region}
              className={`rounded-2xl p-6 border ${
                region.highlight
                  ? "bg-white/20 border-gold-400/50"
                  : "bg-white/10 border-white/20"
              } backdrop-blur-sm`}
            >
              <div className="text-3xl mb-3">{region.emoji}</div>
              <h3 className="text-white font-bold text-lg mb-3">
                {region.region}
              </h3>
              <ul className="space-y-2">
                {region.countries.map((country) => (
                  <li
                    key={country}
                    className="flex items-center gap-2 text-white/70 text-sm"
                  >
                    <MapPin size={12} className="text-gold-400 shrink-0" />
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "20+", label: "Countries Served" },
            { value: "500+", label: "Active Clients" },
            { value: "10K+", label: "MT Delivered Monthly" },
            { value: "50+", label: "Product Varieties" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/10 rounded-xl p-5 border border-white/10"
            >
              <p className="text-3xl font-bold text-gold-400">{stat.value}</p>
              <p className="text-white/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
