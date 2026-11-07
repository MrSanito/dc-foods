import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, Phone } from "@/app/new-page/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distributor & Trade Opportunities | DC Foods",
  description: "Discuss distribution, retail and bulk supply partnerships with DC Foods in Vadodara.",
};

const PILLARS = [
  { number: "01", title: "Five product divisions" },
  { number: "02", title: "Retail and bulk enquiries" },
  { number: "03", title: "Territory conversations" },
  { number: "04", title: "Direct team communication" },
  { number: "05", title: "Foodservice opportunities" },
  { number: "06", title: "Long-term collaboration" },
];

export default function DistributorsPage() {
  return (
    <main id="main">
      {/* Hero Header */}
      <section className="inner-hero relative overflow-hidden bg-primary text-primary-foreground">
        <Image
          src="/assets/hub/spices-range-Cw7Vop_V.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="inner-hero-shade absolute inset-0"></div>
        <div className="container-site relative z-10 py-24 md:py-32">
          <span className="eyebrow text-secondary">GROW TOGETHER</span>
          <h1 className="display mt-6 max-w-4xl text-6xl md:text-8xl">
            Let&apos;s make room for growth.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            We welcome conversations with distributors, stockists, dealers, C&amp;F agents and foodservice suppliers looking to build a product portfolio.
          </p>
        </div>
      </section>

      {/* 6 Pillars */}
      <section className="section-space">
        <div className="container-site">
          <span className="eyebrow text-accent">THE OPPORTUNITY</span>
          <h2 className="display mt-4 mb-10 text-5xl md:text-7xl">
            A portfolio to build on.
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
              src="/assets/hub/dairy-range-D11pyitJ.jpg"
              alt="Paneer, ghee, milk and curd arranged for food photography"
              loading="lazy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow text-accent">A RANGE FOR YOUR MARKET</span>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              More ways to start a conversation.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Explore spices, powders, dehydrated fruit and dairy, then tell us which products and formats fit your territory.
            </p>
          </div>
        </div>
      </section>

      {/* Market Action Section */}
      <section className="section-space">
        <div className="container-site grid gap-8 md:grid-cols-2">
          <h2 className="display text-5xl md:text-7xl">Tell us about your market.</h2>
          <div>
            <p className="mb-8 leading-8 text-muted-foreground">
              Share your location, current business, categories of interest and the territories you serve. We&apos;ll take the conversation from there.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/917265907267?text=Hello%20DC%20Foods%2C%20I%20would%20like%20to%20enquire%20about%20a%20distributor%20partnership."
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
          <h2 className="display text-5xl md:text-6xl">Ready to talk distribution?</h2>
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
