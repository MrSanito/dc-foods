"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ASSETS } from "@/app/assets";
import { SparklesIcon, PackageIcon, CheckCircleIcon, ArrowRightIcon } from "./icons";

export interface ProductItem {
  id: string;
  name: string;
  hindiName?: string;
  category: "fruits" | "spices" | "dairy" | "vegetables" | "guargum";
  image: string;
  packSizes: string[];
  b2cHighlight: string;
  b2bHighlight: string;
  description: string;
  tagline?: string;
  popular?: boolean;
}

const PRODUCTS: ProductItem[] = [
  // Dehydrated Fruits
  {
    id: "mango-sun-dried",
    name: "Sun-Dried Alphonso Mangoes",
    hindiName: "अलफांसो आम स्लाइस",
    category: "fruits",
    image: ASSETS.dehydratedFruits.mangoAlphonsoPack200g,
    packSizes: ["200g Pouch", "1kg HoReCa Pack", "10kg Bulk Box"],
    b2cHighlight: "100% Real Fruit • No Added Sugar",
    b2bHighlight: "High Shelf-Life • Supermarket Favorite",
    description: "Premium sun-dried Alphonso mango slices naturally packed with Vitamin A & C with chewy tender texture.",
    tagline: "Ek Bite... Aur Dil Khush!",
    popular: true,
  },
  {
    id: "orange-slices",
    name: "Dehydrated Orange Slices",
    hindiName: "संतरे की स्लाइस",
    category: "fruits",
    image: ASSETS.dehydratedFruits.orangePack200g,
    packSizes: ["200g Pouch", "1kg Catering Pack"],
    b2cHighlight: "Tangy & Sweet • Rich in Vitamin C",
    b2bHighlight: "Cocktail, Bakery & Tea Infusion Grade",
    description: "Crisp, sun-dehydrated whole orange wheels with natural citrus oils for snacking and beverages.",
    popular: false,
  },
  {
    id: "apple-slices",
    name: "Dehydrated Apple Crisps",
    hindiName: "सेब के क्रिस्प्स",
    category: "fruits",
    image: ASSETS.dehydratedFruits.applePack200g,
    packSizes: ["200g Pouch", "1kg Pack"],
    b2cHighlight: "Natural Fiber • Guilt-free Snacking",
    b2bHighlight: "Healthy School & Canteen Snacking SKU",
    description: "Thinly sliced dehydrated apple rings with zero added sulfur, preservatives, or artificial sweeteners.",
    popular: false,
  },
  {
    id: "banana-slices",
    name: "Dehydrated Banana Slices",
    hindiName: "केला स्लाइस / चिप्स",
    category: "fruits",
    image: ASSETS.dehydratedFruits.bananaPack250g,
    packSizes: ["250g Pouch", "5kg Bulk Pack"],
    b2cHighlight: "Rich in Potassium • Instant Energy",
    b2bHighlight: "Oil-Free Healthy Alternative to Fried Chips",
    description: "Crunchy dehydrated banana slices dried at low temperatures to lock in natural sugars and nutrients.",
    popular: false,
  },
  {
    id: "banana-powder",
    name: "Pure Natural Banana Powder",
    hindiName: "शुद्ध केला पाउडर",
    category: "fruits",
    image: ASSETS.dehydratedFruits.bananaPowderPoster,
    packSizes: ["200g Pouch", "500g Jar", "25kg Paper Sack"],
    b2cHighlight: "Infant Nutrition & Smoothie Superfood",
    b2bHighlight: "Bakery, Baby Food & Nutraceutical Grade",
    description: "100% pure raw banana powder ideal for digestive wellness, baby porridge, and gluten-free baking.",
    popular: true,
  },

  // Spices & Signature Blends
  {
    id: "sev-usal-masala",
    name: "Sev Usal Special Masala",
    hindiName: "वडोदरा स्पेशल सेव उसल मसाला",
    category: "spices",
    image: ASSETS.spices.sevUsalPack500g,
    packSizes: ["500g Pouch", "1kg Pack", "5kg Commercial Pack"],
    b2cHighlight: "Authentic Baroda Heritage Taste",
    b2bHighlight: "Top Seller for Street Food Vendors & Hotels",
    description: "The pride of Vadodara. Secret recipe formulated with traditional whole spices for the perfect tari and usal flavor.",
    tagline: "Har Kitchen Ki Pehli Pasand!",
    popular: true,
  },
  {
    id: "tea-special-masala",
    name: "Special Tea Masala (Chai Masala)",
    hindiName: "शाही चाय मसाला",
    category: "spices",
    image: ASSETS.spices.teaMasalaPack500g,
    packSizes: ["100g Pouch", "500g Catering Pack"],
    b2cHighlight: "Sonth, Green Cardamom, Clove & Cinnamon",
    b2bHighlight: "Café, Tea Stall & Corporate Canteen Hit",
    description: "A warming artisanal chai spice mix that turns ordinary everyday tea into an aromatic royal experience.",
    tagline: "Har Chai Ho Jaye Khaas!",
    popular: true,
  },
  {
    id: "turmeric-powder",
    name: "Pure Turmeric Powder (Haldi)",
    hindiName: "शुद्ध हल्दी पाउडर",
    category: "spices",
    image: ASSETS.spices.turmericPack500g,
    packSizes: ["100g", "200g", "500g", "1kg Pack"],
    b2cHighlight: "High Curcumin • No Added Lead/Colors",
    b2bHighlight: "Consistent Color & Pungency Batch-to-Batch",
    description: "Cold-ground turmeric roots delivering deep golden color, potent medicinal curcumin, and earthy aroma.",
    tagline: "Shudh Rang Shudh Swad - Sehat Ka Asli Saathi",
    popular: true,
  },
  {
    id: "chilli-powder",
    name: "Pure Red Chilli Powder (Mirch)",
    hindiName: "शुद्ध लाल मिर्च पाउडर",
    category: "spices",
    image: ASSETS.spices.chilliPack500g,
    packSizes: ["100g", "200g", "500g", "1kg Pack"],
    b2cHighlight: "Vibrant Red Color & Balanced Pungency",
    b2bHighlight: "Zero Stem Residue • Cryo Ground",
    description: "Hygienically ground stemless red chillies giving natural red color without artificial dyes.",
    tagline: "Unleash The Heat!",
    popular: false,
  },
  {
    id: "garam-masala",
    name: "Garam Masala (10-Spice Blend)",
    hindiName: "गरम मसाला पाउडर",
    category: "spices",
    image: ASSETS.spices.garamMasalaPack500g,
    packSizes: ["100g", "200g", "500g Pouch"],
    b2cHighlight: "Coriander, Cumin, Cardamom, Mace, Nutmeg",
    b2bHighlight: "Commercial Kitchens & HoReCa Base",
    description: "Carefully roasted and ground 10 whole spices ensuring aromatic flavor in gravies, curries, and dals.",
    tagline: "Khushboo Bhi, Swaad Bhi!",
    popular: false,
  },

  // Vegetables
  {
    id: "onion-powder",
    name: "100% Pure Dehydrated Onion Powder",
    hindiName: "शुद्ध प्याज़ पाउडर",
    category: "vegetables",
    image: ASSETS.vegetables.onionPowderPack200g,
    packSizes: ["100g", "200g", "500g", "25kg Bulk Bags"],
    b2cHighlight: "Tear-Free Cooking • Instant Seasoning",
    b2bHighlight: "Snack Seasoning, Namkeen & Sauce Base",
    description: "Pure dehydrated white and pink onion powder with zero anti-caking additives or fillers.",
    popular: true,
  },

  // Guar Gum
  {
    id: "guar-gum-food",
    name: "Guar Gum Powder (Food Grade)",
    hindiName: "ग्वार गम पाउडर (फूड ग्रेड)",
    category: "guargum",
    image: ASSETS.vegetables.onionGuarGumPoster,
    packSizes: ["500g Pouch", "1kg Pack", "25kg Paper Sacks"],
    b2cHighlight: "Natural Thickener & Gluten-Free Binder",
    b2bHighlight: "Ice Cream, Bakery, Sauces & Dairy Stabilizer",
    description: "High-viscosity natural galactomannan hydrocolloid for food processing texture retention.",
    popular: false,
  },
  {
    id: "guar-gum-industrial",
    name: "Guar Gum Powder (Industrial Grade)",
    hindiName: "ग्वार गम पाउडर (इंडस्ट्रियल ग्रेड)",
    category: "guargum",
    image: ASSETS.banners.retailShelfProducts,
    packSizes: ["25kg Multi-wall Sacks", "Bulk Container Liner"],
    b2cHighlight: "Commercial Specifications Only",
    b2bHighlight: "Textile Printing, Paper, Mining & Industrial",
    description: "Engineered rheological additive and thickener for technical industrial processing.",
    popular: false,
  },

  // Dairy Products
  {
    id: "desi-ghee",
    name: "DC Pure Desi Ghee",
    hindiName: "शुद्ध देसी घी (दानेदार)",
    category: "dairy",
    image: ASSETS.banners.retailShelfWeights,
    packSizes: ["500ml Glass Jar", "1 Litre Glass Jar", "15kg Tin"],
    b2cHighlight: "Danedar Texture • Traditional Vedic Aroma",
    b2bHighlight: "Sweet Makers & Premium HoReCa Supply",
    description: "Slow-clarified traditional butter fat with rich golden granules and authentic home-style aroma.",
    popular: true,
  },
  {
    id: "fresh-paneer",
    name: "DC Fresh Soft Paneer",
    hindiName: "ताज़ा मलाई पनीर",
    category: "dairy",
    image: ASSETS.banners.distributorLandscape,
    packSizes: ["200g Pack", "500g Pack", "1kg Vacuum Block"],
    b2cHighlight: "High Protein • Ultra Soft & Tender",
    b2bHighlight: "Caterers & Cloud Kitchen Bulk Supply",
    description: "Hygienically curdled fresh dairy milk paneer that retains tenderness without rubbery hardness.",
    popular: false,
  },
  {
    id: "fresh-milk",
    name: "DC Fresh Pasteurized Milk",
    hindiName: "पाश्चुरीकृत दूध (टोन्ड / फुल क्रीम)",
    category: "dairy",
    image: ASSETS.banners.distributorPortrait,
    packSizes: ["500ml Pouch", "1L Poly Pouch", "1L Glass Bottle"],
    b2cHighlight: "Untouched by Hands • Cold Chain Assured",
    b2bHighlight: "Daily Retail Counter & Tea Stall Routes",
    description: "Farm-sourced wholesome milk tested for zero adulteration, rich in natural calcium and protein.",
    popular: false,
  },
];

interface ProductCatalogProps {
  onInquire: (productName: string) => void;
}

export function ProductCatalogSection({ onInquire }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filterMode, setFilterMode] = useState<"all" | "b2c" | "b2b">("all");

  const categories = [
    { id: "all", label: "All Portfolio (34+)" },
    { id: "fruits", label: "🥭 Dehydrated Fruits & Snacks" },
    { id: "spices", label: "🌶️ Spices & Signature Masalas" },
    { id: "dairy", label: "🥛 Dairy & Desi Ghee" },
    { id: "vegetables", label: "🧅 Dehydrated Vegetables" },
    { id: "guargum", label: "🌾 Guar Gum Solutions" },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory !== "all" && p.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <section id="products" className="w-full py-16 px-4 sm:px-8 bg-[#FAF9F6] border-b border-[#CA9234]/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CA9234]/15 border border-[#CA9234]/40 text-[#80530F] text-xs font-bold uppercase tracking-wider mb-2">
              <SparklesIcon className="w-3.5 h-3.5 text-[#80530F]" />
              <span>Full Product Range</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#022413] tracking-tight">
              From Vadodara Orchards &amp; Farms to Global Shelves
            </h2>
            <p className="text-sm sm:text-base text-[#143323]/80 mt-2 max-w-2xl">
              Engineered for both everyday retail consumers (B2C) and large-scale distributor networks, restaurants, and food processors (B2B).
            </p>
          </div>

          {/* B2C vs B2B Quick Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-white border border-[#CA9234]/40 shadow-sm shrink-0">
            <button
              onClick={() => setFilterMode("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === "all"
                  ? "bg-[#022413] text-[#F1CA7F]"
                  : "text-[#022413] hover:bg-[#FAF9F6]"
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setFilterMode("b2c")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === "b2c"
                  ? "bg-[#022413] text-[#F1CA7F]"
                  : "text-[#022413] hover:bg-[#FAF9F6]"
              }`}
            >
              Consumer Packs (B2C)
            </button>
            <button
              onClick={() => setFilterMode("b2b")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === "b2b"
                  ? "bg-[#022413] text-[#F1CA7F]"
                  : "text-[#022413] hover:bg-[#FAF9F6]"
              }`}
            >
              Bulk / HoReCa (B2B)
            </button>
          </div>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-[#022413] text-[#F1CA7F] shadow-md border border-[#CA9234]"
                  : "bg-white text-[#022413] border border-[#CA9234]/30 hover:border-[#CA9234] hover:bg-[#FAF9F6] shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="rounded-2xl bg-white border border-[#CA9234]/25 shadow-md hover:shadow-xl hover:border-[#CA9234] transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Product Image Header */}
              <div className="relative w-full h-60 bg-[#F5F2EB] overflow-hidden flex items-center justify-center">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Popular or Category Tag */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {prod.popular && (
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-gold-foil text-[#022413] shadow-md">
                      Bestseller
                    </span>
                  )}
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-white/95 text-[#022413] backdrop-blur-sm border border-[#CA9234]/40 shadow-xs">
                    {prod.category.toUpperCase()}
                  </span>
                </div>

                {prod.tagline && (
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-[#F1CA7F] italic drop-shadow-sm">
                    &ldquo;{prod.tagline}&rdquo;
                  </div>
                )}
              </div>

              {/* Product Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-lg font-black text-[#022413] group-hover:text-[#80530F] transition-colors">
                      {prod.name}
                    </h3>
                  </div>
                  {prod.hindiName && (
                    <p className="text-xs font-semibold text-[#6C6831] mb-2">{prod.hindiName}</p>
                  )}
                  <p className="text-xs text-[#143323]/80 leading-relaxed mb-4">
                    {prod.description}
                  </p>

                  {/* Highlights (Dual B2C and B2B) */}
                  <div className="space-y-1.5 mb-4 text-[11px]">
                    {(filterMode === "all" || filterMode === "b2c") && (
                      <div className="flex items-center gap-1.5 text-[#022413] font-medium bg-[#FAF9F6] border border-[#CA9234]/20 px-2.5 py-1 rounded-md">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#CA9234] shrink-0" />
                        <span><strong>B2C:</strong> {prod.b2cHighlight}</span>
                      </div>
                    )}
                    {(filterMode === "all" || filterMode === "b2b") && (
                      <div className="flex items-center gap-1.5 text-[#80530F] font-semibold bg-[#CA9234]/15 border border-[#CA9234]/30 px-2.5 py-1 rounded-md">
                        <PackageIcon className="w-3.5 h-3.5 text-[#80530F] shrink-0" />
                        <span><strong>B2B Trade:</strong> {prod.b2bHighlight}</span>
                      </div>
                    )}
                  </div>

                  {/* Available Pack Sizes */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#6C6831] block mb-1.5">
                      Available Pack Sizes:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.packSizes.map((size) => (
                        <span
                          key={size}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#FAF9F6] text-[#022413] border border-[#CA9234]/30"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onInquire(prod.name)}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-gold-foil text-[#022413] border-2 border-[#CA9234]/50 hover:border-[#CA9234] text-xs font-bold transition-all shadow-sm"
                >
                  <span>Inquire Wholesale / Samples</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-[#CA9234]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
