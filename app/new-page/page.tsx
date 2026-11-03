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

export default function DCFoodsHubPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tradeDropdownOpen, setTradeDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <div className="hub-root min-h-screen bg-background text-foreground antialiased">
      {/* HEADER */}
      <header className="site-header">
        <div className="container-site site-header-inner">
          <Link href="/new-page" className="site-logo active" aria-label="DC Foods home">
            <Image src={ASSETS.hub.logo} alt="DC Foods logo" width={58} height={58} priority className="size-[58px] object-contain" />
            <span>
              <strong>DC FOODS</strong>
              <small>&amp; BEVERAGES PRIVATE LIMITED</small>
            </span>
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/new-page" className="font-semibold text-accent">Home</Link>
            <a href="#products">Products</a>
            <a href="#certificates">Certifications</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href={ASSETS.hub.companyProfilePdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded bg-muted px-3 py-1.5 text-xs font-semibold text-primary hover:bg-accent hover:text-white transition">
              Download Brochure
            </a>
          </nav>
        </div>
      </header>

      {/* SECTION 1: HERO CAROUSEL */}
      <section className="trade-hero relative overflow-hidden" aria-label="DC Foods product highlights">
        <Image src={slide.image} alt={slide.alt} fill priority className="object-cover transition-opacity duration-700" />
        {activeSlide > 0 && <div className="inner-hero-shade absolute inset-0 z-1" />}
        <div className="container-site trade-hero-content relative z-2">
          <div className={`trade-hero-copy ${activeSlide > 0 ? "photo-copy" : ""}`}>
            <h1>DC FOODS &amp; BEVERAGES</h1>
            <span className="trade-hero-ribbon">{slide.ribbon}</span>
            <h2 className="trade-hero-offer">{slide.offer}</h2>
            <p className={activeSlide > 0 ? "hero-photo-copy" : ""}>{slide.description}</p>
            <a href="#enquiry" className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-secondary px-10 h-10 text-sm font-bold text-secondary-foreground shadow hover:brightness-110 transition">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Banner Tab Selector */}
      <div className="banner-dots flex justify-center gap-2 py-3 bg-muted border-b border-border">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.ribbon}
            onClick={() => setActiveSlide(idx)}
            className={`px-3 py-1 text-xs font-bold rounded transition ${
              activeSlide === idx ? "bg-secondary text-secondary-foreground shadow-sm" : "bg-white text-muted-foreground hover:bg-white/80"
            }`}
          >
            {s.ribbon}
          </button>
        ))}
      </div>

      {/* SECTION 2: TRADE STATS */}
      <section className="trade-stats" aria-label="DC Foods facts">
        <div className="container-site grid grid-cols-2 gap-y-6 text-center sm:grid-cols-4">
          <div><strong>05</strong><span>Product Divisions</span></div>
          <div><strong>2025</strong><span>Year Incorporated</span></div>
          <div><strong>Vadodara</strong><span>Gujarat, India</span></div>
          <div><strong>GST</strong><span>Registered Company</span></div>
        </div>
      </section>
    </div>
  );
}
