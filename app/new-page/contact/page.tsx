import React from "react";
import Image from "next/image";
import { ASSETS } from "@/app/assets";

export const metadata = {
  title: "Contact Us | DC Foods & Beverages Private Limited",
  description:
    "Product enquiries, distribution opportunities or trade partnerships. Speak with DC Foods in Vadodara, Gujarat. Phone: +91 72659 07267.",
};

const COMPANY = {
  phone: "+91 72659 07267",
  whatsappNumber: "917265907267",
  facility:
    "Shah Industrial Park 6, Gajedra, Near Waghodiya GIDC, Alva Village Road, Vadodara, Gujarat, India",
  office:
    "D-502, Rudraksh Heights, Kapurai Road, Opp. M M Vora Show Room, Soma Talav, Vadodara, Gujarat 390025, India",
};

export default function ContactPage() {
  return (
    <div>
      {/* INNER HERO */}
      <section className="inner-hero relative overflow-hidden bg-primary text-primary-foreground">
        <Image
          src={ASSETS.hub.products.dairyRange}
          alt="Contact DC Foods"
          fill
          priority
          className="object-cover"
        />
        <div className="inner-hero-shade absolute inset-0"></div>
        <div className="container-site relative z-10 py-24 md:py-32">
          <span className="eyebrow text-secondary">GET IN TOUCH</span>
          <h1 className="display mt-6 max-w-4xl text-5xl md:text-7xl lg:text-8xl">
            Let&apos;s start somewhere good.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Product enquiries, distribution opportunities or a new idea — we&apos;d
            love to hear what you are working on.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="section-space">
        <div className="container-site grid gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow text-accent">SPEAK WITH US</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl md:text-6xl text-foreground">
              Real conversations. Clear next steps.
            </h2>
            <div className="mt-9">
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${COMPANY.whatsappNumber}?text=Hello%20DC%20Foods%2C%20I%20would%20like%20to%20enquire%20about%20DC%20Foods%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-sm bg-secondary px-7 h-12 text-xs font-bold text-secondary-foreground shadow hover:brightness-110 transition"
                >
                  WhatsApp Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                  </svg>
                </a>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                  className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-sm border border-primary px-7 h-12 text-xs font-bold text-primary hover:bg-primary hover:text-white transition"
                >
                  Call Us
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
                </a>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <p className="font-display text-3xl font-bold text-foreground">
                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                  className="hover:text-accent"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <p className="text-xs text-muted-foreground">
                Office Hours: Monday to Saturday, 9:30 AM to 6:30 PM IST.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="bg-muted p-8 rounded-sm border border-border">
              <span className="eyebrow text-accent">OUR FACILITY</span>
              <p className="mt-5 text-lg leading-8 text-foreground font-medium">
                {COMPANY.facility}
              </p>
            </div>
            <div className="bg-muted p-8 rounded-sm border border-border">
              <span className="eyebrow text-accent">REGISTERED OFFICE</span>
              <p className="mt-5 text-lg leading-8 text-foreground font-medium">
                {COMPANY.office}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

