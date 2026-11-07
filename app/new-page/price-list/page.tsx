"use client";

import React, { useState, useMemo } from "react";
import { Search, Download, ArrowUp, ArrowDown, MessageSquare } from "@/app/new-page/components/icons";
import { PRICE_CATEGORIES, PriceCategory } from "./data";

function getPriceTrend(price: number | null, previousPrice: number | null): "up" | "down" | null {
  if (price === null || previousPrice === null || price === previousPrice) return null;
  return price > previousPrice ? "up" : "down";
}

function getWhatsAppQuoteUrl(productName: string, gradeName: string, price: number | null): string {
  const text = `Hello DC Foods, I want a quote for ${productName} - ${gradeName}${
    price === null ? "" : ` (₹${price}/KG)`
  }. Quantity: `;
  return `https://wa.me/917265907267?text=${encodeURIComponent(text)}`;
}

export default function PriceListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [downloading, setDownloading] = useState(false);

  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return PRICE_CATEGORIES;

    return PRICE_CATEGORIES.map((cat) => {
      const matchingProducts = cat.products.filter((p) => {
        const text = `${p.name} ${p.grades.map((g) => g.name).join(" ")}`.toLowerCase();
        return text.includes(q);
      });
      return {
        ...cat,
        products: matchingProducts,
      };
    }).filter((cat) => cat.products.length > 0);
  }, [searchQuery]);

  const handleDownloadPdf = () => {
    setDownloading(true);
    setTimeout(() => {
      // Trigger download of the company profile / rate card PDF
      const link = document.createElement("a");
      link.href = "/assets/hub/company-profile.pdf";
      link.download = "DC-Foods-Price-List.pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
    }, 600);
  };

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRICE_CATEGORIES.flatMap((c) => c.products).map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        name: p.name,
        brand: { "@type": "Brand", name: "DC Foods" },
        offers: p.grades
          .filter((g) => g.price !== null)
          .map((g) => ({
            "@type": "Offer",
            name: g.name,
            price: g.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          })),
      },
    })),
  };

  return (
    <main id="main">
      {/* Hero Header */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container-site">
          <span className="inline-block bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground">
            Last updated: Today
          </span>
          <h1 className="display mt-6 text-6xl md:text-8xl">Today&apos;s Spice Rates</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-primary-foreground/85">
            Per-KG rates for turmeric finger, seeds and spice powders. Tap any grade to get a quote on WhatsApp.
          </p>
          <p className="mt-3 text-sm font-semibold text-secondary">
            Rates are subject to reconfirmation.
          </p>
        </div>
      </section>

      {/* Sticky Navigation Bar */}
      <nav
        className="sticky top-[64px] z-30 border-b border-border bg-background/95 backdrop-blur"
        aria-label="Price categories"
      >
        <div className="container-site flex flex-wrap items-center gap-2 py-3">
          {PRICE_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.slug}`}
              className="border border-border px-3 py-2 text-xs font-bold hover:border-accent hover:text-accent transition-colors"
            >
              {cat.name}
            </a>
          ))}

          <div className="relative ml-auto w-full sm:w-64">
            <Search className="lucide lucide-search absolute left-3 top-3 size-4 text-muted-foreground" />
            <input
              type="text"
              aria-label="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search spice or grade"
              className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors md:text-sm h-10 pl-9 outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={downloading}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm px-5 text-xs font-bold tracking-wide transition-all bg-secondary text-secondary-foreground hover:brightness-110 h-11"
          >
            <Download className="size-4" />
            {downloading ? "Preparing…" : "Download price list (PDF)"}
          </button>
        </div>
      </nav>

      {/* Categories & Products Section */}
      <section className="section-space">
        <div className="container-site space-y-16">
          {filteredCategories.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">No matching products or grades found.</p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-3 text-xs font-bold text-accent hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.id} id={cat.slug} className="scroll-mt-40">
                <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
                  <h2 className="display text-4xl md:text-5xl">{cat.name}</h2>
                  {cat.note && <p className="text-xs font-semibold text-accent">{cat.note}</p>}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {cat.products.map((prod) => (
                    <article
                      key={prod.id}
                      className="flex flex-col border border-border bg-card p-6"
                    >
                      <h3 className="font-display text-2xl font-semibold">{prod.name}</h3>

                      <ul className="mt-4 flex-1 divide-y divide-border">
                        {prod.grades.map((grade) => {
                          const trend = getPriceTrend(grade.price, grade.previous_price);
                          return (
                            <li
                              key={grade.id}
                              className="flex items-center justify-between gap-3 py-2.5 text-sm"
                            >
                              <span>{grade.name}</span>
                              <span className="flex items-center gap-2 font-bold">
                                {trend === "up" && (
                                  <ArrowUp aria-label="Price up" className="size-4 text-accent" />
                                )}
                                {trend === "down" && (
                                  <ArrowDown
                                    aria-label="Price down"
                                    className="size-4 text-destructive"
                                  />
                                )}
                                {grade.price === null ? (
                                  <span className="font-medium text-muted-foreground">
                                    Price on request
                                  </span>
                                ) : (
                                  <span>
                                    ₹{grade.price} / {grade.unit}
                                  </span>
                                )}
                                <a
                                  aria-label={`Get quote for ${prod.name} ${grade.name} on WhatsApp`}
                                  href={getWhatsAppQuoteUrl(prod.name, grade.name, grade.price)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-accent hover:opacity-80 transition-opacity"
                                >
                                  <MessageSquare className="size-4" />
                                </a>
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      <a
                        href={getWhatsAppQuoteUrl(
                          prod.name,
                          prod.grades[0]?.name ?? "",
                          prod.grades[0]?.price ?? null
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-5 text-xs font-bold tracking-wide transition-all"
                      >
                        Get Quote on WhatsApp <MessageSquare className="size-4" />
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            ))
          )}

          <p className="text-sm font-semibold">Rates are subject to reconfirmation.</p>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
    </main>
  );
}
