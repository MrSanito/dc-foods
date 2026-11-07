"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Check, MessageCircle, Loader2 } from "@/app/new-page/components/icons";

const BUYER_TYPES = [
  "Distributor / Stockist",
  "Wholesaler / Bulk Buyer",
  "Retail Consumer",
  "Private Label",
  "Other",
];

const INTEREST_PILLS = [
  "Spices & Masalas",
  "Onion Powder",
  "Guar Gum Powder",
  "Dehydrated Fruits",
  "Dairy & Ghee",
  "Distribution",
  "Private Label",
];

const PRODUCT_CARDS = [
  { name: "Dried Pineapple", img: "/assets/hub/dried-pineapple.jpg" },
  { name: "Dried Strawberry", img: "/assets/hub/dried-strawberry.jpg" },
  { name: "Carrot Powder", img: "/assets/hub/carrot-powder.jpg" },
  { name: "Tomato Powder", img: "/assets/hub/tomato-powder.jpg" },
  { name: "Beetroot Powder", img: "/assets/hub/beetroot-powder.jpg" },
  { name: "Amla Powder", img: "/assets/hub/amla-powder.jpg" },
];

function RequestQuoteForm() {
  const searchParams = useSearchParams();

  const [buyerType, setBuyerType] = useState("Distributor / Stockist");
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedInterest, setSelectedInterest] = useState<string>("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");

  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam && BUYER_TYPES.includes(roleParam)) {
      setBuyerType(roleParam);
    }
    const productParam = searchParams.get("product");
    if (productParam) {
      setSelectedInterest(productParam);
      setMessage((prev) => (prev ? prev : `Requirement for: ${productParam}`));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("saving");

    setTimeout(() => {
      setStatus("saved");

      // Build WhatsApp message
      const text = `*New Quote Request - DC Foods*\n\n` +
        `*Buyer Type:* ${buyerType}\n` +
        `*Name:* ${fullName}\n` +
        (businessName ? `*Business:* ${businessName}\n` : "") +
        `*Phone:* ${phone}\n` +
        (email ? `*Email:* ${email}\n` : "") +
        `*Location:* ${location}\n` +
        (quantity ? `*Approx Quantity:* ${quantity}\n` : "") +
        (selectedInterest ? `*Product/Interest:* ${selectedInterest}\n` : "") +
        `*Requirement:* ${message}`;

      const waUrl = `https://wa.me/917265907267?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank");
    }, 700);
  };

  const whatsappDirectText = `Hello DC Foods, I would like to enquire about ${
    selectedInterest || "your products"
  }.`;
  const whatsappDirectUrl = `https://wa.me/917265907267?text=${encodeURIComponent(whatsappDirectText)}`;

  return (
    <section className="section-space">
      <div className="container-site grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        {/* Form Container */}
        <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <span className="eyebrow text-accent">OFFICIAL ENQUIRY</span>
            <h2 className="display mt-4 text-5xl">Tell us what you need.</h2>
          </div>

          {/* Buyer Type */}
          <div className="sm:col-span-2">
            <label
              htmlFor="buyerType"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Buyer type
            </label>
            <select
              id="buyerType"
              name="buyerType"
              value={buyerType}
              onChange={(e) => setBuyerType(e.target.value)}
              className="mt-2 h-11 w-full border border-input bg-background px-3 text-sm rounded-md outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {BUYER_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              required
              maxLength={100}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors md:text-sm mt-2 h-11 outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          {/* Business Name */}
          <div>
            <label
              htmlFor="businessName"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Business name
            </label>
            <input
              id="businessName"
              name="businessName"
              maxLength={120}
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors md:text-sm mt-2 h-11 outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              maxLength={24}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors md:text-sm mt-2 h-11 outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors md:text-sm mt-2 h-11 outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              City / State
            </label>
            <input
              id="location"
              name="location"
              required
              maxLength={120}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors md:text-sm mt-2 h-11 outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          {/* Quantity */}
          <div>
            <label
              htmlFor="quantity"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Approximate quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              maxLength={120}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors md:text-sm mt-2 h-11 outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          {/* Product or interest */}
          <div className="sm:col-span-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Product or interest
            </label>
            <div className="mt-3 flex flex-wrap gap-2">
              {INTEREST_PILLS.map((pill) => {
                const isSelected = selectedInterest === pill;
                return (
                  <button
                    key={pill}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedInterest(isSelected ? "" : pill)}
                    className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm px-5 text-xs font-bold tracking-wide transition-all h-11 ${
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {pill}
                  </button>
                );
              })}
            </div>

            {/* Product thumbnail selector */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {PRODUCT_CARDS.map((prod) => {
                const isSelected = selectedInterest === prod.name;
                return (
                  <button
                    key={prod.name}
                    type="button"
                    aria-label={prod.name}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedInterest(isSelected ? "" : prod.name)}
                    className={`min-h-11 cursor-pointer justify-center whitespace-nowrap text-xs font-bold tracking-wide transition-all border relative flex h-auto min-w-0 flex-col items-stretch gap-0 overflow-hidden rounded-md p-0 ${
                      isSelected
                        ? "border-accent ring-2 ring-accent"
                        : "border-primary hover:bg-primary hover:text-primary-foreground text-foreground"
                    }`}
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={prod.img}
                        alt={prod.name}
                        loading="lazy"
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="aspect-square w-full object-cover"
                      />
                    </div>
                    <span className="flex min-h-14 items-center justify-center whitespace-normal px-2 py-3 text-center text-xs font-semibold leading-5">
                      {prod.name}
                    </span>
                  </button>
                );
              })}
            </div>
            <span className="mt-2 block text-xs text-muted-foreground">Choose one option.</span>
          </div>

          {/* Requirement details */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Requirement details
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={1200}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Product, format, packaging, destination or any other requirement"
              className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm mt-2"
            />
          </div>

          {/* Honeypot */}
          <input tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" name="website" />

          {/* Status feedback */}
          {status === "saved" && (
            <div className="sm:col-span-2 p-4 rounded-md bg-green-50 text-green-900 border border-green-200 text-sm">
              Thank you. Your enquiry has been saved and forwarded to DC Foods!
            </div>
          )}

          {/* Action buttons */}
          <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status === "saving"}
              className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm text-xs font-bold tracking-wide transition-all bg-secondary text-secondary-foreground hover:brightness-110 h-12 px-7 disabled:opacity-50"
            >
              {status === "saving" ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Saving enquiry
                </>
              ) : status === "saved" ? (
                "Enquiry saved"
              ) : (
                "Submit official enquiry"
              )}
            </button>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm text-xs font-bold tracking-wide transition-all border border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-7"
            >
              Chat on WhatsApp <MessageCircle className="size-4" />
            </a>
          </div>
        </form>

        {/* Aside Sidebar */}
        <aside className="bg-muted p-8 md:p-12 rounded-lg self-start">
          <span className="eyebrow text-accent">HELPFUL TO HAVE READY</span>
          <h3 className="font-display mt-5 text-4xl font-semibold">
            A more useful first conversation.
          </h3>
          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-3 border-b border-border pb-4 text-sm">
              <Check className="size-4 text-accent" /> Product or category
            </div>
            <div className="flex items-center gap-3 border-b border-border pb-4 text-sm">
              <Check className="size-4 text-accent" /> Approximate quantity
            </div>
            <div className="flex items-center gap-3 border-b border-border pb-4 text-sm">
              <Check className="size-4 text-accent" /> Packaging preference
            </div>
            <div className="flex items-center gap-3 border-b border-border pb-4 text-sm">
              <Check className="size-4 text-accent" /> Delivery location
            </div>
            <div className="flex items-center gap-3 border-b border-border pb-4 text-sm">
              <Check className="size-4 text-accent" /> Any specific requirements
            </div>
          </div>
          <p className="mt-7 text-sm leading-6 text-muted-foreground">
            Your submission is saved to the official DC Foods enquiry list. You can also continue immediately on WhatsApp.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default function RequestQuotePage() {
  return (
    <main id="main">
      {/* Hero Header */}
      <section className="inner-hero relative overflow-hidden bg-primary text-primary-foreground">
        <Image
          src="/assets/hub/food-collection-DFks2qFt.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="inner-hero-shade absolute inset-0"></div>
        <div className="container-site relative z-10 py-24 md:py-32">
          <span className="eyebrow text-secondary">OFFICIAL ENQUIRY</span>
          <h1 className="display mt-6 max-w-4xl text-6xl md:text-8xl">
            Let&apos;s talk about your requirements.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Tell us what you are looking for. Our team in Vadodara will follow up to discuss product details, specifications and how we can support your business.
          </p>
        </div>
      </section>

      {/* Form with Suspense for useSearchParams */}
      <Suspense
        fallback={
          <div className="py-24 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-accent border-r-transparent"></div>
          </div>
        }
      >
        <RequestQuoteForm />
      </Suspense>
    </main>
  );
}
