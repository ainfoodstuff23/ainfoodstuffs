import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Edible Oils",
    description: "Premium palm olein, sunflower oil, soybean oil, and blended cooking oils for wholesale.",
    image: "https://images.unsplash.com/photo-1474979266404-7f28bc2e2e2a?w=600&q=80",
    color: "from-amber-500 to-amber-700",
    products: ["Palm Olein", "Sunflower Oil", "Soybean Oil", "Corn Oil"],
  },
  {
    name: "Rice",
    description: "Basmati, non-basmati, long grain, and parboiled rice sourced from top producers.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
    color: "from-primary-500 to-primary-700",
    products: ["Basmati Rice", "Sella Rice", "Long Grain", "Parboiled"],
  },
  {
    name: "Sugar",
    description: "ICUMSA 45 white sugar, raw brown sugar, and specialty sugars for industrial and retail use.",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    color: "from-blue-400 to-blue-600",
    products: ["ICUMSA 45", "Brown Sugar", "Raw Sugar", "Cubes"],
  },
  {
    name: "Flour",
    description: "All-purpose flour, wheat flour, and specialty flours for bakeries and food manufacturers.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
    color: "from-yellow-400 to-yellow-600",
    products: ["All-Purpose", "Bread Flour", "Cake Flour", "Whole Wheat"],
  },
  {
    name: "Pulses & Lentils",
    description: "Premium chickpeas, red lentils, green mung beans, and assorted pulses from global origins.",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&q=80",
    color: "from-orange-500 to-red-600",
    products: ["Chickpeas", "Red Lentils", "Green Mung", "Black Gram"],
  },
  {
    name: "Dairy Products",
    description: "Full cream milk powder, UHT milk, butter, ghee, and cheese for wholesale distribution.",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&q=80",
    color: "from-sky-400 to-sky-600",
    products: ["Milk Powder", "UHT Milk", "Butter & Ghee", "Cheese"],
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
            Our Products
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Premium Food Product Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We source and distribute a wide range of essential food commodities
            meeting international quality standards for wholesale buyers.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/products"
              className="group card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-30`}
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} className="text-gray-800" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.products.map((p) => (
                    <span
                      key={p}
                      className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 green-gradient text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            View Full Product Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
