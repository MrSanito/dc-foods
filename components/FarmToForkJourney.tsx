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
    <section id="factory-journey" className="w-full py-16 px-4 sm:px-8 bg-white text-[#022413] border-b border-[#CA9234]/20 relative overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#CA9234]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#CA9234]/40 text-[#80530F] text-xs font-bold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5 text-[#CA9234]" />
            <span>Farm-To-Fork Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#022413]">
            How Nature&apos;s Sweetness is <br />
            <span className="text-gold-foil">Perfected in Vadodara</span>
          </h2>
          <p className="text-sm sm:text-base text-[#143323]/80 mt-3">
            Unlike mass-market fried snacks or chemically bleached spices, DC Foods relies on state-of-the-art low-temperature dehydration and cryo-grinding.
          </p>
        </div>

        {/* Journey Graphic Card & Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left: Real Process Journey Infographic Render */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#CA9234]/40 shadow-xl relative bg-white group">
            <div className="relative w-full h-[340px] sm:h-[420px]">
              <Image
                src={ASSETS.infographics.mangoProductionJourney}
                alt="DC Foods The Pure Mango Journey Process"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-[#FAF9F6] border-t border-[#CA9234]/25 flex items-center justify-between text-xs text-[#022413]">
              <span className="flex items-center gap-1.5 text-[#80530F] font-bold">
                <LeafIcon className="w-4 h-4 text-[#CA9234]" />
                <span>The Pure Mango Journey</span>
              </span>
              <span className="text-[#143323]/70 font-medium">Vadodara Industrial Processing Unit</span>
            </div>
          </div>

          {/* Right: The 5 Steps */}
          <div className="lg:col-span-6 space-y-3.5">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-4 rounded-xl bg-white border border-[#CA9234]/25 hover:border-[#CA9234] shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <span className="text-xl font-black text-gold-foil shrink-0 pt-0.5">
                  {st.num}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-[#022413]">{st.title}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF9F6] text-[#80530F] border border-[#CA9234]/30">
                      {st.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#143323]/80 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#CA9234]/20 text-center">
          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#CA9234]/25 shadow-xs">
            <ShieldCheckIcon className="w-6 h-6 text-[#CA9234] mx-auto mb-2" />
            <span className="block text-xs font-bold text-[#022413]">Food Safety Compliant</span>
            <span className="text-[11px] text-[#143323]/70">FSSAI Certified</span>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#CA9234]/25 shadow-xs">
            <LeafIcon className="w-6 h-6 text-[#CA9234] mx-auto mb-2" />
            <span className="block text-xs font-bold text-[#022413]">100% Pure &amp; Natural</span>
            <span className="text-[11px] text-[#143323]/70">Zero Artificial Colors</span>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#CA9234]/25 shadow-xs">
            <FactoryIcon className="w-6 h-6 text-[#CA9234] mx-auto mb-2" />
            <span className="block text-xs font-bold text-[#022413]">Waghodiya GIDC Plant</span>
            <span className="text-[11px] text-[#143323]/70">Direct Factory Dispatch</span>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#CA9234]/25 shadow-xs">
            <SparklesIcon className="w-6 h-6 text-[#CA9234] mx-auto mb-2" />
            <span className="block text-xs font-bold text-[#022413]">Low-Temp Drying</span>
            <span className="text-[11px] text-[#143323]/70">Retains Vitamins &amp; Aroma</span>
          </div>
        </div>
      </div>
    </section>
  );
}
