import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/app/assets";

export const metadata = {
  title: "About Us | DC Foods & Beverages Private Limited",
  description:
    "Founded in 2025 in Vadodara, Gujarat, DC Foods is building for the buyers, partners and brands shaping tomorrow's food market.",
};

export default function AboutPage() {
  return (
    <div>
      {/* INNER HERO */}
      <section className="inner-hero relative overflow-hidden bg-primary text-primary-foreground">
        <Image
          src={ASSETS.hub.products.spicesRange}
          alt="DC Foods Indian Spices Range"
          fill
          priority
          className="object-cover"
        />
        <div className="inner-hero-shade absolute inset-0"></div>
        <div className="container-site relative z-10 py-24 md:py-32">
          <span className="eyebrow text-secondary">OUR STORY</span>
          <h1 className="display mt-6 max-w-4xl text-5xl md:text-7xl lg:text-8xl">
            A new chapter in Indian food.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Founded in 2025 in Vadodara, Gujarat, DC Foods is building for the
            buyers, partners and brands shaping tomorrow&apos;s food market.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section-space">
        <div className="container-site grid gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow text-accent">WHO WE ARE</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl md:text-6xl text-foreground">
              An appetite for what&apos;s next.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              We are a new-generation food manufacturer with a portfolio
              spanning spices and masalas, onion powder, guar gum powder,
              dehydrated fruits, and dairy.
            </p>
            <p>
              Our focus is on building practical, lasting relationships with
              importers, distributors, food businesses and brand owners. Every
              strong partnership starts by understanding the product and the
              people behind it.
            </p>
            <p>
              Incorporated on <strong>17 June 2025</strong>, our company is based in
              Vadodara, Gujarat.
            </p>
            <a
              href={ASSETS.hub.companyProfilePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-sm border border-primary px-5 text-xs font-bold tracking-wide text-primary hover:bg-primary hover:text-primary-foreground transition mt-4"
            >
              View company profile
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                <path d="M12 18v-6"></path>
                <path d="m9 15 3 3 3-3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* OUR RANGE */}
      <section className="section-space bg-background border-t border-border">
        <div className="container-site grid items-center gap-16 lg:grid-cols-2">
          <div className="visual-panel aspect-square overflow-hidden rounded-sm relative border border-border shadow-sm">
            <Image
              src={ASSETS.hub.products.fruitRange}
              alt="A selection of dehydrated fruit ingredients"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="eyebrow text-accent">OUR RANGE</span>
            <h2 className="display mt-6 text-4xl sm:text-5xl md:text-6xl text-foreground">
              A portfolio with room to grow.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              From aromatic spices to dairy and dehydrated fruit, our range
              opens up conversations across retail, foodservice and ingredient
              sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT GUIDES US */}
      <section className="section-space">
        <div className="container-site">
          <h2 className="display mb-10 text-4xl sm:text-5xl text-foreground">
            What guides us.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-sm border border-border bg-card p-10 shadow-sm hover:border-accent transition">
              <span className="text-[10px] font-extrabold text-accent uppercase tracking-[0.2em]">
                Pillar 01
              </span>
              <h3 className="mt-8 text-3xl font-bold text-foreground">Quality</h3>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                Uncompromising ingredient standards, hygienic manufacturing and complete batch consistency across all five product categories.
              </p>
            </div>
            <div className="rounded-sm border border-border bg-card p-10 shadow-sm hover:border-accent transition">
              <span className="text-[10px] font-extrabold text-accent uppercase tracking-[0.2em]">
                Pillar 02
              </span>
              <h3 className="mt-8 text-3xl font-bold text-foreground">Clarity</h3>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                Clear pricing, honest lead times, transparent specifications, and responsive communication for trade buyers and partners.
              </p>
            </div>
            <div className="rounded-sm border border-border bg-card p-10 shadow-sm hover:border-accent transition">
              <span className="text-[10px] font-extrabold text-accent uppercase tracking-[0.2em]">
                Pillar 03
              </span>
              <h3 className="mt-8 text-3xl font-bold text-foreground">Partnership</h3>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                Collaborative problem solving, custom packaging discussions, and sustainable commercial terms designed for long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="container-site flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl text-white">
            Let&apos;s grow together.
          </h2>
          <Link
            href="/new-page/request-quote"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-sm bg-white px-7 h-12 text-xs font-bold tracking-wide text-secondary hover:bg-white/90 shadow transition"
          >
            Start an Enquiry
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

