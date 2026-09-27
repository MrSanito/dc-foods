"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ASSETS } from "@/app/assets";
import {
  SparklesIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  Building2Icon,
  ArrowRightIcon,
  CheckCircleIcon,
  TrendingUpIcon,
} from "./icons";

interface HeroSectionProps {
  onExploreProducts: () => void;
  onOpenDistributorModal: () => void;
}

export function HeroSection({ onExploreProducts, onOpenDistributorModal }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"b2c" | "b2b">("b2c");

  return (
    <section className="relative w-full bg-[#022413] text-[#F6EFE7] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#CA9234]/30">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#072C1A] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#CA9234]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#143323] rounded-full blur-2xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Audience Toggle Segment */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-[#072C1A] border border-[#CA9234]/40 shadow-inner">
            <button
              onClick={() => setActiveTab("b2c")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "b2c"
                  ? "bg-gold-foil text-[#022413] shadow-md"
                  : "text-[#DADDCB] hover:text-[#F1CA7F]"
              }`}
            >
              <ShoppingBagIcon className="w-4 h-4" />
              <span>For Consumers (B2C)</span>
            </button>
            <button
              onClick={() => setActiveTab("b2b")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "b2b"
                  ? "bg-gold-foil text-[#022413] shadow-md"
                  : "text-[#DADDCB] hover:text-[#F1CA7F]"
              }`}
            >
              <Building2Icon className="w-4 h-4" />
              <span>For Distributors & HoReCa (B2B)</span>
            </button>
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Messaging */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#072C1A] border border-[#CA9234]/50 w-fit mx-auto lg:mx-0 shadow-sm">
              <SparklesIcon className="w-4 h-4 text-[#F1CA7F]" />
              <span className="text-xs font-semibold tracking-wide text-[#F1CA7F]">
                {activeTab === "b2c"
                  ? "100% Natural • Zero Added Sugar • Pure Farm Taste"
                  : "Expanding Nationwide • Attractive Margins • Exclusive Territories"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              {activeTab === "b2c" ? (
                <>
                  Pure Taste From <br />
                  <span className="text-gold-foil">Farm Ingredients</span> to <br />
                  Your Family Table.
                </>
              ) : (
                <>
                  Quality Products. <br />
                  <span className="text-gold-foil">Strong Margins.</span> <br />
                  Growing Market.
                </>
              )}
            </h1>

            {/* Sub-paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-[#DADDCB] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {activeTab === "b2c"
                ? "Experience the authentic goodness of Gujarat with DC Foods. Sun-dried Alphonso mangoes, natural dehydrated fruit snacks, cryo-ground spices, and traditional dairy made with zero chemicals."
                : "Partner with DC Foods and Beverages Pvt Ltd. Distribute 34+ high-turnover SKUs across Dairy, Authentic Spices, Dehydrated Superfoods, and Guar Gum with high gross margins and dedicated territory protection."}
            </p>

            {/* USPs / Bullet Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2 text-xs font-medium text-[#DADDCB]">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#F1CA7F] shrink-0" />
                <span>{activeTab === "b2c" ? "No Added Preservatives" : "High Distributor ROI"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#F1CA7F] shrink-0" />
                <span>{activeTab === "b2c" ? "Low-Temp Dehydrated" : "Protected Territories"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#F1CA7F] shrink-0" />
                <span>{activeTab === "b2c" ? "Pure Vegetarian & Vegan" : "HoReCa & Bulk SKUs"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#F1CA7F] shrink-0" />
                <span>{activeTab === "b2c" ? "Baroda's Real Heritage" : "OOH & Marketing Support"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#F1CA7F] shrink-0" />
                <span>{activeTab === "b2c" ? "Rich in Natural Vitamins" : "Fast Logistics Dispatch"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#F1CA7F] shrink-0" />
                <span>{activeTab === "b2c" ? "Danedar Desi Ghee" : "GSTIN & FSSAI Compliant"}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              {activeTab === "b2c" ? (
                <>
                  <button
                    onClick={onExploreProducts}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gold-foil text-[#022413] font-black text-sm tracking-wide shadow-lg hover:brightness-110 active:scale-95 transition-all"
                  >
                    <ShoppingBagIcon className="w-4 h-4" />
                    <span>Explore Consumer Products</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                  <a
                    href="#dehydrated"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#072C1A] text-[#F6EFE7] border border-[#CA9234]/40 hover:border-[#CA9234] hover:bg-[#143323] text-sm font-semibold transition-all"
                  >
                    <span>View Dehydrated Mangoes</span>
                  </a>
                </>
              ) : (
                <>
                  <button
                    onClick={onOpenDistributorModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gold-foil text-[#022413] font-black text-sm tracking-wide shadow-lg hover:brightness-110 active:scale-95 transition-all"
                  >
                    <Building2Icon className="w-4 h-4" />
                    <span>Apply for Distributorship / Dealership</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                  <a
                    href="#b2b-distributors"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#072C1A] text-[#F6EFE7] border border-[#CA9234]/40 hover:border-[#CA9234] hover:bg-[#143323] text-sm font-semibold transition-all"
                  >
                    <TrendingUpIcon className="w-4 h-4 text-[#F1CA7F]" />
                    <span>View Margin Structure & Benefits</span>
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Hero Visual Product Display */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Card Showcase with Glass & Gold Border */}
            <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#072C1A] to-[#022413] p-4 sm:p-5 border border-[#CA9234]/40 shadow-2xl">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-[#CA9234]/20">
                <span className="text-xs font-bold text-[#F1CA7F] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheckIcon className="w-4 h-4" />
                  {activeTab === "b2c" ? "Featured Superfood" : "Flagship High-Margin SKU"}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#CA9234]/20 text-[#F1CA7F]">
                  Vadodara Plant
                </span>
              </div>

              {/* Main Featured Image Container */}
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden mt-3 bg-black/40 flex items-center justify-center group">
                <Image
                  src={
                    activeTab === "b2c"
                      ? ASSETS.dehydratedFruits.mangoAlphonsoPack200g
                      : ASSETS.banners.distributorLandscape
                  }
                  alt="DC Foods Featured Product"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022413] via-transparent to-transparent opacity-80" />

                {/* Floating Highlights on Image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#022413]/90 backdrop-blur-md border border-[#CA9234]/30">
                  <p className="text-xs font-bold text-[#F1CA7F]">
                    {activeTab === "b2c"
                      ? "Dehydrated Alphonso Mangoes (200g)"
                      : "National Distributorship & C&F Inquiries"}
                  </p>
                  <p className="text-[11px] text-[#DADDCB]">
                    {activeTab === "b2c"
                      ? "100% Pure Fruit • Naturally Sweet • High Vitamin A & C"
                      : "FMCG, Retail & HoReCa Supply Across All States"}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Metric strip */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-[#CA9234]/20 text-center">
                <div>
                  <span className="block text-base font-extrabold text-[#F1CA7F]">34+</span>
                  <span className="text-[10px] text-[#DADDCB]/80 uppercase">Products</span>
                </div>
                <div className="border-x border-[#CA9234]/20">
                  <span className="block text-base font-extrabold text-[#F1CA7F]">5</span>
                  <span className="text-[10px] text-[#DADDCB]/80 uppercase">Divisions</span>
                </div>
                <div>
                  <span className="block text-base font-extrabold text-[#F1CA7F]">100%</span>
                  <span className="text-[10px] text-[#DADDCB]/80 uppercase">Natural</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
