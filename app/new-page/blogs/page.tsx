import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/app/assets";

export const metadata = {
  title: "Blogs & Spice Guides | DC Foods & Beverages",
  description:
    "A closer look at the ingredients that bring flavour and aroma to everyday cooking. Culinary insights and guides from DC Foods.",
};

export default function BlogsPage() {
  return (
    <div>
      {/* INNER HERO */}
      <section className="inner-hero relative overflow-hidden bg-primary text-primary-foreground">
        <Image
          src={ASSETS.hub.products.spicesRange}
          alt="DC Foods Spice Journal"
          fill
          priority
          className="object-cover"
        />
        <div className="inner-hero-shade absolute inset-0"></div>
        <div className="container-site relative z-10 py-24 md:py-32">
          <span className="eyebrow text-secondary">DC FOODS JOURNAL</span>
          <h1 className="display mt-6 max-w-4xl text-5xl md:text-7xl lg:text-8xl">
            Blogs &amp; Spice Guides
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            A closer look at the ingredients that bring flavour and aroma to
            everyday cooking.
          </p>
        </div>
      </section>

      {/* BLOGS LIST */}
      <section className="section-space">
        <div className="container-site">
          <article className="trade-product max-w-sm">
            <Link
              href="/new-page/aromatic-spices"
              className="relative block aspect-[4/3] w-full overflow-hidden"
            >
              <Image
                src={ASSETS.hub.products.spicesRange}
                alt="Aromatic whole spices and powders"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <div className="p-6">
              <span className="eyebrow text-accent">CULINARY GUIDE</span>
              <h2 className="mt-3 text-xl font-bold text-foreground">
                What Are Aromatic Spices?
              </h2>
              <p className="trade-body mt-3">
                Explore familiar aromatic spices, their culinary uses and a
                chef’s tip for bringing out their flavour.
              </p>
              <Link
                href="/new-page/aromatic-spices"
                className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-sm bg-primary px-4 text-xs font-bold text-primary-foreground hover:bg-accent transition mt-5"
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
          </article>
        </div>
      </section>
    </div>
  );
}
