"use client";

import React, { useState } from "react";
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

export default function DCFoodsHubPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tradeDropdownOpen, setTradeDropdownOpen] = useState(false);

  return (
    <div className="hub-root min-h-screen bg-background text-foreground antialiased">
      {/* HEADER / NAVIGATION */}
      <header className="site-header">
        <div className="container-site site-header-inner">
          <Link href="/new-page" className="site-logo active" aria-label="DC Foods home">
            <Image
              src={ASSETS.hub.logo}
              alt="DC Foods logo"
              width={58}
              height={58}
              priority
              className="size-[58px] object-contain"
            />
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
            <a href="#faqs">FAQs</a>
            <details className="relative" open={tradeDropdownOpen} onToggle={(e) => setTradeDropdownOpen((e.target as HTMLDetailsElement).open)}>
              <summary className="flex items-center gap-1 cursor-pointer font-medium text-muted-foreground hover:text-accent">
                Trade
              </summary>
              <div className="nav-dropdown">
                <a href="#prices" className="hover:text-accent p-2 text-xs">Price List</a>
                <a href="#business" className="hover:text-accent p-2 text-xs">Export &amp; Quality</a>
                <a href="#business" className="hover:text-accent p-2 text-xs">Private Label</a>
                <a href="#business" className="hover:text-accent p-2 text-xs">Distributors</a>
                <a href="#enquiry" className="hover:text-accent p-2 text-xs">Request a Quote</a>
              </div>
            </details>
            <a href={ASSETS.hub.companyProfilePdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded bg-muted px-3 py-1.5 text-xs font-semibold text-primary hover:bg-accent hover:text-white transition">
              Download Brochure
            </a>
          </nav>

          <button className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-sm p-2 text-foreground hover:bg-muted lg:hidden" aria-label="Toggle menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-b border-border bg-background p-4 lg:hidden">
            <div className="flex flex-col gap-3">
              <Link href="/new-page" className="font-semibold text-accent" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <a href="#products" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#certificates" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
              <a href="#about" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="container-site py-12">
        <h1 className="text-3xl font-bold">DC Foods &amp; Beverages Hub</h1>
        <p className="mt-2 text-muted-foreground">Scaffolding navigation and layout structure.</p>
      </main>
    </div>
  );
}
