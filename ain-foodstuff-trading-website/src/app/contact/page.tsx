import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Contact Us | AIN Foodstuff Trading LLC - Wholesale Food Supplier Dubai",
  description:
    "Contact AIN Foodstuff Trading LLC for wholesale food inquiries, product quotations, and partnership opportunities. Located in Business Bay, Dubai, UAE.",
  keywords:
    "contact AIN foodstuff, wholesale food inquiry Dubai, food supplier contact UAE, palm oil supplier contact",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    lines: [
      "Business Bay, Bay Square",
      "Dubai, United Arab Emirates",
      "P.O. Box XXXXX",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["050 968 2959", "055 138 6161"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["ainfoodstuff23@gmail.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [
      "Saturday - Thursday",
      "8:00 AM - 6:00 PM (GST)",
      "Friday: Closed",
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80')",
          }}
        >
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get in touch for wholesale inquiries, product quotations, and
            partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center card-hover"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon size={24} className="text-primary-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.lines.map((line) => (
                  <p key={line} className="text-gray-600 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form + WhatsApp */}
      <section id="inquiry" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
                Wholesale Inquiry
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-2">
                Request a Quotation
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below with your requirements and our sales
                team will contact you within 24 hours.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <InquiryForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              {/* WhatsApp card */}
              <div className="bg-[#25d366] rounded-2xl p-7 text-white mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={28} />
                  <h3 className="text-xl font-bold">WhatsApp Us</h3>
                </div>
                <p className="mb-5 text-white/90">
                  For quick inquiries and instant responses, reach us directly on
                  WhatsApp. Our team is available during business hours.
                </p>
                <a
                  href="https://wa.me/971509682959?text=Hello!%20I%27m%20interested%20in%20your%20foodstuff%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#25d366] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Business info card */}
              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 size={24} className="text-primary-700" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Business Details
                  </h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-800">Company Name</p>
                    <p className="text-gray-600">
                      AIN Foodstuff Trading LLC
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Trade License</p>
                    <p className="text-gray-600">
                      Dubai Economic Department
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">
                      Business Bay, Dubai, UAE
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Industries Served</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {[
                        "Supermarkets",
                        "Hotels",
                        "Restaurants",
                        "Bakeries",
                        "Factories",
                        "Distributors",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 bg-gray-200 rounded-2xl h-64 overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0678!2d55.2695!3d25.1858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEnMDkuMCJOIDU1wrAxNicxMC4yIkU!5e0!3m2!1sen!2sae!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AIN Foodstuff Trading LLC Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
