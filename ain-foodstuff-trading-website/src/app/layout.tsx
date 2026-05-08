import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default:
      "AIN Foodstuff Trading LLC | Trusted Food Supplier in UAE | Palm Oil, Rice, Sugar Wholesale",
    template: "%s | AIN Foodstuff Trading LLC",
  },
  description:
    "AIN Foodstuff Trading LLC is a leading foodstuff import, export, and wholesale distribution company in Dubai, UAE. We supply palm olein, basmati rice, sugar, flour, pulses, and dairy products across UAE, GCC, Africa, and Asia.",
  keywords: [
    "foodstuff trading UAE",
    "palm oil supplier Dubai",
    "wholesale food supplier UAE",
    "edible oil distributor Dubai",
    "basmati rice wholesale UAE",
    "sugar supplier Dubai",
    "flour distributor UAE",
    "food import export Dubai",
    "FMCG distributor UAE",
    "bulk food supplier Middle East",
    "foodstuff wholesale GCC",
    "cooking oil supplier UAE",
  ],
  authors: [{ name: "AIN Foodstuff Trading LLC" }],
  creator: "AIN Foodstuff Trading LLC",
  publisher: "AIN Foodstuff Trading LLC",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.ainfoodstuff.com",
    siteName: "AIN Foodstuff Trading LLC",
    title: "AIN Foodstuff Trading LLC | Trusted Global Foodstuff Supplier in UAE",
    description:
      "Leading foodstuff import, export, and wholesale distribution company in Dubai, UAE. Palm olein, rice, sugar, flour, pulses, dairy products.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AIN Foodstuff Trading LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIN Foodstuff Trading LLC | Trusted Food Supplier in UAE",
    description:
      "Leading foodstuff import, export, and wholesale distribution company in Dubai, UAE.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ainfoodstuff.com",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#166534" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AIN Foodstuff Trading LLC",
              url: "https://www.ainfoodstuff.com",
              logo: "https://www.ainfoodstuff.com/images/logo.png",
              description:
                "Leading foodstuff import, export, and wholesale distribution company in Dubai, UAE.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Business Bay, Bay Square",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-50-968-2959",
                contactType: "sales",
                availableLanguage: ["English", "Arabic"],
              },
              sameAs: [],
              areaServed: [
                { "@type": "Country", name: "United Arab Emirates" },
                { "@type": "Country", name: "Saudi Arabia" },
                { "@type": "Country", name: "Oman" },
                { "@type": "Country", name: "Kuwait" },
                { "@type": "Country", name: "Bahrain" },
                { "@type": "Country", name: "Qatar" },
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Edible Oils (Palm Olein)",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Basmati Rice",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Sugar (ICUMSA 45)",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
