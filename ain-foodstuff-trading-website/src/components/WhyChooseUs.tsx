import {
  ShieldCheck,
  Truck,
  DollarSign,
  Users,
  Globe2,
  Leaf,
  Headphones,
  Package,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description:
      "All products meet ISO 22000, HACCP, and international food safety standards with full traceability.",
    color: "bg-primary-100 text-primary-700",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Direct factory sourcing and bulk purchasing power allow us to offer the most competitive wholesale prices.",
    color: "bg-gold-100 text-gold-700",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    description:
      "Established logistics network ensures timely delivery across UAE with export capabilities worldwide.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Globe2,
    title: "Global Sourcing Network",
    description:
      "Strong partnerships with manufacturers in Malaysia, India, Pakistan, Brazil, and beyond.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: Package,
    title: "Bulk & Custom Packaging",
    description:
      "Flexible packaging options from retail-ready to industrial bulk sizes, customized to your needs.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    icon: Users,
    title: "Trusted by 500+ Clients",
    description:
      "Supermarkets, hotels, restaurants, and distributors across the region trust AIN for consistent supply.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Personal account managers and responsive customer service for all your wholesale needs.",
    color: "bg-teal-100 text-teal-700",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "Committed to responsible sourcing and sustainable supply chain practices for a better future.",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
            The AIN Advantage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We go beyond just trading — we build lasting partnerships through
            quality, reliability, and exceptional service.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="card-hover bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div
                className={`w-12 h-12 ${reason.color} rounded-xl flex items-center justify-center mb-4`}
              >
                <reason.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
