"use client";
import React, { useState } from "react";
import { PhoneIcon, MailIcon, MapPinIcon, ShieldCheckIcon, CheckCircleIcon, ArrowRightIcon, Building2Icon } from "./icons";

interface ContactSectionProps {
  inquiryProduct?: string;
}

export function ContactSection({ inquiryProduct = "" }: ContactSectionProps) {
  const [partnerType, setPartnerType] = useState<"distributor" | "horeca" | "consumer">(
    "distributor"
  );
  const [fullName, setFullName] = useState("");
  const [firmName, setFirmName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cityState, setCityState] = useState("");
  const [message, setMessage] = useState(
    inquiryProduct ? `Inquiring about ${inquiryProduct}` : ""
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !fullName) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-16 px-4 sm:px-8 bg-[#FAF9F6] text-[#022413] border-b border-[#CA9234]/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Corporate Office & Direct Reach */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CA9234]/40 text-[#80530F] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Building2Icon className="w-4 h-4 text-[#CA9234]" />
                <span>Trade &amp; Customer Relations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4 text-[#022413]">
                Let&apos;s Build a <br />
                <span className="text-gold-foil">Profitable Future Together</span>
              </h2>
              <p className="text-sm text-[#143323]/80 leading-relaxed mb-8">
                Whether you want to represent DC Foods in your district as an exclusive distributor, source bulk ingredients for your food processing facility, or discover retail outlets near you, our desk is ready.
              </p>

              {/* Direct Info Blocks */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-[#CA9234]/25 shadow-sm flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-[#CA9234] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#022413] uppercase tracking-wide mb-1">
                      Factory &amp; Registered Office
                    </h4>
                    <p className="text-xs text-[#143323]/80 leading-relaxed">
                      Shah Industrial Park 6, Gajedra, Near Waghodiya GIDC, Alva Village Road, Vadodara, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#CA9234]/25 shadow-sm flex items-start gap-3">
                  <PhoneIcon className="w-5 h-5 text-[#CA9234] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#022413] uppercase tracking-wide mb-1">
                      Direct Trade Desks (Call / WhatsApp)
                    </h4>
                    <div className="flex flex-col text-xs text-[#143323]/90">
                      <a href="tel:+917486906477" className="hover:text-[#CA9234] font-semibold transition-colors">
                        +91 74869 06477 (Sales &amp; Distributorship)
                      </a>
                      <a href="tel:+917265907267" className="hover:text-[#CA9234] font-semibold transition-colors">
                        +91 72659 07267 (Logistics &amp; Institutional)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#CA9234]/25 shadow-sm flex items-start gap-3">
                  <MailIcon className="w-5 h-5 text-[#CA9234] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#022413] uppercase tracking-wide mb-1">
                      Official Email Addresses
                    </h4>
                    <div className="flex flex-col text-xs text-[#143323]/90">
                      <a href="mailto:info@dcfoods.co.in" className="hover:text-[#CA9234] font-semibold transition-colors">
                        info@dcfoods.co.in
                      </a>
                      <a href="mailto:dcfoodsandbeverages@gmail.com" className="hover:text-[#CA9234] font-semibold transition-colors">
                        dcfoodsandbeverages@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Credentials Banner */}
            <div className="p-4 rounded-xl bg-white border border-[#CA9234]/30 shadow-sm flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#022413]">
              <div>
                <span className="block text-[#143323]/60 text-[10px] font-semibold">CIN</span>
                <span className="font-bold">U10501GJ2025PTC164206</span>
              </div>
              <div className="h-6 w-px bg-[#CA9234]/30" />
              <div>
                <span className="block text-[#143323]/60 text-[10px] font-semibold">GSTIN</span>
                <span className="font-bold">24AALCD7943D1ZM</span>
              </div>
              <div className="h-6 w-px bg-[#CA9234]/30" />
              <div className="flex items-center gap-1 text-[#80530F]">
                <ShieldCheckIcon className="w-4 h-4 text-[#CA9234]" />
                <span className="font-bold">Govt. Registered</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#CA9234]/35 shadow-2xl">
            {submitted ? (
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold-foil text-[#022413] flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#022413]">
                  Thank You, {fullName}!
                </h3>
                <p className="text-sm text-[#143323]/80 max-w-md mx-auto">
                  Your inquiry has been registered with our Vadodara trade desk. Our territory sales manager will connect with you via WhatsApp/Phone within 4 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl bg-white text-[#022413] border-2 border-[#022413]/20 hover:border-[#CA9234] text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} suppressHydrationWarning className="space-y-5">
                <div>
                  <h3 className="text-xl font-black text-[#022413] mb-1">
                    Send Inquiry / Distributorship Request
                  </h3>
                  <p className="text-xs text-[#143323]/70">
                    Fill the form below or message directly on WhatsApp for immediate catalog &amp; rate card.
                  </p>
                </div>

                {/* Partner Type Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#80530F] mb-2">
                    I am inquiring as:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPartnerType("distributor")}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center ${
                        partnerType === "distributor"
                          ? "bg-gold-foil text-[#022413] shadow-md"
                          : "bg-white text-[#022413] border border-[#CA9234]/30 hover:border-[#CA9234]"
                      }`}
                    >
                      Distributor / Stockist
                    </button>
                    <button
                      type="button"
                      onClick={() => setPartnerType("horeca")}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center ${
                        partnerType === "horeca"
                          ? "bg-gold-foil text-[#022413] shadow-md"
                          : "bg-white text-[#022413] border border-[#CA9234]/30 hover:border-[#CA9234]"
                      }`}
                    >
                      HoReCa / Bulk Buyer
                    </button>
                    <button
                      type="button"
                      onClick={() => setPartnerType("consumer")}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center ${
                        partnerType === "consumer"
                          ? "bg-gold-foil text-[#022413] shadow-md"
                          : "bg-white text-[#022413] border border-[#CA9234]/30 hover:border-[#CA9234]"
                      }`}
                    >
                      Retail Consumer
                    </button>
                  </div>
                </div>

                {/* Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#022413] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#CA9234]/35 text-[#022413] placeholder-[#143323]/40 text-xs focus:bg-white focus:outline-none focus:border-[#CA9234] focus:ring-1 focus:ring-[#CA9234]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#022413] mb-1">
                      {partnerType === "consumer" ? "City / Area" : "Firm / Business Name"}
                    </label>
                    <input
                      type="text"
                      value={firmName}
                      onChange={(e) => setFirmName(e.target.value)}
                      placeholder={partnerType === "consumer" ? "e.g. Alkapuri, Vadodara" : "e.g. Patel Traders"}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#CA9234]/35 text-[#022413] placeholder-[#143323]/40 text-xs focus:bg-white focus:outline-none focus:border-[#CA9234] focus:ring-1 focus:ring-[#CA9234]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#022413] mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#CA9234]/35 text-[#022413] placeholder-[#143323]/40 text-xs focus:bg-white focus:outline-none focus:border-[#CA9234] focus:ring-1 focus:ring-[#CA9234]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#022413] mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. contact@business.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#CA9234]/35 text-[#022413] placeholder-[#143323]/40 text-xs focus:bg-white focus:outline-none focus:border-[#CA9234] focus:ring-1 focus:ring-[#CA9234]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#022413] mb-1">
                    City, District &amp; State
                  </label>
                  <input
                    type="text"
                    value={cityState}
                    onChange={(e) => setCityState(e.target.value)}
                    placeholder="e.g. Vadodara, Gujarat / Surat / Mumbai / Jaipur"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#CA9234]/35 text-[#022413] placeholder-[#143323]/40 text-xs focus:bg-white focus:outline-none focus:border-[#CA9234] focus:ring-1 focus:ring-[#CA9234]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#022413] mb-1">
                    Message / Products of Interest / Investment Capacity
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the territory you cover, required quantities, or preferred product lines..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#CA9234]/35 text-[#022413] placeholder-[#143323]/40 text-xs focus:bg-white focus:outline-none focus:border-[#CA9234] focus:ring-1 focus:ring-[#CA9234]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gold-foil text-[#022413] font-black text-xs sm:text-sm shadow-md hover:brightness-105 active:scale-95 transition-all"
                  >
                    <span>Submit Official Inquiry</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/917486906477?text=Hello%20DC%20Foods,%20I%20am%20interested%20in%20business%20partnership"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-[#022413] border-2 border-[#022413]/15 hover:border-[#CA9234] hover:bg-[#FAF9F6] text-xs font-bold transition-all shadow-sm"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
