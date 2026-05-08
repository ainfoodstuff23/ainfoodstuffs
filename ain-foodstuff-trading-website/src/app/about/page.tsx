import type { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Building2,
  Globe2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | AIN Foodstuff Trading LLC - Leading Food Supplier in UAE",
  description:
    "Learn about AIN Foodstuff Trading LLC, a premier foodstuff import-export and wholesale distribution company based in Dubai, UAE. Discover our mission, values, and commitment to quality.",
  keywords:
    "about AIN foodstuff, food trading company Dubai, wholesale food distributor UAE, foodstuff import export",
};

const milestones = [
  {
    year: "Establishment",
    title: "Company Founded",
    desc: "AIN Foodstuff Trading LLC established in Dubai, UAE as a foodstuff import and export company.",
  },
  {
    year: "Growth",
    title: "GCC Expansion",
    desc: "Expanded distribution network to cover all GCC countries including Saudi Arabia, Oman, and Kuwait.",
  },
  {
    year: "Scale",
    title: "Africa & Asia Markets",
    desc: "Extended export operations to East African and South Asian markets, serving 20+ countries.",
  },
  {
    year: "Today",
    title: "Industry Leader",
    desc: "Recognized as a trusted wholesale food supplier serving 500+ clients with 50+ product varieties.",
  },
];

const values = [
  {
    icon: Award,
    title: "Quality First",
    desc: "We source only from certified manufacturers and maintain strict quality control at every stage.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "Transparent business practices, honest pricing, and ethical sourcing are at our core.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    desc: "We build long-term partnerships by understanding and exceeding our clients' expectations.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    desc: "We constantly expand our product range and geographic reach to serve more markets.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
          }}
        >
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About AIN Foodstuff Trading
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Building bridges between global food producers and regional markets
            since our establishment in Dubai.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6">
                A Leading Foodstuff{" "}
                <span className="text-primary-700">
                  Import & Export Company
                </span>{" "}
                in Dubai
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                AIN Foodstuff Trading LLC is a Dubai-based company specializing
                in the import, export, and wholesale distribution of essential
                food commodities. We serve as a critical link in the food supply
                chain, connecting manufacturers from Asia, Europe, and South
                America with buyers across the Middle East, Africa, and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our extensive product portfolio includes premium edible oils
                (palm olein), basmati and non-basmati rice, white and brown
                sugar, all-purpose flour, pulses, lentils, and dairy products.
                Each product is carefully sourced from certified producers to
                ensure consistent quality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With our strategic location in Dubai — a global trading hub — and
                our well-established logistics network, we provide reliable and
                cost-effective supply chain solutions to wholesale buyers,
                supermarket chains, hotels, restaurants, and food manufacturers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-2xl p-6 text-center">
                <Building2 size={32} className="text-primary-700 mx-auto mb-3" />
                <p className="text-2xl font-bold text-primary-800">Dubai HQ</p>
                <p className="text-gray-600 text-sm">UAE Based</p>
              </div>
              <div className="bg-gold-50 rounded-2xl p-6 text-center">
                <Globe2 size={32} className="text-gold-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gold-700">20+</p>
                <p className="text-gray-600 text-sm">Countries Served</p>
              </div>
              <div className="bg-gold-50 rounded-2xl p-6 text-center">
                <Users size={32} className="text-gold-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gold-700">500+</p>
                <p className="text-gray-600 text-sm">Active Clients</p>
              </div>
              <div className="bg-primary-50 rounded-2xl p-6 text-center">
                <Award size={32} className="text-primary-700 mx-auto mb-3" />
                <p className="text-2xl font-bold text-primary-800">50+</p>
                <p className="text-gray-600 text-sm">Product Varieties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                <Target size={28} className="text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and reliable foodstuff trading partner,
                delivering premium quality products at competitive prices while
                maintaining the highest standards of food safety and customer
                service.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-5">
                <Eye size={28} className="text-gold-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading foodstuff trading company in the Middle
                East and Africa, recognized for our product quality, supply chain
                excellence, and commitment to sustainable business practices.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-5">
                <Heart size={28} className="text-rose-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product that carries the AIN name meets rigorous quality
                standards. We promise consistent supply, competitive pricing,
                transparent dealings, and dedicated support for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
              Growth & Milestones
            </h2>
          </div>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 green-gradient rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-gold-600 font-semibold text-sm">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">
                    {m.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon size={28} className="text-primary-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
