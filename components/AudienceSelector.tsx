import React from "react";
import { ShoppingBagIcon, Building2Icon, ArrowRightIcon, CheckCircleIcon, SparklesIcon } from "./icons";

interface AudienceSelectorProps {
  onSelectB2C: () => void;
  onSelectB2B: () => void;
}

export function AudienceSelector({ onSelectB2C, onSelectB2B }: AudienceSelectorProps) {
  return (
    <section className="w-full py-14 px-4 sm:px-8 bg-white border-b border-[#CA9234]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CA9234]/15 border border-[#CA9234]/40 text-[#80530F] text-xs font-bold uppercase tracking-wider mb-2">
            <SparklesIcon className="w-3.5 h-3.5 text-[#80530F]" />
            <span>Tailored For Your Requirements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#022413] tracking-tight">
            Choose Your DC Foods Journey
          </h2>
          <p className="text-sm sm:text-base text-[#143323]/80 max-w-xl mx-auto mt-2">
            Whether you are bringing natural purity to your household dining table or scaling your regional distribution network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: B2C Consumers */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 border-2 border-[#CA9234]/30 shadow-md hover:shadow-xl hover:border-[#CA9234] transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#CA9234]/30 text-[#80530F] shadow-sm">
                  <ShoppingBagIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF9F6] text-[#80530F] border border-[#CA9234]/40">
                  Consumer &amp; Household (B2C)
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#022413] mb-3">
                Wholesome Purity for Your Family
              </h3>

              <p className="text-sm text-[#143323]/80 leading-relaxed mb-6">
                Discover guilt-free dehydrated fruits, farm-fresh dairy, and authentic stone-ground spices crafted with 100% natural ingredients, no chemicals, and zero preservatives.
              </p>

              <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#022413]">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#CA9234] shrink-0" />
                  <span>Real Sun-Dried Alphonso Mangoes &amp; Fruit Crisps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#CA9234] shrink-0" />
                  <span>Curcumin-rich Turmeric, Mirch &amp; Baroda Sev Usal Masala</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#CA9234] shrink-0" />
                  <span>Danedar Desi Ghee, Malai Paneer &amp; Fresh Milk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#CA9234] shrink-0" />
                  <span>Airtight, resealable pouches ensuring freshness</span>
                </div>
              </div>
            </div>

            <button
              onClick={onSelectB2C}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-[#022413] border-2 border-[#022413]/20 hover:border-[#CA9234] hover:bg-[#FAF9F6] font-bold text-sm active:scale-95 transition-all shadow-sm"
            >
              <span>Explore Consumer Catalog</span>
              <ArrowRightIcon className="w-4 h-4 text-[#CA9234]" />
            </button>
          </div>

          {/* Card 2: B2B Distributors & HoReCa */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 border-2 border-[#CA9234]/60 shadow-lg hover:shadow-xl hover:border-[#CA9234] transition-all flex flex-col justify-between group text-[#022413]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gold-foil text-[#022413] shadow-sm">
                  <Building2Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-foil text-[#022413] shadow-xs">
                  Commercial Partnership (B2B)
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#022413] mb-3">
                High Margins. Protected Territories.
              </h3>

              <p className="text-sm text-[#143323]/80 leading-relaxed mb-6">
                Expand your product portfolio with India&apos;s fastest growing food categories. Partner with DC Foods as a State C&amp;F, Super Stockist, Distributor, or HoReCa bulk supplier.
              </p>

              <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#022413]">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#CA9234] shrink-0" />
                  <span>5 High-demand divisions under one billing relationship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#CA9234] shrink-0" />
                  <span>Exclusive territory allocation &amp; attractive trade margins</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#CA9234] shrink-0" />
                  <span>Commercial bulk pack sizes: 1kg, 5kg &amp; 25kg bags</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#CA9234] shrink-0" />
                  <span>Complete regional marketing, OOH hoardings &amp; POS support</span>
                </div>
              </div>
            </div>

            <button
              onClick={onSelectB2B}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gold-foil text-[#022413] font-black text-sm shadow-md hover:brightness-105 active:scale-95 transition-all"
            >
              <span>Join As Distributor / Stockist</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
