"use client";

import React, { useState } from "react";
import { FileText, Eye, Download, X } from "@/app/new-page/components/icons";

interface Certificate {
  id: string;
  title: string;
  number?: string;
  issued_to?: string;
  issue_date?: string;
  file?: string;
  thumb?: string | null;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "gst-cert",
    title: "GST Registration Certificate",
    number: "24AALCD7943D1ZM",
    issued_to: "DC FOODS & BEVERAGES PRIVATE LIMITED",
    issue_date: "2025-08-02",
    file: "/assets/hub/company-profile.pdf",
    thumb: null,
  },
  {
    id: "mca-cert",
    title: "Certificate of Incorporation",
    number: "U10501GJ2025PTC164206",
    issued_to: "DC FOODS & BEVERAGES PRIVATE LIMITED",
    issue_date: "2025-07-28",
    file: "/assets/hub/incorporation-certificate-public.pdf",
    thumb: null,
  },
  {
    id: "udyam-cert",
    title: "Udyam Registration Certificate",
    number: "UDYAM-GJ-24-0195560",
    issued_to: "DC FOODS & BEVERAGES PRIVATE LIMITED",
    issue_date: "2025-08-05",
    file: "/assets/hub/udyam-registration-public.pdf",
    thumb: null,
  },
  {
    id: "dpiit-cert",
    title: "DPIIT Certificate of Recognition",
    number: "DIPP275511",
    issued_to: "DC FOODS & BEVERAGES PRIVATE LIMITED",
    issue_date: "2025-08-10",
    file: "/assets/hub/dpiit-recognition.pdf",
    thumb: null,
  },
  {
    id: "fssai-cert",
    title: "Food Safety & Standards Authority of India (FSSAI)",
    number: "10725999000185",
    issued_to: "DC FOODS & BEVERAGES PRIVATE LIMITED",
    issue_date: "2025-08-01",
    file: "/assets/hub/company-profile.pdf",
    thumb: null,
  },
];

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function CertificatesPage() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <main id="main">
      {/* Hero Header */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container-site">
          <span className="eyebrow text-secondary">TRUST &amp; TRANSPARENCY</span>
          <h1 className="display mt-5 text-6xl md:text-8xl">Certificates &amp; Compliance</h1>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section-space">
        <div className="container-site">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CERTIFICATES.map((cert) => (
              <article key={cert.id} className="flex flex-col border border-border bg-card">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted">
                  {cert.thumb ? (
                    <img
                      src={cert.thumb}
                      alt={cert.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <FileText className="size-14 text-accent" strokeWidth={1.2} />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold">{cert.title}</h3>
                  {cert.number && (
                    <p className="mt-2 text-sm font-bold text-primary">No. {cert.number}</p>
                  )}
                  {cert.issued_to && (
                    <p className="mt-1 text-xs text-muted-foreground">Issued to {cert.issued_to}</p>
                  )}
                  {cert.issue_date && (
                    <p className="text-xs text-muted-foreground">
                      Issued {formatDate(cert.issue_date)}
                    </p>
                  )}
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {cert.file ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setActiveCert(cert)}
                          className="inline-flex min-h-9 cursor-pointer items-center justify-center gap-1.5 rounded-sm border border-border bg-background px-3 text-xs font-semibold hover:border-accent hover:text-accent transition-colors"
                        >
                          <Eye className="size-3.5" /> View
                        </button>
                        <a
                          href={cert.file}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-9 cursor-pointer items-center justify-center gap-1.5 rounded-sm bg-secondary px-3 text-xs font-bold text-secondary-foreground hover:brightness-110 transition-all"
                        >
                          <Download className="size-3.5" /> Download PDF
                        </a>
                      </>
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        Document available on request.
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Preview */}
      {activeCert && activeCert.file && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative h-[85vh] w-full max-w-4xl bg-background rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
              <h3 className="font-semibold text-sm line-clamp-1">{activeCert.title}</h3>
              <button
                type="button"
                className="inline-flex size-8 items-center justify-center rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
                aria-label="Close"
                onClick={() => setActiveCert(null)}
              >
                <X className="size-4" />
              </button>
            </div>
            {activeCert.file.endsWith(".pdf") ? (
              <iframe
                title={activeCert.title}
                src={activeCert.file}
                className="h-[calc(85vh-53px)] w-full border-0"
              />
            ) : (
              <img
                src={activeCert.file}
                alt={activeCert.title}
                className="h-[calc(85vh-53px)] w-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
}
