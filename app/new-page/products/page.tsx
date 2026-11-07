"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowUpRight, X, Building2, ShoppingBag } from "@/app/new-page/components/icons";

interface Product {
  name: string;
  category: "spices" | "onion" | "guar" | "fruits" | "dairy";
  categoryLabel: string;
  detail: string;
  image: string;
  forHousehold?: boolean;
}

const CATEGORIES = [
  { slug: "all", title: "All categories" },
  { slug: "spices", title: "Spices & Masalas" },
  { slug: "onion", title: "Onion Powder" },
  { slug: "guar", title: "Guar Gum Powder" },
  { slug: "fruits", title: "Dehydrated Fruits" },
  { slug: "dairy", title: "Dairy & Ghee" },
] as const;

const PRODUCTS: Product[] = [
  {
    name: "Red Chilli Powder",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    detail: "A bold red spice for everyday cooking and commercial kitchens.",
    image: "/assets/hub/chilli-product-CoxBSkGl.jpg",
    forHousehold: true,
  },
  {
    name: "Turmeric Powder",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    detail: "Golden colour and warm, earthy flavour.",
    image: "/assets/hub/turmeric-product-D-BY_dc-.jpg",
    forHousehold: true,
  },
  {
    name: "Coriander Powder",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    detail: "A fragrant staple for savoury blends.",
    image: "/assets/hub/coriander-product-CTAGF8EQ.jpg",
    forHousehold: true,
  },
  {
    name: "Garam Masala",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    detail: "A familiar blend for richly layered dishes.",
    image: "/assets/hub/garam-masala-product-mKs-KfNN.jpg",
    forHousehold: true,
  },
  {
    name: "Dehydrated Onion Powder",
    category: "onion",
    categoryLabel: "Onion Powder",
    detail: "Convenient onion flavour for seasoning and food preparation.",
    image: "/assets/hub/onion-range-BXcg-HM1.jpg",
    forHousehold: true,
  },
  {
    name: "Guar Gum Powder",
    category: "guar",
    categoryLabel: "Guar Gum Powder",
    detail: "Available for food and industrial enquiries.",
    image: "/assets/hub/guar-product-Dqok-w2S.jpg",
    forHousehold: false,
  },
  {
    name: "Dehydrated Mango",
    category: "fruits",
    categoryLabel: "Dehydrated Fruits",
    detail: "A bright fruit option for snacking and ingredient use.",
    image: "/assets/hub/mango-product-GmvQwlL0.jpg",
    forHousehold: true,
  },
  {
    name: "Desi Ghee",
    category: "dairy",
    categoryLabel: "Dairy & Ghee",
    detail: "A dairy favourite for homes and professional kitchens.",
    image: "/assets/hub/ghee-product.jpg",
    forHousehold: true,
  },
  {
    name: "Dehydrated Orange Slices",
    category: "fruits",
    categoryLabel: "Dehydrated Fruits",
    detail: "Citrus flavour for beverages, snacking and ingredient use.",
    image: "/assets/hub/orange-slices-product-CIaKhUEy.jpg",
    forHousehold: true,
  },
  {
    name: "Dehydrated Apple Crisps",
    category: "fruits",
    categoryLabel: "Dehydrated Fruits",
    detail: "Apple slices for snacks, cereal blends and food preparation.",
    image: "/assets/hub/apple-crisps-product-B3S8UwhF.jpg",
    forHousehold: true,
  },
  {
    name: "Dehydrated Banana Slices",
    category: "fruits",
    categoryLabel: "Dehydrated Fruits",
    detail: "Banana flavour for snacks and ingredient blends.",
    image: "/assets/hub/banana-slices-product-CJGn5rzd.jpg",
    forHousehold: true,
  },
  {
    name: "Banana Powder",
    category: "fruits",
    categoryLabel: "Dehydrated Fruits",
    detail: "A fruit ingredient for baking and beverage enquiries.",
    image: "/assets/hub/banana-powder-C_ptmVJ0.jpg",
    forHousehold: true,
  },
  {
    name: "Sev Usal Masala",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    detail: "A savoury masala for the familiar flavours of sev usal.",
    image: "/assets/hub/sev-usal-masala-product-DGLaKDGw.jpg",
    forHousehold: true,
  },
  {
    name: "Tea Masala",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    detail: "An aromatic spice blend for a warming cup of chai.",
    image: "/assets/hub/tea-masala-product-Bu3DcSCl.jpg",
    forHousehold: true,
  },
  {
    name: "Guar Gum Powder — Industrial Grade",
    category: "guar",
    categoryLabel: "Guar Gum Powder",
    detail: "For industrial specification enquiries. Not for household cooking.",
    image: "/assets/hub/guar-product-Dqok-w2S.jpg",
    forHousehold: false,
  },
  {
    name: "Paneer",
    category: "dairy",
    categoryLabel: "Dairy & Ghee",
    detail: "A versatile dairy ingredient for home and professional kitchens.",
    image: "/assets/hub/paneer-product-BXea1Q6w.jpg",
    forHousehold: true,
  },
  {
    name: "Milk",
    category: "dairy",
    categoryLabel: "Dairy & Ghee",
    detail: "Dairy supply enquiries for households and food businesses.",
    image: "/assets/hub/milk-product-D4LdgSr8.jpg",
    forHousehold: true,
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [audience, setAudience] = useState<"all" | "household" | "trade">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }
      // Audience filter
      if (audience === "household" && p.forHousehold === false) {
        return false;
      }
      // Search filter
      if (q && !`${p.name} ${p.detail} ${p.categoryLabel}`.toLowerCase().includes(q)) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, audience, searchQuery]);

  return (
    <main id="main">
      {/* Inner Hero */}
      <section className="inner-hero relative overflow-hidden bg-primary text-primary-foreground">
        <Image
          src="/assets/hub/fruit-range-yGy5e_7C.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="inner-hero-shade absolute inset-0"></div>
        <div className="container-site relative z-10 py-24 md:py-32">
          <span className="eyebrow text-secondary">THE PRODUCT PORTFOLIO</span>
          <h1 className="display mt-6 max-w-4xl text-6xl md:text-8xl">
            A range built for real needs.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            From familiar kitchen spices to versatile ingredients, explore our divisions and tell us what you are sourcing.
          </p>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="section-space">
        <div className="container-site">
          {/* Header & Audience Toggle */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="eyebrow text-accent">FULL PRODUCT RANGE</span>
              <h2 className="display mt-4 text-5xl md:text-6xl">Find your ingredient.</h2>
            </div>
            <div className="flex gap-1 rounded-lg bg-muted p-1" aria-label="Buyer audience">
              <button
                type="button"
                onClick={() => setAudience("all")}
                aria-pressed={audience === "all"}
                className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm px-4 text-[11px] font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-9 ${
                  audience === "all"
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setAudience("household")}
                aria-pressed={audience === "household"}
                className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm px-4 text-[11px] font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-9 ${
                  audience === "household"
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <ShoppingBag className="size-3.5" />
                Retail
              </button>
              <button
                type="button"
                onClick={() => setAudience("trade")}
                aria-pressed={audience === "trade"}
                className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm px-4 text-[11px] font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-9 ${
                  audience === "trade"
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <Building2 className="size-3.5" />
                Bulk / HoReCa
              </button>
            </div>
          </div>

          {/* Division Pills */}
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Product divisions">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  aria-pressed={active}
                  className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-11 rounded-full px-6 text-[11px] uppercase tracking-wider ${
                    active
                      ? "bg-muted text-foreground hover:bg-secondary"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Search bar & count */}
          <div className="mt-10 flex flex-col justify-between gap-4 border-b border-border pb-4 sm:flex-row sm:items-center">
            <label className="flex w-full max-w-md items-center gap-3">
              <Search className="size-5 shrink-0 text-accent" />
              <span className="sr-only">Search products</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our collection..."
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
            </label>
            <p className="text-xs font-semibold text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No products found matching your search.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setAudience("all");
                  setSearchQuery("");
                }}
                className="mt-4 text-sm font-bold text-accent hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((p) => {
                const quoteUrl = `/new-page/request-quote?product=${encodeURIComponent(p.name)}&role=${encodeURIComponent("Wholesaler / Bulk Buyer")}`;
                return (
                  <article key={p.name} className="group flex flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                          {p.categoryLabel}
                        </span>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-1 flex-col">
                      <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {p.detail}
                      </p>
                      <div className="mt-6 pt-4">
                        <Link
                          href={quoteUrl}
                          className="inline-flex min-h-11 cursor-pointer items-center gap-2 whitespace-nowrap px-5 text-xs font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-primary text-primary hover:bg-primary hover:text-primary-foreground h-11 w-full justify-between rounded-lg"
                        >
                          Enquire Now <ArrowUpRight className="lucide lucide-arrow-up-right size-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-secondary py-20 text-primary-foreground">
        <div className="container-site flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="display text-5xl md:text-6xl">Looking for something specific?</h2>
          <Link
            href="/new-page/request-quote"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm text-xs font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-12 px-7 bg-background text-secondary hover:bg-background/90"
          >
            Start an Enquiry <ArrowUpRight className="lucide lucide-arrow-up-right size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
