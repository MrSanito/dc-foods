import React from "react";
import { BrandLogoCrest, PhoneIcon, MailIcon, MapPinIcon, ShieldCheckIcon } from "./icons";

export function Footer() {
  return (
    <footer className="w-full bg-[#022413] text-[#DADDCB] border-t-2 border-[#CA9234]/40">
      {/* Top Banner Ribbon */}
      <div className="bg-[#072C1A] border-b border-[#CA9234]/20 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#022413] border border-[#CA9234]/40 text-[#F1CA7F]">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[#F6EFE7] font-bold text-base">
                National Food Safety & Purity Standards
              </h4>
              <p className="text-xs text-[#DADDCB]/80">
                100% Vegetarian • Zero Chemical Preservatives • Cryo-Grinding & Cold Dehydration
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#022413] text-[#F1CA7F] border border-[#CA9234]/30">
              CIN: U10501GJ2025PTC164206
            </span>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#022413] text-[#F1CA7F] border border-[#CA9234]/30">
              GSTIN: 24AALCD7943D1ZM
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-gold-foil text-[#022413]">
              Make in India • For the World
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: About & Identity */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <BrandLogoCrest className="w-10 h-10" />
            <div>
              <span className="text-lg font-black text-[#F6EFE7] tracking-wide">
                DC FOODS
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-[#F1CA7F]">
                And Beverages Pvt Ltd
              </span>
            </div>
          </div>
          <p className="text-xs text-[#DADDCB]/80 leading-relaxed">
            From quality ingredients to trusted food products. Transforming farm produce into premium dairy, spices, dehydrated fruits, and agro-commodities for household kitchens and commercial food industries.
          </p>
          <div className="text-xs text-[#F1CA7F] font-semibold italic">
            &ldquo;Quality Products. Strong Margins. Growing Market.&rdquo;
          </div>
        </div>

        {/* Col 2: B2C Retail Products */}
        <div className="flex flex-col gap-3">
          <h5 className="text-sm font-bold uppercase tracking-wider text-[#F1CA7F]">
            Consumer Range (B2C)
          </h5>
          <ul className="flex flex-col gap-2 text-xs">
            <li>
              <a href="#dehydrated" className="hover:text-[#F1CA7F] transition-colors">
                Sun-Dried Alphonso Mango Slices
              </a>
            </li>
            <li>
              <a href="#dehydrated" className="hover:text-[#F1CA7F] transition-colors">
                Dehydrated Orange & Apple Crisps
              </a>
            </li>
            <li>
              <a href="#dehydrated" className="hover:text-[#F1CA7F] transition-colors">
                Dehydrated Banana Slices & Powder
              </a>
            </li>
            <li>
              <a href="#spices" className="hover:text-[#F1CA7F] transition-colors">
                Sev Usal Baroda Special Masala
              </a>
            </li>
            <li>
              <a href="#spices" className="hover:text-[#F1CA7F] transition-colors">
                Aromatic Special Tea Masala
              </a>
            </li>
            <li>
              <a href="#spices" className="hover:text-[#F1CA7F] transition-colors">
                Pure Turmeric & Ground Spices
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#F1CA7F] transition-colors">
                Pure Desi Ghee & Fresh Paneer
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: B2B Commercial & Bulk */}
        <div className="flex flex-col gap-3">
          <h5 className="text-sm font-bold uppercase tracking-wider text-[#F1CA7F]">
            Commercial & Trade (B2B)
          </h5>
          <ul className="flex flex-col gap-2 text-xs">
            <li>
              <a href="#b2b-distributors" className="hover:text-[#F1CA7F] transition-colors font-semibold text-[#F6EFE7]">
                Distributor & C&amp;F Distributorship
              </a>
            </li>
            <li>
              <a href="#b2b-distributors" className="hover:text-[#F1CA7F] transition-colors">
                Super Stockist &amp; Dealership
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#F1CA7F] transition-colors">
                HoReCa &amp; Catering Bulk Packs (1kg, 5kg)
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#F1CA7F] transition-colors">
                Dehydrated Onion Powder (Bulk 25kg)
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#F1CA7F] transition-colors">
                Food Grade Guar Gum Powder
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#F1CA7F] transition-colors">
                Industrial Grade Guar Gum Powder
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#F1CA7F] transition-colors">
                Private Label &amp; Institutional Supply
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Corporate Contact & Location */}
        <div className="flex flex-col gap-3">
          <h5 className="text-sm font-bold uppercase tracking-wider text-[#F1CA7F]">
            Corporate Plant &amp; Desk
          </h5>
          <div className="flex flex-col gap-2.5 text-xs text-[#DADDCB]/90">
            <div className="flex items-start gap-2">
              <MapPinIcon className="w-4 h-4 text-[#F1CA7F] shrink-0 mt-0.5" />
              <span>
                Shah Industrial Park 6, Gajedra, Near Waghodiya GIDC, Alva Village Road, Vadodara, Gujarat, India
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-[#F1CA7F] shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+917486906477" className="hover:text-white transition-colors">
                  +91 74869 06477
                </a>
                <a href="tel:+917265907267" className="hover:text-white transition-colors">
                  +91 72659 07267
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="w-4 h-4 text-[#F1CA7F] shrink-0" />
              <div className="flex flex-col">
                <a href="mailto:info@dcfoods.co.in" className="hover:text-white transition-colors">
                  info@dcfoods.co.in
                </a>
                <a href="mailto:dcfoodsandbeverages@gmail.com" className="hover:text-white transition-colors">
                  dcfoodsandbeverages@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Line */}
      <div className="border-t border-[#CA9234]/20 py-4 px-4 sm:px-8 text-center text-xs text-[#DADDCB]/70 bg-[#01170c]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} DC FOODS AND BEVERAGES PVT LTD. All Rights Reserved.</p>
          <p className="text-[11px] text-[#F1CA7F]/80">
            Manufactured in Vadodara, Gujarat • Delivered Across India &amp; Global Markets
          </p>
        </div>
      </div>
    </footer>
  );
}
