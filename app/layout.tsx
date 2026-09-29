import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DC Foods & Beverages | Quality Products. Strong Margins. Growing Market.",
  description:
    "Official website of DC Foods and Beverages Pvt Ltd, Vadodara, Gujarat. Premium Dairy, Cryo-Ground Spices, Dehydrated Alphonso Mangoes, Pure Onion Powder & Guar Gum for B2C & B2B.",
  keywords: [
    "DC Foods",
    "DC Foods and Beverages Pvt Ltd",
    "Vadodara Food Manufacturing",
    "Dehydrated Mangoes",
    "Sev Usal Masala Baroda",
    "Pure Desi Ghee",
    "Guar Gum Powder Gujarat",
    "Onion Powder Distributor",
    "FMCG Distributorship India",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-[var(--green-900)] selection:bg-[var(--gold-500)] selection:text-white flex flex-col"
      >
        {children}
      </body>
    </html>
  );
}
