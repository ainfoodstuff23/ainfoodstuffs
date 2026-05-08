import type { Metadata } from "next";
import Link from "next/link";
import {
  Ship,
  Package,
  Truck,
  FileCheck,
  Warehouse,
  Globe2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Services | AIN Foodstuff Trading LLC - Import, Export & Wholesale Distribution",
  description:
    "Comprehensive foodstuff trading services including import, export, wholesale distribution, bulk supply, custom packaging, and logistics solutions across UAE, GCC, and Africa.",
  keywords:
    "foodstuff import UAE, food export Dubai, wholesale distribution food, bulk food supplier UAE, food logistics Dubai",
};

const services = [
  {
    icon: Ship,
    title: "Import Services",
    shortDesc: "Global sourcing and import of food commodities to UAE",
    fullDesc:
      "We maintain strong relationships with manufacturers and producers worldwide, enabling us to import the finest quality food commodities at competitive prices. Our import team handles all documentation, customs clearance, and regulatory compliance.",
    features: [
      "Direct factory sourcing from 15+ countries",
      "Customs clearance and documentation",
      "Port handling and warehousing",
      "Quality inspection at origin and destination",
      "Regulatory compliance (Dubai Municipality, ESMA)",
      "Flexible Incoterms (FOB, CIF, CFR, DDP)",
    ],
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80",
  },
  {
    icon: Globe2,
    title: "Export Services",
    shortDesc: "Reliable food export to GCC, Africa, and Asia",
    fullDesc:
      "Our export division serves wholesale buyers across the GCC, East Africa, and South Asia. We manage the entire export process from documentation to logistics, ensuring your products arrive on time and in perfect condition.",
    features: [
      "Export to 20+ countries worldwide",
      "Complete export documentation",
      "Certificate of Origin, Health Certificates",
      "Flexible packaging and labeling for destination markets",
      "Container loading and shipping coordination",
      "Competitive freight rates through partner network",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    icon: Warehouse,
    title: "Wholesale Distribution",
    shortDesc: "Bulk supply to supermarkets, hotels, and restaurants",
    fullDesc:
      "Our wholesale distribution network covers the entire UAE, serving supermarkets, hypermarkets, hotels, restaurants, catering companies, and food manufacturers. We offer flexible order quantities and reliable delivery schedules.",
    features: [
      "UAE-wide distribution network",
      "Bulk wholesale pricing",
      "Scheduled deliveries and standing orders",
      "Dedicated account managers",
      "Minimum order flexibility",
      "Credit terms for established buyers",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116022-a4c5db8b4d6e?w=800&q=80",
  },
];

const additionalServices = [
  {
    icon: Package,
    title: "Custom Packaging",
    desc: "Private label and custom packaging solutions for retail and food service clients. Choose your brand, size, and specifications.",
  },
  {
    icon: FileCheck,
    title: "Quality Assurance",
    desc: "Rigorous quality control with third-party lab testing, SGS inspections, and compliance with international food safety standards.",
  },
  {
    icon: Truck,
    title: "Logistics Solutions",
    desc: "End-to-end logistics management including warehousing, cold chain (for dairy), and last-mile delivery across the UAE.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')",
          }}
        >
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive foodstuff trading solutions — from global sourcing to
            last-mile delivery across UAE and beyond.
          </p>
        </div>
      </section>

      {/* Main services */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 green-gradient rounded-xl flex items-center justify-center">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
                    Service {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.fullDesc}
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-primary-600 mt-0.5 shrink-0"
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact#inquiry"
                  className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
              Additional Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Value-Added Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Beyond trading, we offer complementary services to meet all your
              food supply chain needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 card-hover text-center"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <svc.icon size={28} className="text-primary-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {svc.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 green-gradient relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">
              How It Works
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              Our Simple Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Inquiry",
                desc: "Submit your product requirements and quantities through our inquiry form or WhatsApp.",
              },
              {
                step: "02",
                title: "Quotation",
                desc: "We provide competitive pricing, product specifications, and delivery timelines.",
              },
              {
                step: "03",
                title: "Order & Payment",
                desc: "Confirm your order, arrange payment, and we begin sourcing and preparation.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Products are quality-checked, packaged, and delivered to your location on schedule.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <p className="text-4xl font-bold text-gold-400 mb-3">
                  {item.step}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us today for a free consultation and competitive quotation
            on your foodstuff requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact#inquiry"
              className="gold-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="bg-white border-2 border-primary-700 text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
