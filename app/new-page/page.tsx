"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/app/assets";

const COMPANY = {
  legalName: "DC Foods & Beverages Private Limited",
  displayName: "DC Foods & Beverages",
  shortName: "DC Foods",
  tagline: "Quality Products. Strong Margins. Growing Market.",
  incorporated: "17 June 2025",
  cin: "U10501GJ2025PTC164206",
  udyam: "UDYAM-GJ-24-0195560",
  dpiit: "DIPP275511",
  gstin: "24AALCD7943D1ZM",
  fssai: "10725999000185",
  factoryAddress:
    "Shah Industrial Park 6, Gajedra, Near Waghodiya GIDC, Alva Village Road, Vadodara, Gujarat, India",
  registeredOffice:
    "D-502, Rudraksh Heights, Kapurai Road, Opp. M M Vora Show Room, Soma Talav, Vadodara, Gujarat 390025, India",
  phone: "+91 72659 07267",
  whatsappNumber: "917265907267",
};

// Hero Carousel Slides
const HERO_SLIDES = [
  {
    image: ASSETS.hub.tradeSpicesBanner,
    ribbon: "Indian Spices",
    offer: "Spices, Powders & Food Essentials",
    description:
      "From Vadodara to your business — bulk supply, distribution & private label.",
    category: "spices",
    alt: "Bowls of red chilli, turmeric and whole Indian spices",
  },
  {
    image: ASSETS.hub.products.fruitRange,
    ribbon: "Dehydrated Fruits",
    offer: "Fruit Ingredients & Everyday Flavour",
    description:
      "Explore our dehydrated fruit range for food businesses and retail enquiries.",
    category: "fruits",
    alt: "Dehydrated fruit selection",
  },
  {
    image: ASSETS.hub.products.dairyRange,
    ribbon: "Dairy & Ghee",
    offer: "Dairy Essentials For Your Business",
    description:
      "Discover dairy and ghee for homes, shelves and professional kitchens.",
    category: "dairy",
    alt: "Dairy and ghee selection",
  },
];

// Product Divisions
const DIVISIONS = [
  { slug: "all", title: "All Products" },
  { slug: "spices", title: "Spices & Masalas" },
  { slug: "onion", title: "Onion Powder" },
  { slug: "guar", title: "Guar Gum Powder" },
  { slug: "fruits", title: "Dehydrated Fruits" },
  { slug: "dairy", title: "Dairy & Ghee" },
];

// Product Catalog
const PRODUCTS = [
  {
    name: "Red Chilli Powder",
    category: "spices",
    detail: "A bold red spice for everyday cooking and commercial kitchens.",
    image: ASSETS.hub.products.chilli,
  },
  {
    name: "Turmeric Powder",
    category: "spices",
    detail: "Golden colour and warm, earthy flavour.",
    image: ASSETS.hub.products.turmeric,
  },
  {
    name: "Coriander Powder",
    category: "spices",
    detail: "A fragrant staple for savoury blends.",
    image: ASSETS.hub.products.coriander,
  },
  {
    name: "Garam Masala",
    category: "spices",
    detail: "A familiar blend for richly layered dishes.",
    image: ASSETS.hub.products.garamMasala,
  },
  {
    name: "Dehydrated Onion Powder",
    category: "onion",
    detail: "Convenient onion flavour for seasoning and food preparation.",
    image: ASSETS.hub.products.onionRange,
  },
  {
    name: "Guar Gum Powder",
    category: "guar",
    detail: "Available for food and industrial enquiries.",
    image: ASSETS.hub.products.guarGum,
  },
  {
    name: "Dehydrated Mango",
    category: "fruits",
    detail: "A bright fruit option for snacking and ingredient use.",
    image: ASSETS.hub.products.mango,
  },
  {
    name: "Desi Ghee",
    category: "dairy",
    detail: "A dairy favourite for homes and professional kitchens.",
    image: ASSETS.hub.products.ghee,
  },
  {
    name: "Dehydrated Orange Slices",
    category: "fruits",
    detail: "Citrus flavour for beverages, snacking and ingredient use.",
    image: ASSETS.hub.products.orangeSlices,
  },
  {
    name: "Dehydrated Apple Crisps",
    category: "fruits",
    detail: "Apple slices for snacks, cereal blends and food preparation.",
    image: ASSETS.hub.products.appleCrisps,
  },
  {
    name: "Dehydrated Banana Slices",
    category: "fruits",
    detail: "Banana flavour for snacks and ingredient blends.",
    image: ASSETS.hub.products.bananaSlices,
  },
  {
    name: "Banana Powder",
    category: "fruits",
    detail: "A fruit ingredient for baking and beverage enquiries.",
    image: ASSETS.hub.products.bananaPowder,
  },
  {
    name: "Sev Usal Masala",
    category: "spices",
    detail: "A savoury masala for the familiar flavours of sev usal.",
    image: ASSETS.hub.products.sevUsalMasala,
  },
  {
    name: "Tea Masala",
    category: "spices",
    detail: "An aromatic spice blend for a warming cup of chai.",
    image: ASSETS.hub.products.teaMasala,
  },
  {
    name: "Guar Gum Powder — Industrial Grade",
    category: "guar",
    detail: "For industrial specification enquiries. Not for household cooking.",
    image: ASSETS.hub.products.guarGum,
  },
  {
    name: "Paneer",
    category: "dairy",
    detail: "A versatile dairy ingredient for home and professional kitchens.",
    image: ASSETS.hub.products.paneer,
  },
  {
    name: "Milk",
    category: "dairy",
    detail: "Dairy supply enquiries for households and food businesses.",
    image: ASSETS.hub.products.milk,
  },
];

// Special Powder Select Cards for Enquiry
const ENQUIRY_SELECT_ITEMS = [
  { name: "Dried Pineapple", img: ASSETS.hub.products.driedPineapple },
  { name: "Dried Strawberry", img: ASSETS.hub.products.driedStrawberry },
  { name: "Carrot Powder", img: ASSETS.hub.products.carrotPowder },
  { name: "Tomato Powder", img: ASSETS.hub.products.tomatoPowder },
  { name: "Beetroot Powder", img: ASSETS.hub.products.beetrootPowder },
  { name: "Amla Powder", img: ASSETS.hub.products.amlaPowder },
];

// Today's Live Rates Data (from official catalogue)
const PRICE_LIST_HIGHLIGHTS = [
  { product: "Nizamabad Turmeric", grade: "Good Grade", price: 210, unit: "KG" },
  { product: "Nizamabad Turmeric", grade: "FAQ Grade", price: 200, unit: "KG" },
  { product: "Maharashtra Turmeric", grade: "Good Grade", price: 220, unit: "KG" },
  { product: "Maharashtra Turmeric", grade: "FAQ Grade", price: 195, unit: "KG" },
  { product: "Maharashtra Turmeric", grade: "Bulb Grade", price: 240, unit: "KG" },
  { product: "Kaddapa Turmeric", grade: "Good Grade", price: 210, unit: "KG" },
];

// FAQ Data
const FAQS = [
  {
    q: "What products does DC Foods offer?",
    a: "Our range includes spices and masalas, dehydrated onion powder, guar gum powder, dehydrated fruits, and dairy products.",
  },
  {
    q: "Can I enquire about bulk quantities?",
    a: "Yes. Share your product, quantity, packaging preference and destination. Availability, specifications and pricing are discussed for each enquiry.",
  },
  {
    q: "Do you offer private-label opportunities?",
    a: "We welcome private-label enquiries. Tell us about your brand, products and packaging requirements so we can discuss possibilities.",
  },
  {
    q: "How can I become a distributor?",
    a: "Contact us with your business details and territory, or send a distribution enquiry through our form.",
  },
  {
    q: "Where is DC Foods based?",
    a: "DC Foods & Beverages Private Limited is based in Vadodara, Gujarat, India, and was incorporated on 17 June 2025.",
  },
];

export default function DCFoodsHubHomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedProductCard, setSelectedProductCard] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    location: "",
    quantity: "",
    message: "",
  });

  // Modals
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  // Auto rotate hero slides every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeSlide];

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const toggleInterest = (val: string) => {
    setSelectedInterests((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const openWhatsApp = (customMsg?: string) => {
    const defaultText = `Hello DC Foods, I would like to enquire about your products.`;
    const text = encodeURIComponent(customMsg || defaultText);
    window.open(`https://wa.me/${COMPANY.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <>
      {/* SECTION 1: HERO CAROUSEL */}
      <section className="trade-hero relative overflow-hidden" aria-label="DC Foods product highlights">
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          priority
          className="object-cover transition-opacity duration-700"
        />
        {activeSlide > 0 && <div className="inner-hero-shade absolute inset-0 z-1" />}

        <div className="container-site trade-hero-content relative z-2">
          <div className={`trade-hero-copy ${activeSlide > 0 ? "photo-copy" : ""}`}>
            <h1>DC FOODS &amp; BEVERAGES</h1>
            <span className="trade-hero-ribbon">{slide.ribbon}</span>
            <h2 className="trade-hero-offer">{slide.offer}</h2>
            <p className={activeSlide > 0 ? "hero-photo-copy" : ""}>
              {slide.description}
            </p>
            <Link
              href="/new-page/request-quote"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-secondary px-10 h-10 text-sm font-bold text-secondary-foreground shadow hover:brightness-110 transition"
            >
              Enquire Now
            </Link>
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
              activeSlide === idx
                ? "bg-secondary text-secondary-foreground shadow-sm"
                : "bg-white text-muted-foreground hover:bg-white/80"
            }`}
          >
            {s.ribbon}
          </button>
        ))}
      </div>

      {/* SECTION 2: TRADE STATS */}
      <section className="trade-stats" aria-label="DC Foods facts">
        <div className="container-site grid grid-cols-2 gap-y-6 text-center sm:grid-cols-4">
          <div>
            <strong>05</strong>
            <span>Product Divisions</span>
          </div>
          <div>
            <strong>2025</strong>
            <span>Year Incorporated</span>
          </div>
          <div>
            <strong>Vadodara</strong>
            <span>Gujarat, India</span>
          </div>
          <div>
            <strong>GST</strong>
            <span>Registered Company</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY DC FOODS? */}
      <section id="about" className="section-space">
        <div className="container-site grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="trade-title">Why DC Foods?</h2>
            <p className="trade-body mt-6">
              Founded in 2025, <strong>{COMPANY.legalName}</strong> is a
              new-generation food manufacturer based in Vadodara, Gujarat. Our
              range brings together spices, powders, dehydrated fruits and dairy
              for food businesses, distributors and brand owners.
            </p>
            <p className="trade-body mt-4">
              We focus on useful product variety, clear communication and practical
              partnerships. Whether you are sourcing ingredients or developing
              your own range, we start by understanding what your business needs.
            </p>

            <div className="mt-5 grid gap-3 text-xs sm:grid-cols-2">
              {[
                "Five product divisions",
                "Bulk enquiries welcome",
                "Private-label discussions",
                "Direct product support",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check text-accent shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  {item}
                </span>
              ))}
            </div>

            <Link
              href="/new-page/about"
              className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-sm bg-primary px-5 text-xs font-bold text-primary-foreground hover:bg-accent transition mt-7"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border shadow-sm">
            <Image
              src={ASSETS.hub.foodCollection}
              alt="Spices, onion powder, dehydrated fruits and ghee from the DC Foods product range"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR PRODUCTS */}
      <section id="products" className="section-space bg-muted">
        <div className="container-site">
          <div className="text-center">
            <h2 className="trade-title">Our Products</h2>
            <p className="trade-body mt-3">
              Explore our food products and ingredients.
            </p>
          </div>

          {/* Division Filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {DIVISIONS.map((d) => (
              <button
                key={d.slug}
                onClick={() => setActiveCategory(d.slug)}
                className={`inline-flex min-h-9 items-center justify-center rounded-sm px-4 text-xs font-bold tracking-wide transition ${
                  activeCategory === d.slug
                    ? "bg-primary text-primary-foreground shadow"
                    : "border border-border bg-card text-foreground hover:bg-muted"
                }`}
              >
                {d.title}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.slice(0, 8).map((prod) => (
              <article key={prod.name} className="trade-product">
                <Link
                  href={`/new-page/request-quote?product=${encodeURIComponent(prod.name)}`}
                  className="relative block aspect-[4/3] w-full overflow-hidden bg-muted"
                >
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold text-foreground text-lg">{prod.name}</h3>
                  <p className="mt-3 flex-1 text-xs text-muted-foreground leading-relaxed">
                    {prod.detail}
                  </p>
                  <Link
                    href={`/new-page/request-quote?product=${encodeURIComponent(prod.name)}`}
                    className="inline-flex items-center gap-1.5 self-start rounded-sm bg-primary px-3 py-2 text-xs font-bold text-primary-foreground hover:bg-accent transition mt-5"
                  >
                    Enquire Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-8 text-center">
            <Link
              href="/new-page/products"
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-border bg-card px-6 text-xs font-bold text-foreground shadow-sm hover:border-accent transition"
            >
              View All Products (17)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: BUILT AROUND YOUR BUSINESS */}
      <section id="business" className="section-space">
        <div className="container-site">
          <h2 className="trade-title text-center">Built Around Your Business</h2>
          <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Bulk & Trade Supply",
                text: "Discuss your ingredient, quantity and destination requirements.",
                linkText: "Request Quote",
                href: "/new-page/export-quality",
              },
              {
                title: "Distribution Partners",
                text: "Explore opportunities for your market and territory.",
                linkText: "Partner with Us",
                href: "/new-page/distributors",
              },
              {
                title: "Private Label",
                text: "Start a conversation about a range for your own brand.",
                linkText: "Discuss OEM",
                href: "/new-page/private-label",
              },
              {
                title: "Retail & Food Businesses",
                text: "Find ingredients for shelves and professional kitchens.",
                linkText: "View Range",
                href: "/new-page/products",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-accent pt-5">
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="trade-body mt-3">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                >
                  {item.linkText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: LIVE SPICE PRICES */}
      <section className="section-space bg-white border-y border-border">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow text-accent">TODAY&apos;S RATES</span>
              <h2 className="display mt-4 text-4xl sm:text-5xl md:text-6xl text-foreground">
                Live spice prices.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Last updated: Direct from Mandi &amp; DC Processing Hub · Rates are subject to reconfirmation.
              </p>
            </div>
            <Link
              href="/new-page/price-list"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-secondary px-5 text-xs font-bold text-secondary-foreground hover:brightness-110 transition shrink-0"
            >
              View full price list
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>

          {/* Highlighted Price Cards */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PRICE_LIST_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                onClick={() =>
                  openWhatsApp(
                    `Hello DC Foods, I want a quote for ${item.product} - ${item.grade} (₹${item.price}/${item.unit}).`
                  )
                }
                className="flex items-center justify-between border border-border bg-white p-5 cursor-pointer hover:border-accent hover:shadow-sm transition"
              >
                <div>
                  <strong className="font-display text-base font-bold text-foreground">
                    {item.product}
                  </strong>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {item.grade}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-primary">
                    ₹{item.price}/{item.unit}
                  </span>
                  <div className="text-[10px] text-accent font-semibold flex items-center justify-end gap-1">
                    WhatsApp Quote →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: REGISTERED & VERIFIABLE */}
      <section id="certificates" className="section-space">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow text-accent">CERTIFICATES &amp; COMPLIANCE</span>
              <h2 className="display mt-4 text-4xl sm:text-5xl md:text-6xl text-foreground">
                Registered. Verifiable.
              </h2>
              <p className="mt-3 inline-block bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                GST Registered · GSTIN {COMPANY.gstin}
              </p>
            </div>
            <Link
              href="/new-page/certificates"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-primary px-5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition"
            >
              All certificates
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "GST Registration Certificate",
                no: COMPANY.gstin,
                issuedTo: COMPANY.legalName,
                date: "02 Aug 2025",
              },
              {
                title: "FSSAI Food Safety License",
                no: COMPANY.fssai,
                issuedTo: COMPANY.legalName,
                date: "Central Processing",
              },
              {
                title: "MSME UDYAM Certificate",
                no: COMPANY.udyam,
                issuedTo: COMPANY.legalName,
                date: "Govt. of India",
              },
            ].map((cert) => (
              <article
                key={cert.title}
                className="flex flex-col border border-border bg-card p-6 rounded-sm shadow-sm hover:border-accent transition"
              >
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted rounded-sm mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="text-accent"
                  >
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm font-bold text-primary">No. {cert.no}</p>
                <p className="mt-1 text-xs text-muted-foreground">Issued to {cert.issuedTo}</p>
                <p className="text-xs text-muted-foreground">Issued: {cert.date}</p>
                <div className="mt-auto flex gap-2 pt-5">
                  <button
                    onClick={() => setShowCertModal(true)}
                    className="inline-flex items-center gap-1 border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted"
                  >
                    View
                  </button>
                  <a
                    href={ASSETS.hub.companyProfilePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground hover:brightness-110"
                  >
                    Download Dossier
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQS */}
      <section id="faqs" className="section-space bg-muted">
        <div className="container-site grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="trade-title">Frequently Asked Questions</h2>
            <p className="trade-body mt-5">
              Have a product or trade enquiry? Speak directly with our team for
              details specific to your business.
            </p>
            <a
              href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-primary text-primary px-5 text-xs font-bold hover:bg-primary hover:text-white transition mt-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              {COMPANY.phone}
            </a>
          </div>

          <div>
            {FAQS.map((faq, idx) => (
              <div key={faq.q} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full min-h-14 items-center justify-between gap-4 py-4 text-left text-sm font-bold text-foreground transition hover:text-accent"
                >
                  <span>{faq.q}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? "rotate-180 text-accent" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                {openFaq === idx && (
                  <p className="trade-body pb-5 text-xs leading-relaxed animate-in fade-in">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: SEND US YOUR ENQUIRY */}
      <section id="enquiry" className="section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          {/* Left Details */}
          <div>
            <h2 className="trade-title">Send Us Your Enquiry</h2>
            <p className="trade-body mt-5">
              Connect with DC Foods for product sourcing, distribution and
              private-label requirements.
            </p>
            <p className="mt-7 text-sm font-semibold text-foreground">
              {COMPANY.legalName}
            </p>
            <p className="trade-body mt-3 text-xs leading-relaxed">
              <strong>Factory:</strong> {COMPANY.factoryAddress}
            </p>
            <p className="trade-body mt-2 text-xs leading-relaxed">
              <strong>Registered Office:</strong> {COMPANY.registeredOffice}
            </p>
            <a
              href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
              className="mt-6 inline-flex items-center gap-2 font-bold text-primary hover:text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              {COMPANY.phone}
            </a>
            <div className="mt-3 text-xs font-semibold text-muted-foreground">
              CIN: {COMPANY.cin}
            </div>
            <p className="trade-body mt-1 text-xs">
              <strong>GSTIN:</strong> {COMPANY.gstin}
            </p>
          </div>

          {/* Right Interactive Form */}
          <div>
            {formSubmitted ? (
              <div className="rounded border border-green-600/30 bg-green-50/50 p-6 text-center animate-in fade-in">
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-900">
                  Enquiry Received Successfully!
                </h3>
                <p className="mt-2 text-xs text-green-800">
                  Thank you, {formData.fullName || "valued partner"}. Our team will review your requirement and get in touch within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    openWhatsApp(
                      `Hello DC Foods, I just submitted an enquiry for ${formData.businessName || formData.fullName}. Message: ${formData.message}`
                    );
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded bg-green-700 px-5 py-2.5 text-xs font-bold text-white hover:bg-green-800"
                >
                  Confirm on WhatsApp Now
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-foreground">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Enter full name"
                    className="mt-1 flex w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground">
                    Business / Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    placeholder="Company or trading firm"
                    className="mt-1 flex w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="mt-1 flex w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@company.com"
                    className="mt-1 flex w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground">
                    Location / City / State
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="e.g. Vadodara, Gujarat, India"
                    className="mt-1 flex w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    placeholder="e.g. 500 KG / 5 Tons / Sample Pack"
                    className="mt-1 flex w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:border-accent focus:outline-none"
                  />
                </div>

                {/* Requirement Pills */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-foreground">
                    Area of Interest
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "Spices & Masalas",
                      "Onion Powder",
                      "Guar Gum Powder",
                      "Dehydrated Fruits",
                      "Dairy & Ghee",
                      "Distribution",
                      "Private Label",
                    ].map((interest) => (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`rounded-sm px-3 py-1.5 text-xs font-semibold transition ${
                          selectedInterests.includes(interest)
                            ? "bg-primary text-white"
                            : "border border-border bg-card text-foreground hover:bg-muted"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specific Ingredients Select */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-foreground">
                    Specific Powder &amp; Dehydrated Options
                  </label>
                  <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {ENQUIRY_SELECT_ITEMS.map((item) => (
                      <button
                        type="button"
                        key={item.name}
                        onClick={() =>
                          setSelectedProductCard(
                            selectedProductCard === item.name ? "" : item.name
                          )
                        }
                        className={`group relative flex flex-col items-center overflow-hidden rounded border text-left transition ${
                          selectedProductCard === item.name
                            ? "border-primary bg-primary/5 ring-2 ring-primary"
                            : "border-border bg-card hover:border-accent"
                        }`}
                      >
                        <div className="relative aspect-square w-full">
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        </div>
                        <span className="p-1.5 text-[11px] font-semibold text-center line-clamp-1">
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>
                  <span className="mt-1 block text-[11px] text-muted-foreground">
                    Click to select specific powder or fruit.
                  </span>
                </div>

                {/* Message / Details */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-foreground">
                    Requirement details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Product, format, packaging, destination or any other requirement"
                    className="mt-1 flex w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:border-accent focus:outline-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex min-h-11 items-center justify-center rounded-sm bg-secondary px-7 text-xs font-bold text-secondary-foreground shadow hover:brightness-110 transition"
                  >
                    Submit official enquiry
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      openWhatsApp(
                        `Hello DC Foods, Enquiry from ${formData.fullName || "Partner"}: ${formData.message || "I want to enquire about products."}`
                      )
                    }
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-primary px-7 text-xs font-bold text-primary hover:bg-primary hover:text-white transition"
                  >
                    Chat on WhatsApp
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MODAL: Full Price List */}
      {showPriceModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowPriceModal(false)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <span className="eyebrow text-accent">TODAY&apos;S RATES</span>
                <h3 className="font-display text-2xl font-bold">Official Spice Rates</h3>
              </div>
              <button
                onClick={() => setShowPriceModal(false)}
                className="rounded p-1 text-muted-foreground hover:bg-muted"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-bold text-primary text-sm mb-2">Turmeric Finger (50 KG Jute Nett)</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs">
                  <div className="p-3 border rounded bg-muted/30 flex justify-between">
                    <span>Nizamabad Quality - Good Grade</span>
                    <strong className="text-primary font-bold">₹210/KG</strong>
                  </div>
                  <div className="p-3 border rounded bg-muted/30 flex justify-between">
                    <span>Nizamabad Quality - FAQ</span>
                    <strong className="text-primary font-bold">₹200/KG</strong>
                  </div>
                  <div className="p-3 border rounded bg-muted/30 flex justify-between">
                    <span>Maharashtra Quality - Good</span>
                    <strong className="text-primary font-bold">₹220/KG</strong>
                  </div>
                  <div className="p-3 border rounded bg-muted/30 flex justify-between">
                    <span>Maharashtra Quality - Bulb</span>
                    <strong className="text-primary font-bold">₹240/KG</strong>
                  </div>
                  <div className="p-3 border rounded bg-muted/30 flex justify-between">
                    <span>Kaddapa Quality - Good Grade</span>
                    <strong className="text-primary font-bold">₹210/KG</strong>
                  </div>
                  <div className="p-3 border rounded bg-muted/30 flex justify-between">
                    <span>Kaddapa Quality - FAQ Grade</span>
                    <strong className="text-primary font-bold">₹200/KG</strong>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-primary text-sm mb-2">Seeds (25 KG PP Bag Nett · F.O.R Mundra)</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs">
                  <div className="p-3 border rounded bg-muted/30 flex justify-between">
                    <span>Asaliya Seed - FAQ</span>
                    <strong className="text-accent">Quote on Request</strong>
                  </div>
                  <div className="p-3 border rounded bg-muted/30 flex justify-between">
                    <span>Flax Seeds - Cleaned</span>
                    <strong className="text-accent">Quote on Request</strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap justify-between items-center gap-3 pt-4 border-t">
                <span className="text-xs text-muted-foreground">
                  ⚠️ Rates are subject to market reconfirmation.
                </span>
                <Link
                  href="/new-page/price-list"
                  className="rounded bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground"
                >
                  View Full Price List Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Full Certificates */}
      {showCertModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowCertModal(false)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <span className="eyebrow text-accent">LEGAL &amp; COMPLIANCE</span>
                <h3 className="font-display text-2xl font-bold">Company Certifications</h3>
              </div>
              <button
                onClick={() => setShowCertModal(false)}
                className="rounded p-1 text-muted-foreground hover:bg-muted"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="border p-4 rounded bg-muted/20">
                <strong className="text-sm block text-primary">Goods &amp; Services Tax (GST)</strong>
                <p className="mt-1">GSTIN: <span className="font-mono font-bold">{COMPANY.gstin}</span></p>
                <p className="text-muted-foreground mt-0.5">Issued to: {COMPANY.legalName}</p>
                <p className="text-muted-foreground">Status: Active &amp; Verified</p>
              </div>
              <div className="border p-4 rounded bg-muted/20">
                <strong className="text-sm block text-primary">Ministry of Corporate Affairs (MCA)</strong>
                <p className="mt-1">CIN: <span className="font-mono font-bold">{COMPANY.cin}</span></p>
                <p className="text-muted-foreground mt-0.5">Incorporation Date: {COMPANY.incorporated}</p>
              </div>
              <div className="border p-4 rounded bg-muted/20">
                <strong className="text-sm block text-primary">MSME UDYAM Registration</strong>
                <p className="mt-1">UDYAM Number: <span className="font-mono font-bold">{COMPANY.udyam}</span></p>
              </div>
              <div className="border p-4 rounded bg-muted/20">
                <strong className="text-sm block text-primary">DPIIT Startup Recognition</strong>
                <p className="mt-1">Certificate Number: <span className="font-mono font-bold">{COMPANY.dpiit}</span></p>
              </div>
              <div className="border p-4 rounded bg-muted/20">
                <strong className="text-sm block text-primary">Food Safety and Standards Authority of India (FSSAI)</strong>
                <p className="mt-1">License Number: <span className="font-mono font-bold">{COMPANY.fssai}</span></p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3 pt-4 border-t">
              <Link
                href="/new-page/certificates"
                className="rounded bg-primary px-4 py-2 text-xs font-bold text-white hover:bg-accent"
              >
                Go to Dedicated Certifications Page
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
