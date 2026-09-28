"use client";
import React from "react";
import Image from "next/image";
import { ASSETS } from "@/app/assets";
import {
  TrendingUpIcon,
  ShieldCheckIcon,
  Building2Icon,
  TruckIcon,
  AwardIcon,
  PackageIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "./icons";

interface B2BDistributionProps {
  onApplyNow: () => void;
}

export function B2BDistributionSection({ onApplyNow }: B2BDistributionProps) {
  const benefits = [
    {
      title: "Attractive Margins & High ROI",
      desc: "Lucrative margin structures designed for quick capital rotation and superior distributor profitability across all 5 product divisions.",
      icon: TrendingUpIcon,
    },
    {
      title: "Exclusive Protected Territories",
      desc: "Clear demarcation of distribution zones to prevent overlapping, price cutting, and ensure long-term commercial growth.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Multi-Vertical Portfolio",
      desc: "Supply Dairy, Ground Spices, Heritage Masalas, Dehydrated Superfoods, and Guar Gum under a single unified billing relationship.",
      icon: PackageIcon,
    },
    {
      title: "Marketing & POS Support",
      desc: "Promotional support including outdoor city hoardings, premium supermarket display stands, sample kits, and retailer merchandising.",
      icon: AwardIcon,
    },
    {
      title: "Strategic Gujarat Logistics",
      desc: "Direct dispatch from Shah Industrial Park 6, Waghodiya GIDC corridor, connecting smoothly to all state highways and rail freight.",
      icon: TruckIcon,
    },
    {
      title: "HoReCa & Bulk Packaging",
      desc: "Dedicated institutional pack sizes (1kg, 5kg, and 25kg bulk bags) engineered for commercial kitchens, restaurants, and snack makers.",
      icon: Building2Icon,
    },
  ];

  const applicantTypes = [
    "FMCG Food Distributors",
    "Wholesale Dealers",
    "Super Stockists",
    "C&F Agents",
    "HoReCa & Cloud Kitchen Suppliers",
    "Institutional Canteen Vendors",
    "Grocery & Supermarket Chains",
    "Export Commodity Traders",
  ];

  return (
    <section id="b2b-distributors" className="w-full py-16 px-4 sm:px-8 bg-[#022413] text-[#F6EFE7] border-b border-[#CA9234]/30 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#072C1A] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#CA9234]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#072C1A] border border-[#CA9234]/50 text-[#F1CA7F] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>National Business Expansion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            We Are Inviting <br />
            <span className="text-gold-foil">Distributors, Stockists &amp; C&amp;F Agents</span>
          </h2>
          <p className="text-sm sm:text-base text-[#DADDCB] mt-3">
            Join hands with DC Foods and Beverages Pvt Ltd. Capitalize on India&apos;s fast-growing demand for pure, natural dairy, dehydrated fruits, and authentic heritage spices.
          </p>
        </div>

        {/* Master Distributor Banner Showcase */}
        <div className="rounded-2xl overflow-hidden border border-[#CA9234]/50 shadow-2xl mb-12 relative bg-[#072C1A]">
          <div className="relative w-full h-64 sm:h-80 md:h-[420px]">
            <Image
              src={ASSETS.banners.distributorMakeInIndia}
              alt="DC Foods Inviting Distributors Across India"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-4 sm:p-6 bg-gradient-to-r from-[#022413] via-[#072C1A] to-[#022413] border-t border-[#CA9234]/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F6EFE7]">
                Grow Together. Succeed Together.
              </h3>
              <p className="text-xs text-[#DADDCB]/80 mt-1">
                Territory-based exclusive distributorship open across Gujarat, Maharashtra, Rajasthan, MP, and Pan-India.
              </p>
            </div>
            <button
              onClick={onApplyNow}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-foil text-[#022413] font-black text-xs sm:text-sm shadow-md hover:brightness-110 active:scale-95 transition-all shrink-0"
            >
              <span>Apply for Dealership</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Partner Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#072C1A]/80 border border-[#CA9234]/30 hover:border-[#CA9234] transition-all flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#022413] border border-[#CA9234]/40 w-fit text-[#F1CA7F] mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#F6EFE7] mb-2">{b.title}</h4>
                  <p className="text-xs text-[#DADDCB]/80 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Who Can Apply Matrix */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#072C1A] border border-[#CA9234]/40 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#CA9234]/20">
            <div>
              <h4 className="text-xl font-black text-[#F6EFE7]">Who Can Apply for Partnership?</h4>
              <p className="text-xs text-[#DADDCB]/80 mt-1">
                We work with experienced food traders, cold chain operators, and emerging retail distributors.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F1CA7F] bg-[#022413] px-3 py-1.5 rounded-lg border border-[#CA9234]/30">
              <span>Direct Factory Dispatch: Vadodara</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {applicantTypes.map((type, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-[#022413] border border-[#CA9234]/20 flex items-center gap-2 text-xs font-medium text-[#DADDCB]"
              >
                <div className="w-2 h-2 rounded-full bg-[#CA9234] shrink-0" />
                <span>{type}</span>
              </div>
            ))}
          </div>

          {/* Quick Contact Ribbon */}
          <div className="mt-8 pt-6 border-t border-[#CA9234]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#DADDCB]">
              <strong>Have immediate questions?</strong> Call our Distributor Desk directly:{" "}
              <a href="tel:+917486906477" className="text-[#F1CA7F] font-bold hover:underline">
                +91 74869 06477
              </a>{" "}
              /{" "}
              <a href="tel:+917265907267" className="text-[#F1CA7F] font-bold hover:underline">
                +91 72659 07267
              </a>
            </div>

            <button
              onClick={onApplyNow}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gold-foil text-[#022413] font-black text-xs shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              <span>Submit Dealership Inquiry</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
