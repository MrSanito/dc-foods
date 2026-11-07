"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ASSETS } from "@/app/assets";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tradeDropdownOpen, setTradeDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (path: string) => {
    if (path === "/new-page") return pathname === "/new-page";
    return pathname.startsWith(path);
  };

  return (
    <header className="site-header">
      <div className="container-site site-header-inner">
        <Link
          href="/new-page"
          className="site-logo active"
          aria-label="DC Foods home"
        >
          <Image
            src={ASSETS.hub.logo}
            alt="DC Foods logo"
            width={58}
            height={58}
            priority
            className="size-[58px] object-contain"
          />
          <span>
            <strong>DC FOODS</strong>
            <small>&amp; BEVERAGES PRIVATE LIMITED</small>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="site-nav" aria-label="Main navigation">
          <Link
            href="/new-page"
            className={isLinkActive("/new-page") && pathname === "/new-page" ? "font-semibold text-accent" : ""}
          >
            Home
          </Link>
          <Link
            href="/new-page/products"
            className={isLinkActive("/new-page/products") ? "font-semibold text-accent" : ""}
          >
            Products
          </Link>
          <Link
            href="/new-page/certificates"
            className={isLinkActive("/new-page/certificates") ? "font-semibold text-accent" : ""}
          >
            Certifications
          </Link>
          <Link
            href="/new-page/about"
            className={isLinkActive("/new-page/about") ? "font-semibold text-accent" : ""}
          >
            About
          </Link>
          <Link
            href="/new-page/contact"
            className={isLinkActive("/new-page/contact") ? "font-semibold text-accent" : ""}
          >
            Contact
          </Link>
          <Link
            href="/new-page/blogs"
            className={isLinkActive("/new-page/blogs") || isLinkActive("/new-page/aromatic-spices") ? "font-semibold text-accent" : ""}
          >
            Blogs
          </Link>

          {/* Trade Dropdown */}
          <details
            className="relative"
            open={tradeDropdownOpen}
            onToggle={(e) =>
              setTradeDropdownOpen((e.target as HTMLDetailsElement).open)
            }
          >
            <summary className="flex items-center gap-1 cursor-pointer font-medium text-muted-foreground hover:text-accent">
              Trade
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <div className="nav-dropdown" onClick={() => setTradeDropdownOpen(false)}>
              <Link href="/new-page/price-list" className="hover:text-accent p-2 text-xs">
                Price List
              </Link>
              <Link href="/new-page/export-quality" className="hover:text-accent p-2 text-xs">
                Export &amp; Quality
              </Link>
              <Link href="/new-page/private-label" className="hover:text-accent p-2 text-xs">
                Private Label
              </Link>
              <Link href="/new-page/distributors" className="hover:text-accent p-2 text-xs">
                Distributors
              </Link>
              <Link href="/new-page/request-quote" className="hover:text-accent p-2 text-xs">
                Request a Quote
              </Link>
            </div>
          </details>

          <a
            href={ASSETS.hub.companyProfilePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded bg-muted px-3 py-1.5 text-xs font-semibold text-primary hover:bg-accent hover:text-white transition"
          >
            Download Brochure
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 15V3" />
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
            </svg>
          </a>
        </nav>

        {/* Mobile Menu Hamburger */}
        <button
          className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-sm p-2 text-foreground hover:bg-muted lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background p-4 lg:hidden animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            <Link
              href="/new-page"
              className={`text-sm font-medium ${pathname === "/new-page" ? "font-bold text-accent" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/new-page/products"
              className={`text-sm font-medium ${isLinkActive("/new-page/products") ? "font-bold text-accent" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/new-page/certificates"
              className={`text-sm font-medium ${isLinkActive("/new-page/certificates") ? "font-bold text-accent" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Certifications
            </Link>
            <Link
              href="/new-page/about"
              className={`text-sm font-medium ${isLinkActive("/new-page/about") ? "font-bold text-accent" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/new-page/contact"
              className={`text-sm font-medium ${isLinkActive("/new-page/contact") ? "font-bold text-accent" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/new-page/blogs"
              className={`text-sm font-medium ${isLinkActive("/new-page/blogs") ? "font-bold text-accent" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <hr className="my-1 border-border" />
            <div className="text-xs font-bold uppercase text-muted-foreground">Trade Enquiries</div>
            <Link
              href="/new-page/price-list"
              className="text-sm font-medium text-primary pl-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              • Live Price List
            </Link>
            <Link
              href="/new-page/export-quality"
              className="text-sm font-medium text-primary pl-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              • Export &amp; Quality
            </Link>
            <Link
              href="/new-page/private-label"
              className="text-sm font-medium text-primary pl-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              • Private Label OEM
            </Link>
            <Link
              href="/new-page/distributors"
              className="text-sm font-medium text-primary pl-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              • Distributors Network
            </Link>
            <Link
              href="/new-page/request-quote"
              className="text-sm font-medium text-primary pl-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              • Request a Quote
            </Link>
            <a
              href={ASSETS.hub.companyProfilePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded bg-primary py-2 text-xs font-bold text-white hover:bg-accent transition"
            >
              Download Company Brochure (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
