import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/app/assets";

export const metadata = {
  title: "What Are Aromatic Spices? | Culinary Guide | DC Foods",
  description:
    "Seeds, roots, herbs and dried plant parts that transform everyday ingredients with distinctive aroma, flavour and colour.",
};

const SPICE_EXAMPLES = [
  "Ginger", "Garlic", "Cinnamon", "Cloves", "Nutmeg",
  "Cardamom", "Cumin", "Turmeric", "Rosemary", "Thyme",
  "Bay leaf", "Black pepper", "Coriander"
];

const BENEFITS = [
  {
    num: "01",
    title: "Enhance flavour and aroma",
    text: "Spices make meals more fragrant and flavourful, helping you rely less on excessive salt or seasoning cubes.",
  },
  {
    num: "02",
    title: "Provide antioxidant compounds",
    text: "Many spices contain antioxidant compounds studied for their role in protecting cells from oxidative stress. Amounts and effects vary by spice and preparation.",
  },
  {
    num: "03",
    title: "Traditionally used for digestion",
    text: "Ginger, cumin and fennel are traditionally used to support comfortable digestion. Culinary use is not a treatment for digestive conditions.",
  },
  {
    num: "04",
    title: "Compounds studied for inflammation",
    text: "Compounds in turmeric, ginger and cloves have been studied for potential anti-inflammatory effects. Research on concentrated compounds does not establish the same effects from ordinary cooking portions.",
  },
  {
    num: "05",
    title: "Make balanced meals more enjoyable",
    text: "Add aroma to vegetables, beans, fish, chicken, soups, rice and stews without necessarily adding significant calories.",
  },
  {
    num: "06",
    title: "Support lower-salt cooking",
    text: "Building flavour with spices can reduce reliance on large amounts of salt as part of an overall heart-friendly eating pattern.",
  },
  {
    num: "07",
    title: "Add variety to your cooking",
    text: "Different combinations of spices can completely change the flavour of the same basic ingredients.",
  },
];

export default function AromaticSpicesPage() {
  return (
    <div>
      {/* INNER HERO */}
      <section className="inner-hero relative overflow-hidden bg-primary text-primary-foreground">
        <Image
          src={ASSETS.hub.products.spicesRange}
          alt="Aromatic spices assortment"
          fill
          priority
          className="object-cover"
        />
        <div className="inner-hero-shade absolute inset-0"></div>
        <div className="container-site relative z-10 py-24 md:py-32">
          <span className="eyebrow text-secondary">THE AROMATIC KITCHEN</span>
          <h1 className="display mt-6 max-w-4xl text-5xl md:text-7xl lg:text-8xl">
            What are aromatic spices?
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Seeds, roots, herbs and dried plant parts that transform everyday
            ingredients with distinctive aroma, flavour and sometimes colour.
          </p>
        </div>
      </section>

      {/* A WORLD OF FLAVOUR */}
      <section className="section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <span className="eyebrow text-accent">NATURALLY AROMATIC</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl text-foreground">
              A world of flavour.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-foreground">
              Aromatic spices contain natural aromatic compounds that give food
              a distinctive smell, flavour and sometimes colour. They are
              commonly used to make meals more flavourful and appealing without
              relying heavily on salt or seasoning cubes.
            </p>
            <h3 className="mt-8 text-sm font-bold text-foreground">
              Common examples
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-6 sm:grid-cols-3">
              {SPICE_EXAMPLES.map((item) => (
                <span key={item} className="border-b border-border py-3 text-sm text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="section-space bg-muted">
        <div className="container-site">
          <span className="eyebrow text-accent">FLAVOUR &amp; EVERYDAY COOKING</span>
          <h2 className="display mt-5 text-4xl sm:text-5xl md:text-6xl text-foreground">
            Benefits of aromatic spices.
          </h2>

          <div className="mt-12 grid gap-x-12 md:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.num} className="border-t border-border py-8">
                <span className="eyebrow text-accent">{b.num}</span>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                  {b.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl border-t border-border pt-6 text-xs leading-6 text-muted-foreground">
            General food education, not medical advice or a claim about DC Foods
            products. Spices in ordinary culinary amounts are not substitutes
            for medical care; consult a qualified professional about supplements
            or health conditions.
          </p>
        </div>
      </section>

      {/* CHEF'S TIP */}
      <section className="section-space bg-primary text-primary-foreground">
        <div className="container-site max-w-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chef-hat size-9 text-secondary"
          >
            <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
            <path d="M6 17h12"></path>
          </svg>
          <span className="eyebrow mt-5 block text-secondary">CHEF&apos;S TIP</span>
          <h2 className="display mt-5 text-4xl sm:text-5xl md:text-6xl text-white">
            Release the aroma.
            <br />
            Build the flavour.
          </h2>
          <p className="mt-8 text-lg leading-9 text-primary-foreground/85">
            Don’t just add spices randomly. Toast whole spices briefly when
            appropriate, bloom powdered spices in oil, and balance them with your
            other ingredients. This helps release their aroma and creates
            deeper flavour.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="container-site flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl text-white">
            Bring more aroma to your kitchen.
          </h2>
          <Link
            href="/new-page/request-quote"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-sm bg-white px-7 h-12 text-xs font-bold tracking-wide text-secondary hover:bg-white/90 shadow transition"
          >
            Start an Enquiry
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
