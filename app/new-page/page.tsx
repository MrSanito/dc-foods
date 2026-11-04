"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./hub.css";
import { ASSETS } from "@/app/assets";

const COMPANY = {
  legalName: "DC Foods & Beverages Private Limited",
  displayName: "DC Foods & Beverages",
  shortName: "DC Foods",
  tagline: "Quality Products. Strong Margins. Growing Market.",
  phone: "+91 72659 07267",
  whatsappNumber: "917265907267",
};

const HERO_SLIDES = [
  {
    image: ASSETS.hub.tradeSpicesBanner,
    ribbon: "Indian Spices",
    offer: "Spices, Powders & Food Essentials",
    description: "From Vadodara to your business — bulk supply, distribution & private label.",
    category: "spices",
    alt: "Bowls of red chilli, turmeric and whole Indian spices",
  },
  {
    image: ASSETS.hub.products.fruitRange,
    ribbon: "Dehydrated Fruits",
    offer: "Fruit Ingredients & Everyday Flavour",
    description: "Explore our dehydrated fruit range for food businesses and retail enquiries.",
    category: "fruits",
    alt: "Dehydrated fruit selection",
  },
  {
    image: ASSETS.hub.products.dairyRange,
    ribbon: "Dairy & Ghee",
    offer: "Dairy Essentials For Your Business",
    description: "Discover dairy and ghee for homes, shelves and professional kitchens.",
    category: "dairy",
    alt: "Dairy and ghee selection",
  },
];

const DIVISIONS = [
  { slug: "all", title: "All Products" },
  { slug: "spices", title: "Spices & Masalas" },
  { slug: "onion", title: "Onion Powder" },
  { slug: "guar", title: "Guar Gum Powder" },
  { slug: "fruits", title: "Dehydrated Fruits" },
  { slug: "dairy", title: "Dairy & Ghee" },
];

const PRODUCTS = [
  { name: "Red Chilli Powder", category: "spices", detail: "A bold red spice for everyday cooking and commercial kitchens.", image: ASSETS.hub.products.chilli },
  { name: "Turmeric Powder", category: "spices", detail: "Golden colour and warm, earthy flavour.", image: ASSETS.hub.products.turmeric },
  { name: "Coriander Powder", category: "spices", detail: "A fragrant staple for savoury blends.", image: ASSETS.hub.products.coriander },
  { name: "Garam Masala", category: "spices", detail: "A familiar blend for richly layered dishes.", image: ASSETS.hub.products.garamMasala },
  { name: "Dehydrated Onion Powder", category: "onion", detail: "Convenient onion flavour for seasoning and food preparation.", image: ASSETS.hub.products.onionRange },
  { name: "Guar Gum Powder", category: "guar", detail: "Available for food and industrial enquiries.", image: ASSETS.hub.products.guarGum },
  { name: "Dehydrated Mango", category: "fruits", detail: "A bright fruit option for snacking and ingredient use.", image: ASSETS.hub.products.mango },
  { name: "Desi Ghee", category: "dairy", detail: "A dairy favourite for homes and professional kitchens.", image: ASSETS.hub.products.ghee },
];

export default function DCFoodsHubPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeSlide];
  const filteredProducts = activeCategory === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="hub-root min-h-screen bg-background text-foreground antialiased">
      <header className="site-header">
        <div className="container-site site-header-inner">
          <Link href="/new-page" className="site-logo active">
            <Image src={ASSETS.hub.logo} alt="DC Foods logo" width={58} height={58} priority className="size-[58px] object-contain" />
            <span><strong>DC FOODS</strong><small>&amp; BEVERAGES PRIVATE LIMITED</small></span>
          </Link>
          <nav className="site-nav">
            <Link href="/new-page" className="font-semibold text-accent">Home</Link>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href={ASSETS.hub.companyProfilePdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded bg-muted px-3 py-1.5 text-xs font-semibold text-primary">Download Brochure</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="trade-hero relative overflow-hidden">
        <Image src={slide.image} alt={slide.alt} fill priority className="object-cover transition-opacity duration-700" />
        <div className="container-site trade-hero-content relative z-2">
          <div className="trade-hero-copy">
            <h1>DC FOODS &amp; BEVERAGES</h1>
            <span className="trade-hero-ribbon">{slide.ribbon}</span>
            <h2 className="trade-hero-offer">{slide.offer}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="trade-stats">
        <div className="container-site grid grid-cols-2 gap-y-6 text-center sm:grid-cols-4">
          <div><strong>05</strong><span>Product Divisions</span></div>
          <div><strong>2025</strong><span>Year Incorporated</span></div>
          <div><strong>Vadodara</strong><span>Gujarat, India</span></div>
          <div><strong>GST</strong><span>Registered Company</span></div>
        </div>
      </section>

      {/* WHY DC FOODS */}
      <section id="about" className="section-space">
        <div className="container-site grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="trade-title">Why DC Foods?</h2>
            <p className="trade-body mt-6">
              Founded in 2025, <strong>{COMPANY.legalName}</strong> is a new-generation food manufacturer based in Vadodara, Gujarat.
            </p>
            <p className="trade-body mt-4">
              We focus on useful product variety, clear communication and practical partnerships.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border shadow-sm">
            <Image src={ASSETS.hub.foodCollection} alt="DC Foods products" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section-space bg-muted">
        <div className="container-site">
          <div className="text-center">
            <h2 className="trade-title">Our Products</h2>
            <p className="trade-body mt-3">Explore our food products and ingredients.</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {DIVISIONS.map((d) => (
              <button key={d.slug} onClick={() => setActiveCategory(d.slug)} className={`inline-flex min-h-9 items-center justify-center rounded-sm px-4 text-xs font-bold ${activeCategory === d.slug ? "bg-primary text-white" : "border bg-card"}`}>
                {d.title}
              </button>
            ))}
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((prod) => (
              <article key={prod.name} className="trade-product">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={prod.image} alt={prod.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{prod.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{prod.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
