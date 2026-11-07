import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, Phone } from "@/app/new-page/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Label Food Products | DC Foods",
  description: "Discuss private-label spices, powders and food products for your brand with DC Foods in Vadodara.",
};

const PILLARS = [
  { number: "01", title: "Your product brief" },
  { number: "02", title: "Specifications & format" },
  { number: "03", title: "Packaging discussion" },
  { number: "04", title: "Sampling requirements" },
  { number: "05", title: "Production planning" },
  { number: "06", title: "Supply conversation" },
];

export default function PrivateLabelPage() {
  return (
    <main id="main">
      {/* Hero Header */}
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
          <span className="eyebrow text-secondary">YOUR BRAND, YOUR VISION</span>
          <h1 className="display mt-6 max-w-4xl text-6xl md:text-8xl">
            Make it unmistakably yours.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Have a food brand in mind? Explore product and packaging possibilities with a manufacturer who wants to understand what you are building.
          </p>
        </div>
      </section>

      {/* 6 Pillars */}
      <section className="section-space">
        <div className="container-site">
          <span className="eyebrow text-accent">HOW WE BEGIN</span>
          <h2 className="display mt-4 mb-10 text-5xl md:text-7xl">
            From idea to conversation.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.number} className="rounded-sm border border-border bg-background p-10">
                <span className="text-[10px] font-extrabold text-accent uppercase tracking-[0.2em]">
                  Pillar {p.number}
                </span>
                <h3 className="mt-8 text-3xl font-bold">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Panel Section */}
      <section className="section-space bg-background">
        <div className="container-site grid items-center gap-16 lg:grid-cols-2">
          <div className="visual-panel aspect-square overflow-hidden rounded-sm relative">
            <Image
              src="/assets/hub/powders-range-CNGs0OGe.jpg"
              alt="Onion and guar powder ingredients in bowls"
              loading="lazy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow text-accent">YOUR PRODUCT IDEAS</span>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              Start with the ingredient.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Talk through the product category, intended market and packaging direction. Our team can discuss what is feasible for your brief.
            </p>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="section-space">
        <div className="container-site grid gap-8 md:grid-cols-2">
          <h2 className="display text-5xl md:text-7xl">Let&apos;s shape your range.</h2>
          <div>
            <p className="mb-8 leading-8 text-muted-foreground">
              Tell us about your product ideas, preferred formats and the market you&apos;re planning for. Availability and feasibility can be discussed with our team.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/917265907267?text=Hello%20DC%20Foods%2C%20I%20would%20like%20to%20enquire%20about%20a%20private-label%20partnership."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm text-xs font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-secondary text-secondary-foreground hover:brightness-110 h-12 px-7"
              >
                WhatsApp Us <MessageCircle className="size-4" />
              </a>
              <a
                href="tel:+917265907267"
                className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-xs font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-7 rounded-sm"
              >
                Call Us <Phone className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-secondary py-20 text-primary-foreground">
        <div className="container-site flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="display text-5xl md:text-6xl">Your next product begins here.</h2>
          <Link
            href="/new-page/request-quote"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm text-xs font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-12 px-7 bg-background text-secondary hover:bg-background/90"
          >
            Start an Enquiry <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
