import React from "react";
import "./hub.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWidgets } from "./components/FloatingWidgets";

export const metadata = {
  title: "DC Foods & Beverages | Spices, Ingredients & Food Supply",
  description:
    "Discover Indian spices, onion powder, guar gum, dehydrated fruits and dairy from DC Foods & Beverages, Vadodara. Contact +91 72659 07267 for trade enquiries.",
  icons: {
    icon: "/assets/hub/favicon.png",
  },
};

export default function NewPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hub-root min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white">
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

