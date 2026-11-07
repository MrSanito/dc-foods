import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileDown } from "@/app/new-page/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export & Quality | DC Foods",
  description: "A practical conversation about specifications, packaging and supply with DC Foods in Vadodara.",
};

const PILLARS = [
  { number: "01", title: "Product selection" },
  { number: "02", title: "Specification discussion" },
  { number: "03", title: "Packaging requirements" },
  { number: "04", title: "Quantity planning" },
  { number: "05", title: "Destination details" },
  { number: "06", title: "Direct enquiry support" },
];

const REGISTRATIONS = [
  {
    title: "Company Registration",
    number: "U10501GJ2025PTC164206",
    file: "/assets/hub/incorporation-certificate-public.pdf",
  },
  {
    title: "Udyam MSME Registration",
    number: "UDYAM-GJ-24-0195560",
    file: "/assets/hub/udyam-registration-public.pdf",
  },
  {
    title: "DPIIT-Recognised Startup",
    number: "DIPP275511",
    file: "/assets/hub/dpiit-recognition.pdf",
  },
];

export default function ExportQualityPage() {
  return (
    <main id="main">
      {/* Hero Section */}
      <section className="inner-hero relative overflow-hidden bg-primary text-primary-foreground">
        <Image
          src="/assets/hub/powders-range-CNGs0OGe.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="inner-hero-shade absolute inset-0"></div>
        <div className="container-site relative z-10 py-24 md:py-32">
          <span className="eyebrow text-secondary">FOR TRADE BUYERS</span>
          <h1 className="display mt-6 max-w-4xl text-6xl md:text-8xl">
            Details matter at every scale.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Tell us your product, format, quantity and destination needs. We can discuss the requirements that matter to your business.
          </p>
        </div>
      </section>

      {/* 6 Pillars */}
      <section className="section-space">
        <div className="container-site">
          <span className="eyebrow text-accent">YOUR REQUIREMENTS</span>
          <h2 className="display mt-4 mb-10 text-5xl md:text-7xl">
            Designed for better conversations.
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
              src="/assets/hub/spices-range-Cw7Vop_V.jpg"
              alt="Turmeric, chilli and whole spices in bowls"
              loading="lazy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow text-accent">PRODUCT DISCUSSIONS</span>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              Clarity from the first enquiry.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Share the specifications and formats your business needs. We can discuss possibilities without assuming a one-size-fits-all supply arrangement.
            </p>
          </div>
        </div>
      </section>

      {/* Company Registrations */}
      <section className="section-space">
        <div className="container-site">
          <span className="eyebrow text-accent">COMPANY REGISTRATIONS</span>
          <h2 className="display mt-4 mb-5 text-5xl">Verified details.</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-muted-foreground">
            View the supplied registration documents. The Udyam link is a public excerpt; private financial details from the full certificate are not published.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {REGISTRATIONS.map((reg) => (
              <div key={reg.title} className="flex flex-col border border-border bg-card p-6">
                <h3 className="font-semibold">{reg.title}</h3>
                <p className="mt-2 mb-6 break-all text-sm text-muted-foreground">{reg.number}</p>
                <a
                  href={reg.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm px-5 text-xs font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-primary text-primary hover:bg-primary hover:text-primary-foreground h-11 mt-auto self-start"
                >
                  View document <FileDown className="size-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-secondary py-20 text-primary-foreground">
        <div className="container-site flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="display text-5xl md:text-6xl">Let&apos;s discuss your requirements.</h2>
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
