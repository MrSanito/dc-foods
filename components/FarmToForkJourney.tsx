import React from "react";
import Image from "next/image";
import { ASSETS } from "@/app/assets";
import { SparklesIcon, ShieldCheckIcon, LeafIcon, FactoryIcon } from "./icons";

export function FarmToForkJourney() {
  const steps = [
    {
      num: "01",
      title: "Sustainable Harvesting",
      desc: "Hand-picked from certified Western India orchards at peak natural sweetness. Only healthy, ripe fruits selected.",
      badge: "Sustainable Orchards",
    },
    {
      num: "02",
      title: "Precision Processing",
      desc: "Hygienically washed with pure water, peeled, and sliced into uniform slices in a sterile food-grade cleanroom.",
      badge: "Zero Chemical Additives",
    },
    {
      num: "03",
      title: "Controlled Dehydration",
      desc: "Gentle low-temperature moisture removal that locks in natural fructose, dietary fibers, and intense fruit aroma.",
      badge: "Nutrient & Curcumin Lock",
    },
    {
      num: "04",
      title: "Vacuum Multi-Barrier Packaging",
      desc: "Airtight nitrogen-flushed metallic foil pouches with tamper-evident tear notches ensuring 12+ months shelf life.",
      badge: "Purity Protected",
    },
    {
      num: "05",
      title: "Nationwide & Global Dispatch",
      desc: "Direct delivery to supermarket shelves, commercial food manufacturers, and home snack pantries worldwide.",
      badge: "Made in India • Global Standard",
    },
  ];

  return (
    <section id="factory-journey" className="w-full py-16 px-4 sm:px-8 bg-[#022413] text-[#F6EFE7] border-b border-[#CA9234]/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#072C1A] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#072C1A] border border-[#CA9234]/40 text-[#F1CA7F] text-xs font-bold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Farm-To-Fork Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            How Nature&apos;s Sweetness is <br />
            <span className="text-gold-foil">Perfected in Vadodara</span>
          </h2>
          <p className="text-sm sm:text-base text-[#DADDCB] mt-3">
            Unlike mass-market fried snacks or chemically bleached spices, DC Foods relies on state-of-the-art low-temperature dehydration and cryo-grinding.
          </p>
        </div>

        {/* Journey Graphic Card & Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left: Real Process Journey Infographic Render */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#CA9234]/40 shadow-2xl relative bg-[#072C1A] group">
            <div className="relative w-full h-[340px] sm:h-[420px]">
              <Image
                src={ASSETS.infographics.mangoProductionJourney}
                alt="DC Foods The Pure Mango Journey Process"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-[#072C1A] border-t border-[#CA9234]/20 flex items-center justify-between text-xs text-[#DADDCB]">
              <span className="flex items-center gap-1.5 text-[#F1CA7F] font-bold">
                <LeafIcon className="w-4 h-4" />
                <span>The Pure Mango Journey</span>
              </span>
              <span className="text-[#DADDCB]/70">Vadodara Industrial Processing Unit</span>
            </div>
          </div>

          {/* Right: The 5 Steps */}
          <div className="lg:col-span-6 space-y-3.5">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-4 rounded-xl bg-[#072C1A]/80 border border-[#CA9234]/30 hover:border-[#CA9234] transition-all flex items-start gap-4"
              >
                <span className="text-lg font-black text-gold-foil shrink-0 pt-0.5">
                  {st.num}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-[#F6EFE7]">{st.title}</h4>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#022413] text-[#F1CA7F] border border-[#CA9234]/30">
                      {st.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#DADDCB]/80 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#CA9234]/20 text-center">
          <div className="p-4 rounded-xl bg-[#072C1A] border border-[#CA9234]/20">
            <ShieldCheckIcon className="w-6 h-6 text-[#F1CA7F] mx-auto mb-2" />
            <span className="block text-xs font-bold text-[#F6EFE7]">Food Safety Compliant</span>
            <span className="text-[11px] text-[#DADDCB]/70">FSSAI Certified</span>
          </div>
          <div className="p-4 rounded-xl bg-[#072C1A] border border-[#CA9234]/20">
            <LeafIcon className="w-6 h-6 text-[#F1CA7F] mx-auto mb-2" />
            <span className="block text-xs font-bold text-[#F6EFE7]">100% Pure &amp; Natural</span>
            <span className="text-[11px] text-[#DADDCB]/70">Zero Artificial Colors</span>
          </div>
          <div className="p-4 rounded-xl bg-[#072C1A] border border-[#CA9234]/20">
            <FactoryIcon className="w-6 h-6 text-[#F1CA7F] mx-auto mb-2" />
            <span className="block text-xs font-bold text-[#F6EFE7]">Waghodiya GIDC Plant</span>
            <span className="text-[11px] text-[#DADDCB]/70">Direct Factory Dispatch</span>
          </div>
          <div className="p-4 rounded-xl bg-[#072C1A] border border-[#CA9234]/20">
            <SparklesIcon className="w-6 h-6 text-[#F1CA7F] mx-auto mb-2" />
            <span className="block text-xs font-bold text-[#F6EFE7]">Low-Temp Drying</span>
            <span className="text-[11px] text-[#DADDCB]/70">Retains Vitamins &amp; Aroma</span>
          </div>
        </div>
      </div>
    </section>
  );
}
