"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AudienceSelector } from "@/components/AudienceSelector";
import { ProductCatalogSection } from "@/components/ProductCatalogSection";
import { FarmToForkJourney } from "@/components/FarmToForkJourney";
import { B2BDistributionSection } from "@/components/B2BDistributionSection";
import { RetailPresenceSection } from "@/components/RetailPresenceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const [selectedInquiryProduct, setSelectedInquiryProduct] = useState("");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProductInquire = (productName: string) => {
    setSelectedInquiryProduct(productName);
    scrollToSection("contact");
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-[var(--green-900)]">
      {/* 1. Sticky Navigation Header */}
      <Navbar
        onSelectAudience={(aud) => {
          if (aud === "b2c") scrollToSection("products");
          else scrollToSection("b2b-distributors");
        }}
      />

      {/* 2. Dual B2C & B2B Hero Section */}
      <HeroSection
        onExploreProducts={() => scrollToSection("products")}
        onOpenDistributorModal={() => scrollToSection("b2b-distributors")}
      />

      {/* 3. Audience Selector Gateway (B2C Household vs B2B Distributor) */}
      <AudienceSelector
        onSelectB2C={() => scrollToSection("products")}
        onSelectB2B={() => scrollToSection("b2b-distributors")}
      />

      {/* 4. Complete Interactive Product Catalog (5 Divisions / 34+ SKUs) */}
      <ProductCatalogSection onInquire={handleProductInquire} />

      {/* 5. Pure Farm-to-Fork Dehydration Journey */}
      <FarmToForkJourney />

      {/* 6. B2B Distributorship, High Margins & Logistics Section */}
      <B2BDistributionSection onApplyNow={() => scrollToSection("contact")} />

      {/* 7. Supermarket Planograms & City Hoarding Proof */}
      <RetailPresenceSection />

      {/* 8. Lead Capture & Trade Inquiries Desk */}
      <ContactSection inquiryProduct={selectedInquiryProduct} />

      {/* 9. Comprehensive Corporate Footer */}
      <Footer />
    </main>
  );
}
