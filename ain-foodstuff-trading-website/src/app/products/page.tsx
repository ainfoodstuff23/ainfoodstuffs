import type { Metadata } from "next";
import Link from "next/link";
import { Package, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Products | AIN Foodstuff Trading LLC - Edible Oils, Rice, Sugar, Flour, Pulses, Dairy",
  description:
    "Browse our comprehensive catalog of food products including palm olein, basmati rice, sugar, flour, pulses, and dairy products. Wholesale supplier in UAE.",
  keywords:
    "food products UAE, palm oil supplier Dubai, basmati rice wholesale, sugar ICUMSA 45, flour supplier UAE, pulses wholesale, dairy products distributor",
};

const productGroups = [
  {
    id: "edible-oils",
    name: "Edible Oils",
    banner:
      "https://images.unsplash.com/photo-1474979266404-7f28bc2e2e2a?w=1200&q=80",
    description:
      "We supply a comprehensive range of premium cooking and edible oils sourced directly from leading refineries in Malaysia, Indonesia, and Argentina. Our oils meet international food safety standards and are available in various packaging sizes from 1L retail bottles to 20L jerry cans and flexitanks.",
    products: [
      {
        name: "RBD Palm Olein",
        origin: "Malaysia / Indonesia",
        packaging: "1L, 2L, 3L, 5L, 18L, 20L tins/bottles, Flexitanks",
        specs: "IV 56-58, FFA 0.1% max, Moisture 0.1% max",
        image: "https://images.unsplash.com/photo-1594995846645-44c42e42e41c?w=400&q=80",
      },
      {
        name: "Sunflower Oil",
        origin: "Argentina / Ukraine",
        packaging: "1L, 2L, 5L, 18L bottles/tins",
        specs: "Refined, bleached, deodorized, Non-GMO",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80",
      },
      {
        name: "Soybean Oil",
        origin: "Argentina / Brazil",
        packaging: "1L, 2L, 5L, 18L, Flexitanks",
        specs: "Refined, RBD, Non-GMO available",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
      },
      {
        name: "Corn Oil",
        origin: "USA / Turkey",
        packaging: "1L, 2L, 3L bottles",
        specs: "Refined, light golden color, mild flavor",
        image: "https://images.unsplash.com/photo-1620157577018-3c3e2e43f14c?w=400&q=80",
      },
      {
        name: "Vegetable Ghee",
        origin: "UAE / Malaysia",
        packaging: "500g, 1kg, 2kg, 10kg, 16kg tins",
        specs: "Vanaspati, bakery grade available",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80",
      },
    ],
  },
  {
    id: "rice",
    name: "Rice",
    banner:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&q=80",
    description:
      "Our rice portfolio features the finest varieties from India, Pakistan, Thailand, and Vietnam. From premium aged basmati to economical non-basmati options, we cater to diverse market segments including retail, food service, and industrial buyers.",
    products: [
      {
        name: "Basmati Rice (1121)",
        origin: "India / Pakistan",
        packaging: "5kg, 10kg, 25kg, 50kg bags",
        specs: "Extra long grain, 8.3mm+, Aged 1-2 years",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
      },
      {
        name: "Sella Basmati Rice",
        origin: "India / Pakistan",
        packaging: "5kg, 10kg, 25kg, 50kg bags",
        specs: "Parboiled, golden color, extra long grain",
        image: "https://images.unsplash.com/photo-1536304993881-460e32f50645?w=400&q=80",
      },
      {
        name: "Non-Basmati (IR64)",
        origin: "India / Thailand / Vietnam",
        packaging: "25kg, 50kg PP bags",
        specs: "5% broken, medium grain, competitive pricing",
        image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&q=80",
      },
      {
        name: "Thai Jasmine Rice",
        origin: "Thailand",
        packaging: "5kg, 15kg, 25kg bags",
        specs: "Hom Mali, aromatic, 100% sortexed",
        image: "https://images.unsplash.com/photo-1614961411943-5b5a4a5a4e4a?w=400&q=80",
      },
    ],
  },
  {
    id: "sugar",
    name: "Sugar",
    banner:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80",
    description:
      "We trade in premium quality white and raw sugar sourced from Brazil, India, and Thailand. Our sugar products are widely used by bakeries, confectioneries, beverage manufacturers, and retail chains across the region.",
    products: [
      {
        name: "ICUMSA 45 White Sugar",
        origin: "Brazil / India / Thailand",
        packaging: "25kg, 50kg PP/jute bags",
        specs: "ICUMSA 45 RBU max, Polarization 99.80% min",
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80",
      },
      {
        name: "Brown Sugar",
        origin: "India / Mauritius",
        packaging: "25kg, 50kg bags",
        specs: "Muscovado, Demerara types available",
        image: "https://images.unsplash.com/photo-1537054960058-544729306ea9?w=400&q=80",
      },
      {
        name: "Raw Brown Sugar (VHP)",
        origin: "Brazil",
        packaging: "50kg bags, bulk vessel",
        specs: "ICUMSA 600-1200, Polarization 98.5% min",
        image: "https://images.unsplash.com/photo-1581411280241-0a4b6b31b0b8?w=400&q=80",
      },
    ],
  },
  {
    id: "flour",
    name: "Flour",
    banner:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&q=80",
    description:
      "Our flour range meets the needs of bakeries, food manufacturers, and retail markets. Sourced from leading mills, our flours are available in various grades and packaging options.",
    products: [
      {
        name: "All-Purpose Flour",
        origin: "UAE / Turkey / India",
        packaging: "1kg, 2kg, 5kg, 25kg, 50kg bags",
        specs: "11-12% protein, ash 0.55% max",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80",
      },
      {
        name: "Bread Flour (High Protein)",
        origin: "USA / Canada / Turkey",
        packaging: "25kg, 50kg bags",
        specs: "13-14% protein, strong gluten",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
      },
      {
        name: "Whole Wheat Flour",
        origin: "India / Turkey",
        packaging: "1kg, 5kg, 25kg bags",
        specs: "100% whole grain, stone milled",
        image: "https://images.unsplash.com/photo-1606046660843-ffaf57239fa0?w=400&q=80",
      },
    ],
  },
  {
    id: "pulses",
    name: "Pulses & Lentils",
    banner:
      "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=1200&q=80",
    description:
      "A staple in kitchens across the Middle East and South Asia, our pulses range includes premium quality chickpeas, lentils, and beans sourced from top growing regions globally.",
    products: [
      {
        name: "Kabuli Chickpeas (9mm)",
        origin: "India / Mexico / Australia",
        packaging: "25kg, 50kg PP bags",
        specs: "9mm+, sortexed, 100% clean",
        image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&q=80",
      },
      {
        name: "Red Lentils (Masoor)",
        origin: "Canada / Australia / Turkey",
        packaging: "25kg, 50kg bags",
        specs: "Whole/Split, sortexed, polished",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80",
      },
      {
        name: "Green Mung Beans",
        origin: "India / Myanmar / Australia",
        packaging: "25kg, 50kg bags",
        specs: "3.8mm+, machine clean, sortexed",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80",
      },
      {
        name: "Black Gram (Urad)",
        origin: "India / Myanmar",
        packaging: "25kg, 50kg bags",
        specs: "Whole/Split, 3mm+, sortexed",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80",
      },
    ],
  },
  {
    id: "dairy",
    name: "Dairy Products",
    banner:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1200&q=80",
    description:
      "Our dairy portfolio includes premium milk powders, UHT milk, butter, ghee, and cheese products sourced from New Zealand, Europe, and local UAE producers.",
    products: [
      {
        name: "Full Cream Milk Powder",
        origin: "New Zealand / EU / Australia",
        packaging: "25kg bags, 400g tins",
        specs: "26% fat min, instant, spray-dried",
        image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&q=80",
      },
      {
        name: "Skimmed Milk Powder",
        origin: "EU / New Zealand",
        packaging: "25kg bags, 400g tins",
        specs: "1.25% fat max, instant grade",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
      },
      {
        name: "UHT Milk",
        origin: "EU / UAE",
        packaging: "1L, 200ml cartons",
        specs: "Full cream/Skimmed, 6-12 months shelf life",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
      },
      {
        name: "Butter & Ghee",
        origin: "New Zealand / EU / India",
        packaging: "100g, 250g, 500g, 10kg blocks",
        specs: "Unsalted/Salted, 82% fat min",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&q=80')",
          }}
        >
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Product Catalog
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Premium food commodities sourced from the world&apos;s finest
            producers, available for wholesale and bulk orders.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-white border-b sticky top-[calc(4rem+2.5rem)] z-40">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-2">
            {productGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg whitespace-nowrap transition-colors"
              >
                {group.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product groups */}
      {productGroups.map((group) => (
        <section key={group.id} id={group.id} className="py-16 scroll-mt-32">
          <div className="max-w-7xl mx-auto px-4">
            {/* Group header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 green-gradient rounded-lg flex items-center justify-center">
                  <Package size={20} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {group.name}
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl leading-relaxed">
                {group.description}
              </p>
            </div>

            {/* Products grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 card-hover"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600">
                        <span className="font-semibold text-gray-800">
                          Origin:
                        </span>{" "}
                        {product.origin}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold text-gray-800">
                          Packaging:
                        </span>{" "}
                        {product.packaging}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold text-gray-800">
                          Specs:
                        </span>{" "}
                        {product.specs}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We source a wide range of food commodities. Contact us with your
            specific requirements and we&apos;ll find the right product for you.
          </p>
          <Link
            href="/contact#inquiry"
            className="inline-flex items-center gap-2 gold-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            Request Custom Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
