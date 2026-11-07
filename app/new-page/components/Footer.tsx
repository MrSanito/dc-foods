"use client";

import React from "react";
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

export function Footer() {
  const openWhatsApp = (msg?: string) => {
    const text = encodeURIComponent(msg || "Hello DC Foods, I would like to enquire about your products.");
    window.open(`https://wa.me/${COMPANY.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <footer id="contact" className="trade-footer">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: COMPANY.shortName,
            legalName: COMPANY.legalName,
            taxID: COMPANY.gstin,
            telephone: COMPANY.phone,
            url: "https://dc-foods-hub.lovable.app",
            address: {
              "@type": "PostalAddress",
              streetAddress: COMPANY.registeredOffice,
              addressLocality: "Vadodara",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <div className="container-site grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.9fr_1.4fr]">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={ASSETS.hub.logo}
              alt="DC Foods & Beverages"
              width={70}
              height={70}
              className="size-[70px] object-contain"
            />
            <strong className="text-xl font-bold text-white">
              DC Foods
              <br />
              &amp; Beverages
            </strong>
          </div>
          <p className="mt-5 text-xs text-white/75 leading-relaxed">
            A new-generation food manufacturer in Vadodara, Gujarat. Spices,
            powders, dehydrated fruits and dairy for retail and trade partners.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-white">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="/new-page" className="hover:text-secondary">
              Home
            </Link>
            <Link href="/new-page/products" className="hover:text-secondary">
              Products
            </Link>
            <Link href="/new-page/certificates" className="hover:text-secondary">
              Certifications
            </Link>
            <Link href="/new-page/about" className="hover:text-secondary">
              About
            </Link>
            <Link href="/new-page/contact" className="hover:text-secondary">
              Contact
            </Link>
            <Link href="/new-page/blogs" className="hover:text-secondary">
              Blogs
            </Link>
            <a
              href={ASSETS.hub.companyProfilePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Trade Links */}
        <div>
          <h3 className="font-bold text-white">Trade &amp; Information</h3>
          <div className="flex flex-col gap-2">
            <Link href="/new-page/price-list" className="hover:text-secondary text-xs">
              Price List
            </Link>
            <Link href="/new-page/export-quality" className="hover:text-secondary text-xs">
              Export &amp; Quality
            </Link>
            <Link href="/new-page/private-label" className="hover:text-secondary text-xs">
              Private Label
            </Link>
            <Link href="/new-page/distributors" className="hover:text-secondary text-xs">
              Distributors
            </Link>
            <Link href="/new-page/request-quote" className="hover:text-secondary text-xs">
              Request a Quote
            </Link>
            <Link href="/new-page/aromatic-spices" className="hover:text-secondary text-xs">
              Aromatic Spice Guide
            </Link>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-bold text-white">Contact Us</h3>
          <a
            className="flex items-center gap-2 hover:text-secondary text-xs font-semibold"
            href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
            {COMPANY.phone}
          </a>

          <button
            onClick={() => openWhatsApp()}
            className="mt-3 flex items-center gap-2 text-xs font-semibold text-secondary hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
            </svg>
            Chat on WhatsApp
          </button>

          <p className="mt-4 flex gap-2 text-xs text-white/75 leading-relaxed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="mt-0.5 shrink-0"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {COMPANY.factoryAddress}
          </p>

          <p className="mt-4 text-xs text-white/75">
            <strong>GSTIN:</strong> {COMPANY.gstin}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="trade-footer-bottom mt-10">
        <div className="container-site flex flex-col justify-between gap-2 sm:flex-row text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights
            reserved.
          </p>
          <p>Incorporated {COMPANY.incorporated} · Vadodara, India</p>
        </div>
      </div>
    </footer>
  );
}

