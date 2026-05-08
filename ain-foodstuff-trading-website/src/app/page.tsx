import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import CountriesServed from "@/components/CountriesServed";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ProductCategories />
      <WhyChooseUs />
      <CountriesServed />

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Partner with AIN Foodstuff?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need bulk edible oils for your factory, rice for your
            supermarket chain, or sugar for your bakery — we have the products
            and logistics to meet your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact#inquiry"
              className="gold-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
              Request a Wholesale Quote
            </Link>
            <Link
              href="/products"
              className="bg-white border-2 border-primary-700 text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Browse Product Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
