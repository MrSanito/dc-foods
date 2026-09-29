"useClient";
import React, { useState } from "react";
import { BrandLogoCrest, PhoneIcon, MapPinIcon, Building2Icon, ShoppingBagIcon } from "./icons";

interface NavbarProps {
  activeAudience?: "all" | "b2c" | "b2b";
  onSelectAudience?: (aud: "b2c" | "b2b") => void;
}

export function Navbar({ activeAudience = "all", onSelectAudience }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/* Top Utility Bar */}
      <div className="bg-[#022413] text-[#DADDCB] text-xs py-1.5 px-4 sm:px-8 border-b border-[#CA9234]/20 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 text-[#F1CA7F]">
            <MapPinIcon className="w-3.5 h-3.5" />
            <span>Shah Industrial Park 6, Waghodiya, Vadodara, Gujarat</span>
          </div>
          <span className="hidden md:inline text-[#CA9234]/40">|</span>
          <span className="hidden md:inline text-[#DADDCB]">GSTIN: 24AALCD7943D1ZM</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <a
            href="tel:+917486906477"
            className="flex items-center gap-1.5 text-[#F1CA7F] hover:text-white transition-colors"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            <span>+91 74869 06477 / +91 72659 07267</span>
          </a>
          <span className="text-[#CA9234]/40 hidden sm:inline">|</span>
          <span className="bg-[#CA9234]/15 text-[#F1CA7F] px-2 py-0.5 rounded text-[10px] font-semibold border border-[#CA9234]/30 hidden sm:inline">
            FSSAI & Food Safety Compliant
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-[#CA9234]/25 shadow-sm px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <BrandLogoCrest className="w-10 h-10 group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-wide text-[#022413]">
                  DC FOODS
                </span>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-[#CA9234]/15 text-[#80530F] border border-[#CA9234]/30 tracking-wider">
                  PVT LTD
                </span>
              </div>
              <span className="text-[10px] font-semibold tracking-widest text-[#143323]/70 uppercase">
                From Quality Ingredients to Trusted Products
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#022413]/85">
            <a href="#products" className="hover:text-[#CA9234] transition-colors py-1">
              Product Portfolio
            </a>
            <a href="#dehydrated" className="hover:text-[#CA9234] transition-colors py-1 flex items-center gap-1">
              <span>Dehydrated Range</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CA9234]" />
            </a>
            <a href="#spices" className="hover:text-[#CA9234] transition-colors py-1">
              Spices & Masalas
            </a>
            <a href="#b2b-distributors" className="text-[#80530F] hover:text-[#CA9234] transition-colors py-1 font-bold">
              Distributor Network
            </a>
            <a href="#factory-journey" className="hover:text-[#CA9234] transition-colors py-1">
              Our Journey
            </a>
            <a href="#contact" className="hover:text-[#CA9234] transition-colors py-1">
              Inquiries
            </a>
          </div>

          {/* Action CTAs: Dual B2C / B2B */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#products"
              onClick={() => onSelectAudience?.("b2c")}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg bg-white text-[#022413] border border-[#CA9234]/40 hover:border-[#CA9234] hover:bg-[#FAF9F6] shadow-sm transition-all"
            >
              <ShoppingBagIcon className="w-4 h-4 text-[#CA9234]" />
              <span>Retail (B2C)</span>
            </a>

            <a
              href="#b2b-distributors"
              onClick={() => onSelectAudience?.("b2b")}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg bg-gold-foil text-[#022413] shadow-md hover:brightness-105 active:scale-95 transition-all"
            >
              <Building2Icon className="w-4 h-4" />
              <span>Distributor Partnership (B2B)</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white text-[#022413] border border-[#CA9234]/30 focus:outline-none shadow-sm"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#CA9234]/20 flex flex-col gap-2 pb-2 text-[#022413] bg-white">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#FAF9F6] hover:text-[#CA9234] font-medium"
            >
              Product Portfolio (34+ Products)
            </a>
            <a
              href="#dehydrated"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#FAF9F6] hover:text-[#CA9234] font-medium"
            >
              Dehydrated Mango & Fruits
            </a>
            <a
              href="#spices"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#FAF9F6] hover:text-[#CA9234] font-medium"
            >
              Spices & Sev Usal Masala
            </a>
            <a
              href="#b2b-distributors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md bg-[#FAF9F6] text-[#80530F] font-bold border border-[#CA9234]/20"
            >
              Distributor & HoReCa (B2B)
            </a>
            <a
              href="#factory-journey"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#FAF9F6] hover:text-[#CA9234] font-medium"
            >
              Quality & Dehydration Process
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#FAF9F6] hover:text-[#CA9234] font-medium"
            >
              Contact & Trade Inquiries
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#b2b-distributors"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-gold-foil text-[#022413] font-bold text-sm shadow-md"
              >
                Apply for Dealership / Stockist
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
